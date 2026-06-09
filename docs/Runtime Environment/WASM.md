Must be included via `require`.

---
### `wasm.instantiate`
Instantiates a WASM module.
#### Parameters
1. The WASM binary string.
#### Returns
A WASM instance.
```pluto
local { base64, wasm } = require "*"
local module = wasm.instantiate(base64.decode("AGFzbQEAAAABCAFgAn9/An9/AwIBAAcLAQdldWNfZGl2AAAKDgEMACAAIAFuIAAgAXALAAoEbmFtZQIDAQAA"))
local Q, R = module:call("euc_div", 21, 5)
print(Q) --> 4
print(R) --> 1
```

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
