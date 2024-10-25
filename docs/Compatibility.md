---
sidebar_position: 10
---

Pluto aims to be source- and bytecode-compatible with existing Lua code such that it can simply be used as a drop-in replacement for Lua, and Lua modules can simply be used in Pluto codebases. In the vast majority of cases, we do succeed, but there are a few things to be aware of.

## New Keywords

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

### Mitigations

- **For Integrators:** Check your `luaconf.h` file to find the relevant macros under the "Compatibility" heading.
- **For Scripters:** Use `pluto_use` in the source files. `-- @pluto_use * = false` to simply disable all incompatible keywords.
- **For Users:** Pass the `-c` flag to `pluto` or `plutoc`.

The following sections will go more in-depth on source-level mitigations (for scripters).

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

### Automatic Compatibility Inference
When Pluto encounters its keywords being used as identifiers in source code, it handles this automatically:

By default, using a Pluto keyword as an identifier would cause a parsing error. But if Pluto detects this situation, and:
- No `pluto_use` statement is present for the afflicting keyword.
- No compatibility settings are configured for the afflicting keyword.

Then Pluto will automatically disable that specific keyword (note, still accessible through `pluto_*`) and prevent an error from occurring.
## Default Table Metatable

This is [a feature in Pluto](Runtime%20Environment/Global%20&%20Base#default-metatables) that, by itself, is a benign QoL improvement for developers. However, in combination with our added standard library functions like [table.min](Runtime%20Environment/Table#tablemin), it can be an unexpected semantic change:

```pluto showLineNumbers
local function roll(opts)
    return math.random(opts.min or 1, opts.max or 100)
end
print(roll{ max = 10 })
```
```
pluto: test.pluto:2: bad argument #1 to 'random' (number expected, got function)
stack traceback:
    [C]: in function 'math.rand'
    test.pluto:2: in local 'roll'
    test.pluto:4: in main chunk
```

Integrators can disable this feature by defining the `PLUTO_NO_DEFAULT_TABLE_METATABLE` macro in their luaconf.h or build config, to aid in a smooth transition, should scripts in their ecosystem require it.

Scripters are advised to use `rawget` and/or `type` to better codify their expectations. For example, the example above seems to care only about providing fallback values and not at all about type-checking, so `rawget` would be an excellent fit for it:
```pluto
local function roll(opts)
    return math.random(rawget(opts, "min") or 1, rawget(opts, "max") or 100)
end
print(roll{ max = 10 })
```
