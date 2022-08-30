## How compatible with Lua is Pluto?
Pluto is 99.9% compatible with most Lua source code. However, it's imperfect. Due to that, Pluto implements several compatibility macros.
### Where are the incompatibilities?
Pluto's adds the following reserved tokens:
- `case`
- `when`
- `switch`
- `default`
- `continue`

Which means you can't use them as variable names or for function calls. They can still be used with short-hand table indexes and goto labels though, because Pluto [removes the restriction from them](../QoL%20Improvements/Reserved%20Identifiers).

### What is compatibility mode?
Compatibility mode is a compilation flag that'll prefix `pluto_` before any of the new keywords. This can be individually toggled for all of the new keywords. Furthermore, when you decide to disable compatibility mode, the `pluto_` syntax is still valid. This project has high regard for smooth migration paths.

#### How to use compatibility mode?
The macros for this are well-documented, and found inside your `luaconf.h` file. Alternatively, see [here](https://github.com/well-in-that-case/Pluto/blob/a34d2213b9057371ba3a1e3e601e64e9fdd82c5e/src/luaconf.h#L872).