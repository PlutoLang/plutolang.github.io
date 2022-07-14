## How compatible with Lua is Pluto?
By enabling compatibility mode, Pluto is 100% compatible with any Lua 5.4 code. Otherwise, it's 99% compatible.
### Where are the incompatibilities?
Pluto's new syntax will break the following identifiers:
- `case`
- `when`
- `switch`
- `default`
- `continue`

That's it.
