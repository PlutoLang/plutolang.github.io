Compile-time evaluation is delimited by the "$" symbol before a function call. Their arguments must be compile-time constants. This is only available on preloaded Pluto libraries, such as:
- `json`
- `base32`
- `base58`
- `base64`
- `crypto`

And on the following functions:
- `tostring`
- `utostring`
- `tonumber`
- `utonumber`
```pluto showLineNumbers
local crypto = require("crypto")

local runtime = crypto.joaat("Hello, World!")
local compile = $crypto.joaat("Hello, World!")

assert(runtime == compile)
```
If you're unfamiliar with compile-time evaluation, this is essentially what the code turns into:
```pluto showLineNumbers
local crypto = require("crypto")

local runtime = crypto.joaat("Hello, World!")
local compile = 847757641 -- The JOAAT hash of "Hello, World!"

assert(runtime == compile)
```