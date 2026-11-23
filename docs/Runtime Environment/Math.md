This page documents the `math` library in Pluto, which is built on top of Lua 5.5's.

## Added

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
### `math.clz`
Returns the number of leading zero bits in an integer's binary representation.
#### Parameters
1. The integer to inspect.
```pluto
local bitwidth = math.popcnt(~0)
print(math.clz(1 << (bitwidth - 1))) --> 0
print(math.clz(0) == bitwidth) --> true
```
---
### `math.ctz`
Returns the number of trailing zero bits in an integer's binary representation.
#### Parameters
1. The integer to inspect.
```pluto
local bitwidth = math.popcnt(~0)
print(math.ctz(0b101000)) --> 3
print(math.ctz(0) == bitwidth) --> true
```
---
### `math.popcnt`
Returns the number of set bits in an integer's binary representation.
#### Parameters
1. The integer to inspect.
```pluto
print(math.popcnt(0)) --> 0
print(math.popcnt(0b10101)) --> 3
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
An alias for the [math.atan](#mathatan) function.

---
### `math.inf`
An alias for the [math.huge](#mathhuge) constant.

## Unchanged

### `math.abs`
Returns the absolute value of a number.
#### Parameters
1. The number to get the absolute value of.
```pluto
print(math.abs(-5)) --> 5
print(math.abs(2.5)) --> 2.5
```
---
### `math.acos`
Returns the arc cosine of a number, in radians.
#### Parameters
1. The cosine value, in the range [-1, 1].
```pluto
print(math.acos(0)) --> 1.5707963267948966
print(math.acos(1)) --> 0.0
```
---
### `math.asin`
Returns the arc sine of a number, in radians.
#### Parameters
1. The sine value, in the range [-1, 1].
```pluto
print(math.asin(0)) --> 0.0
print(math.asin(1)) --> 1.5707963267948966
```
---
### `math.atan`
Returns the arc tangent of `y / x`, in radians. The signs of both arguments are used to determine the quadrant of the result, and the case of `x` being zero is handled correctly.
#### Parameters
1. The `y` coordinate.
2. The `x` coordinate. Defaults to `1`, so `math.atan(y)` returns the arc tangent of `y`.
```pluto
print(math.atan(0, 1)) --> 0.0
print(math.atan(1)) --> 0.78539816339744828
assert(math.atan(1) == math.pi / 4)
```
---
### `math.ceil`
Returns the smallest integral value greater than or equal to a number.
#### Parameters
1. The number to round up.
```pluto
print(math.ceil(4.2)) --> 5
print(math.ceil(-4.2)) --> -4
```
---
### `math.cos`
Returns the cosine of an angle.
#### Parameters
1. The angle, in radians.
```pluto
print(math.cos(0)) --> 1.0
print(math.cos(1)) --> 0.54030230586813977
```
---
### `math.deg`
Converts an angle from radians to degrees.
#### Parameters
1. The angle, in radians.
```pluto
print(math.deg(math.pi)) --> 180.0
```
---
### `math.exp`
Returns the value <code>e<sup>x</sup></code> (where `e` is the base of natural logarithms).
#### Parameters
1. The exponent (`x`).
```pluto
print(math.exp(0)) --> 1.0
print(math.exp(1)) --> 2.7182818284590451
```
---
### `math.floor`
Returns the largest integral value less than or equal to a number.
#### Parameters
1. The number to round down.
```pluto
print(math.floor(4.8)) --> 4
print(math.floor(-4.2)) --> -5
```
---
### `math.fmod`
Returns the result of a truncated modulo operation.
#### Parameters
1. The dividend.
2. The divisor.
```pluto
local a = -7
local b = 3
print(a % b) --> 2
print(math.fmod(a, b)) --> -1
```
---
### `math.frexp`
Returns two numbers `m` and `e` such that `x = m * 2^e`, where `e` is an integer. When `x` is zero, NaN, +inf, or -inf, `m` is equal to `x`; otherwise, the absolute value of `m` is in the range `[0.5, 1)`.
#### Parameters
1. The number to decompose (`x`).
```pluto
local m, e = math.frexp(8)
print(m) --> 0.5
print(e) --> 4
print(m * 2^e) --> 8.0
```
### `math.ldexp`
Returns `m * 2^e`, where `e` is an integer.
#### Parameters
1. The mantissa.
2. The integer exponent.
```pluto
print(math.ldexp(0.5, 4)) --> 8.0
```
---
### `math.huge`
A constant float value that is greater than any other numeric value.
```pluto
print(math.huge > 1e308) --> true
print(-math.huge) --> -inf
```
---
### `math.log`
Returns the logarithm of a number in the given base.
#### Parameters
1. The number to take the logarithm of.
2. The base. Defaults to `e`, so the function returns the natural logarithm of `x`.
```pluto
print(math.log(1)) --> 0.0
print(math.log(8, 2)) --> 3.0
print(math.log(100, 10)) --> 2.0
```
---
### `math.max`
Returns the argument with the maximum value, according to the `<` operator.
#### Parameters
1. Two or more numbers to compare.
```pluto
print(math.max(3, 7, 5)) --> 7
```
---
### `math.maxinteger`
An integer with the maximum value for an integer.
```pluto
print(math.maxinteger) --> 9223372036854775807
```
---
### `math.min`
Returns the argument with the minimum value, according to the `<` operator.
```pluto
print(math.min(3, 7, 5)) --> 3
```
---
### `math.mininteger`
An integer with the minimum value for an integer.
```pluto
print(math.mininteger) --> -9223372036854775808
```
---
### `math.modf`
Splits a number into its integral and fractional parts.
#### Parameters
1. The number to split.
#### Returns
1. The integral part.
2. The fractional part, always a float.
```pluto
print(string.format("%d\t%.1f", math.modf(3.7))) --> 3    0.7
print(string.format("%d\t%.1f", math.modf(-3.7))) --> -3    -0.7
```
---
### `math.pi`
The value of π.
```pluto
print(math.pi) --> 3.1415926535898
```
---
### `math.rad`
Converts an angle from degrees to radians.
#### Parameters
1. The angle, in degrees.
```pluto
print(math.rad(180)) --> 3.1415926535898
```
---
### `math.random`
Returns a pseudo-random number.
#### Parameters
- With no arguments, returns a float with uniform distribution in the range [0, 1).
- With two integers `m` and `n`, returns an integer with uniform distribution in the range [m, n].
- With one positive integer `n`, equivalent to `math.random(1, n)`.
- With `0`, returns an integer with all bits (pseudo)random.
```pluto
local roll = math.random(1, 6)
print(roll >= 1 and roll <= 6) --> true
```
:::info
Cryptographic code should use Pluto's [crypto.random](Crypto.md#cryptorandom) for a DRBG backed by a hardware entropy source.
:::
### `math.randomseed`
Reinitializes the pseudo-random generator with a seed. Equal seeds produce equal sequences of numbers.
#### Parameters
- When no arguments, generates a seed with a weak attempt for randomness.
- When 1 or 2 arguments, the integer parameters `x` and `y` are joined into a seed. The default for `y` is zero.
#### Returns
The two seed components that were effectively used, so that setting them again repeats the sequence.
```pluto
math.randomseed(42)
print(math.random(100)) --> 50
print(math.randomseed(42)) --> 42    0
print(math.random(100)) --> 50
```
---
### `math.sin`
Returns the sine of an angle.
#### Parameters
1. The angle, in radians.
```pluto
print(math.sin(0)) --> 0.0
print(math.sin(math.pi / 2)) --> 1.0
```
---
### `math.sqrt`
Returns the square root of a number; equivalent to `x^0.5`.
#### Parameters
1. The number to take the square root of.
```pluto
print(math.sqrt(16)) --> 4.0
```
---
### `math.tan`
Returns the tangent of an angle.
#### Parameters
1. The angle, in radians.
```pluto
print(math.tan(0)) --> 0.0
```
---
### `math.tointeger`
Converts a value to an integer if it is convertible, otherwise returns nil.
#### Parameters
1. The value to convert.
```pluto
print(math.tointeger(3.0)) --> 3
print(math.tointeger(3.5)) --> nil
```
---
### `math.type`
Returns `"integer"` if the argument is an integer, `"float"` if it is a float, or nil if it is not a number.
#### Parameters
1. The value to inspect.
```pluto
print(math.type(1)) --> integer
print(math.type(1.0)) --> float
print(math.type("1")) --> nil
```
---
### `math.ult`
Returns the result of `a < b` with both integers interpreted as unsigned values.
#### Parameters
1. The first integer (`a`).
2. The second integer (`b`).
```pluto
print(math.ult(1, -1)) --> true
```
