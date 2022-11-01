Functions regarding cryptography, implemented by Pluto.
## Hashing Algorithms
### Lua
Hash a string using Lua's version of the DJB2 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.lua(str) == 2871868277)
```
### MD5
Hash a string using the MD5 semi-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.md5(str) == "5eb63bbbe01eeed093cb22bb8f5acdc3")
```
### DJB2
Hash a string using the DJB2 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.djb2(str) == 894552257)
```
### FNV1
Hash a string using the FNV1 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.fnv1(str) == 9065573210506989167)
```
### JOAAT
Hash a string using the JOAAT non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.joaat(str) == 1045060183)
```
### SDBM
Hash a string using the SDBM non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.sdbm(str) == 430867652)
```
### FNV1A
Hash a string using the FNV1A non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.fnv1a(str) == 8618312879776256743)
```
### CRC32
Hash a string using the CRC32 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
2. The initial value for the hash. By default, this is zero.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.crc32(str) == 222957957)
```
### Lookup3
Hash a string using the Lookup3 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.lookup3(str) == 1252609637)
```
### Times33
Hash a string using the Times33 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.times33(str) == 3889643616)
```
### SHA-256
Hash a string using the SHA-256 cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.sha256(str) == "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9")
```
### Murmur1
Hash a string using the Murmur1 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur1(str) == 3154674178)
```
### Murmur2
Hash a string using the Murmur2 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur2(str) == 1151865881)
```
### Murmur2A
Hash a string using the Murmur2A non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur2a(str) == 2650573207)
```
### Murmur64A
Hash a string using the Murmur64A non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur64a(str) == -3190198453633110066)
```
### Murmur64B
Hash a string using the Murmur64A non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur64b(str) == 7088720765356542432)
```
### Murmur2Neutral
Hash a string using the Murmur2Neutral non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur2neutral(str) == 1151865881)
```
## PRNGs
### random
The `crypto.random` function uses your operating system's default PRNG. 
- On Linux-based systems, this is `/dev/urandom`.
- On Windows, this is `BCryptGenRandom`.

This is a cryptographically-secure PRNG when your system can provide those services. However, if it does not, then this is not cryptographically secure. Either way, it provides good randomness.
#### Parameters
1. The minimum value to return.
2. The maximum value to return, as a range.
#### Example
```lua showLineNumbers
local crypto = require("crypto")
assert(crypto.random(1, 10) < 11)
```

## Misc Functions
### hexdigest
Converts an integer into its hexadecimal representation, as a string.
#### Parameters
1. The string to convert.
#### Example
```lua
local crypto = require("crypto")
local hash = crypto.joaat("hello world")
print("hash: " .. hash)
print("digest: " .. crypto.hexdigest(hash))
--[[
	hash: 1045060183
	digest: "0x3e4a5a57"
--]]
assert(tonumber(crypto.hexdigest(hash)) == hash)
```