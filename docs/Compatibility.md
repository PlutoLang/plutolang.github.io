---
sidebar_position: 9
---

## How compatible with Lua is Pluto?
Pluto is compatible with most Lua source code. However, it's imperfect. Due to that, Pluto has several compatibility options.
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

Which means you can't use them as identifiers. They can still be used with short-hand table indexes and goto labels because Pluto [allows reserved keywords to be used in those contexts](QoL%20Improvements/Reserved%20Identifiers).

### How to fix it?
All of these incompatible keywords can be disabled:
- **For Integrators:** Check your `luaconf.h` file to find the relevant macros under the "Compatibility" heading.
- **For Scripters:** Usage of `pluto_use` in the source files.
- **For Users:** Pass the `-c` flag to `pluto` or `plutoc`.

## For Scripters
Scripters are given final say in how Compatibility Mode works within their scripts.

### Compile-time Configuration (pluto_use)
You can change the meaning of Pluto's reserved tokens at any point in your scripts using the `--@pluto_use` comment or `pluto_use` statement.

For example, to disable all non-compatible keywords except for `switch`:
```pluto
-- @pluto_use * = false, switch
```

It is also possible to specify a version number, which is a shorthand for the keywords available at that version:
- `"0.2.0"` corresponds to `* = false, switch, continue`
- `"0.5.0"` corresponds to `* = false, switch, continue, enum`
- `"0.6.0"` corresponds to `* = false, switch, continue, enum, new, class, parent, export`
- `"0.8.0"` corresponds to `* = false, switch, continue, enum, new, class, parent, export, try, catch`

So, writing a portable script that only makes use of Pluto 0.8.0's features requires this at the beginning:
```pluto
pluto_use "0.8.0"
```

This feature also supports quick encompassing of optional features. So, instead of:
```pluto
pluto_use "0.8.0", global
```
You can use a '+' after the version number to also enable all of the optional features. As of 0.9.0, the only optional feature is [explicit globals](New%20Features/Explicit%20Globals) (`global`).
```pluto
pluto_use "0.9.0+"
-- The same as pluto_use "0.9.0", global
```

For module developers and scripts which may be used in future versions of Pluto, we recommend you use `pluto_use` for two reasons:
- **Portability.** This will override the compatibility mode settings compiled into Pluto so your script will be parsed identically in all Pluto environments.
- **Proactive compatibility.** Any keywords added by future versions of Pluto will also be put in compatibility mode by these statements, so in the off-chance your script uses a future reserved keyword as a variable name, it would still parse as you intended when you wrote it.

### Compatible Keywords
Another way of using Pluto's features regardless of compatibility mode is by prefixing the keyword with `pluto_`. For example, `switch` becomes `pluto_switch`. These Compatibility Mode variants will always be valid, even when Compatibility Mode is disabled.

These are what they look like:
- `pluto_switch`
- `pluto_continue`
- `pluto_enum`
- `pluto_new`
- `pluto_class`
- `pluto_parent`
- `pluto_export`
- `pluto_try`
- `pluto_catch`