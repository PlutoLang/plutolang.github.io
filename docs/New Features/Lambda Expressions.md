---
sidebar_position: 2
---
Lambda expressions are an alternative way of writing anonymous functions.
```pluto showLineNumbers title="Lua Way"
local s1 = "123"
local s2 = s1:gsub(".", function(c) return tonumber(c) + 1 end)
print(s2) --> 234
```
```pluto title="Pluto Way"
local s1 = "123"
local s2 = s1:gsub(".", |c| -> tonumber(c) + 1)
print(s2) --> 234
```

As you can see, they take an expression after the arrow, the result of which is implicitly returned.

However, lambda expressions can also have full bodies using `do`...`end`:

```pluto
local add = |a, b| -> do
    print($"Adding {a} and {b} together")
    return a + b
end
```

They also support all other syntax you would expect of functions, such as type hints and default arguments.
