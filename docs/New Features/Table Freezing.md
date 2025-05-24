---
sidebar_position: 2
---
Table freezing irreversibly and permanently forbids any future modifications to a given table.

Note that table freezing is an optional feature that has to be compiled in by defining the `PLUTO_ENABLE_TABLE_FREEZING` macro in luaconf.h or your build config.

When enabled, it adds the following C APIs:
- `lua_freezetable(L, idx)`
- `lua_istablefrozen(L, idx)`
- `lua_erriffrozen(L, idx)`

and table library functions:
- `table.isfrozen`
- `table.freeze`

```pluto norun title="Disallowing any edits to the global environment table"
table.freeze(_G)

_G.string = {} -- attempt to modify frozen table.
```
```pluto norun title="Creating a constant local that's associated with a frozen table"
local Frozen <const> = table.freeze({ 1, 2, 3 })

Frozen = {} -- attempt to reassign constant.

Frozen[1] = "new value" -- attempt to modify frozen table.

rawset(Frozen, "key", "value") -- attempt to modify frozen table.
```
```pluto norun title="Trying to swap the value with the debug library"
local Frozen <const> = table.freeze({ 1, 2, 3 })
for i = 1, 249 do
  local name, value = debug.getlocal(1, i)
  if name == "Frozen" then
    debug.setlocal(1, i, { ["key"] = "hello world" }) -- attempt to modify local variable with a frozen table.
  end
end
```

### What will this prevent?
All modifications to the table from within the Lua environment will be prevented, including those from the `debug` library.

:::caution
If you're going to use this for a sandbox, ensure you call `table.freeze` before any users can access the Lua environment, otherwise they can replace that function.
:::
