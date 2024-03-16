Must be included via `require`.

### `base64.encode`
Returns a base64-encoded string.
#### Parameters
1. `data` — A string of data to encode.
2. `pad` — Whether or not to apply padding. Defaults to `true`.
```pluto
local base64 = require("base64")
print(base64.encode("Hello, World!")) --> SGVsbG8sIFdvcmxkIQ==
```
---
### `base64.decode`
Returns a decoded base64 string.
#### Parameters
1. `data` — A string of base64 data.
```pluto
local base64 = require("base64")
print(base64.decode("SGVsbG8sIFdvcmxkIQ==")) --> Hello, world!
```
---
### `base64.urlencode`
Returns a base64url-encoded string. This variant is sometimes refered to as filename safe base64.
#### Parameters
1. `data` — A string of data to encode.
2. `pad` — Whether or not to apply padding. Defaults to `false`.
```pluto
local base64 = require("base64")
print(base64.urlencode("Hello, World!")) --> SGVsbG8sIFdvcmxkIQ
```
---
### `base64.urldecode`
Similar to `base64.decode` except for base64url.
#### Parameters
1. `data` — A string of base64 data.
```pluto
local base64 = require("base64")
print(base64.urldecode("SGVsbG8sIFdvcmxkIQ")) --> Hello, world!
```
