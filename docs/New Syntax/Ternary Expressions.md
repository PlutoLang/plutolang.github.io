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
local max = if a > b then a else b
```
Unlike `if` statements, these do not terminate with `end`. They don't support `elseif` either.

#### [Interactive Example](https://plutolang.github.io/web/#code=local%20a%20%3D%206%0Alocal%20b%20%3D%209%0A%0Alocal%20max%20%3D%20if%20a%20%3E%20b%20then%20a%20else%20b%0A%0Aprint(max))