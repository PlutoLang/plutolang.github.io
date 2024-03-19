---
sidebar_position: 3
---
Must be included via `require`.

### `bigint.new`
To instantiate a bigint, you can call the `bigint.new` function, or use the `new` expression.
#### Parameters
1. The decimal value of the bigint.
```pluto
local bigint = require "pluto:bigint"
print(new bigint("123")) --> 123
```

### `bigint.tostring`, `__tostring`
As seen above, the `__tostring` metamethod provides a string representation of the Bigint in decimal.

### `bigint.add`, `__add`
Adds two bigints together. Returns a new bigint.

### `bigint.sub`, `__sub`
Performs subtraction on two bigints. Returns a new bigint.

### `bigint.mul`, `__mul`
Performs multiplication on two bigints. Returns a new bigint.

### `bigint.div`
Performs division on two bigints. Returns two new bigints: quotient and remainder.
```pluto
local bigint = require "pluto:bigint"
print(new bigint(10):div(new bigint(3))) --> 3    1
```

### `__div`
Performs division on two bigints. Returns a new bigint with the quotient.
```pluto
local bigint = require "pluto:bigint"
print(new bigint(10) / new bigint(3)) --> 3
```

### `bigint.mod`, `__mod`
Performs divison on two bigints. Returns a new bigint with the remainder.
```pluto
local bigint = require "pluto:bigint"
print(new bigint(10) % new bigint(3)) --> 1
```

### `bigint.pow`, `__pow`
Performs expontentiation on two bigints. Returns a new bigint.
```pluto
local bigint = require "pluto:bigint"
print(new bigint(2) ^ new bigint(10)) --> 1024
```
