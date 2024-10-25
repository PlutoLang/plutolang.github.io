---
sidebar_position: 1
---
String interpolation is a simple alternative syntax to concatenation.

```pluto title="Concatenation"
local label = "meaning of life"
local data = { value = 42 }
print("The " .. label .. " is " .. data.value) --> The meaning of life is 42
```

```pluto title="String Interpolation"
local label = "meaning of life"
local data = { value = 42 }
print($"The {label} is {data.value}") --> The meaning of life is 42
```
#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20label%20%3D%20%22meaning%20of%20life%22%0D%0Alocal%20data%20%3D%20%7B%20value%20%3D%2042%20%7D%0D%0Aprint(%24%22The%20%7Blabel%7D%20is%20%7Bdata.value%7D%22)%20--%20%22The%20meaning%20of%20life%20is%2042%22)

As you can see, you declare a string interpolated by prefixing it with the "$" symbol. Brackets can contain any expression. The result of expressions will be converted to a string as with normal concatenation, although note that Pluto supports [boolean concatenation](../QoL%20Improvements/Boolean%20Concatenation) unlike Lua.