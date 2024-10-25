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

As you can see, you declare a string interpolated by prefixing it with the "$" symbol. Brackets can contain any expression. The result of expressions will be converted to a string as with normal concatenation, although note that Pluto supports [boolean concatenation](../QoL%20Improvements/Boolean%20Concatenation) unlike Lua.