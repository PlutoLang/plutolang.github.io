Pluto provides an easy way to increment variables using the prefixed ++ operator:

```pluto
local x = 1
print(++x) -- 2
-- x is still 2 at this point
```

This is shorter than the equivalent Pluto code using compound operators:

```pluto
local x = 1
x += 1
print(x) -- 2
```

And especially compared to the plain Lua approach:

```pluto
local x = 1
x = x + 1
print(x) -- 2
```
