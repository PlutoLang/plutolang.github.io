Ternary expressions behave identical as to how they would in C. They introduce no new keywords.
```lua title="Example Code"
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