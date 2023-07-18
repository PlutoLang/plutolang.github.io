---
sidebar_position: 4
---
Lambda expressions are shorthand function objects for evaluating quick expressions. Take this code:
```pluto showLineNumbers title="The Old Way"
local s1 = "123"
local s2 = s1:gsub(".", function (c) return tonumber(c) + 1 end)
print(s2) -- "234"
```
A lambda expression is simply syntactic sugar, because you can do this instead:
```pluto title="The New Way"
local s1 = "123"
local s2 = s1:gsub(".", |c| -> tonumber(c) + 1)
print(s2) -- "234"
```
Anywhere a function object would work, a lambda will work. Because a lambda is just a function.

#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20str%20%3D%20%22123%22%0D%0Alocal%20inc_str%20%3D%20str%3Agsub(%22.%22%2C%20%7Cc%7C%20-%3E%20tonumber(c)%20%2B%201)%0D%0Aprint(inc_str)%20--%20%22234%22)