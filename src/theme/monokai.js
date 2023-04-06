/* This file belongs to https://github.com/Sainan/prismjs-monokai */

const monokai_background = "#282923";
const monokai_foreground = "#F8F8F2";
const monokai_comment = "#74705D";
const monokai_red = "#F92472";
const monokai_orange = "#FD9622";
const monokai_yellow = "#E7DB74";
const monokai_green = "#A6E22B";
const monokai_blue = "#67D8EF";
const monokai_purple = "#AC80FF";

let theme = {
	plain: {
		color: monokai_foreground,
		backgroundColor: monokai_background
	},
	styles: [{
		types: ["comment", "prolog", "doctype", "cdata"],
		style: {
			color: monokai_comment
		}
	}, {
		types: ["keyword", "operator", "important", "tag", "atrule", "selector", "deleted"],
		style: {
			color: monokai_red
		}
	}, {
		types: ["variable"],
		style: {
			color: monokai_orange,
			fontStyle: "italic"
		}
	}, {
		types: ["string", "char", "regex"],
		style: {
			color: monokai_yellow
		}
	}, {
		types: ["attr-name", "inserted"],
		style: {
			color: monokai_green
		}
	}, {
		types: ["function", "builtin", "attr-value"],
		style: {
			color: monokai_blue
		}
	}, {
		types: ["boolean", "number", "constant", "entity"],
		style: {
			color: monokai_purple
		}
	}]
};

module.exports = theme;
