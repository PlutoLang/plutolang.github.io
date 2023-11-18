---
title: Function Reference
---

Currently, Pluto's standard library is built on top of the base Lua 5.4 standard library.

The search bar at the top right of the page is available. (Or Ctrl+F)

# Table of Contents
- [Global Functions](#Global)
- [IO Functions](#io)
- [OS Functions](#os)
- [JSON Functions](#json)
- [String Functions](#string)
- [Table Functions](#table)
- [Base64 Functions](#base64)
- [Coroutine Functions](#coroutine)
- [Base58 Functions](#base58)
- [Base32 Functions](#base32)
- [Cryptographic Functions](#crypto)

## Global
### `utostring`
Same as `tostring`, but performs the operation under the `en_US.UTF-8` locale. Ensures the same result on all systems.

---
### `utonumber`
Same as `tonumber`, but performs the operation under the `en_US.UTF-8` locale. Ensures the same result on all systems.

---
### `dumpvar`
A debug function designed to dump values into human-readable formats.
#### Parameters
1. The value to dump.
#### Returns
A string representation of the value.
```pluto showLineNumbers
local table = {
    ["hello"] = 1234,
    ["goodbye"] = _G.table,

    ["name"] = "John",
    ["lastname"] = "Doe",

    ["details"] = {
        "No details available."
    }
}

print(dumpvar(table))
```
```
{
        ["lastname"] = string(3) "Doe",
        ["name"] = string(4) "John",
        ["goodbye"] = {
                ["unpack"] = function: 00007FF7738B3C20,
                ["insert"] = function: 00007FF7738B30D0,
                ["freeze"] = function: 00007FF7738B43F0,
                ["foreach"] = function: 00007FF7738B3220,
                ["filter"] = function: 00007FF7738B4700,
                ["isfrozen"] = function: 00007FF7738B44B0,
                ["getn"] = function: 00007FF7738B43B0,
                ["pack"] = function: 00007FF7738B3B10,
                ["contains"] = function: 00007FF7738B4540,
                ["move"] = function: 00007FF7738B34D0,
                ["concat"] = function: 00007FF7738B37F0,
                ["sort"] = function: 00007FF7738B42B0,
                ["remove"] = function: 00007FF7738B33C0,
                ["map"] = function: 00007FF7738B49A0,
        },
        ["hello"] = 1234,
        ["details"] = {
                [1] = string(21) "No details available.",
        },
}
```

---
## `io`
### `io.copy`
Copy a file to another file, creating a new file if needed.
#### Parameters
1. A string path or file stream.
2. A path towards the file to copy into.
#### Returns
A boolean indicating if the file was successfully copied.
```pluto showLineNumbers title="Example Usage"
if io.copy("./cfg/config.txt", "./backup_cfg/config.txt") then
    print("Successfully created a backup config!")
else
    print("Failed to create a backup config.")
end
```
:::info
The old name of this function —`io.copyto` — is still valid.
:::
---
### `io.isdir`
#### Parameters
1. A string path or file stream.
#### Returns
A boolean indicating if the path led toward a directory.
```pluto showLineNumbers title="Example Usage"
local path = "./dir/main/"
local bool = io.isdir(path)
if bool then
    print("Directory!")
else
    print("Not a directory!")
end
```
---
### `io.isfile`
#### Parameters
1. A string path or file stream.
#### Returns
A boolean indicating if the path led towards a file.
```pluto showLineNumbers title="Example Usage"
local path = "./isfile/file"
local bool = io.isdir(path)
if bool then
    print("File!")
else
    print("Not a file!")
end
```
---
### `io.exists`
#### Parameters
1. A string path or file stream.
#### Returns
A boolean indicating if the path led towards an existing file or directory.
```pluto showLineNumbers title="Example Usage"
if io.exists("cfg/config.txt") then
    print("Config exists!")
else
    print("Config does not exist!")
end
```
---
### `io.makedir`
Create a directory.
#### Parameters
1. The path for the new directory.
#### Returns
A boolean indicating if the directory was successfully created.
```pluto showLineNumbers title="Example Usage"
if io.makedir("./cfg") then
    print("Created cfg directory.")
else
    print("Failed to create cfg directory.")
end
```
---
### `io.listdir`
List all the files within a directory.
#### Parameters
1. A string path to the directory.
2. A boolean indicating whether or not to recurse sub-directories.
#### Returns
A table mapping indices to file paths.
```pluto showLineNumbers title="Example Usage"
for _, filepath in io.listdir(".") do
    print(filepath)
end
```
---
### `io.makedirs`
Creates a directory and all the non-existing parent directories in the given path.
#### Parameters
1. The string path for your new directory.
```pluto showLineNumbers title="Example Usage"
io.makedirs("A/B/C") --> Creates "C:\Users\Username\Desktop\Project\A\B\C"
```
---
### `io.absolute`
Convert a relative path into an absolute one.
#### Parameters
1. A string path or file stream.
#### Returns
A string representing the new file path.
```pluto showLineNumbers title="Example Usage"
--> cfg/config.txt
io.absolute("cfg/cfg.txt") --> "C:\Users\Username\Desktop\Project\cfg\cfg.txt"
```
---
### `io.filesize`
Fetch the size of a file in kilobytes.
#### Parameters
1. A string path or file stream.
#### Returns
A number.
```pluto showLineNumbers title="Example Usage"
if io.filesize("cfg/config.txt") < 1.0 then
    print("Config is too small or empty.")
end
```
---
### `io.currentdir`
Get or set the current working directory.
#### Parameters
1. A path to the desired current working directory. If this parameter is absent, this function works as a *getter.*
#### Returns
If this function is acting as a *getter*, it will return the current working directory.
```pluto showLineNumbers title="Example Usage"
local cwd = io.currentdir() -- Get cwd
io.currentdir("abc/abc") -- Set a new cwd
```
---
## `os`
### `os.sleep`
#### Parameters:
1. The amount of milliseconds to sleep for.
#### Example
```pluto showLineNumbers title="Basic Usage"
os.sleep(1000) --> Pause this thread for 1000ms.
```
---
### `os.nanos`, `os.millis`, `os.seconds`
All of these return their respective times since implementation-specific epoch.
### `os.unixseconds`
Returns seconds since UNIX epoch.

---
## `table`
### `table.freeze`
Freezes a table to prevent modification.
#### Parameters
1. The table to freeze
#### Returns
The original table, but frozen.
```pluto title="Basic Usage"
local t = table.freeze({...})
-- `table.freeze(t)` on another line will work fine too.
t.key = "value" -- Fails.
```
### `table.isfrozen`
Checks if this table is frozen.
#### Parameters
1. The table to check.
#### Returns
A boolean.
```pluto title="Basic Usage"
local t = {}
table.freeze(t)
assert(table.isfrozen(t) == true)
```
### `table.contains`
Checks if this table contains an element.
#### Parameters
1. The table to check.
2. The element to check for.
#### Returns
The index if found, otherwise `nil`.
```pluto title="Basic Usage"
local t = { 1, 2, 3, 4, 5, 6 }
local r = table.contains(t, 4) --> 4
```
---
## `string`
### `string.upper`
This function now takes a second parameter that specifies which index to capitalize.
```pluto showLineNumbers title="Basic Usage"
local s = "hello"
assert(s:upper(1) == "Hello")
```
---
### `string.lower`
This function now takes a second parameter that specifies which index to make lowercase.
```pluto showLineNumbers title="Basic Usage"
local s = "HELLO"
assert(s:lower(1) == "hELLO")
```
---
### `string.split`
Splits a string by a separator.
#### Parameters
1. The string to split.
2. The separator to split a string by. This can be any string.
#### Returns
A table.
```pluto title="Splitting a string by a single character."
local s = "hello world, how is everyone doing?"
local r = string.split(s, " ")
--[[
    The value of 'r':
    {
        "hello",
        "world,",
        "how",
        "is",
        "everyone",
        "doing?"
    }
--]]
```
```pluto title="Splitting a string by a substring."
local s = "helloHALLOWORLDworld,HALLOWORLDhowHALLOWORLDisHALLOWORLDeveryoneHALLOWORLDdoing?"
local r = string.split(s, "HALLOWORLD")
--[[
    The value of 'r':
    {
        "hello",
        "world,",
        "how",
        "is",
        "everyone",
        "doing?"
    }
--]]
```
---
### `string.lfind`
Returns the index of where a substring starts. Begins searching at the left side of the string.
#### Parameters
1. The string to search.
2. The substring to search for.
#### Returns
An integer for the index of the substring, or `nil` if the substring was not found.
```pluto title="Basic Usage"
local s = "hello world"
local r = string.lfind(s, "world") --> 7
```
---
### `string.rfind`
Returns the index of where a substring starts. Begins searching at the right side of the string.
#### Parameters
1. The string to search.
2. The substring to search for.
#### Returns
An integer for the index of the substring, or `nil` if the substring was not found.
```pluto title="Basic Usage"
local s = "hello world"
local r = string.rfind(s, "world") --> 7
```
---
### `string.strip`
Strips characters from both ends of a string.
#### Parameters
1. The string to strip.
2. A string of characters to strip.
#### Returns
The new string.
```pluto title="Basic Usage"
local s = "{}|hello world{|}"
local r = string.strip(s, "{}|") --> "hello world"
```
---
### `string.lstrip`
Strips characters from the left side of a string.
#### Parameters
1. The string to strip.
2. A string of characters to strip.
#### Returns
The new string.
```pluto title="Basic Usage"
local s = "<{}|hello world>{|}"
local r = string.strip(s, "{}|") --> "<hello world>{|}"
```
---
### `string.rstrip`
Strips characters from the right side of a string.
#### Parameters
1. The string to strip.
2. A string of characters to strip.
#### Returns
The new string.
```pluto title="Basic Usage"
local s = "<{}|hello world>{|}"
local r = string.strip(s, "{}|") --> "<{}|<hello world>"
```
---
### `string.isascii`
Checks if a string is entirely composed of ASCII characters.
#### Parameters
1. The string to check.
#### Returns
A boolean.
```pluto title="Basic Usage"
local s = "HELLOWORLD123"
local r = string.isascii(s) --> true
```
:::info
This would exclude any multi-byte characters, like emojis.
:::
---
### `string.islower`
Checks if a string is entirely composed of lowercase characters.
#### Parameters
1. The string to check.
#### Returns
A boolean.
```pluto title="Basic Usage"
local s = "helloworld"
local r = string.islower(s) --> true
```
:::info
Whitespace characters are not lowercase characters.
:::
---
### `string.isalpha`
Checks if a string is entirely composed of alphabetic characters.
#### Parameters
1. The string to check.
#### Returns
A boolean.
```pluto title="Basic Usage"
local s = "HELLOWORLD"
local r = string.isalpha(s) --> true
```
:::info
Whitespace characters are not alphabetic characters.
:::
---
### `string.isupper`
Checks if a string is entirely composed of uppercase characters.
#### Parameters
1. The string to check.
#### Returns
A boolean.
```pluto title="Basic Usage"
local s = "HELLOWORLD"
local r = string.isupper(s) --> true
```
:::info
Whitespace characters are not uppercase characters.
:::
---
### `string.isalnum`
Checks if a string is entirely composed of alphanumeric characters.
#### Parameters
1. The string to check.
#### Returns
A boolean.
```pluto title="Basic Usage"
local s = "HELLOWORLD123"
local r = string.isalnum(s) --> true
```
:::info
Whitespace characters are not alphanumeric characters.
:::
---
### `string.iswhitespace`
Checks if this string is entirely composed of whitespace characters.
#### Paramaters
1. The string to check.
#### Returns
A boolean.
```pluto title="Basic Usage"
local s = "    \t \v \f     \t\t\t\t"
local r = string.iswhitespace(s) --> true
```
---
### `string.uformat`
Same as `string.format`, but performs the operation under the `en_US.UTF-8` locale. Ensures the same result on all systems.

---
### `string.replace`
Replace substrings with another substring. Similar to `string.gsub`, but it operates on plain-text and is not burdened by a pattern capture limit.
#### Parameters
1. `original` — The substring to replace.
2. `substitute` — The replacement substring.
3. `max_replace` — The maximum number of replacements you wish to occur. The default value is effectively `0`, which means "infinite". If you pass `1`, this leads to a maximum of one replacement, and so on.
#### Returns
A string.
#### Errors
An error is thrown under the following conditions:
1. The length of `original` is zero.
2. The length of `substitute` is zero.
3. `max_replace` is less than zero.
```pluto showLineNumbers
string.replace("Hello, world!", "!", ".")         --> "Hello, world."
string.replace("Hello, world!", "apple", "")      --> "Hello, world!"
string.replace("Hello, world!", "Hello", "Apple") --> "Apple, world!"
string.replace("Hello, world!", "Hello, ", "")    --> "world!"
```
---
### `string.truncate`
Truncates a given string to a specified length. If an elipsis is desired and the string was actually truncated, the last three characters of the resultant string will be replaced with an elipsis.
#### Parameters
1. The string to truncate.
2. The desired length of the truncated string.
3. A boolean indicating whether or not to append `...` to the string **if** it is truncated. This is `false` by default.
#### Returns
The truncated string.
```pluto showLineNumbers
string.truncate("Hello, world!", 50)      --> "Hello, world!"
string.truncate("Hello, world!", 5)       --> "Hello"
string.truncate("Hello, world!", 5, true) --> "He..."
```
---
### `string.contains`
Checks if a string contains a substring.
#### Parameters
1. The string to check.
2. The substring to check for.
#### Returns
A boolean.
```pluto title="Basic Usage"
local s = "hello world"
local r = string.contains(s, "worl") --> true
```
---
### `string.casefold`
Compares two strings, agnostic of any capitalization.
#### Parameters
1. The first string to compare.
2. The second string to compare.
#### Returns
A boolean.
```pluto title="Basic Usage"
local s1 = "hello world"
local s2 = "heLLo WoRlD"
local r1 = string.casefold(s1, s2) --> true
```
---
### `string.format_int`
This function makes an integer easier to read by inserting `separator` every `N` characters. It can handle strings representing integers, making it suitable for BigInt modules or any integer beyond Lua's representation limits. If you provide a string, it should consist solely of digits. A single unary operator is permitted at the beginning of the string to indicate whether it's a negative or positive number.
#### Parameters
1. `integer` — The integer or string input.
2. `sep` — The `separator` to use. This must be a single-character string.
3. `group` — The grouping of each digit pair. This is `N`.
#### Returns
Returns the modified string.
#### Errors
If the input is a **string** and does not meet the aforementioned criteria, an error will be thrown.
```pluto showLineNumbers title="Usage Example"
string.format_int(500)      --> "500"
string.format_int(-5000)    --> "-5,000"
string.format_int(50000)    --> "50,000"
string.format_int(-500000)  --> "-500,000"

string.format_int(500, ".", 2)     --> "5.00"
string.format_int("-5000", ",", 1) --> "-5,0,0,0"
string.format_int(50000, ",", 4)   --> "5,0000"
```
```pluto showLineNumbers title="Error Example"
string.format_int("-500000.4")
```
```
pluto: test.pluto:3: argument 'integer' for string.format_int was a string, but does not represent a valid integer (bad character: '.')
stack traceback:
        [C]: in function 'string.format_int'
        test.pluto:3: in main chunk
        [C]: in ?
```
---
### `string.partition`
Splits a string once, on the first occurance of a separator.
#### Parameters
1. The string to partition.
2. The separator to partition the string by.
3. A boolean specifying whether to search from the right. By default, this is false, which starts at the left.
#### Returns
Two strings: A substring for all the content before the first occurance of `sep`, and another substring for all the content afterwards.
```pluto title="A Basic Partition"
local s = "hello world, what's up?"
local before, after = string.partition(s, " ")

assert(before == "hello")
assert(after == "world, what's up?")
```
```pluto title="Partioning From The Right"
local s = "hello world, what's up?"
local before, after = string.partition(s, " ", true)

assert(before == "hello world, what's")
assert(after == "up?")
```
---
### `string.endswith`
Checks if a string ends with a suffix.
#### Parameters
1. The string to check.
2. The substring suffix to check for.
#### Returns
A boolean.
```pluto title="Basic Usage"
local s = "hello world"
local r = string.endswith(s, "world") --> true
```
---
### `string.startswith`
Checks if a string starts with a prefix.
#### Parameters
1. The string to check.
2. The substring prefix to check for.
#### Returns
A boolean.
```pluto title="Basic Usage"
local s = "hello world"
local r = string.startswith(s, "hello") --> true
```
---
### `string.find_last_of`
Searches the string for the last character that matches any of the characters specified in its arguments.
#### Parameters
1. The string to search.
2. A string of characters to match.
#### Returns
An integer, or `nil` if nothing is matched.
```pluto title="Basic Usage"
-- This will find the last occurance of any listed characters.
local s = "he$$o ?$! world$"
local r = string.find_last_of(s, "!$") --> 16
```
---
### `string.find_first_of`
Searches the string for the first character that matches any of the characters specified in its arguments.
#### Parameters
1. The string to search.
2. A string of characters to match.
#### Returns
An integer, or `nil` if nothing is matched.
```pluto title="Basic Usage"
-- This will find the first occurance of any listed characters.
local s = "he$$o ?$! world$"
local r = string.find_first_of(s, "!$") --> 3
```
---
### `string.find_last_not_of`
Searches the string for the last character that does not match any of the characters specified in its arguments.
#### Parameters
1. The string to search.
2. A string of characters to match.
#### Returns
An integer, or `nil` if nothing is matched.
```pluto title="Basic Usage"
-- This will find the last non-occurance of any listed characters.
local s = "he$$o ?$! world$"
local r = string.find_last_not_of(s, "!$") --> 15
```
---
### `string.find_first_not_of`
Searches the string for the first character that does not match any of the characters specified in its arguments.
#### Parameters
1. The string to search.
2. A string of characters to match.
#### Returns
An integer, or `nil` if nothing is matched.
```pluto title="Basic Usage"
-- This will find the first non-occurance of any listed characters.
local s = "he$$o ?$! world$"
local r = string.find_first_not_of(s, "!$") --> 1
```
---
## `json`
Available if you compiled Pluto with Soup. Must be included via `require`.
### `json.encode`
Returns a string of JSON.
#### Parameters:
1. `data` — A boolean, number, string, or table to encode as JSON.
2. `pretty` — Whether to return a human-readable string of JSON.
```pluto
local json = require("json")
local data, encoded

data = "Hello, World!"
encoded = json.encode(data, true)
--[[
	"Hello, World!"
--]]

data = 
{
	key = "Hello, World!"
	nested = {
		nested_key = 1337
	}
}
encoded = json.encode(data, true)
--[[
	{
	    "nested": {
	        "nested_key": 1337
	    },
	    "key": "Hello, World!"
	}
--]]
```
---
### `json.decode`
Returns multiple potential types. If you pass a serialized boolean, number, or string, then it will return the same type. If you pass a complex JSON object, it will return a table.
#### Parameters:
1. `data` — The JSON data to decode.
```pluto
local json = require("json")
local data, encoded, decoded

-- Basic Type

data = "Hello, World!"
encoded = json.encode(data, true)
decoded = json.decode(encoded)

assert(decoded == data)
assert(type(decoded) == "string")

-- Complex Type

data = {
    key = "Hello",
    nested = {
        nested_key = 1337
    }
}
encoded = json.encode(data, true)
decoded = json.decode(encoded)

assert(decoded.key == "Hello")
assert(type(decoded) == "table")
assert(decoded.nested.nested_key == 1337)
```
---
## `base64`

Available if you compiled Pluto with Soup. Must be included via `require`.

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
### `base64.url_encode`
Returns a base64url-encoded string. This variant is sometimes refered to as filename safe base64.

---
### `base64.url_decode`
Similar to `base64.decode` except for base64url.

---

## `base58`

Available if you compiled Pluto with Soup. Must be included via `require`.

### `base58.decode`
Returns a hexadecimal string of decoded base58 data.
#### Parameters:
1. `data` — A string of base58 data.
---
### `base58.is_valid`
Returns a boolean indicating whether or not `data` is valid base58 data.

---

## `base32`

Available if you compiled Pluto with Soup. Must be included via `require`.

### `base32.encode`
Returns an encoded base32 string.
#### Parameters:
1. `data` — A string of data to encode.
2. `pad` — Whether or not to apply padding.
### `base32.decode`
Returns a decoded base32 string.
#### Parameters:
1. `data` — A string of base32 data to decode.

---
## `coroutine`
### `coroutine.xresume`
An alternative to coroutine.resume that rethrows any errors thrown by the coroutine.

---

## `crypto`
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
### `crypto.sha256`
Hash a string using the SHA-256 cryptographic hashing algorithm.
#### Parameters
1. The string to hash.
```pluto showLineNumbers
local crypto = require("crypto")
local str = "hello"
assert(crypto.sha256(str) == "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9")
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
---
### `crypto.hexdigest`
Converts an integer into its hexadecimal representation, as a string.
#### Parameters
1. The string to convert.
```pluto
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