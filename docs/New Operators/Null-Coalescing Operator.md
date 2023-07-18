The null-coalescing operator (or more appropriately, nil-coalescing operator) can be used as follows:
```pluto showLineNumbers
local permissions, group = nil, nil

local effective_permissions = permissions ?? "NO_PERMISSIONS"

group ??= "User"
```
It's semantically equal to the following code using [ternary expressions](../New Features/Ternary Expressions.md):
```pluto showLineNumbers
local permissions, group = nil, nil

local effective_permissions = permissions == nil ? "NO_PERMISSIONS" : permissions

if group == nil then
	group = "User"
end
```
As you can see, the null-coalescing operator allows for more concise statements.
:::info
This is a lazily-evaluated operator. It will not "choose whatever isn't nil", it'll simply evaluate the second expression if the first expression is nil.
:::
:::caution
The bytecode of this feature is not backwards-compatible with Lua.
:::
