Special arithmetic algorithms are optimized by Pluto during compile-time.

For example:
- `x << 1` => `x + x`
- `x ** 2` => `x * x`
- `x // 2` => `x >> 1`

These can offer upwards of a 20% performance boost.

These expressions are only optimized when both operands are integers, and no metamethod will be called.