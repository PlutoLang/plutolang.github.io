The null-coalescing operator (or more appropriately, nil-coalescing operator) is used as follows:
```lua showLineNumbers
local value = nil
local result = value ?? "This is the value if 'value' is nil."
```
It's semantically equal to the following code:
```lua showLineNumbers
local value = nil
local result = if value == nil then "This is the value if 'value' is nil." else value
```
As you can see, the null-coalescing operator allows much shorter statements.
:::info
This is a lazily-evaluated operator. It will not "choose whatever isn't nil", it'll simply evaluate the second expression if the first expression is nil.
:::