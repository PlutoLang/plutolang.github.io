Must be included via `require`.

---
### `base58.encode`
Returns a base58-encoded string.
#### Parameters
1. The string of data to encode.
2. Whether or not to apply padding. Defaults to `false`.
```pluto
local base58 = require("base58")
print(base58.encode("Hello, world!")) --> 72k1xXWG59wUsYv7h2
print(base58.encode("Hello, world!", true)) --> 1172k1xXWG59wUsYv7h2
```

---
### `base58.decode`
Returns a decoded base58 string.
#### Parameters
1. The string of base58 data to decode.
```pluto
local base58 = require("base58")
print(base58.decode("72k1xXWG59wUsYv7h2")) --> Hello, world!
print(base58.decode("1172k1xXWG59wUsYv7h2")) --> Hello, world!
```
