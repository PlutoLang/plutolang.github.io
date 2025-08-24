---
sidebar_position: 1
---
String interpolation is a simple alternative syntax to concatenation that also implies `tostring`.

```pluto title="Concatenation"
local label = { en = "meaning of life" }
local data = nil
print("The " .. label.en .. " is " .. tostring(data)) --> The meaning of life is nil
```

```pluto title="String Interpolation"
local label = { en = "meaning of life" }
local data = nil
print($"The {label.en} is {data}") --> The meaning of life is nil
```

As you can see, you declare a string interpolated by prefixing it with the "$" symbol. Brackets can contain any expression. The result of expressions will be passed to `tostring`.