---
sidebar_position: 2
---

Although Pluto can theoretically be used with Lua-based tooling, we provide specialised support for .pluto files to enhance your coding experience with features such as:
- Syntax Highlighting
- Snippets — e.g. for when you type "fun" and press tab
- Comment Information — for editor features such as "Toggle Comment", "Toggle Block Comment"
- Indentation Rules — for editor features such as "Reindent Lines"
- Build Systems — currently Sublime Text only: when you press Ctrl+B, you can choose "Lint Pluto" or "Run Pluto"

## Installation

- **VS Code:** Search for `calamity-inc.pluto-syntax-highlighting` in the marketplace and press "Install."
- **Sublime Text:** Open the command palette (Ctrl+Shift+P), select "Package Control: Install Package", search for "Pluto", and press enter.
- **IntelliJ:** Clone [our syntax highlighting repository](https://github.com/PlutoLang/Syntax-Highlighting) and add the tmbundle folder to **Editor > TextMate Bundles**.

If your editor is not listed here, check if it is able to load TextMate bundles, in which case you should be able to do something similar to the IntelliJ instructions above.
