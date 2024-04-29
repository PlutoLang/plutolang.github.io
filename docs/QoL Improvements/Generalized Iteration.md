Pluto's virtual machine allows you to simply iterate over tables without having to explicitly call a function:
```pluto showLineNumbers title="New Code"
local t = { 1, 2, 3, "hello", "world" }
for key, value in t do
    print(key, value)
end
```
When you omit the function from the loop preparation, `next` is implicitly inserted. So, that code is identical to this:
```pluto showLineNumbers title="Old Code"
local t = { 1, 2, 3, "hello", "world" }
for key, value in next(t) do
    print(key, value)
end
```
This is compatible with for-loop optimizations.

:::caution
The bytecode of this feature is not backwards-compatible with Lua.
:::
