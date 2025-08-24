This syntax makes it easier to place several variables into a table.
```pluto title="New Code"
local type = "greeting"
local target = "world"
print(dumpvar($object(type, target)))
```
```pluto title="Old Code"
local type = "greeting"
local target = "world"
print(dumpvar({ type = type, target = target }))
```