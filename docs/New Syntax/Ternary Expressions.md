Ternary expressions behave identical as to how they would in C. They introduce no new keywords.
```lua showLineNumbers title="Example Code"
-- Old
local max
if a > b then
  max = a
else
  max = b
end

-- New
local max = a > b ? a : b
```
They also support an alternative syntax, for compatibility with older versions of Pluto:
```lua showLineNumbers title="Example Code"
-- Old
local max
if a > b then
  max = a
else
  max = b
end

-- New
local max = if a > b then a else b
```

#### [Interactive Example](https://plutolang.github.io/web/#code=local%20a%20%3D%206%0Alocal%20b%20%3D%209%0A%0Alocal%20max%20%3D%20a%20%3E%20b%20%3F%20a%20%3A%20b%0A%0Aprint(max))