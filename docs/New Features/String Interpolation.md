String interpolation is very simple.
```lua
local variable = "world"
local statement = $"hello {variable}"

assert(statement == "hello world")
```
As you can see, you declare a string interpolated by prefixing it with the dollar symbol. Brackets should contain a variable name, be that global or local. The variable will be converted to a string. 