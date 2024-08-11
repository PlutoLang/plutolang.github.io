---
sidebar_position: 3
---
Must be included via `require`.

---
## Non-Cryptographic Hashing Algorithms
### `crypto.lua`
Hash a string using Lua's version of the DJB2 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto
local crypto = require("crypto")
local str = "hello"
assert(crypto.lua(str) == 2871868277)
```
---
### `crypto.md5`
Hash a string using the MD5 semi-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto
local crypto = require("crypto")
local str = "hello"
assert(crypto.md5(str) == "5eb63bbbe01eeed093cb22bb8f5acdc3")
```
---
### `crypto.djb2`
Hash a string using the DJB2 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Returns
An integer between 0 and 0xffffffff, inclusive.
```pluto
local crypto = require("crypto")
local str = "hello"
assert(crypto.djb2(str) == 894552257)
```
---
### `crypto.fnv1`
Hash a string using the FNV1 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto
local crypto = require("crypto")
local str = "hello"
assert(crypto.fnv1(str) == 9065573210506989167)
```
---
### `crypto.fnv1a`
Hash a string using the FNV1A non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto
local crypto = require("crypto")
local str = "hello"
assert(crypto.fnv1a(str) == 8618312879776256743)
```
---
### `crypto.joaat`
Hash a string using the JOAAT non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Returns
An integer between 0 and 0xffffffff, inclusive.
```pluto
local crypto = require("crypto")
local str = "hello"
assert(crypto.joaat(str) == 1045060183)
```
---
### `crypto.sdbm`
Hash a string using the SDBM non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Returns
An integer between 0 and 0xffffffff, inclusive.
```pluto
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
#### Returns
An integer between 0 and 0xffffffff, inclusive.
```pluto
local crypto = require("crypto")
local str = "hello"
assert(crypto.crc32(str) == 222957957)
```
---
### `crypto.adler32`
Hash a string using the Adler-32 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
2. The initial value for the hash. By default, this is zero.
```pluto
local crypto = require("crypto")
local str = "hello"
assert(crypto.adler32(str) == 103547413)
```
---
### `crypto.lookup3`
Hash a string using the Lookup3 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto
local crypto = require("crypto")
local str = "hello"
assert(crypto.lookup3(str) == 1252609637)
```
---
### `crypto.times33`
Hash a string using the Times33 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Returns
An integer between 0 and 0xffffffff, inclusive.
```pluto
local crypto = require("crypto")
local str = "hello"
assert(crypto.times33(str) == 3889643616)
```
### `crypto.murmur1`
Hash a string using the Murmur1 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Returns
An integer between 0 and 0xffffffff, inclusive.
```pluto
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur1(str) == 3154674178)
```
---
### `crypto.murmur2`
Hash a string using the Murmur2 non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Returns
An integer between 0 and 0xffffffff, inclusive.
```pluto
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur2(str) == 1151865881)
```
### `crypto.murmur2a`
Hash a string using the Murmur2A non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
#### Returns
An integer between 0 and 0xffffffff, inclusive.
```pluto
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur2a(str) == 2650573207)
```
### `crypto.murmur64a`
Hash a string using the Murmur64A non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur64a(str) == -3190198453633110066)
```
### `crypto.murmur64b`
Hash a string using the Murmur64A non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur64b(str) == 7088720765356542432)
```
---
### `crypto.murmur2neutral`
Hash a string using the Murmur2Neutral non-cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto
local crypto = require("crypto")
local str = "hello"
assert(crypto.murmur2neutral(str) == 1151865881)
```
---
## Cryptographic Hashing Algorithms
### `crypto.sha1`
Hash a string using the SHA-1 cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
2. When set to true, returns raw binary data. false outputs lowercase hex digits. By default, this is false.
```pluto
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
```pluto
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
```pluto
local crypto = require("crypto")
assert(crypto.sha384("Pluto", false) == "db890233a919b6745d632633c419e14540ff79f1a89bc4ac194b00e7f913f0f06d5d4d7d6cc2b4aaf9485d223afb8cf0")
```
---
### `crypto.sha512`
Hash a string using the SHA-512 cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
2. When set to true, returns raw binary data. false outputs lowercase hex digits. By default, this is false.
```pluto
local crypto = require("crypto")
assert(crypto.sha512("Pluto", false) == "ee8410a8bf9511b94fd6669b5c3e0c4b86e8e4bf7baa8dbd2773d4d6381dd1aecebbe391bef4c6158620ab3f6b794907652d4432c2301d7e1a6caf520565cdf2")
```
---
## Cryptographic PRNGs
### `crypto.random`
The `crypto.random` function uses your operating system's default PRNG. 
- On Linux-based systems, this is `/dev/urandom`.
- On Windows, this is `BCryptGenRandom`.

This is a cryptographically-secure PRNG when your system can provide those services. However, if it does not, then this is not cryptographically secure. Either way, it provides good randomness.
#### Parameters
1. The minimum value to return.
2. The maximum value to return, as a range.
```pluto
local crypto = require("crypto")
assert(crypto.random(1, 10) < 11)
```

---
## AES-CBC, AES-CFB
These unauthenticated AES modes take both a key and an IV. The IV must be unique and unpredictable for each encryption session to ensure security.
### `crypto.encrypt`
#### Parameters
1. `data` — The data to be encrypted.
2. `mode` — "aes-cbc-pkcs7" or "aes-cfb-pkcs7" for PKCS#7 padding, or "aes-cbc" or "aes-cfb" if you know what you're doing.
3. `key` — Must have a length of 16, 24 or 32 for 128-, 192-, or 256-bit AES, respectively.
4. `iv` — Must have a length of 16.
### `crypto.decrypt`
#### Parameters
1. `data` — The ciphertext to decrypt.
2. `mode` — "aes-cbc-pkcs7" or "aes-cfb-pkcs7" for PKCS#7 padding, or "aes-cbc" or "aes-cfb" if you know what you're doing.
3. `key` — Must have a length of 16, 24 or 32 for 128-, 192-, or 256-bit AES, respectively.
4. `iv` — Must have a length of 16.

Returns the decrypted data on success. Throws an error if the padding was incorrect.

```pluto
local crypto = require "pluto:crypto"
local key <const> = "A Top Secret Key"
-- Encrypt
local iv = range(16):map(|| -> string.char(math.random(0, 255))):concat("")
local plain = "Hello, world!"
local enc = plain |> crypto.encrypt|"aes-cbc-pkcs7", key, iv|
print(dumpvar(enc))
-- Decrypt
print(crypto.decrypt(enc, "aes-cbc-pkcs7", key, iv)) --> Hello, world!
```

---
## AES-ECB
This unauthenticated AES mode takes only a key, and is considered to be the weakest. Identical plaintext blocks result in identical ciphertext blocks.
### `crypto.encrypt`
#### Parameters
1. `data` — The data to be encrypted.
2. `mode` — "aes-ecb-pkcs7" for PKCS#7 padding, or "aes-ecb" if you know what you're doing.
3. `key` — Must have a length of 16, 24 or 32 for 128-, 192-, or 256-bit AES, respectively.
### `crypto.decrypt`
#### Parameters
1. `mode` — "aes-ecb-pkcs7" for PKCS#7 padding, or "aes-ecb" if you know what you're doing.
2. `data` — The ciphertext to decrypt.
3. `key` — Must have a length of 16, 24 or 32 for 128-, 192-, or 256-bit AES, respectively.

Returns the decrypted data on success. Throws an error if the padding was incorrect.

```pluto
local crypto = require "pluto:crypto"
local key <const> = "A Top Secret Key"
-- Encrypt
local plain = "Hello, world!"
local enc = plain |> crypto.encrypt|"aes-ecb-pkcs7", key|
print(dumpvar(enc)) --> string(16) "`p{����k\21*.>jG"
-- Decrypt
print(crypto.decrypt(enc, "aes-ecb-pkcs7", key)) --> Hello, world!
```

---
## AES-GCM
This authenticated AES mode allows for additional data that will be validated although not encrypted, such as a Message Authentication Code (MAC).
### `crypto.encrypt`
#### Parameters
1. `data` — The data to be encrypted.
2. `mode` — Must be "aes-gcm". AES-GCM can deal with unpadded data, hence does not need PKCS#7 padding.
3. `aadata` — Authenticated data. Will not be encrypted.
4. `key` — Must have a length of 16, 24 or 32 for 128-, 192-, or 256-bit AES, respectively.
5. `iv` — Must have a length of 16.

Returns two strings: the ciphertext and the authentication tag.
### `crypto.decrypt`
#### Parameters
1. `data` — The ciphertext to decrypt.
2. `mode` — Must be "aes-gcm".
3. `aadata` — Authenticated data.
4. `key` — Must have a length of 16, 24 or 32 for 128-, 192-, or 256-bit AES, respectively.
5. `iv` — Must have a length of 16.
6. `tag` — The authentication tag produced by the "encrypt" procedure.

Returns the decrypted data on success. Throws an error if authentication or unpadding failed.

```pluto
local crypto = require "pluto:crypto"
local key <const> = "A Top Secret Key"
local aadata = "This is Pluto!"
-- Encrypt
local iv = range(16):map(|| -> string.char(math.random(0, 255))):concat("")
local plain = "Hello, world!"
local enc, tag = plain |> crypto.encrypt|"aes-gcm", aadata, key, iv|
print(dumpvar(enc))
print(dumpvar(tag))
-- Decrypt
print(crypto.decrypt(enc, "aes-gcm", aadata, key, iv, tag)) --> Hello, world!
```

---
## RSA
### `crypto.generatekeypair`
#### Parameters
1. `mode` — Must be "rsa".
2. `bits` — A positive integer for a strict bit-length requirement, or a negative integer for a lax requirement. Common values are `1024`, `2048`, and `4096`.

Returns two tables: The public key (consisting of `n` and `e`), and the private key (consisting of `p` and `q`). The [Bigint class](Bigint.md) is used for all values.
```pluto
local pub, priv = crypto.generatekeypair("rsa", 512)
print(dumpvar(pub))
--> {
-->     ["n"] = 11355630182234424425429331560518598643298965915936825610957270519615363349759012613228119611304846673085167794661819394470107090216347491908311079792054357,
-->     ["e"] = 65537,
--> }
print(dumpvar(priv))
--> {
-->     ["p"] = 115443384115231951475820445136871322101870729500298182134363293112660251666017,
-->     ["q"] = 98365361248415863235179644468056200977592391948608651522703704315152579004021,
--> }
```

### `crypto.encrypt`
#### Parameters
1. `data` — The data to be encrypted.
2. `mode` — "rsa-pkcs1" for PKCS#1 padding, or "rsa" if you know what you're doing.
3. `key` — The public or private key to use. Commonly, a public key is used to encrypt data.
### `crypto.decrypt`
#### Parameters
1. `data` — The ciphertext to decrypt.
2. `mode` — "rsa-pkcs1" for PKCS#1 padding, or "rsa" if you know what you're doing.
3. `key` — The public or private key to use. If the data was encrypted with the public key, the private key is needed to decrypt it.
```pluto
local { base64, bigint, crypto } = require "pluto:*"
local priv = {
    p = new bigint("115443384115231951475820445136871322101870729500298182134363293112660251666017"),
    q = new bigint("98365361248415863235179644468056200977592391948608651522703704315152579004021"),
}
-- Derive public key
local pub = {
    n = priv.p * priv.q, -- 11355630182234424425429331560518598643298965915936825610957270519615363349759012613228119611304846673085167794661819394470107090216347491908311079792054357
    e = new bigint(0x10001) -- 65537
}
-- Encrypt
local enc = crypto.encrypt("A secret message to the owner of the private key.", "rsa-pkcs1", pub)
print(base64.encode(enc))
-- Decrypt
print(enc |> crypto.decrypt|"rsa-pkcs1", priv|) --> A secret message to the owner of the private key.
```
### `crypto.sign`
#### Parameters
1. `data` — The data to sign.
2. `mode` — "rsa-sha256" or "rsa-sha1".
3. `key` — The private key to use.
### `crypto.verify`
#### Parameters
1. `data` — The data that was signed.
2. `mode` — "rsa-sha256" or "rsa-sha1".
3. `key` — The public key corresponding to the signer's private key.
4. `signature` — The signature produced by the "sign" procedure.

Returns a boolean that indicates if the signature validated successfully.

```pluto
local { base64, bigint, crypto } = require "pluto:*"
local priv = {
    p = new bigint("115443384115231951475820445136871322101870729500298182134363293112660251666017"),
    q = new bigint("98365361248415863235179644468056200977592391948608651522703704315152579004021"),
}
-- Derive public key
local pub = {
    n = priv.p * priv.q, -- 11355630182234424425429331560518598643298965915936825610957270519615363349759012613228119611304846673085167794661819394470107090216347491908311079792054357
    e = new bigint(0x10001) -- 65537
}
-- Sign
local msg = "The canary has left the nest."
local sig = msg |> crypto.sign|"rsa-sha256", priv|
print(base64.encode(sig)) --> un1g04+cwG8WxYDpSlj4PO/hsTqSITgYKycRuR+m3AE6ypLyUCrVHC/0j4M3DeW81ADZVda6TVkC/Ht8EdYeFw==
-- Verify
print(crypto.verify(msg, "rsa-sha256", pub, sig)) --> true
```
