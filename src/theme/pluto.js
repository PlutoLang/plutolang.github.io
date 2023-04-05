Prism.languages.pluto = {
	'comment': /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
	'string': {
		pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
		greedy: true
	},
	'boolean': /\b(?:true|false)\b/,
	'number': /\b([\d_]+|(0x[a-f\d]+)|(0b[01]+))(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
	'keyword': /\b(?:and|as|class|enum|begin|break|when|do|else|elseif|end|for|function|goto|if|in|local|new|nil|not|or|repeat|return|static|then|until|while|continue|switch|case|default|pluto_case|pluto_switch|pluto_continue|pluto_default)\b/,
	'variable': /\b(?:self)\b/,
	'function': /(?!\d)\w+(?=\s*(?:[({]))/,
	'operator': [
		/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
		{
			pattern: /(^|[^.])\.\.(?!\.)/,
			lookbehind: true
		}
	],
	'punctuation': /[\[\](){},;]|\.+|:+/
};