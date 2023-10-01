---
sidebar_position: 13
---
Searching a string for a substring, or searching a table for a value is a very simple (and fast) operation now. The `in` operator has been extended to support these operations.
```pluto showLineNumbers title="Searching for a substring."
assert("world" in "hello world")
```
```pluto showLineNumbers title="Searching a table for a value."
local t = { "a", "b", key = "value" }

assert(t[1] == "a")
assert(t[2] == "b")
assert(t.key == "value")

assert("a" in t)
assert("b" in t)
assert("c" not in t)
assert("value" in t)
assert("random" not in t)
```

As you can see, `not in` can also be used for more readable boolean inversion.

## Rules
- The right-hand operand must always be a table or a string.
- The left-hand operand must be a string if the right-hand operand is a string.
- The left-hand operand can be anything if the right-hand operand is a table.

:::caution
The bytecode of this feature is not backwards-compatible with Lua.
:::
