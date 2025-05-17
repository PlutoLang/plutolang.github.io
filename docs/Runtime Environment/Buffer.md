The buffer class — available via `require` — is a fast intermediate storage for incrementally-constructed strings.

---
### `buffer.new`

Creates a new buffer instance.

---
### `buffer.append`

Appends a string to a buffer instance.

#### Parameters

1. The buffer instance.
2. The string to append.

---
### `buffer.tostring`, `__tostring`

Converts the buffer into a string.

#### Parameters

1. The buffer instance.

#### Returns

A string.

```pluto
local buffer = require "pluto:buffer"

local buff = new buffer()
buff:append("Hello,")
buff:append(" world!")
print(buff) --> Hello, world!
```
