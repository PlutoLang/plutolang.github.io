---
sidebar_position: 2
---
## For Member Access
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

Safe Navigation (for member access) was written by Sven Olsen.
:::

## For Method Calls

Similarly, if you want to have optional hook functions, you can use safe method calls instead of writing conditionals:

```pluto showLineNumbers title="Lua Way"
if self.onEvent then
    self:onEvent(event)
end
```
```pluto showLineNumbers title="Pluto Way"
self:onEvent?(event)
```

You can also check if the left-hand side of `:` is not nil:

```pluto showLineNumbers
object?:onEvent(event) -- 'object' may be nil
object?:onEvent?(event) -- 'object' and 'object.onEvent' may be nil
```

Note that this feature will truncate multiple return values if they're not used as part of a fixed assignment:

```pluto
function myfunc()
    return 1, 2
end

local a, b, c = _G:myfunc?()
print(a, b, c) --> 1   2   nil

print(_G:myfunc?()) --> 1
```
