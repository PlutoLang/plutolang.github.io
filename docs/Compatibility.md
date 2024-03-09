---
sidebar_position: 10
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

Which means you can't use them as variable names or for function calls. They can still be used with short-hand table indexes and goto labels though, because Pluto [removes the restriction from them](QoL%20Improvements/Reserved%20Identifiers).

### How to fix it?
All of these incompatible keywords can be disabled:
- **For Integrators:** Check your `luaconf.h` file to find the relevant macros under the "Compatibility" heading.
- **For Scripters:** Place `-- @pluto_use * = false` at the top of the source file. [Read more...](#compile-time-configuration)
- **For Users:** Pass the `-c` flag to `pluto` or `plutoc`.

## For Scripters
Because the Pluto environment your script is running in may have disabled some keywords for compatibility's sake, let's go over the portability and compatibility options given to you by Pluto.

### Compile-time Configuration
You can change the meaning of Pluto's reserved tokens at any point in your scripts using the `@pluto_use` annotation or `pluto_use` statement.

For example, to disable all non-compatible keywords except for `switch`:
```pluto
-- @pluto_use * = false, switch
```

It is also possible to specify a version number, which is a shorthand for the keywords available at that version:
- `"0.2.0"` corresponds to `* = false, switch, continue`
- `"0.5.0"` corresponds to `* = false, switch, continue, enum`
- `"0.6.0"` corresponds to `* = false, switch, continue, enum, new, class, parent, export`
- `"0.8.0"` corresponds to `* = false, switch, continue, enum, new, class, parent, export, try, catch`

So, writing a portable script that makes use of Pluto 0.8.0's features simply requires this at the beginning:
```pluto
pluto_use "0.8.0"
```

We recommend you always place a `pluto_use` configuration at the beginning of your scripts for two reasons:
- **Portability.** This will override the compatibility mode settings compiled into Pluto so your script will be parsed identically in all Pluto environments.
- **Proactive compatibility.** Any keywords added by future versions of Pluto will also be put in compatibility mode by these statements, so in the off-chance your script uses a future reserved keyword as a variable name, it would still parse as you intended when you wrote it.

### Compatible Keywords
Another way of using Pluto's features regardless of compatibility mode is by prefixing the keyword with `pluto_`. For example, `switch` becomes `pluto_switch`.
