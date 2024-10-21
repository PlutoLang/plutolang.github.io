---
sidebar_position: 2
---
Tables can now be frozen at their current state to forbid any future modification. This action is irreversible and permanent for the lifespan of the table.

```pluto showLineNumbers
-- Disallowing any edits to the global environment table.
table.freeze(_G)

_G.string = {}
-- file.pluto:4: attempt to modify frozen table.
```
```pluto showLineNumbers
-- Creating a constant local that's associated with a frozen table.
local Frozen <const> = table.freeze({ 1, 2, 3 })

Frozen = {}
-- file.pluto:4: attempt to reassign constant.

Frozen[1] = "new value"
-- file.pluto:7: attempt to modify frozen table.

rawset(Frozen, "key", "value")
-- file.pluto:10: attempt to modify frozen table.
```
```pluto showLineNumbers
--- Trying to swap the value with the debug library.
for i = 1, 249 do
  local name, value = debug.getlocal(1, i)
  if name == "Frozen" then
    debug.setlocal(1, i, { ["key"] = "hello world" })
    -- file.pluto:5: attempt to modify local variable with a frozen table.
  end
end
```
### What will this prevent?
All modifications to the table from within the Lua environment will be prevented, including those from the `debug` library.

:::caution
If you're going to use this for a sandbox, ensure you call `table.freeze` before any users can access the Lua environment, otherwise they can replace that function.
:::