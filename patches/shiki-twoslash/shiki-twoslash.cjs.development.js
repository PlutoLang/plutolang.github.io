'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var shiki = require('shiki');
var shiki__default = _interopDefault(shiki);
var twoslash = require('@typescript/twoslash');

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

var htmlForTags = function htmlForTags(tags) {
  var html = "";
  tags.forEach(function (t) {
    if (t.name === "annotate" && t.annotation) {
      var meta = t.annotation.split(" - ");
      var text = meta.pop();
      var info = (meta[0] || "").trim();
      var flipped = info.includes("right");
      var settings = {
        flipped: flipped,
        arrowRot: flipped ? "90deg 20px 20px" : "90deg 20px 20px",
        textDegree: "0deg",
        top: t.line + "em"
      };
      if (info.includes("{")) {
        var theInfo = "{" + info.split("{")[1];
        try {
          var specificSettings = JSON.parse(theInfo);
          settings = _extends({}, settings, specificSettings);
        } catch (error) {
          throw new twoslash.TwoslashError("Could not parse annotation", "The annotation " + JSON.stringify(t) + " could convert '" + theInfo + "' into JSON", "Look at " + error.message + ".");
        }
      }
      var arrowSVG = arrow(settings);
      html += "\n<div class='twoslash-annotation " + (flipped ? "right" : "left") + "' style=\"top: " + settings.top + "\">\n  " + arrowSVG + "\n  <p class='twoslash-annotation-text' style=\"transform: rotate(" + settings.textDegree + ")\">" + text + "</p>\n</div>";
    }
  });
  return html;
};
var arrow = function arrow(style) {
  var leftInner = "M27 39C26.5 32.7511 21.9 17.5173 7.5 6.57333M16.5 4.04L0.999999 0.999998C3.16667 4.88444 7.5 13.16 7.5 15.1867";
  var rightInner = "M1 39C1.5 32.7511 6.1 17.5173 20.5 6.57333M11.5 4.04L27 0.999998C24.8333 4.88444 20.5 13.16 20.5 15.1867";
  var inner = style.flipped ? leftInner : rightInner;
  var rot = style.arrowRot.split(" ");
  return "<svg style='transform: translateX(" + rot[1] + ") translateY(" + rot[2] + ") rotate(" + rot[0] + ");' width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"" + inner + "\" stroke=\"black\" />\n</svg>";
};

/**
 * We're given the text which lives inside the token, and this function will
 * annotate it with twoslash metadata
 */
