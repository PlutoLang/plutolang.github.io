Searching a string for a substring, or searching an array for an element is a very simple operation now. The `in` operator has been extended to support these operations.
```lua showLineNumbers title="Searching for a substring."
local a = "hello"
local b = "hello world"

local r1 = a in b
local r2 = "hello" in b
local r3 = a in "hello world"
local r4 = "hello" in "hello world"
local r5 = "goodbye" in "hello world"

assert(r1 and r2 and r3 and r4) -- They'll all return true.
assert(r5 == false) -- Except this one.
```
```lua showLineNumbers title="Searching a table for keys and elements."
local t = { [5] = "five", [6] = "six", [7] = "seven", key = "value" }

assert(("key" in t) == true) -- Found a key with the value of 'key'.
assert((5 in t) == true) -- Found a key with the value of '5'.
assert((3 in t) == false) -- No key with the value of '3'.
```

## Rules
- The right-hand operand must always be a table or a string.
- The left-hand operand must be a string if the right-hand operand is a string.
- The left-hand operand can be anything if the right-hand operand is a table.

:::info
The bytecode of this feature is not backwards-compatible with Lua.
:::
