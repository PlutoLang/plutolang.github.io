Must be included via `require`.

---
### `base32.encode`
Returns a base32-encoded string.
#### Parameters
1. `data` — A string of data to encode.
2. `pad` — Whether or not to apply padding. Defaults to `true`.
```pluto
local base32 = require("base32")
print(base32.encode("Hello, world!")) --> JBSWY3DPFQQHO33SNRSCC===
print(base32.encode("Hello, world!", false)) --> JBSWY3DPFQQHO33SNRSCC
```

---
### `base32.decode`
Returns a decoded base32 string.
#### Parameters
1. `data` — A string of base32 data to decode.
```pluto
local base32 = require("base32")
print(base32.decode("JBSWY3DPFQQHO33SNRSCC===")) --> Hello, world!
print(base32.decode("JBSWY3DPFQQHO33SNRSCC")) --> Hello, world!
```
