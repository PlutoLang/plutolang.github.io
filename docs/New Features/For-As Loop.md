---
sidebar_position: 1
---
When you only want to iterate over the values of a table, you can use Pluto's for-as syntax.
```pluto showLineNumbers title="New Code"
local t = { 1, 2, 3, "hello", "world" }
for t as value do
    print(value)
end

-- 1
-- 2
-- 3
-- hello
-- world
```
That code is identical to this:
```pluto showLineNumbers title="Old Code"
local t = { 1, 2, 3, "hello", "world" }
for _, value in t do
    print(value)
end
```

:::info
The bytecode of this feature is only backwards-compatible with Lua when `pairs`, `ipairs`, or `next` is used. See [Generalized Iteration](<../QoL Improvements/Generalized Iteration.md>).
:::