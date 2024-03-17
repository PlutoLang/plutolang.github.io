---
sidebar_position: 2
---

Functions can be declared nodiscard, causing a warning to be raised when the return value is discarded:

```pluto showLineNumbers
local function add(a, b) <nodiscard>
    return a + b
end

add(1, 2)
```
```
file.pluto:5: warning: discarding return value of function declared '<nodiscard>' [discarded-return]
    5 | add(1, 2)
      | ^^^^^^^^^ here
```

This can also be combined with [type hints](<Type Hinting>):
```pluto
local function add(a: number, b: number): number <nodiscard>
    return a + b
end
```

:::info
The warning coverage is currently limited to local functions.
:::
