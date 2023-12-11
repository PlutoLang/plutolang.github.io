## `base64`

Must be included via `require`.

### `base64.encode`
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
---
### `base64.decode`
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
---
### `base64.urlencode`
Returns a base64url-encoded string. This variant is sometimes refered to as filename safe base64.

:::info
The old name of this function — `base64.url_encode` — was deprecated in Pluto 0.8.0.
:::

---
### `base64.urldecode`
Similar to `base64.decode` except for base64url.

:::info
The old name of this function — `base64.url_encode` — was deprecated in Pluto 0.8.0.
:::