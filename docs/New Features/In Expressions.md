---
sidebar_position: 2
---
The `in` operator has been extended to support string searches and table searches. For these purposes, it's the fastest possible solution.

```pluto showLineNumbers title="Searching for a substring."
assert("world" in "hello world")
```

When used on tables, the `in` operator searches for *values*. It'll search for array *elements* and it'll search keys for *their values*.

```pluto showLineNumbers title="Searching a table for a value."
local t = { "a", "b", key = "value" }

assert("a" in t) -- "a" is an element inside of t.
assert("b" in t) -- "b" is an element inside of t.
assert("value" in t) -- "value" is the value of a key inside of t.
assert(not "random" in t) -- "random" is not an element OR the value of a key inside of t.
```

## Rules
- The right-hand operand must always be a table or a string.
- The left-hand operand must be a string if the right-hand operand is a string.
- The left-hand operand can be anything if the right-hand operand is a table.

:::caution
The bytecode of this feature is not backwards-compatible with Lua.
:::
