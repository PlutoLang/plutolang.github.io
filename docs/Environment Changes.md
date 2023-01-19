---
sidebar_position: 7
---
Some minor changes & additions to the environment must be disclosed:
1. `_PVERSION` is the global to check your current version of Pluto.
2. `_PSOUP` is a global boolean you can access to check linkage with Soup.
3. `package.path` is modified to also search for `.pluto` files.
```pluto
if _PVERSION == nil then
    print("Plain Lua detected (".._VERSION..")")
else
    local soup = ""
    if not _PSOUP then
        soup = "not "
    end
    print("Pluto detected (".._PVERSION.."), based on ".._VERSION..", "..soup.."compiled with Soup integration")
end
```