Must be included via `require`.

---
### `json.encode`
Returns a string of JSON or MessagePack.
#### Parameters
1. `data` — A boolean, number, string, or table to encode as JSON.
2. `format` — Can be `"compact"`, `"pretty"`, or `"msgpack"`. Defaults to `"compact"`.
```pluto
local json = require("json")
local data

data = "Hello, world!"
print(json.encode(data, "pretty"))
--> "Hello, world!"

data = {
    key = "Hello, world!",
    nested = {
        nested_key = 1337
    }
}
print(json.encode(data, "pretty"))
--> {
-->     "key": "Hello, world!",
-->     "nested": {
-->         "nested_key": 1337
-->     }
--> }

print(json.encode({ 0, true, json.null }, "msgpack"):tohex()) --> 9300c3c0
```

Because Lua tables do not have order guarantees, you can add an `__order` field to fix the order:
```pluto
local t = {
    __order = { "a", "b", "c" },
    a = 1,
    b = 2,
    c = 3
}
print(require"json".encode(t)) -- {"a":1,"b":2,"c":3}
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
1. `data` — The JSON or MessagePack data to decode.
2. `flags` — Options to augment the return value. Multiple options can be combined with bitwise OR (`|`). Defaults to `0`.
    - `json.withnull` — decodes JSON null values as `json.null` instead of `nil`.
    - `json.withorder` — adds an `__order` field to tables of decoded JSON objects. `json.encode` respects this, so this is perfect for modifying data while preserving order.
    - `json.msgpack` — treats the input as MessagePack data instead of JSON.
```pluto
local json = require("json")
local encoded, decoded

encoded = [[{"key":"Hello, world!","nested":{"nested_key":1337}}]]
decoded = json.decode(encoded)
print(decoded.key) --> Hello, world!
print(decoded.nested.nested_key) --> 1337

-- Null & Order
encoded = [[{"null":null,"string":"Hello"}]]
decoded = json.decode(encoded, json.withnull | json.withorder)
assert(decoded.__order[1] == "null")
assert(decoded.null == json.null)
assert(json.encode(decoded) == encoded)

-- MessagePack
encoded = "\x93\x00\xc3\xc0"
decoded = json.decode(encoded, json.msgpack | json.withnull | json.withorder)
assert(decoded[1] == 0)
assert(decoded[2] == true)
assert(decoded[3] == json.null)
assert(json.encode(decoded, "msgpack") == encoded)
```
