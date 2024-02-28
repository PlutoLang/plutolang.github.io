---
sidebar_position: 3
---
Must be included via `require`.
### `crypto.lua`
Hash a string using Lua's version of the DJB2 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.lua(str) == 2871868277)
```
---
### `crypto.md5`
Hash a string using the MD5 semi-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.md5(str) == "5eb63bbbe01eeed093cb22bb8f5acdc3")
```
---
### `crypto.djb2`
Hash a string using the DJB2 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.djb2(str) == 894552257)
```
---
### `crypto.fnv1`
Hash a string using the FNV1 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.fnv1(str) == 9065573210506989167)
```
---
### `crypto.fnv1a`
Hash a string using the FNV1A non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.fnv1a(str) == 8618312879776256743)
```
---
### `crypto.joaat`
Hash a string using the JOAAT non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.joaat(str) == 1045060183)
```
---
### `crypto.sdbm`
Hash a string using the SDBM non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.sdbm(str) == 430867652)
```
---
### `crypto.crc32`
Hash a string using the CRC32 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
2. The initial value for the hash. By default, this is zero.
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.crc32(str) == 222957957)
```
---
### `crypto.lookup3`
Hash a string using the Lookup3 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.lookup3(str) == 1252609637)
```
---
### `crypto.times33`
Hash a string using the Times33 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.times33(str) == 3889643616)
```
---
### `crypto.sha1`
Hash a string using the SHA-1 cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
2. When set to true, returns raw binary data. false outputs lowercase hex digits. By default, this is false.
```pluto showLineNumbers
local crypto = require("crypto")
assert(crypto.sha1("Pluto") == "bce8c9aca4120776fad6b517874aa09c46405454")
assert(crypto.sha1("Pluto", true) == "\xbc\xe8\xc9\xac\xa4\x12\x07\x76\xfa\xd6\xb5\x17\x87\x4a\xa0\x9c\x46\x40\x54\x54")
```
---
### `crypto.sha256`
Hash a string using the SHA-256 cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
2. When set to true, returns raw binary data. false outputs lowercase hex digits. By default, this is false.
```pluto showLineNumbers
local crypto = require("crypto")
assert(crypto.sha256("Pluto") == "8dad5f6a7dd2dcd8c35ec2fd7babb499bcad60d27d73fe73eca2ce025dfd3b47")
assert(crypto.sha256("Pluto", true) == "\x8d\xad\x5f\x6a\x7d\xd2\xdc\xd8\xc3\x5e\xc2\xfd\x7b\xab\xb4\x99\xbc\xad\x60\xd2\x7d\x73\xfe\x73\xec\xa2\xce\x02\x5d\xfd\x3b\x47")
```
---
### `crypto.sha384`
Hash a string using the SHA-384 cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
2. When set to true, returns raw binary data. false outputs lowercase hex digits. By default, this is false.
```pluto showLineNumbers
local crypto = require("crypto")
assert(crypto.sha384("Pluto", false) == "db890233a919b6745d632633c419e14540ff79f1a89bc4ac194b00e7f913f0f06d5d4d7d6cc2b4aaf9485d223afb8cf0")
```
---
### `crypto.sha512`
Hash a string using the SHA-512 cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
2. When set to true, returns raw binary data. false outputs lowercase hex digits. By default, this is false.
```pluto showLineNumbers
local crypto = require("crypto")
assert(crypto.sha512("Pluto", false) == "ee8410a8bf9511b94fd6669b5c3e0c4b86e8e4bf7baa8dbd2773d4d6381dd1aecebbe391bef4c6158620ab3f6b794907652d4432c2301d7e1a6caf520565cdf2")
```
---
### `crypto.murmur1`
Hash a string using the Murmur1 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur1(str) == 3154674178)
```
---
### `crypto.murmur2`
Hash a string using the Murmur2 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur2(str) == 1151865881)
```
### `crypto.murmur2a`
Hash a string using the Murmur2A non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur2a(str) == 2650573207)
```
### `crypto.murmur64a`
Hash a string using the Murmur64A non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur64a(str) == -3190198453633110066)
```
### `crypto.murmur64b`
Hash a string using the Murmur64A non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur64b(str) == 7088720765356542432)
```
---
### `crypto.murmur2neutral`
Hash a string using the Murmur2Neutral non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur2neutral(str) == 1151865881)
```
---
### `crypto.random`
The `crypto.random` function uses your operating system's default PRNG. 
- On Linux-based systems, this is `/dev/urandom`.
- On Windows, this is `BCryptGenRandom`.

This is a cryptographically-secure PRNG when your system can provide those services. However, if it does not, then this is not cryptographically secure. Either way, it provides good randomness.
#### Parameters
1. The minimum value to return.
2. The maximum value to return, as a range.
```pluto showLineNumbers
local crypto = require("crypto")
assert(crypto.random(1, 10) < 11)
```