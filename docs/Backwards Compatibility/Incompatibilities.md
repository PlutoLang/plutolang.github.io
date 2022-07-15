## How compatible with Lua is Pluto?
By enabling compatibility mode, Pluto is 100% compatible with any Lua 5.4 code. Otherwise, it's 99% compatible.
### Where are the incompatibilities?
Pluto's new syntax will break the following identifiers:
- `case`
- `when`
- `switch`
- `default`
- `continue`

These identifiers are still valid fields & accessors, such that:
```lua showLineNumbers
local t = {
    default = "key"
}
print(t.default)
```
Will continue to work fine. The only incompatibility is not being able to use them as variable names.