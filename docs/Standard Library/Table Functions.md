New functions for the `table` type, implemented by Pluto.
### table.freeze
Freezes a table to prevent modification.
#### Parameters
1. The table to freeze
#### Returns
The original table, but frozen.
#### Example
```pluto title="Basic Usage"
local t = table.freeze({...})
-- `table.freeze(t)` on another line will work fine too.
t.key = "value" -- Fails.
```
### table.isfrozen
Checks if this table is frozen.
#### Parameters
1. The table to check.
#### Returns
A boolean.
#### Example
```pluto title="Basic Usage"
local t = {}
table.freeze(t)
assert(table.isfrozen(t) == true)
```
### table.contains
Checks if this table contains an element.
#### Parameters
1. The table to check.
2. The element to check for.
#### Returns
The index if found, otherwise `nil`.
#### Example
```pluto title="Basic Usage"
local t = { 1, 2, 3, 4, 5, 6 }
local r = table.contains(t, 4) --> 4
```