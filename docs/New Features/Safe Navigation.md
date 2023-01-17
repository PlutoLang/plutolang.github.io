Accessing deeply nested fields which can potentially be `nil` was problematic, because you'd need an unreasonable amount of guard clauses to prevent an "attempt to index nil" error. Pluto now offers this syntax:
```pluto showLineNumbers title="Basic Usage"
local value = a?.b?.c?.d
```
In this example, every field is nil. However, this does not throw an error. It simply returns `nil`. Without safe table navigation, this would've returned several "attempt to index nil" errors.
```pluto showLineNumbers title="Practical Usage"
-- Pretend userConfig is parsed from a JSON file, or something.

--- Returning the user's preferred color, or Red if they have no preferred color.
local function get_color()
    return userConfig.colors?.preferred ?? "Red"
end

print(get_color())
```
:::info
These cannot be used for statements, like `a?.b?.c = 0`. They're only valid as expressions.
:::