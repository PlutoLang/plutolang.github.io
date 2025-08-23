This page documents the changes & additions to the `math` library in Pluto, which is built on top of Lua 5.4's.

---
### `math.isnan`
Checks if a number is NaN.
#### Parameters
1. The number to check.
```pluto
local x = 0 / 0
print(x ~= x) -- Lua way: Prove the variable is NaN because it is not equal to itself. Works, but unintuitive.
print(math.isnan(x))
```
---
### `math.round`
Rounds a number to the nearest integer.
#### Parameters
1. The number to round.
```pluto
print(math.round(2.4)) --> 2
print(math.round(2.5)) --> 3
```
---
### `math.atan2`
An alias for the `math.atan` function.

---
### `math.inf`
An alias for the `math.huge` constant.
