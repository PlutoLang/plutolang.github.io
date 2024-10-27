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
Search a table for an element, returning its value.
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
### `table.findkey`, `table.findindex`
Search a table for an element, returning its key/index.
#### Parameters
1. The table to check.
2. The callback function responsible for checking each element.
#### Returns
The key/index if found, otherwise `nil`.
```pluto
local fruit = { "apple", "banana", "orange" }
print(fruit:findkey(|x| -> x == "banana")) --> 2
print(fruit[2]) --> banana
````
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
---
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

t:keys() -- { 1, 2, "key1", "key2" }
```
---
### `table.countvalues`
Returns a key-value based table which describes how many times a value appears inside of a table.
#### Parameters
1. The table
```pluto
local t = {
    1,
    2, 2
    3, 3, 3,
    4, 4, 4, 4
    ["key1"] = "value"
    ["key2"] = "value"
}

t:countvalues() -- { [1] = 1, [2] = 2, [3] = 3, [4] = 4, ["value"] = 2 }
```
---
### `table.chunk`
Generates a new table which collects the values of the input and represents them in chunks of a specified size.
#### Parameters
1. The table.
2. The desired `size` of each chunk.
#### Errors
An error is thrown if `size` is not greater than zero.
```pluto
local t = {
    1,
    2,
    3,
    ["key"] = "hello",
    ["other key"] = "world"
}

t:chunk(3) -- { { 1, 2, 3 }, { "hello", "world" } }
```
---
### `table.back`
Returns the last element of a table. This is functionally identical to `t[#t]`.
#### Parameters
1. The table.
```pluto
local t = { "a", "b", "c" }
print(t[#t]) --> "c"

-- Now can be fit into one line.
print({ "a", "b", "c" }:back()) --> c
```
---
### `table.slice`
Returns a new table composed of the elements between the specified range. This is intended to be used on sequences.
#### Parameters
1. The table.
2. The starting index.
3. The ending index. This is optional. By default, this is the length of the table.
```pluto
local t = { 1, 2, 3, 4, 5 }

t:slice(3) -- { 3, 4, 5 }
t:slice(2, 4) -- { 2, 3, 4 }
```
---
### `table.modget`
Returns an element by index with wrap-around.
#### Parameters
1. The table.
2. The index to get.
```pluto
local mask = { 0xf0, 0x0f }
local data = { 0x11, 0x22, 0x33, 0x44 }
for i, v in data do
    -- Old way: data[i] = data[i] ~ mask[((i - 1) % #mask) + 1]
    data[i] = data[i] ~ mask:modget(i)
end
assert(data[1] == 0x11 ~ 0xf0)
assert(data[2] == 0x22 ~ 0x0f)
assert(data[3] == 0x33 ~ 0xf0)
assert(data[4] == 0x44 ~ 0x0f)
```
---
### `table.modset`
Updates an element by index with wrap-around.
#### Parameters
1. The table.
2. The index to set.
3. The value to set.
```pluto
local test = { 1, 2, 3 }
test:modset(5, 5)
test:modset(6, 6)
assert(test[1] == 1)
assert(test[2] == 5)
assert(test[3] == 6)
```
