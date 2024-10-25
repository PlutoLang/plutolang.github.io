---
sidebar_position: 2
---
This page documents the changes & additions to the `table` library in Pluto, which is built on top of Lua 5.4's.

---
### `table.sort`
This function was modified to return the input table instead of `nil`, such that:
```pluto
local t = { 3, 2, 1 }
t = t:sort(...)
```
Will not result in `t` becoming `nil`.
### `table.sorted`
Copying variant of `table.sort`; returns a new table instead of modifying the input table. Note that nested tables will not be copied.

---
### `table.size`
Returns the number of elements in the table, counting both the array part and hash part.
#### Parameters
1. The table to check.
```pluto
local t = { 1, 2, 3, ["foo"] = "bar" }
print(t:size()) --> 4
```
---
### `table.clear`
Remove all elements from the table.
#### Parameters
1. The table to clear.
```pluto
local t = { 1, 2, 3, ["foo"] = "bar" }
print(t:size()) --> 4
t:clear()
print(t:size()) --> 0
```
---
### `table.freeze`
Freezes a table to prevent modification.
#### Parameters
1. The table to freeze
#### Returns
The input table.
```pluto
local t = table.freeze({...})
-- `table.freeze(t)` on another line will work fine too.
t.key = "value" -- Fails.
```
---
### `table.isfrozen`
Checks if this table is frozen.
#### Parameters
1. The table to check.
```pluto
local t = {}
table.freeze(t)
assert(table.isfrozen(t) == true)
```
---
### `table.contains`
Checks if this table contains an element.
#### Parameters
1. The table to check.
2. The element to check for.
#### Returns
The index or key if found, otherwise `nil`.
```pluto
local t = { 1, 2, 3, 4, 5, 6, key = "value" }
assert(table.contains(t, 4) == 4)
assert(table.contains(t, "value") == "key")
assert(table.contains(t, "nothing") == nil)
```
---
### `table.find`
Looks for an element in a table.
#### Parameters
1. The table to check.
2. The callback function responsible for checking each element.
#### Returns
The element if found, otherwise `nil`.
```pluto
local items = {
    { id = 1, name = "Apple" },
    { id = 2, name = "Banana" },
}

print(items:find(|item| -> item.id == 1).name) --> Apple
```
---
### `table.reverse`
Reverses the array elements of a table.
#### Parameters
1. The table to reverse.
#### Returns
The input table.
```pluto
local t = { 1, 2, hello = "world", 3, 4, 5, key = "value" }

print(dumpvar(t))
local same = t:reverse()
assert(same == t)
print(dumpvar(t))

--[[
Before:
{
    [1] = 1,
    [2] = 2,
    [3] = 3,
    [4] = 4,
    [5] = 5,
    ["key"] = string(5) "value",
    ["hello"] = string(5) "world",
}

After:
{
    [1] = 5,
    [2] = 4,
    [3] = 3,
    [4] = 2,
    [5] = 1,
    ["key"] = string(5) "value",
    ["hello"] = string(5) "world",
}
--]]
```
### `table.reversed`
Copying variant of `table.reverse`; returns a new table instead of modifying the input table. Note that nested tables will not be copied.

---
### `table.reorder`
Reorders the array portion of a table so it becomes a continuous array with no holes.
#### Parameters
1. The table.
#### Returns
The input table.
```pluto
local assert = require("assert")
local t1 = { 1, nil, 2, nil, nil, 3, nil, 4 }

assert.equal(t1:reorder(), { 1, 2, 3, 4 })
```
### `table.reordered`
Copying variant of `table.reorder`; returns a new table instead of modifying the input table. Note that nested tables will not be copied.

---
### `table.foreach`
Note that this function is not the same as the Lua function that was deprecated/removed in 5.1.
#### Parameters
1. The table.
2. The callback to be called for every element.
3. An optional bool if the callback function also takes a key (`|k, v|`) as opposed to only a value (`|v|`).
```pluto
local t = { 1, 2, 3 }
t:foreach(print)
--> 1
--> 2
--> 3
```
---
### `table.filter`
Filters away keys (both array and non-array) that fail to meet the condition established by `callback`. Elimination is done by setting the value to `nil`, consider using `table.reorder` if you want a continuous array after filtering.
#### Parameters
1. The table.
2. The callback responsible for deciding which keys to keep or remove. This should return `false` or `nil` if you want the key to be eliminated.
3. An optional bool if the callback function also takes a key (`|k, v|`) as opposed to only a value (`|v|`).
#### Returns
The input table.
```pluto
data = { 1, 2, 3, 4, 5 }
data:filter(|v| -> v % 2 ~= 0):reorder():concat(" ") |> print -- "1 3 5"

data = { 2, 2, 3, 4, 4 }
data:filter(|k, v| -> k == v, true):reorder():concat(" ") |> print -- "2 3 4"
```
### `table.filtered`
Copying variant of `table.filter`; returns a new table instead of modifying the input table. Note that nested tables will not be copied.

---
### `table.map`
Remaps every key to a new value, provided by the `callback` function.
#### Parameters
1. The table.
2. The callback responsible for producing the updated values.
3. An optional bool if the callback function also takes a key (`|k, v|`) as opposed to only a value (`|v|`).
#### Returns
The input table.
```pluto
data = "41 20 68"
data:split(" "):map(tonumber):map(|v| -> v + 1):concat(" ") |> print -- "42 21 69"

data = "10 15 10"
data:split(" "):map(tonumber):map(|k, v| -> k * v, true):concat(" ") |> print -- "10 30 30"
```
In this example, we first use the `tonumber` function to turn the strings into numbers, then add 1 to them. (Although the first step is not needed in Lua/Pluto since the `+` operator would take care of it, it is used here for demonstration purposes.)
### `table.mapped`
Copying variant of `table.map`; returns a new table instead of modifying the input table. Note that nested tables will not be copied.

---
### `table.reduce`
For every value stored in the table, computes `accumulator = f(value, accumulator)`, returning the accumulator at the end.
#### Parameters
1. The table.
2. The callback responsible for producing the updated accumulator.
3. The initial value of accumulator. If absent, the accumulator is initialized with `0`.
#### Returns
The accumulator.
```pluto
local t = { 1, 2, 3 }
t:reduce(|value, accumulator| -> value + accumulator) |> print --> 6
```

### `table.min`
Returns the smallest value stored in the table.
#### Parameters
1. The table.
```pluto
local t = { 1, 2, 3 }
print(t:min()) --> 1
```
This is identical to `:reduce(math.min, math.maxinteger)`.

### `table.max`
Returns the largest value stored in the table.
#### Parameters
1. The table.
```pluto
local t = { 1, 2, 3 }
print(t:max()) --> 3
```
This is identical to `:reduce(math.max, math.mininteger)`.

---
### `table.checkall`
Runs the given function against all elements, returning true if all of them match.
#### Parameters
1. The table.
2. The callback responsible for checking each element.
```pluto
print({ 2, 4, 6 }:checkall(|x| -> x % 2 == 0) ? "All are even" : "Some are odd") --> All are even
print({ 1, 2, 3 }:checkall(|x| -> x % 2 == 0) ? "All are even" : "Some are odd") --> Some are odd
```
### `table.keys`
Returns a new array-like table containing all keys from the table.
#### Parameters
1. The table.
```pluto
local t = {
    ["key1"] = "value1",
    ["key2"] = "value2",
    "sequence",
    "sequence sequence"
}

t:keys() --> { 1, 2, "key1", "key2" }
```