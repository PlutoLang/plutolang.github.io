---
sidebar_position: 6
---
If you compile Pluto with Soup, then you get access to these additional libraries. They must be included via `require`.

## base64
### base64.encode(data, pad)
Returns a base64-encoded string.
#### Parameters:
1. `data` — A string of data to encode.
2. `pad` — A boolean indicating whether or not to apply padding to the encoded result.
```pluto
local base64 = require("base64")
local data, encoded

data = "Hello, World!"
encoded = base64.encode(data, true)
--[[
	SGVsbG8sIFdvcmxkIQ==
--]]
```
### base64.decode(data)
Returns a decoded base64 string.
#### Parameters:
1. `data` — A string of base64 data.
```pluto
local base64 = require("base64")

base64.decode("SGVsbG8sIFdvcmxkIQ==")
--[[
	Hello, World!
--]]
```
### base64.url_encode(data, pad)
Returns a base64url-encoded string. This variant is sometimes refered to as filename safe base64.
### base64.url_decode(data)
Similar to `base64.decode` except for base64url.

## base58
### base58.decode(data)
Returns a hexadecimal string of decoded base58 data.
#### Parameters:
1. `data` — A string of base58 data.
### base58.is_valid(data)
Returns a boolean indicating whether or not `data` is valid base58 data.

## base32
### base32.encode(data, pad)
Returns an encoded base32 string.
#### Parameters:
1. `data` — A string of data to encode.
2. `pad` — Whether or not to apply padding.
### base32.decode(data)
Returns a decoded base32 string.
#### Parameters:
1. `data` — A string of base32 data to decode.

## json
### json.encode(data, pretty)
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
	key = "Hello, World!"
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
### json.decode(data)
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