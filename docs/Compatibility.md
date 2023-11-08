---
sidebar_position: 7
---

## How compatible with Lua is Pluto?
Pluto is 99.9% compatible with most Lua source code. However, it's imperfect. Due to that, Pluto implements several compatibility macros.
### Where are the incompatibilities?
Pluto adds the following reserved tokens:
- `switch`
- `continue`
- `enum`
- `new`
- `class`
- `parent`
- `export`

Which means you can't use them as variable names or for function calls. They can still be used with short-hand table indexes and goto labels though, because Pluto [removes the restriction from them](QoL%20Improvements/Reserved%20Identifiers).

## Compatibility Mode
Compatibility mode is a per-keyword option that adds a `pluto_` prefix. For example, `switch` becomes `pluto_switch` under compatibility mode. However, when compatibility mode is disabled, the `pluto_` syntax is still valid. This project has high regard for smooth migration paths.

### Configuration for scripters
You can change the meaning of Pluto's reserved tokens at any point in your scripts by using `pluto_use`.
- `pluto_use * = false, switch` enables compatibility mode for all keywords except for `switch`.
  - `pluto_use * = false` enables compatibility mode for all keywords.
  - `pluto_use switch` disables compatibility mode for the `switch` keyword.
    - `pluto_use switch = true` would be another way of writing this.
- `pluto_use "0.2.0"` enables compatibility mode for all keywords except for: `switch`, `continue`
- `pluto_use "0.5.0"` enables compatibility mode for all keywords except for: `switch`, `continue`, `enum`
- `pluto_use "0.6.0"` enables compatibility mode for all keywords except for: `switch`, `continue`, `enum`, `new`, `class`, `parent`, `export`

### Configuration for integrators
The macros for compatibility mode are well-documented, and found inside your `luaconf.h` file.

## Portability & proactive compatibility
We recommend scripters place a `pluto_use` statement at the beginning of their scripts for two reasons:
- **Portability.** This will override the compatibility mode settings compiled into Pluto so your script will be parsed identically in all Pluto environments.
- **Proactive compatibility.** Any keywords added by future versions of Pluto will also be put in compatibility mode by these statements, so in the off-chance your script uses a future reserved keyword as a variable name, it would still parse as you intended when you wrote it.

Plus, it's as simple as `pluto_use "0.6.0"` or `pluto_use "0.5.0"` — see "Configuration for scripters" above.
