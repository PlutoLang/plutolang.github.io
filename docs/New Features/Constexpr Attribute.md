---
sidebar_position: 16
---
Pluto adds the `<constexpr>` attribute which is a strengthened version of the `<const>` attribute.

So, both of these lines of code are valid and mean the same thing:
```pluto
local a <const> = 123
local a <constexpr> = 123
```
However, `<constexpr>` also enforces that the assigned variable is a compile-time constant:
```pluto
local a <const> = {}
// ERROR:
local a <constexpr> = {} -- <constexpr> variable was not assigned a compile-time constant value
```
