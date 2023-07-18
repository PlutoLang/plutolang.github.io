---
sidebar_position: 15
---
Destructuring is a better way to assign local variables from expressions that return a table.

## Array destructuring

Assuming we have this table:

```pluto
local t = { 3, 6, 9 }
```

This is how we would assign each value to variables called `a`, `b`, and `c` using the Lua and Pluto ways:

```pluto title="Lua way"
local a = t[1]
local b = t[2]
local c = t[3]
```
```pluto title="Pluto way"
local [a, b, c] = t
```

## Table destructuring

Assuming we have this table:

```pluto
local t = {
    name = "John",
    age = 42
}
```

This is how we would assign each field to a variable of the same name using the Lua and Pluto ways:

```pluto title="Lua way"
local name = t.name
local age = t.age
```
```pluto title="Pluto way"
local { name, age } = t
```

### Different variable name

Assuming we have the same table as above, this is how we'd assign the `name` and `age` fields to `n` and `a` variables, respectively, using the Lua and Pluto ways:

```pluto title="Lua way"
local n = t.name
local a = t.age
```
```pluto title="Pluto way"
local { n = name, a = age } = t
```
