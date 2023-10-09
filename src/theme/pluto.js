Prism.languages.pluto = {
	'comment': /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
	'function': /\b(?!in\s)(?!\d)\w+(?=\s*(?:[({"]))/,
	'string': {
		pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
		greedy: true
	},
	'boolean': /\b(?:true|false)\b/,
	'number': /\b([\d][\d_]+|(0x[a-f\d]+)|(0b[01]+))(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
	'keyword': /\$|\b(?:and|as|class|pluto_class|enum|begin|break|do|else|elseif|end|for|function|goto|if|in|local|new|not|or|repeat|return|static|then|until|while|continue|switch|case|default|pluto_switch|pluto_continue|extends|export|pluto_export|pluto_use|public)\b/,
	'variable': /\b(?:self|parent|pluto_parent)\b/,
	'operator': [
		/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?|\:=|\?|\:|\?\.|instanceof/,
		{
			pattern: /(^|[^.])\.\.(?!\.)/,
			lookbehind: true
		}
	],
	'constant': /(nil|\.\.\.|_VERSION|_PVERSION|_PSOUP)/,
	'punctuation': /[\[\](){},;]|\.+|:+/
};
