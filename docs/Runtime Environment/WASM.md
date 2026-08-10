Must be included via `require`.

---
### `wasm.instantiate`
Instantiates a WASM module.
#### Parameters
1. The WASM binary string.
#### Returns
A [module](#module-class) instance.

---
### `wasm.describe`
Lists imports and exports of a WASM module.
#### Parameters
1. The WASM binary string.
#### Returns
A table with the keys "imports" and "exports", the values of which will be array tables, themselves containing tables with "name" and "kind" properties. "kind" will be "function", "global", "table" or "memory".

---
### `wasm.global.new`
Creates a WASM global which can be imported by one or more WASM module instance.
#### Parameters
1. The type of the global. Can be `i32`, `i64`, `f32`, `f64`, or `externref`, with an optional `mut` prefix.
2. The initial value of the global. Defaults to 0/null.
#### Returns
The created WASM global instance.
```pluto
local { base64, wasm } = require "*"
local asm = base64.decode("AGFzbQEAAAABCQJgAX8AYAABfwIHAQABZwN/AQMDAgABBw0CA3NldAAAA2dldAABCg0CBgAgACQACwQAIwALAAwEbmFtZQIFAgAAAQA=")
local g = new wasm.global("mut i32", 123)
do
    local mod = wasm.instantiate(asm, { [""] = $object(g) })
    print(mod:call("get")) --> 123
    mod:call("set", 456)
end
do
    local mod = wasm.instantiate(asm, { [""] = $object(g) })
    print(mod:call("get")) --> 456
end
```

---
### `wasm.table.new`
Creates a WASM table which can be imported by one or more WASM module instance.
#### Parameters
1. The element type. Can be `funcref` or `externref`.
2. The initial size of the table.
3. The maximum size of the table. Defaults to 0x10000.
4. Whether the table is 64-bit. Defaults to false. Note that 32-bit builds of Pluto don't support the memory64 proposal.
#### Returns
The created WASM table instance.

---
### `wasm.memory.new`
Creates a WASM memory which can be imported by one or more WASM module instance.
#### Parameters
1. The initial size of the memory, in pages (1 page = 0x10000 bytes).
2. The maximum size of the memory, in pages. Defaults to 0x10000.
3. Whether the memory is 64-bit. Defaults to false. Note that 32-bit builds of Pluto don't support the memory64 proposal.
#### Returns
The created WASM memory instance.

---
## Module Class
Module instances are obtained by calling `wasm.instantiate`.
### `call`
Calls the named exported function, with optional arguments following the name.
```pluto
local { base64, wasm } = require "*"
local module = wasm.instantiate(base64.decode("AGFzbQEAAAABCAFgAn9/An9/AwIBAAcLAQdldWNfZGl2AAAKDgEMACAAIAFuIAAgAXALAAoEbmFtZQIDAQAA"))
local Q, R = module:call("euc_div", 21, 5)
print(Q) --> 4
print(R) --> 1
```

### `write`
Writes to the module's memory at the given offset with the given binary string.
```pluto
local { base64, wasm } = require "*"
local module = wasm.instantiate(base64.decode("AGFzbQEAAAABBgFgAX8BfwMCAQAFAwEAAQcTAgZtZW1vcnkCAAZsb2FkMzIAAAoJAQcAIAAoAgALAAoEbmFtZQIDAQAA"))
print(module:call("load32", 1)) --> 0
module:write(1, string.pack("I4", 69))
print(module:call("load32", 1)) --> 69
```

### `read`
Reads from the module's memory at the given offset for the given amount of bytes and returns a binary string.
```pluto
local { base64, wasm } = require "*"
local imp = {
    m = new wasm.memory(1),
    t = new wasm.table("funcref", 1),
}
local mod = wasm.instantiate(
    base64.decode("AGFzbQEAAAABBAFgAAACFAIDaW1wAW0CAAEDaW1wAXQBcAABAwMCAAAHEAEMc2V0LWluZGlyZWN0AAEJBwEAQQALAQAKFAIKAEEAQaQDNgIACwcAQQARAAALABQEbmFtZQEGAQADc2V0AgUCAAABAA=="),
    $object(imp)
)
mod:call("set-indirect")
string.unpack("I4", mod:read(0, 4)) |> print --> 420
```
