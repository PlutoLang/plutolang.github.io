## How compatible with Lua is Pluto?
Pluto is 99.9% compatible with most Lua source code. However, it's imperfect. Due to that, Pluto implements several compatibility macros.
### Where are the incompatibilities?
Pluto's adds the following reserved tokens:
- `switch`
- `continue`
- `enum`
- `new`
- `class`
- `parent`
- `export`

Which means you can't use them as variable names or for function calls. They can still be used with short-hand table indexes and goto labels though, because Pluto [removes the restriction from them](../QoL%20Improvements/Reserved%20Identifiers).

### What is compatibility mode?
Compatibility mode is a compilation flag that'll prefix `pluto_` before any of the new keywords. This can be individually toggled for all of the new keywords. Furthermore, when you decide to disable compatibility mode, the `pluto_` syntax is still valid. This project has high regard for smooth migration paths.

#### How to use compatibility mode?
The macros for this are well-documented, and found inside your `luaconf.h` file.