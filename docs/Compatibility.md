---
sidebar_position: 9
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
- `try`
- `catch`

Which means you can't use them as variable names or for function calls. They can still be used with short-hand table indexes and goto labels though, because Pluto [removes the restriction from them](QoL%20Improvements/Reserved%20Identifiers).

However, we have a simple solution for this: Compatibility Mode. This allows integrators to disable Pluto's reserved tokens. Integrators: Check your `luaconf.h` file to find the relevant macros under the "Compatibility" heading.

## Writing Scripts Under Compatibility Mode
Obviously, you want to use Pluto's features, so how can you do it if the Pluto environment has all of its tokens disabled? The secret is that each reserved token mentioned above has a portable variant with a `pluto_` prefix. For example, `switch` has a twin called `pluto_switch` that is always valid.

### Compile-time Configuration
You can also change the meaning of Pluto's reserved tokens at any point in your scripts by using `pluto_use`.
- `pluto_use * = false, switch` disables all non-compatible keywords except for `switch`.
  - `pluto_use * = false` disables all non-compatible keywords.
  - `pluto_use switch` enables the `switch` keyword.
    - `pluto_use switch = true` would be another way of writing this.
- `pluto_use "0.2.0"` disables all non-compatible keywords except for: `switch`, `continue`
- `pluto_use "0.5.0"` disables all non-compatible keywords except for: `switch`, `continue`, `enum`
- `pluto_use "0.6.0"` disables all non-compatible keywords except for: `switch`, `continue`, `enum`, `new`, `class`, `parent`, `export`
- `pluto_use "0.8.0"` disables all non-compatible keywords except for: `switch`, `continue`, `enum`, `new`, `class`, `parent`, `export`, `try`, `catch`

## Portability & proactive compatibility
We recommend scripters place a `pluto_use` statement at the beginning of their scripts for two reasons:
- **Portability.** This will override the compatibility mode settings compiled into Pluto so your script will be parsed identically in all Pluto environments.
- **Proactive compatibility.** Any keywords added by future versions of Pluto will also be put in compatibility mode by these statements, so in the off-chance your script uses a future reserved keyword as a variable name, it would still parse as you intended when you wrote it.

Plus, it's as simple as `pluto_use "0.6.0"` or `pluto_use "0.5.0"` — see "Compile-time Configuration" above.
