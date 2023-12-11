---
sidebar_position: 1
---
## `json`
Must be included via `require`.
### `json.encode`
Returns a string of JSON.
#### Parameters:
1. `data` — A boolean, number, string, or table to encode as JSON.
2. `pretty` — Whether to return a human-readable string of JSON.
```pluto
local json = require("json")
local data, encoded

data = "Hello, World!"
encoded = json.encode(data, true)
--[[
	"Hello, World!"
--]]

data = 
{
	key = "Hello, World!",
	nested = {
		nested_key = 1337
	}
}
encoded = json.encode(data, true)
--[[
	{
	    "nested": {
	        "nested_key": 1337
	    },
	    "key": "Hello, World!"
	}
--]]
```
---
### `json.decode`
Returns multiple potential types. If you pass a serialized boolean, number, or string, then it will return the same type. If you pass a complex JSON object, it will return a table.
#### Parameters:
1. `data` — The JSON data to decode.
```pluto
local json = require("json")
local data, encoded, decoded

-- Basic Type

data = "Hello, World!"
encoded = json.encode(data, true)
decoded = json.decode(encoded)

assert(decoded == data)
assert(type(decoded) == "string")

-- Complex Type

data = {
    key = "Hello",
    nested = {
        nested_key = 1337
    }
}
encoded = json.encode(data, true)
decoded = json.decode(encoded)

assert(decoded.key == "Hello")
assert(type(decoded) == "table")
assert(decoded.nested.nested_key == 1337)
```
---
## Encoding Null Values
The `json.null` value — assuming you did `local json = require("json")` — can be used to encode null JSON values.