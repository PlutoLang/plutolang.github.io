---
sidebar_position: 3
---
The CaT module is available via `require "pluto:cat"` and provides encoding and decoding for [the Colons and Tabs format](https://docs.soup.do/user/cat).

---
### `cat.encode`
Returns a string of CaT.
#### Parameters
1. `data` — The table to encode in CaT.
```pluto
local cat = require "pluto:cat"

cat.encode {
    List = {
        __value = "With Value",
        Child = "Also With Value"
    }
} |> io.write
--> List: With Value
-->     Child: Also With Value
```

---
### `cat.decode`
Returns a table representing the CaT data.
#### Parameters
1. `data` — The CaT data to decode.
2. `presentation` — How to represent the data as a table. Can be "flat", "flatwithorder", or "full" (default).

```pluto
local cat = require "pluto:cat"

local data = cat.decode [[
List: With Value
    Child: Also With Value
]]

print(dumpvar(data))
--> {
-->     [1] = {
-->         ["value"] = string(10) "With Value",
-->         ["name"] = string(4) "List",
-->         ["children"] = {
-->             [1] = {
-->                 ["name"] = string(5) "Child",
-->                 ["value"] = string(15) "Also With Value",
-->             },
-->         },
-->     },
--> }
```

With the default "full" representation, the retuned table has an `__index` metamethod for ease of use:

```pluto
print(data.List.value) --> With Value
print(data.List.Child.value) --> Also With Value
```

Alternatively, the other representations are available:
```pluto
local cat = require "pluto:cat"

print(dumpvar(cat.decode([[
home
    john
        hello.txt: Hello, world!
]], "flat")))
--> {
-->     ["home"] = {
-->         ["john"] = {
-->             ["hello.txt"] = string(13) "Hello, world!",
-->         },
-->     },
--> }
```
```pluto
local cat = require "pluto:cat"

print(dumpvar(cat.decode([[
Primary Color: Purple
Secondary Color: White
]], "flatwithorder")))
--> {
-->     ["__order"] = {
-->         [1] = string(13) "Primary Color",
-->         [2] = string(15) "Secondary Color",
-->     },
-->     ["Primary Color"] = string(6) "Purple",
-->     ["Secondary Color"] = string(5) "White",
--> }
```
