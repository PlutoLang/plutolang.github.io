Must be included via `require`.

---
### `__construct`

The constructor takes up to 3 arguments:

```pluto
local vector3 = require "pluto:vector3"
print(new vector3())        --> vector3(0, 0, 0)
print(new vector3(1))       --> vector3(1, 1, 1)
print(new vector3(1, 2))    --> vector3(1, 2, 0)
print(new vector3(1, 2, 3)) --> vector3(1, 2, 3)
```

There is also a shorthand for this:

```pluto
local vector3 = require "pluto:vector3"
print(vector3(1, 2, 3)) --> vector3(1, 2, 3)
```

### `__tostring`

As seen above, the `__tostring` metamethod provides a string representation of the class.

### `__add`, `__sub`, `__mul`, `__div`

Vector3 instances support arithmetic operations. The right-hand side can either be a Vector3 instance or a number. They create a new instance for the result.

```pluto
local vector3 = require "pluto:vector3"
print(new vector3(1) + new vector3(2)) --> vector3(3, 3, 3)
print(new vector3(0, 0.6, 0.4) * 3)    --> vector3(0, 1.8, 1.2)
```

### `__eq`

Vector3 instances can effortlessly be compared to each other.

```pluto
local vector3 = require "pluto:vector3"
print(new vector3(2, 2, 2) == new vector3(2)) --> true
print(new vector3(1, 2, 3) == new vector3(2)) --> false
```

### `__len`, `magnitude`

To get the magnitude of a vector, you can either use the unary length operator (`#`) or call the `magnitude` method:

```pluto
local vec = new (require"pluto:vector3") (1, 2, 3)
print(#vec)            --> 3.7416573867739
print(vec:magnitude()) --> 3.7416573867739
```

### `distance`

Calculates the distance between this vector and another provided instance.

```pluto
local { vector3 } = require "*"
print(vector3(0, 0, 0):distance(vector3(1, 0, 1))) --> 1.4142135623731
```

### `sum`

Computes the sum of the `x`, `y` and `z` fields.

```pluto
local vec = new (require"pluto:vector3") (1, 2, 3)
print(vec:sum()) --> 6
```

### `min`

Returns the value of axis with the lowest value.

```pluto
local vec = new (require"pluto:vector3") (1, 2, 3)
print(vec:min()) --> 1
```

### `max`

Returns the value of axis with the highest value.

```pluto
local vec = new (require"pluto:vector3") (1, 2, 3)
print(vec:max()) --> 3
```

### `dot`

Computes the [dot product](https://en.wikipedia.org/wiki/Dot_product) with the Vector3 given as an argument.

```pluto
local vector3 = require "pluto:vector3"
print(new vector3(1):dot(new vector3(2))) --> 6
```

### `abs`

Returns a new Vector3 instance with each axis being an absolute value.

```pluto
local vector3 = require "pluto:vector3"
print(new vector3(-1, -2, 3):abs()) --> vector3(1, 2, 3)
```

### `normalized`, `normalised`

Returns a new Vector3 instance that is a unit vector equivalent.

```pluto
local vector3 = require "pluto:vector3"
print(new vector3(0, 3, 0):normalized()) --> vector3(0.0, 1.0, 0.0)
```

### `torot`

Returns a rotation vector based on the direction given by the current vector.

By default, a left-handed Y-up coordinate system is used, but [vector3.setsystem](#vector3setsystem) may change this.

```pluto
local vector3 = require "pluto:vector3"
print(vector3(0, 1, 0):torot()) --> vector3(90.0, 0.0, 0)
```

### `lookat`

Returns a rotation vector based on the position given by the current vector and argument.

By default, a left-handed Y-up coordinate system is used, but [vector3.setsystem](#vector3setsystem) may change this.

```pluto
local v3 = require "pluto:vector3"
print(new v3(0):lookat(new v3(0, 1, 0))) --> vector3(90.0, 0.0, 0)
```

### `todir`

Returns a direction vector based on the rotation given by the current vector.

By default, a left-handed Y-up coordinate system is used, but [vector3.setsystem](#vector3setsystem) may change this.

```pluto
local vector3 = require "pluto:vector3"
print(vector3(90, 0, 0):todir()) --> vector3(0, 1, 6.123233995736766e-17)
```

### `vector3.setsystem`

This static function redefines the meaning of the axes for [torot](#torot), [lookat](#lookat) and [todir](#todir).

#### Parameters
1. The position system specification as 3 repetitions of +/- f/r/u to specify positive/negative frontward/rightward/upward.
2. The rotation system specification as 3 repetitions of +/- y/p/b to specify positive/negative yaw/pitch/<abbr title="roll">bank</abbr>.

```pluto
local vector3 = require "pluto:vector3"
-- Position: X, Y, Z = Forward, Rightward, Upward
-- Rotation: X, Y, Z = Yaw (Rightward), Pitch (Upward), Bank/Roll
vector3.setsystem("+f+r+u", "+y+p+b")
print(vector3(0, 1, 0):torot()) --> vector3(90.0, 0.0, 0)
print(vector3(0, 0, 1):torot()) --> vector3(0.0, 90.0, 0)
-- If we want Y to be leftward instead of rightward:
vector3.setsystem("+f-r+u", "+y+p+b")
print(vector3(0, 1, 0):torot()) --> vector3(-90.0, 0.0, 0)
```

### `vector3.getsystem`

This static function gets the current position and rotation system specifications.

#### Returns
1. The position system specification.
1. The rotation system specification.

```pluto
local vector3 = require "pluto:vector3"
local ps, rs = vector3.getsystem()
print(ps) --> +r+u+f
print(rs) --> +p+y+b
```
