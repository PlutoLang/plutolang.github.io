---
sidebar_position: 1
---
Ternary expressions behave identical as to how they would in C. They introduce no new keywords.
```pluto title="Old Code"
local max
if a > b then
  max = a
else
  max = b
end
```
```pluto title="New Code"
local max = a > b ? a : b
```
#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20a%20%3D%206%0Alocal%20b%20%3D%209%0A%0Alocal%20max%20%3D%20a%20%3E%20b%20%3F%20a%20%3A%20b%0A%0Aprint(max))

## Doesn't Lua already have ternaries?

While it is true that you can do something like this:

```pluto
local max = a > b and a or b
```

Keep in mind that this falls apart when the true-expression has a falsy value:

```pluto
local x = -1
x = (x == -1 and nil or x)
```

In this case, x will be -1 despite the intention being to set it to nil. There are no such issues using Pluto's ternary expressions.
