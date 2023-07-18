Pluto allows you to concatenate boolean values just like you would number values:
```pluto
local iVar = 13
local bVar = true
print("iVar = " .. iVar)
print("bVar = " .. tostring(bVar)) -- Lua way
print("bVar = " .. bVar) -- Pluto way
```