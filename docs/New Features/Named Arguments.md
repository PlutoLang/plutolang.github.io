Instead of positional arguments, you can use the names of arguments you want to set:

```pluto
local function f(file, mode = "r", version = 1)
	print(file, mode, version)
end
f(file = "Hello", version = 2) -- Hello    r    2
```

Note that this feature is implemented entirely in the parser and therefore only works for local functions.
