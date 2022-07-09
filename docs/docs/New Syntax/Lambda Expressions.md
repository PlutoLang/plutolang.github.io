Lambda expressions are shorthand function objects for evaluating quick expressions. Take this code:
```lua title="The Old Way"
local s1 = "123"
local s2 = s1:gsub(".", function (c) return tonumber(c) + 1 end)
print(s2) -- "234"
```
A lambda expression is simply syntactic sugar, because you can do this instead:
```lua title="The New Way"
local s1 = "123"
local s2 = s1:gsub(".", |c| -> tonumber(c) + 1)
print(s2) -- "234"
```
Anywhere a function object would work, a lambda will work. Because a lambda is just a function.