function createHighlightedString(ranges, text, targetedWord) {
  if (targetedWord === void 0) {
    targetedWord = "";
  }
  // Why the weird chars? We need to make sure that generic syntax isn't
  // interpreted as html tags - to do that we need to switch out < to &lt; - *but*
  // making that transition changes the indexes because it's gone from 1 char to 4 chars
  //
  // So, use an obscure character to indicate a real < for HTML, then switch it after
  var tag = function tag(x) {
    return "\u21CD" + x + "\u21CF";
  };
  var makeTagFromRange = function makeTagFromRange(r, close) {
    switch (r.classes) {
      case "lsp":
        // The LSP response lives inside a dom attribute, which _can_ have < inside it, so switch them ahead of time.
        var lsp = htmlAttrReplacer(r.lsp || "");
        var underLineTargetedWord = r.lsp === targetedWord ? "style=⇯border-bottom: solid 2px lightgrey;⇯" : "";
        return close ? tag("/data-lsp") : tag("data-lsp lsp=\xBF" + lsp + "\xBF " + underLineTargetedWord);
      case "query":
        return tag((close ? "/" : "") + "data-highlight");
      // handle both unknown and err variant as error-tag
      // case "err": is not required, just to be useful for others
      case "err":
      default:
        return tag((close ? "/" : "") + "data-err");
    }
  };
  ranges.sort(function (a, b) {
    // Order of precedence
    // if two same offset meet, the lsp will be put as innermost than err and query
    var precedenceOf = function precedenceOf(x) {
      return ["err", "query", "lsp"].indexOf(x != null ? x : "");
    };
    var cmp = 0;
    // Can be desugared into,
    // 1. compare based on smaller begin, !(cmp) means if it's 0 then
    // 2. compare based on bigger end, ^ same thing again then
    // 3. compare based on higher precedence
    // && is so that if a step made cmp to something other than 0, it stops
    /***1*/
    !(cmp = a.begin - b.begin) && /*2*/!(cmp = b.end - a.end) && /*3*/!(cmp = precedenceOf(a.classes) - precedenceOf(b.classes));
    return cmp;
  }); // `Array.sort` works in place
  // Marks how much of the text has been put into the output/html
  var cursor = 0;
  // should be maximum of O(n) where n is length of ranges
  var _nest = function nest(data) {
    var stack = "";
    var top = data.shift(); // I have made sure data can't be empty
    // parse from cursor to top.begin to make sure
    // strings on the way are parsed
    stack += text.substring(cursor, top.begin);
    cursor = top.begin;
    // open tag
    stack += makeTagFromRange(top);
    // if the data still have an element that's in the top's range
    if (data.some(function (x) {
      return x.begin < top.end;
    })) {
      stack += _nest(data);
    } else {
      // othewise slice the text and set cursor
      stack += text.substring(top.begin, top.end);
      cursor = top.end;
    }
    // close tag
    stack += makeTagFromRange(top, true);
    // if the tag is complete but still have some data left in the range
    if (data.length !== 0) {
      stack += _nest(data);
    }
    return stack;
  };
  // cloned because I don't feel comfortable modifying this as a side-effect from recursion
  var data = JSON.parse(JSON.stringify(ranges));
  var html = _nest(data) + text.substring(cursor); // nested + leftover texts
  return htmlAttrUnReplacer(replaceTripleArrow(stripHTML(html)));
}
// HTML attributes have different rules,
var htmlAttrReplacer = function htmlAttrReplacer(str) {
  return str.replace(/"/g, "⃟");
};
var htmlAttrUnReplacer = function htmlAttrUnReplacer(str) {
  return str.replace(/⃟/g, '"');
};
// Inline strings which are shown at HTML level
var subTripleArrow = function subTripleArrow(str) {
  return str.replace(/</g, "⇍").replace(/>/g, "⇏").replace(/'/g, "⇯");
};
var replaceTripleArrow = function replaceTripleArrow(str) {
  return str.replace(/⇍/g, "<").replace(/⇏/g, ">").replace(/⇯/g, "'").replace(/¿/g, "'");
};
var replaceTripleArrowEncoded = function replaceTripleArrowEncoded(str) {
  return str.replace(/⇍/g, "&lt;").replace(/⇏/g, "&gt;").replace(/⇯/g, "&apos;");
};
function stripHTML(text) {
  var table = {
    "<": "lt",
    '"': "quot",
    "'": "apos",
    "&": "amp",
    "\r": "#13",
    "\n": "#10"
  };
  return text.toString().replace(/[<"'\r\n&]/g, function (chr) {
    return "&" + table[chr] + ";";
  });
}
function escapeHtml(html) {
  return html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
/** Does anything in the object imply that we should highlight any lines? */
var shouldBeHighlightable = function shouldBeHighlightable(highlight) {
  return !!Object.keys(highlight || {}).find(function (key) {
    if (key.includes("-")) return true;
    if (!isNaN(parseInt(key))) return true;
    return false;
  });
};
/** Returns a func for figuring out if this line should be highlighted */
var shouldHighlightLine = function shouldHighlightLine(highlight) {
  var lines = [];
  Object.keys(highlight || {}).find(function (key) {
    if (!isNaN(parseInt(key))) lines.push(parseInt(key));
    if (key.includes("-")) {
      var _key$split = key.split("-"),
        first = _key$split[0],
        last = _key$split[1];
      var lastIndex = parseInt(last) + 1;
      for (var i = parseInt(first); i < lastIndex; i++) {
        lines.push(i);
      }
    }
  });
  return function (line) {
    return lines.includes(line);
  };
};

/** A func for setting a consistent <pre> */
var preOpenerFromRenderingOptsWithExtras = function preOpenerFromRenderingOptsWithExtras(opts, meta, classes) {
  var bg = opts.bg || "#fff";
  var fg = opts.fg || "black";
  var theme = opts.themeName || "";
  // shiki + `class` from fence + with-title if title exists + classes
  var classList = ["shiki", theme, meta["class"], meta.title ? "with-title" : ""].concat(classes || []).filter(Boolean).join(" ").trim();
  var attributes = Object.entries(meta).filter(function (entry) {
    // exclude types other than string, number, boolean
    // exclude keys class, twoslash
    // exclude falsy booleans
    return ["string", "number", "boolean"].includes(typeof entry[1]) && !["class", "twoslash"].includes(entry[0]) && entry[1] !== false;
  }).map(function (_ref) {
    var key = _ref[0],
      value = _ref[1];
    return key + "=\"" + value + "\"";
  }).join(" ").trim();
  // prettier-ignore
  return "<pre class=\"" + classList + "\" style=\"background-color: " + bg + "; color: " + fg + "\"" + (attributes ? " " + attributes : '') + ">";
};
/** You don't have a language which shiki twoslash can handle, make a DOM compatible version  */
function plainTextRenderer(code, options, meta) {
  var html = "";
  html += preOpenerFromRenderingOptsWithExtras(options, meta, []);
  if (meta.title) {
    html += "<div class='code-title'>" + meta.title + "</div>";
  }
  if (options.langId) {
    html += "<div class=\"language-id\">" + options.langId + "</div>";
  }
  html += "<div class='code-container'><code>";
  html += escapeHtml(code);
  html = html.replace(/\n*$/, ""); // Get rid of final new lines
  html += "</code></div></pre>";
  return html;
}

// OK, so - this is just straight up complex code.
// What we're trying to do is merge two sets of information into a single tree for HTML
// 1: Syntax highlight info from shiki
// 2: Twoslash metadata like errors, identifiers etc
// Because shiki gives use a set of lines to work from, then the first thing which happens
// is converting twoslash data into the same format.
// Things which make it hard:
//
// - Twoslash results can be cut, so sometimes there is edge cases between twoslash results
// - Twoslash results can be multi-file
// - the DOM requires a flattened graph of html elements (e.g. spans can' be interspersed)
//
function twoslashRenderer(lines, options, twoslash, meta) {
  var html = "";
  var hasHighlight = meta.highlight && shouldBeHighlightable(meta.highlight);
  var hl = shouldHighlightLine(meta.highlight);
  if (twoslash.tags && twoslash.tags.length) html += "<div class='tag-container'>";
  html += preOpenerFromRenderingOptsWithExtras(options, meta, ["twoslash", "lsp"]);
  if (meta.title) {
    html += "<div class='code-title'>" + meta.title + "</div>";
  }
  if (options.langId) {
    html += "<div class=\"language-id\">" + options.langId + "</div>";
  }
  html += "<div class='code-container'><code>";
  var errorsGroupedByLine = groupBy(twoslash.errors, function (e) {
    return e.line;
  }) || new Map();
  var staticQuickInfosGroupedByLine = groupBy(twoslash.staticQuickInfos, function (q) {
    return q.line;
  }) || new Map();
  // A query is always about the line above it!
  var queriesGroupedByLine = groupBy(twoslash.queries, function (q) {
    return q.line - 1;
  }) || new Map();
  var tagsGroupedByLine = groupBy(twoslash.tags, function (q) {
    return q.line - 1;
  }) || new Map();
  /**
   * This is the index of the original twoslash code reference, it is not
   * related to the HTML output
   */
  var filePos = 0;
  lines.forEach(function (l, i) {
    var errors = errorsGroupedByLine.get(i) || [];
    var lspValues = staticQuickInfosGroupedByLine.get(i) || [];
    var queries = queriesGroupedByLine.get(i) || [];
    var tags = tagsGroupedByLine.get(i) || [];
    var hiClass = hasHighlight ? hl(i + 1) ? " highlight" : " dim" : "";
    var prefix = "<div class='line" + hiClass + "'>";
    if (l.length === 0 && i === 0) {
      // Skip the first newline if it's blank
      filePos += 1;
    } else if (l.length === 0) {
      var emptyLine = prefix + "&nbsp;</div>";
      html += emptyLine;
      filePos += 1;
    } else {
      html += prefix;
      // Keep track of the position of the current token in a line so we can match it up to the
      // errors and lang serv identifiers
      var tokenPos = 0;
      l.forEach(function (token) {
        var targetedQueryWord;
        var tokenContent = "";
        // Underlining particular words
        var findTokenFunc = function findTokenFunc(start) {
          return function (e) {
            return start <= e.character && start + token.content.length >= e.character + e.length;
          };
        };
        var errorsInToken = errors.filter(findTokenFunc(tokenPos));
        var lspResponsesInToken = lspValues.filter(findTokenFunc(tokenPos));
        var queriesInToken = queries.filter(findTokenFunc(tokenPos));
        // Does this line have a word targeted by a query?
        targetedQueryWord = targetedQueryWord || lspResponsesInToken.find(function (response) {
          return response.text === (queries.length && queries[0].text);
        });
        var allTokens = [].concat(errorsInToken, lspResponsesInToken, queriesInToken);
        var allTokensByStart = allTokens.sort(function (l, r) {
          return (l.start || 0) - (r.start || 0);
        });
        if (allTokensByStart.length) {
          var _targetedQueryWord;
          var ranges = allTokensByStart.map(function (token) {
            var range = {
              begin: token.start - filePos,
              end: token.start + token.length - filePos
            };
            if ("renderedMessage" in token) range.classes = "err";
            if ("kind" in token) range.classes = token.kind;
            if ("targetString" in token) {
              range.classes = "lsp";
              var lspText = options.includeJSDocInHover && token.docs ? token.docs + "\n\n" + token.text : token.text;
              range["lsp"] = lspText;
            }
            return range;
          });
          tokenContent += createHighlightedString(ranges, token.content, (_targetedQueryWord = targetedQueryWord) == null ? void 0 : _targetedQueryWord.text);
        } else {
          tokenContent += subTripleArrow(token.content);
        }
        html += "<span style=\"color: " + token.color + "\">" + tokenContent + "</span>";
        tokenPos += token.content.length;
        filePos += token.content.length;
      });
      html += "</div>";
      // This is the \n which the </div> represents
      filePos += 1;
    }
    // Adding error messages to the line after
    if (errors.length) {
      var messages = errors.map(function (e) {
        return escapeHtml(e.renderedMessage);
      }).join("</br>");
      var codes = errors.map(function (e) {
        return e.code;
      }).join("<br/>");
      html += "<span class=\"error\"><span>" + messages + "</span><span class=\"code\">" + codes + "</span></span>";
      html += "<span class=\"error-behind\">" + messages + "</span>";
    }
    // Add queries to the next line
    if (queries.length) {
      queries.forEach(function (query) {
        // This is used to wrap popovers and completions to improve styling options for users.
        html += "<div class='meta-line'>";
        switch (query.kind) {
          case "query":
            {
              var queryTextWithPrefix = escapeHtml(query.text);
              var _lspValues = staticQuickInfosGroupedByLine.get(i) || [];
              var targetedWord = _lspValues.find(function (response) {
                return response.text === (queries.length && queries[0].text);
              });
              var halfWayAcrossTheTargetedWord = (targetedWord && targetedWord.character + (targetedWord == null ? void 0 : targetedWord.length) / 2) - 1 || 0;
              html += "<span class='popover-prefix'>" + " ".repeat(halfWayAcrossTheTargetedWord) + "</span>" + ("<span class='popover'><div class='arrow'></div>" + queryTextWithPrefix + "</span>");
              break;
            }
          case "completions":
            {
              if (!query.completions) {
                html += "<span class='query'>" + ("//" + "".padStart(query.offset - 2) + "^ - No completions found") + "</span>";
              } else {
                var prefixed = query.completions.filter(function (c) {
                  return c.name.startsWith(query.completionsPrefix || "____");
                });
                var lis = prefixed.sort(function (l, r) {
                  return l.name.localeCompare(r.name);
                }).map(function (c) {
                  var _query$completionsPre, _c$kindModifiers;
                  var after = c.name.substr(((_query$completionsPre = query.completionsPrefix) == null ? void 0 : _query$completionsPre.length) || 0);
                  var name = "<span><span class='result-found'>" + (query.completionsPrefix || "") + "</span>" + after + "</span>";
                  var isDeprecated = (_c$kindModifiers = c.kindModifiers) == null ? void 0 : _c$kindModifiers.split(",").includes("deprecated");
                  var liClass = isDeprecated ? "deprecated" : "";
                  return "<li class='" + liClass + "'>" + name + "</li>";
                }).join("");
                html += "&nbsp;".repeat(query.offset) + "<span class='inline-completions'><ul class='dropdown'>" + lis + "</ul></span>";
              }
            }
        }
        html += "</div>";
      });
    }
    // Any tags (currently that's warn/error/log)
    if (tags.length) {
      tags.forEach(function (tag) {
        if (!["error", "warn", "log"].includes(tag.name)) return;
        // This is used to wrap popovers and completions to improve styling options for users.
        html += "<div class='meta-line logger " + tag.name + "-log'>";
        switch (tag.name) {
          case "error":
            html += errorSVG + "<span class='message'>" + (tag.annotation || "N/A") + "</span>";
            break;
          case "warn":
            html += warningSVG + "<span class='message'>" + (tag.annotation || "N/A") + "</span>";
            break;
          case "log":
            html += logSVG + "<span class='message'>" + (tag.annotation || "N/A") + "</span>";
            break;
        }
        html += "</div>";
      });
    }
  });
  html = replaceTripleArrowEncoded(html.replace(/\n*$/, "")); // Get rid of final new lines
  if (options.addTryButton) {
    var playgroundLink = "<a class='playground-link' href='" + twoslash.playgroundURL + "'>Try</a>";
    html += "</code>" + playgroundLink;
  } else {
    html += "</code>";
  }
  html += "</div></pre>";
  // Attach annotations which live above of the code
  if (twoslash.tags && twoslash.tags.length) {
    html += htmlForTags(twoslash.tags);
    html += "</div>";
  }
  return html;
}
/** Returns a map where all the keys are the value in keyGetter  */
function groupBy(list, keyGetter) {
  var map = new Map();
  list.forEach(function (item) {
    var key = keyGetter(item);
    var collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}
var errorSVG = "<svg width=\"19\" height=\"19\" viewBox=\"0 0 19 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.63018 1.29289L1.29289 4.63018C1.10536 4.81772 1 5.07207 1 5.33729V13.6627C1 13.9279 1.10536 14.1823 1.29289 14.3698L4.63018 17.7071C4.81772 17.8946 5.07207 18 5.33729 18H13.6627C13.9279 18 14.1823 17.8946 14.3698 17.7071L17.7071 14.3698C17.8946 14.1823 18 13.9279 18 13.6627V5.33729C18 5.07207 17.8946 4.81772 17.7071 4.63018L14.3698 1.29289C14.1823 1.10536 13.9279 1 13.6627 1H5.33729C5.07207 1 4.81772 1.10536 4.63018 1.29289Z\" fill=\"#E72622\" stroke=\"#E72622\"/><rect x=\"8\" y=\"4\" width=\"3\" height=\"7\" fill=\"white\"/><rect x=\"8\" y=\"13\" width=\"3\" height=\"3\" fill=\"white\"/></svg>";
var warningSVG = "<svg width=\"21\" height=\"18\" viewBox=\"0 0 21 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.63401 0.5C10.0189 -0.166667 10.9812 -0.166667 11.3661 0.5L20.4593 16.25C20.8442 16.9167 20.3631 17.75 19.5933 17.75H1.40676C0.636965 17.75 0.15584 16.9167 0.54074 16.25L9.63401 0.5Z\" fill=\"#E5A604\"/><rect x=\"9\" y=\"4\" width=\"3\" height=\"7\" fill=\"white\"/><rect x=\"9\" y=\"13\" width=\"3\" height=\"3\" fill=\"white\"/></svg>";
var logSVG = "<svg width=\"12\" height=\"15\" viewBox=\"0 0 12 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.76822 0.359816C5.41466 -0.0644613 4.78409 -0.121785 4.35982 0.231779C3.93554 0.585343 3.87821 1.21591 4.23178 1.64018L5.76822 0.359816ZM10 7L10.7926 7.60971L11.2809 6.97499L10.7682 6.35982L10 7ZM4.20738 12.8903C3.87064 13.328 3.95254 13.9559 4.39029 14.2926C4.82804 14.6294 5.45589 14.5475 5.79262 14.1097L4.20738 12.8903ZM4.23178 1.64018L9.23178 7.64018L10.7682 6.35982L5.76822 0.359816L4.23178 1.64018ZM9.20738 6.39029L4.20738 12.8903L5.79262 14.1097L10.7926 7.60971L9.20738 6.39029Z\" fill=\"#BDBDBD\"/><line y1=\"3.5\" x2=\"4\" y2=\"3.5\" stroke=\"#BDBDBD\"/><path d=\"M0 7H4\" stroke=\"#BDBDBD\"/><line y1=\"10.5\" x2=\"4\" y2=\"10.5\" stroke=\"#BDBDBD\"/></svg>";

function defaultShikiRenderer(lines, options, meta) {
  var html = "";
  var hasHighlight = meta.highlight && shouldBeHighlightable(meta.highlight);
  var hl = shouldHighlightLine(meta.highlight);
  html += preOpenerFromRenderingOptsWithExtras(options, meta, []);
  if (meta.title) {
    html += "<div class='code-title'>" + meta.title + "</div>";
  }
  if (options.langId) {
    html += "<div class=\"language-id\">" + options.langId + "</div>";
  }
  html += "<div class='code-container'><code>";
  lines.forEach(function (l, i) {
    if (l.length === 0) {
      html += "<div class='line'></div>";
    } else {
      var hiClass = hasHighlight ? hl(i) ? " highlight" : " dim" : "";
      var prefix = "<div class='line" + hiClass + "'>";
      html += prefix;
      l.forEach(function (token) {
        var cssDeclarations = ["color: " + token.color];
        if (token.fontStyle) {
          if (token.fontStyle & shiki__default.FontStyle.Italic) {
            cssDeclarations.push('font-style: italic');
          }
          if (token.fontStyle & shiki__default.FontStyle.Bold) {
            cssDeclarations.push('font-weight: bold');
          }
          if (token.fontStyle & shiki__default.FontStyle.Underline) {
            cssDeclarations.push('text-decoration: underline');
          }
        }
        html += "<span style=\"" + cssDeclarations.join('; ') + "\">" + escapeHtml(token.content) + "</span>";
      });
      html += "</div>";
    }
  });
  html = html.replace(/\n*$/, ""); // Get rid of final new lines
  html += "</code></div></pre>";
  return html;
}

var tsconfig = {
  compilerOptions: "The set of compiler options for your project",
  allowJs: "Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files.",
  allowSyntheticDefaultImports: "Allow 'import x from y' when a module doesn't have a default export.",
  allowUmdGlobalAccess: "Allow accessing UMD globals from modules.",
  allowUnreachableCode: "Disable error reporting for unreachable code.",
  allowUnusedLabels: "Disable error reporting for unused labels.",
  alwaysStrict: "Ensure 'use strict' is always emitted.",
  assumeChangesOnlyAffectDirectDependencies: "Have recompiles in projects that use [`incremental`](#incremental) and `watch` mode assume that changes within a file will only affect files directly depending on it.",
  baseUrl: "Specify the base directory to resolve non-relative module names.",
  charset: "No longer supported. In early versions, manually set the text encoding for reading files.",
  checkJs: "Enable error reporting in type-checked JavaScript files.",
  clean: "Delete the outputs of all projects.",
  composite: "Enable constraints that allow a TypeScript project to be used with project references.",
  declaration: "Generate .d.ts files from TypeScript and JavaScript files in your project.",
  declarationDir: "Specify the output directory for generated declaration files.",
  declarationMap: "Create sourcemaps for d.ts files.",
  diagnostics: "Output compiler performance information after building.",
  disableFilenameBasedTypeAcquisition: "Disables inference for type acquisition by looking at filenames in a project.",
  disableReferencedProjectLoad: "Reduce the number of projects loaded automatically by TypeScript.",
  disableSizeLimit: "Remove the 20mb cap on total source code size for JavaScript files in the TypeScript language server.",
  disableSolutionSearching: "Opt a project out of multi-project reference checking when editing.",
  disableSourceOfProjectReferenceRedirect: "Disable preferring source files instead of declaration files when referencing composite projects",
  downlevelIteration: "Emit more compliant, but verbose and less performant JavaScript for iteration.",
  emitBOM: "Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.",
  emitDeclarationOnly: "Only output d.ts files and not JavaScript files.",
  emitDecoratorMetadata: "Emit design-type metadata for decorated declarations in source files.",
  enable: "Disable the type acquisition for JavaScript projects",
  esModuleInterop: "Emit additional JavaScript to ease support for importing CommonJS modules. This enables [`allowSyntheticDefaultImports`](#allowSyntheticDefaultImports) for type compatibility.",
  exactOptionalPropertyTypes: "Differentiate between undefined and not present when type checking",
  exclude: "Filters results from the [`include`](#include) option.",
  excludeDirectories: "Remove a list of directories from the watch process.",
  excludeFiles: "Remove a list of files from the watch mode's processing.",
  experimentalDecorators: "Enable experimental support for TC39 stage 2 draft decorators.",
  explainFiles: "Print files read during the compilation including why it was included.",
  extendedDiagnostics: "Output more detailed compiler performance information after building.",
  "extends": "Specify one or more path or node module references to base configuration files from which settings are inherited.",
  fallbackPolling: "Specify what approach the watcher should use if the system runs out of native file watchers.",
  files: "Include a list of files. This does not support glob patterns, as opposed to [`include`](#include).",
  force: "Build all projects, including those that appear to be up to date",
  forceConsistentCasingInFileNames: "Ensure that casing is correct in imports.",
  generateCpuProfile: "Emit a v8 CPU profile of the compiler run for debugging.",
  importHelpers: "Allow importing helper functions from tslib once per project, instead of including them per-file.",
  importsNotUsedAsValues: "Specify emit/checking behavior for imports that are only used for types.",
  include: "Specify a list of glob patterns that match files to be included in compilation.",
  incremental: "Save .tsbuildinfo files to allow for incremental compilation of projects.",
  inlineSourceMap: "Include sourcemap files inside the emitted JavaScript.",
  inlineSources: "Include source code in the sourcemaps inside the emitted JavaScript.",
  isolatedModules: "Ensure that each file can be safely transpiled without relying on other imports.",
  jsx: "Specify what JSX code is generated.",
  jsxFactory: "Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'",
  jsxFragmentFactory: "Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'.",
  jsxImportSource: "Specify module specifier used to import the JSX factory functions when using `jsx: react-jsx*`.",
  keyofStringsOnly: "Make keyof only return strings instead of string, numbers or symbols. Legacy option.",
  lib: "Specify a set of bundled library declaration files that describe the target runtime environment.",
  listEmittedFiles: "Print the names of emitted files after a compilation.",
  listFiles: "Print all of the files read during the compilation.",
  locale: "Set the language of the messaging from TypeScript. This does not affect emit.",
  mapRoot: "Specify the location where debugger should locate map files instead of generated locations.",
  maxNodeModuleJsDepth: "Specify the maximum folder depth used for checking JavaScript files from `node_modules`. Only applicable with [`allowJs`](#allowJs).",
  module: "Specify what module code is generated.",
  moduleResolution: "Specify how TypeScript looks up a file from a given module specifier.",
  newLine: "Set the newline character for emitting files.",
  noEmit: "Disable emitting file from a compilation.",
  noEmitHelpers: "Disable generating custom helper functions like `__extends` in compiled output.",
  noEmitOnError: "Disable emitting files if any type checking errors are reported.",
  noErrorTruncation: "Disable truncating types in error messages.",
  noFallthroughCasesInSwitch: "Enable error reporting for fallthrough cases in switch statements.",
  noImplicitAny: "Enable error reporting for expressions and declarations with an implied `any` type..",
  noImplicitOverride: "Ensure overriding members in derived classes are marked with an override modifier.",
  noImplicitReturns: "Enable error reporting for codepaths that do not explicitly return in a function.",
  noImplicitThis: "Enable error reporting when `this` is given the type `any`.",
  noImplicitUseStrict: "Disable adding 'use strict' directives in emitted JavaScript files.",
  noLib: "Disable including any library files, including the default lib.d.ts.",
  noPropertyAccessFromIndexSignature: "Enforces using indexed accessors for keys declared using an indexed type",
  noResolve: "Disallow `import`s, `require`s or `<reference>`s from expanding the number of files TypeScript should add to a project.",
  noStrictGenericChecks: "Disable strict checking of generic signatures in function types.",
  noUncheckedIndexedAccess: "Add `undefined` to a type when accessed using an index.",
  noUnusedLocals: "Enable error reporting when a local variables aren't read.",
  noUnusedParameters: "Raise an error when a function parameter isn't read",
  out: "Deprecated setting. Use [`outFile`](#outFile) instead.",
  outDir: "Specify an output folder for all emitted files.",
  outFile: "Specify a file that bundles all outputs into one JavaScript file. If [`declaration`](#declaration) is true, also designates a file that bundles all .d.ts output.",
  paths: "Specify a set of entries that re-map imports to additional lookup locations.",
  plugins: "Specify a list of language service plugins to include.",
  preserveConstEnums: "Disable erasing `const enum` declarations in generated code.",
  preserveSymlinks: "Disable resolving symlinks to their realpath. This correlates to the same flag in node.",
  preserveWatchOutput: "Disable wiping the console in watch mode",
  pretty: "Enable color and formatting in output to make compiler errors easier to read",
  reactNamespace: "Specify the object invoked for `createElement`. This only applies when targeting `react` JSX emit.",
  references: "Specify an array of objects that specify paths for projects. Used in project references.",
  removeComments: "Disable emitting comments.",
  resolveJsonModule: "Enable importing .json files",
  rootDir: "Specify the root folder within your source files.",
  rootDirs: "Allow multiple folders to be treated as one when resolving modules.",
  skipDefaultLibCheck: "Skip type checking .d.ts files that are included with TypeScript.",
  skipLibCheck: "Skip type checking all .d.ts files.",
  sourceMap: "Create source map files for emitted JavaScript files.",
  sourceRoot: "Specify the root path for debuggers to find the reference source code.",
  strict: "Enable all strict type checking options.",
  strictBindCallApply: "Check that the arguments for `bind`, `call`, and `apply` methods match the original function.",
  strictFunctionTypes: "When assigning functions, check to ensure parameters and the return values are subtype-compatible.",
  strictNullChecks: "When type checking, take into account `null` and `undefined`.",
  strictPropertyInitialization: "Check for class properties that are declared but not set in the constructor.",
  stripInternal: "Disable emitting declarations that have `@internal` in their JSDoc comments.",
  suppressExcessPropertyErrors: "Disable reporting of excess property errors during the creation of object literals.",
  suppressImplicitAnyIndexErrors: "Suppress [`noImplicitAny`](#noImplicitAny) errors when indexing objects that lack index signatures.",
  synchronousWatchDirectory: "Synchronously call callbacks and update the state of directory watchers on platforms that don`t support recursive watching natively.",
  target: "Set the JavaScript language version for emitted JavaScript and include compatible library declarations.",
  traceResolution: "Log paths used during the [`moduleResolution`](#moduleResolution) process.",
  tsBuildInfoFile: "Specify the folder for .tsbuildinfo incremental compilation files.",
  typeAcquisition: "Specify options for automatic acquisition of declaration files.",
  typeRoots: "Specify multiple folders that act like `./node_modules/@types`.",
  types: "Specify type package names to be included without being referenced in a source file.",
  useDefineForClassFields: "Emit ECMAScript-standard-compliant class fields.",
  useUnknownInCatchVariables: "Default catch clause variables as `unknown` instead of `any`.",
  verbose: "Enable verbose logging",
  watchDirectory: "Specify how directories are watched on systems that lack recursive file-watching functionality.",
  watchFile: "Specify how the TypeScript watch mode works."
};

/** Uses tmLanguage scopes to determine what the content of the token is */
var tokenIsJSONKey = function tokenIsJSONKey(token) {
  if (!token.explanation) return false;
  return token.explanation.find(function (e) {
    return e.scopes.find(function (s) {
      return s.scopeName.includes("support.type.property-name");
    });
  });
};
/** Can you look up the token in the tsconfig reference? */
var isKeyInTSConfig = function isKeyInTSConfig(token) {
  if (token.content === '"') return;
  var name = token.content.slice(1, token.content.length - 1);
  return name in tsconfig;
};
/**
 * Renders a TSConfig JSON object with additional LSP-ish information
 * @param lines the result of shiki highlighting
 * @param options shiki display options
 */
function tsconfigJSONRenderer(lines, options, meta) {
  var html = "";
  html += preOpenerFromRenderingOptsWithExtras(options, meta, ["tsconfig", "lsp"]);
  if (meta.title) {
    html += "<div class=\"code-title\">" + meta.title + "</div>";
  }
  if (options.langId) {
    html += "<div class=\"language-id\">" + options.langId + "</div>";
  }
  html += "<div class='code-container'><code>";
  lines.forEach(function (l) {
    if (l.length === 0) {
      html += "<div class='line'></div>";
    } else {
      html += "<div class='line'>";
      l.forEach(function (token) {
        // This means we're looking at a token which could be '"module"', '"', '"compilerOptions"' etc
        if (tokenIsJSONKey(token) && isKeyInTSConfig(token)) {
          var key = token.content.slice(1, token.content.length - 1);
          var oneliner = tsconfig[key];
          // prettier-ignore
          html += "<span style=\"color: " + token.color + "\">\"<a aria-hidden=true tabindex=\"-1\" href='https://www.typescriptlang.org/tsconfig#" + key + "'><data-lsp lsp=\"" + oneliner + "\">" + escapeHtml(key) + "</data-lsp></a>\"</span>";
        } else {
          html += "<span style=\"color: " + token.color + "\">" + escapeHtml(token.content) + "</span>";
        }
      });
      html += "</div>";
    }
  });
  html = html.replace(/\n*$/, ""); // Get rid of final new lines
  html += "</code></div></pre>";
  return html;
}

/**
 * This gets filled in by the promise below, then should
 * hopefully be more or less synchronous access by each parse
 * of the highlighter
 */
var storedHighlighter = null;
/**
 * Creates a *cached singleton* Shiki highlighter, this is an async call because of the call to WASM to get
 * the regex parser set up.
 *
 * In other functions, passing a the result of this highlighter function is kind of optional but it's the author's
 * opinion that you should be in control of the highlighter, and not this library.
 *
 */
var createShikiHighlighter = function createShikiHighlighter(options) {
  if (storedHighlighter) return Promise.resolve(storedHighlighter);
  return shiki.getHighlighter(options).then(function (newHighlighter) {
    storedHighlighter = newHighlighter;
    return storedHighlighter;
  });
};
/**
 * Renders a code sample to HTML, automatically taking into account:
 *
 *  - rendering overrides for twoslash and tsconfig
 *  - whether the language exists in shiki
 *
 * @param code the source code to render
 * @param lang the language to use in highlighting
 * @param info additional metadata which lives after the code-fence lang (e.g. `{ twoslash: true }`)
 * @param shikiOptions user settings
 * @param highlighter optional, but you should use it, highlighter
 * @param twoslash optional, but required when info contains 'twoslash' as a string
 */
var renderCodeToHTML = function renderCodeToHTML(code, lang, meta, shikiOptions, highlighter, twoslash) {
  if (!highlighter && !storedHighlighter) {
    throw new Error("The highlighter object hasn't been initialised via `setupHighLighter` yet in shiki-twoslash");
  }
  // Shiki does know the lang, so tokenize
  var renderHighlighter = highlighter || storedHighlighter;
  var renderOpts = _extends({
    fg: renderHighlighter.getForegroundColor(),
    bg: renderHighlighter.getBackgroundColor()
  }, shikiOptions);
  var tokens;
  try {
    // I'm a little unsure about why we need this, perhaps the jsx language
    // upstream in shiki is broken?
    var tmpLang = lang === "jsx" ? "tsx" : lang;
    tokens = renderHighlighter.codeToThemedTokens(code, tmpLang);
  } catch (error) {
    // Shiki doesn't know this lang, so render it as plain text, but
    // also add a note at the end as a HTML comment
    var note = "<!-- Note from shiki-twoslash: the language " + lang + " was not set up for Shiki to use, and so there is no code highlighting -->";
    return plainTextRenderer(code, renderOpts, meta) + note;
  }
  // Twoslash specific renderer
  if (lang && meta.twoslash && twoslash) {
    return twoslashRenderer(tokens, _extends({}, renderOpts, {
      langId: lang
    }), twoslash, meta);
  }
  // TSConfig renderer
  if (lang && lang.startsWith("json") && meta.tsconfig) {
    return tsconfigJSONRenderer(tokens, renderOpts, meta);
  }
  // Otherwise just the normal shiki renderer
  return defaultShikiRenderer(tokens, _extends({}, renderOpts, {
    langId: lang
  }), meta);
};
/**
 * Runs Twoslash over the code passed in with a particular language as the default file.
 */
var runTwoSlash = function runTwoSlash(input, lang, settings) {
  if (settings === void 0) {
    settings = {};
  }
  var code = input;
  // Shiki doesn't handle a few filetype mappings, so do that ahead of time. Oddly enough, this also
  // gets re-done at remark-shiki level
  var replacer = {
    json5: "json",
    yml: "yaml"
  };
  // @ts-ignore
  if (replacer[lang]) lang = replacer[lang];
  var hasReactImport = /^import\s+React(?:.*)\s+from\s+('|")react\1/gm;
  // Add react import to code samples indicating they're needing react.
  if (["tsx", "jsx"].includes(lang) && !settings.disableImplicitReactImport && !hasReactImport.test(code)) {
    var reactImport = "import React from 'react'\n";
    var cutString = "// ---cut---\n";
    // ^ cutString taken directly from
    // https://github.com/microsoft/TypeScript-Website/blob/0c8d98a69d520365c1909d536fa1323f03a8438c/packages/ts-twoslasher/src/index.ts#L694
    if (code.includes(cutString)) {
      code = code.split(cutString).map(function (item, index) {
        return index == 0 ? reactImport.concat(item) : item;
      }).join(cutString);
    } else {
      code = [reactImport, cutString, code].join("");
    }
  }
  settings.customTags = ["annotate", "log", "warn", "error"];
  var results = twoslash.twoslasher(code, lang, settings);
  return results;
};
/** Set of renderers if you want to explicitly call one instead of using renderCodeToHTML */
var renderers = {
  plainTextRenderer: plainTextRenderer,
  defaultShikiRenderer: defaultShikiRenderer,
  twoslashRenderer: twoslashRenderer,
  tsconfigJSONRenderer: tsconfigJSONRenderer
};

exports.createShikiHighlighter = createShikiHighlighter;
exports.renderCodeToHTML = renderCodeToHTML;
exports.renderers = renderers;
exports.runTwoSlash = runTwoSlash;
//# sourceMappingURL=shiki-twoslash.cjs.development.js.map
