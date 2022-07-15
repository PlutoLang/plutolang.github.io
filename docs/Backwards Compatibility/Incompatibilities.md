## How compatible with Lua is Pluto?
By enabling compatibility mode, Pluto is 100% compatible with any Lua 5.4 code. Otherwise, it's 99.9% compatible.
### Where are the incompatibilities?
Pluto's adds the following reserved tokens:
- `case`
- `when`
- `switch`
- `default`
- `continue`

Which means you can't use them as variable names or for function calls. However, they can still be used with shorthand table syntax and for goto labels because Pluto [removes the restriction from them](../QoL%20Improvements/Reserved%20Identifiers).
