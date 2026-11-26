---
sidebar_position: 1
---

This page documents the changes & additions to Pluto's runtime environment, which is built on top of Lua 5.5's.

---
### `_PVERSION`
`_PVERSION` is the global to check your current version of Pluto.

```pluto
if _PVERSION == nil then
    print("Plain Lua detected (".._VERSION..")")
else
    io.write("Pluto detected (".._PVERSION.."), based on ".._VERSION)
    if os.platform then
        io.write(", running on "..os.platform)
    end
    io.write("\n")
end
```

---
### `package.path`
`package.path` is modified to also search for `.pluto` files.

---
### `dumpvar`
A debug function designed to dump values into human-readable formats.
#### Parameters
1. The value to dump.
#### Returns
A string representation of the value.
```pluto
local t = {
    ["hello"] = 1234,
    ["goodbye"] = _G.table,

    ["name"] = "John",
    ["lastname"] = "Doe",

    ["details"] = {
        "No details available."
    }
}

print(dumpvar(t))
```
```
{
    ["lastname"] = string(3) "Doe",
    ["name"] = string(4) "John",
    ["goodbye"] = {
        ["unpack"] = function: 00007FF7738B3C20,
        ["insert"] = function: 00007FF7738B30D0,
        ["freeze"] = function: 00007FF7738B43F0,
        ["foreach"] = function: 00007FF7738B3220,
        ["filter"] = function: 00007FF7738B4700,
        ["isfrozen"] = function: 00007FF7738B44B0,
        ["getn"] = function: 00007FF7738B43B0,
        ["pack"] = function: 00007FF7738B3B10,
        ["contains"] = function: 00007FF7738B4540,
        ["move"] = function: 00007FF7738B34D0,
        ["concat"] = function: 00007FF7738B37F0,
        ["sort"] = function: 00007FF7738B42B0,
        ["remove"] = function: 00007FF7738B33C0,
        ["map"] = function: 00007FF7738B49A0,
    },
    ["hello"] = 1234,
    ["details"] = {
        [1] = string(21) "No details available.",
    },
}
```

---
### `exportvar`
Similar to dumpvar, but returns valid Lua/Pluto code. May error if the value can not be represented accordingly.
#### Parameters
1. The value to dump.
```pluto
-- Slightly altered data from last example as C functions can not be exported.
local t = {
    ["hello"] = 1234,

    ["name"] = "John",
    ["lastname"] = "Doe",

    ["details"] = {
        "No details available."
    }
}

print(exportvar(t))
```
```
{
    ["hello"] = 1234,
    ["name"] = "John",
    ["details"] = {
        [1] = "No details available.",
    },
    ["lastname"] = "Doe",
}
```

---
### `range`
Returns a table of numbers in the given range.
```pluto
print(range(10):unpack())   --> 1   2   3   4   5   6   7   8   9   10
print(range(4, 8):unpack()) --> 4   5   6   7   8
```

---
### `compareversions`
Performs a three-way comparison on 2 version numbers, similar to the [Spaceship Operator](../New%20Operators#spaceship-operator).
```pluto
assert(compareversions("1.0.0", "0.9.0")     >= 0)
assert(compareversions("1.0.0", "1.0.0-dev") >= 0)
```
Note that pre-release versions (e.g. with `-dev` suffix) are considered to be _less than_ their final counterparts.

---
### `wcall`
Calls the given function and returns a string of warnings raised by it.
```pluto
local w = wcall(|| -> warn("Bad!"))
print(w ~= "" ? (w:strip()) : "No warnings")
-- Output: "Bad!"
```

---
### `utonumber`
Same as `tonumber`, but performs the operation under the `en_US.UTF-8` locale. Ensures the same result on all systems.

---
### `utostring`
Same as `tostring`, but performs the operation under the `en_US.UTF-8` locale. Ensures the same result on all systems.

---
### `callonce`
Calls the given function exactly once and then caches its return value.
```pluto
local function expensive_constructor()
    print("expensive_constructor called")
    return { "A", "B", "C" }
end

for i = 1, 3 do
    local t = callonce(expensive_constructor)
    print(t[i])
end

--> expensive_constructor called
--> A
--> B
--> C
```

---
### `newuserdata`
Constructs a 0-sized userdata with an empty metatable.
```pluto
print(newuserdata()) --> userdata: 0x...
```
