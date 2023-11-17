---
sidebar_position: 17
---
Accessing deeply nested fields which can potentially be `nil` was problematic, because you'd need an unreasonable amount of guard clauses to prevent an "attempt to index nil" error. Pluto now offers this syntax:
```pluto showLineNumbers title="Basic Usage"
local person = {
    name = "Alice"
}

local pet_name = person.pet?.name
```
In this example, `person.pet` is nil. However, this does not throw an "attempt to index nil" error. `pet_name` is simply set to `nil`.

```pluto showLineNumbers title="Practical Usage"
-- Pretend userConfig is parsed from a JSON file, or something.

--- Returning the user's preferred color, or Red if they have no preferred color.
local function get_color()
    return userConfig.colors?.preferred ?? "Red"
end

print(get_color())
```
In this example, we also use the null coalescing operator `??`.

:::info
These cannot be used for statements, like `a?.b?.c = 0`. They're only valid as expressions.

Safe Navigation was written by Sven Olsen.
:::