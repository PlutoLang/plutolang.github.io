Tables can now be frozen at their current state to forbid any future modification. This action is irreversible and permanent for the lifespan of the table.

```lua title="Example Code 1"
-- Disallowing any edits to the global environment table.
table.freeze(_G)
_G.string = {} -- Fails, raises an error.
```
```lua title="Example Code 2"
-- Performing edits, then freezing the resultant table.
local MyTable = {}
MyTable.key1 = "value 1"
MyTable.key2 = "value 2"
table.freeze(MyTable)
MyTable.key3 = "value 3" -- Fails, raises an error.
MyTable.key2 = "new value 2" -- Fails, raises an error.
```
```lua title="Example Code 3"
-- Creating a constant local that's associated with a frozen table.
local Frozen <const> = table.freeze({ 1, 2, 3 })
Frozen = {} -- Fails.
Frozen[1] = "new value" -- Fails.
rawset(Frozen, "key", "value") -- Fails.
```
```lua title="Example Code 4"
--- Trying to swap the value with the debug library.
for i = 1, 249 do
  local name, value = debug.getlocal(1, i)
  if name == "Frozen" then
    debug.setlocal(1, i, { ["key"] = "hello world" }) -- Fails.
  end
end
```
## Sandboxing
If you're going to use this for a sandbox, make sure you call `table.freeze` before any users can access the Lua environment, otherwise they can replace that function.

### What will this prevent?
All modifications to the table will be prevented, including those from the `debug` library.