Prism.languages.pluto = {
	'comment': /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
	'attr-name': /(?<=(function|class|extends|enum)\s)(?!begin)(?!class)[\w:]+/,
	'keyword': /\$(define\b)?|\b(?:and|as|class|pluto_class|enum|begin|break|do|else|elseif|end|for|goto|if|in|local|new|not|or|repeat|return|static|then|until|while|continue|switch|case|default|pluto_switch|pluto_continue|extends|export|pluto_export|pluto_use|public|private|try|catch|pluto_try|pluto_catch|global)\b/,
	'function': [
		/\b(?!in\s)(?!\d)(?!return)(?!case)(?!function)(?!local)(?!new)\w+(?=\s*(?:\??\())/, // func()
		/\b(?!in\s)(?!\d)(?!return)(?!case)(?!function)(?!local)(?!not)\w+(?=\s*(?:\??[{"]))/, // func "", func {}
		/\b(?!in\s)(?!\d)(?!return)(?!case)(?!function)(?!local)(?!not)\w+(?=\s*(?:\??\[\[))/, // func [[
		/(?<=\|>)\s[\w.:]+/, // |> func
		/\b(function|enum|class)\b/,
		/\b(os\.platform|json\.null|json\.withnull|json\.withorder)\b/, // standard library constants
		/\b(debug|table|string|math|number|io|os|coroutine|_VERSION|_PVERSION|_PSOUP)\b/, // standard library + type hints
	],
	'attr-value': /<(const|close|nodiscard)>/,
	'string': {
		pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
		greedy: true
	},
	'boolean': /\b(?:true|false)\b/,
	'number': /\b([\d][\d_]+|(0x[a-f\d]+)|(0b[01]+))(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
	'variable': /\b(?:self|parent|pluto_parent)\b/,
	'operator': [
		/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~!]=?|\:=|\?|(?<!\w)\:|\?\.|instanceof/,
		{
			pattern: /(^|[^.])\.\.(?!\.)/,
			lookbehind: true
		}
	],
	'constant': /(nil|\.\.\.)/,
	'punctuation': /[\[\](){},;]|\.+|:+/,
};
