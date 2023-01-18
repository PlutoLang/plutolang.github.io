Pluto improves iteration in a few ways.

## Generalized Iteration

It's redundant to call the `pairs` function for simple iteration. This action is now optional, and handled by the virtual machine if the function is absent.
```pluto showLineNumbers title="New Code"
local t = { 1, 2, 3, "hello", "world" }
for key, value in t do
    print(key, value)
end
```
When you omit the function from the loop preparation, `pairs` is implicitly inserted. So, that code is identical to this:
```pluto showLineNumbers title="Old Code"
local t = { 1, 2, 3, "hello", "world" }
for key, value in pairs(t) do
    print(key, value)
end
```
This is compatible with for-loop optimizations.

## For As Loop

When you only want to iterate over the values of a table, you can use Pluto's for-as syntax.
```pluto showLineNumbers title="New Code"
local t = { 1, 2, 3, "hello", "world" }
for t as value do
    print(value)
end
```
That code is identical to this:
```pluto showLineNumbers title="Old Code"
local t = { 1, 2, 3, "hello", "world" }
for _, value in t do
    print(value)
end
```
