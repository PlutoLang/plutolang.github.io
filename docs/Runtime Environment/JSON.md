---
sidebar_position: 3
---
Must be included via `require`.
### `json.encode`
Returns a string of JSON.
#### Parameters
1. `data` — A boolean, number, string, or table to encode as JSON.
2. `pretty` — Whether to return a human-readable string of JSON. Defaults to `false`.
```pluto
local json = require("json")
local data

data = "Hello, World!"
print(json.encode(data, true))
--> "Hello, World!"

data = {
    key = "Hello, World!",
    nested = {
        nested_key = 1337
    }
}
print(json.encode(data, true))
--> {
-->     "key": "Hello, World!",
-->     "nested": {
-->         "nested_key": 1337
-->     }
--> }
```

The `json.null` value — assuming you did `local json = require("json")` — can be used to encode JSON null values.
```pluto
local json = require("json")

print(json.encode(json.null)) --> null
```

---
### `json.decode`
Returns multiple potential types. If you pass a serialized boolean, number, or string, then it will return the same type. If you pass a complex JSON object, it will return a table.
#### Parameters
1. `data` — The JSON data to decode.
2. `flags` — Options to augment the return value. Multiple options can be combined with bitwise OR (`|`). Defaults to `0`.
    - `json.withnull` — decodes JSON null values as `json.null` instead of `nil`.
    - `json.withorder` — adds an `__order` field to tables of decoded JSON objects. `json.encode` respects this, so this is perfect for modifying data while preserving order.
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

-- Flags

encoded = [[{
    "null": null,
    "string": "Hello"
}]]
decoded = json.decode(encoded, json.withnull | json.withorder)
assert(decoded.__order[1] == "null")
assert(decoded.null == json.null)
assert(json.encode(decoded, true) == encoded)
```
