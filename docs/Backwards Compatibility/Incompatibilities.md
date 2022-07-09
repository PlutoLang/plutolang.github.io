## How compatible with Lua is Pluto?
By enabling compatibility mode, Pluto is 100% compatible with any Lua 5.4 code. Otherwise, it's 95% compatible.
### Where are the incompatibilities?
Pluto's implementation of `continue` & `switch/case/default` statements will break these identifiers:
- `case`
- `switch`
- `default`
- `continue`

That's it.