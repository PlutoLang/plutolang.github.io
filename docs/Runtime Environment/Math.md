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
### `math.trunc`
Truncates the fractional part of a number, returning the integer portion toward zero.
#### Parameters
1. The number to truncate.
```pluto
print(math.trunc(10.5)) --> 10
print(math.trunc(-10.5)) --> -10
```

---
### `math.cbrt`
Returns the cube root of a number.
#### Parameters
1. The number to take the cube root of.
```pluto
print(math.cbrt(27)) --> 3
print(math.cbrt(-27)) --> -3
```

---
### `math.hypot`
Returns the square root of the sum of squares of its arguments.
#### Parameters
1. Two numbers representing orthogonal components.
```pluto
print(math.hypot(3, 4)) --> 5
print(math.hypot(1e155, 1e155)) --> 1.41421e155
```

---
### `math.atan2`
An alias for the `math.atan` function.

---
### `math.inf`
An alias for the `math.huge` constant.
