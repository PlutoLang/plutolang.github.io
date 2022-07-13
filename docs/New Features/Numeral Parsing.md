A small change to the numeral parser allows arbitrary characters inside of numeric literals. This is applied for underscores, which will allow you to make longer numbers more readable.
```lua showLineNumbers title="Example Code"
local n = 10_000_000
assert(n == 10000000)
```
These underscores are ignored by the compiler, so they are purely cosmetic.