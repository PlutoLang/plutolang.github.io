Must be included via `require`.
### `url.encode`
Returns a URL-encoded string.
#### Parameters:
1. The string to be encoded.
```pluto
local url = require"pluto:url"
print("https://google.com/search?q="..url.encode("Pluto, a superset of Lua"))
--> https://google.com/search?q=Pluto%2C%20a%20superset%20of%20Lua
```
---
### `url.decode`
Returns a plain string from URL-decoding the input string.
#### Parameters:
1. The string to be decoded.
```pluto
local url = require"pluto:url"
print(url.decode("Pluto%2C%20a%20superset%20of%20Lua")) -- "Pluto, a superset of Lua"
```