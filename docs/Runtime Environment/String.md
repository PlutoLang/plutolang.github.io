---
sidebar_position: 2
---
This page documents the changes & additions to the `string` library in Pluto, which is built on top of Lua 5.4's.

---
### `string.upper`
This function now takes a second parameter that specifies which index to capitalize.
```pluto
local s = "hello"
assert(s:upper(1) == "Hello")
```
---
### `string.lower`
This function now takes a second parameter that specifies which index to make lowercase.
```pluto
local s = "HELLO"
assert(s:lower(1) == "hELLO")
```
---
### `string.split`
Splits a string by a separator.
#### Parameters
1. The string to split.
2. The separator to split a string by. This can be any string.
3. An optional limit for the returned table size.
#### Returns
A table.
```pluto title="Splitting a string by a single character"
local s = "hello world, how is everyone doing?"
string.split(s, " ") -- { "hello", "world,", "how", "is", "everyone", "doing?" }
```
```pluto title="Splitting a string by a substring"
local s = "helloFOOworld,FOOhowFOOisFOOeveryoneFOOdoing?"
string.split(s, "FOO") -- { "hello", "world,", "how", "is", "everyone", "doing?" }
```
```pluto title="Splitting a string by a single character with a limit"
local s = "hello world, how is everyone doing?"
string.split(s, " ", 3) -- { "hello", "world,", "how is everyone doing?" }
```
---
### `string.rfind`
Identical to the base Lua `string.find` in every way, except it searches right-to-left instead of left-to-right.

---
### `string.strip`
Strips or trims characters from both ends of a string.
#### Parameters
1. The string to strip.
2. A string of characters to strip. Defaults to ` \n\r\t\v\0`.
#### Returns
The new string.
```pluto
local s = "{|}hello world{|}"
print(string.strip(s, "{}|")) --> hello world
```
---
### `string.lstrip`
Strips or trims characters from the left side of a string.
#### Parameters
1. The string to strip.
2. A string of characters to strip. Defaults to ` \n\r\t\v\0`.
#### Returns
The new string.
```pluto
local s = "{|}hello world{|}"
print(string.lstrip(s, "{}|")) --> hello world{|}
```
---
### `string.rstrip`
Strips or trims characters from the right side of a string.
#### Parameters
1. The string to strip.
2. A string of characters to strip. Defaults to ` \n\r\t\v\0`.
#### Returns
The new string.
```pluto
local s = "{|}hello world{|}"
print(string.rstrip(s, "{}|")) --> {|}hello world
```
---
### `string.isascii`
Checks if a string is entirely composed of ASCII characters.
#### Parameters
1. The string to check.
```pluto
local s = "HELLOWORLD123"
print(string.isascii(s)) --> true
```
:::info
This would exclude any multi-byte characters, like emojis.
:::
---
### `string.islower`
Checks if a string is entirely composed of lowercase characters.
#### Parameters
1. The string to check.
```pluto
local s = "helloworld"
print(string.islower(s)) --> true
```
:::info
Whitespace characters are not lowercase characters.
:::
---
### `string.isalpha`
Checks if a string is entirely composed of alphabetic characters.
#### Parameters
1. The string to check.
```pluto
local s = "HELLOWORLD"
print(string.isalpha(s)) --> true
```
:::info
Whitespace characters are not alphabetic characters.
:::
---
### `string.isupper`
Checks if a string is entirely composed of uppercase characters.
#### Parameters
1. The string to check.
```pluto
local s = "HELLOWORLD"
print(string.isupper(s)) --> true
```
:::info
Whitespace characters are not uppercase characters.
:::
---
### `string.isalnum`
Checks if a string is entirely composed of alphanumeric characters.
#### Parameters
1. The string to check.
```pluto
local s = "HELLOWORLD123"
print(string.isalnum(s)) --> true
```
:::info
Whitespace characters are not alphanumeric characters.
:::
---
### `string.iswhitespace`
Checks if this string is entirely composed of whitespace characters.
#### Paramaters
1. The string to check.
```pluto
local s = "    \t \v \f     \t\t\t\t"
print(string.iswhitespace(s)) --> true
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
#### Errors
An error is thrown under the following conditions:
1. `max_replace` is less than zero.
2. The length of `substitute` is zero.
```pluto
print(string.replace("Hello, world!", "!", "."))         --> Hello, world.
print(string.replace("Hello, world!", "apple", ""))      --> Hello, world!
print(string.replace("Hello, world!", "Hello", "Apple")) --> Apple, world!
print(string.replace("Hello, world!", "Hello, ", ""))    --> world!
```
---
### `string.truncate`
Truncates a given string to a specified length. If an elipsis is desired and the string was actually truncated, the last three characters of the resultant string will be replaced with an elipsis.
#### Parameters
1. The string to truncate.
2. The desired length of the truncated string.
3. A boolean indicating whether or not to replace the last three character of the string with `...` **if** it is truncated. This is `false` by default.
#### Returns
The truncated string.
```pluto
print(string.truncate("Hello, world!", 50))      --> Hello, world!
print(string.truncate("Hello, world!", 5))       --> Hello
print(string.truncate("Hello, world!", 5, true)) --> He...
```
---
### `string.contains`
Checks if a string contains a substring.
#### Parameters
1. The string to check.
2. The substring to check for.
```pluto
local s = "hello world"
print(string.contains(s, "worl")) --> true
```
---
### `string.casefold`
Compares two strings, agnostic of any capitalization.
#### Parameters
1. The first string to compare.
2. The second string to compare.
```pluto
local s1 = "hello world"
local s2 = "heLLo WoRlD"
print(string.casefold(s1, s2)) --> true
```
---
### `string.formatint`
This function makes an integer easier to read by inserting `separator` every `N` characters. It can handle strings representing integers, making it suitable for BigInt modules or any integer beyond Lua's representation limits. If you provide a string, it should consist solely of digits. A single unary operator is permitted at the beginning of the string to indicate whether it's a negative or positive number.
#### Parameters
1. `integer` — The integer or string input.
2. `sep` — The `separator` to use. This must be a single-character string.
3. `group` — The grouping of each digit pair. This is `N`.
#### Errors
If the input is a **string** and does not meet the aforementioned criteria, an error will be thrown.
```pluto title="Usage Example"
print(string.formatint(500))      --> 500
print(string.formatint(-5000))    --> -5,000
print(string.formatint(50000))    --> 50,000
print(string.formatint(-500000))  --> -500,000

print(string.formatint(500, ".", 2))     --> 5.00
print(string.formatint("-5000", ",", 1)) --> -5,0,0,0
print(string.formatint(50000, ",", 4))   --> 5,0000
```
```pluto title="Error Example"
string.formatint("-500000.4")
```
```
pluto: test.pluto:3: argument 'integer' for string.formatint was a string, but does not represent a valid integer (bad character: '.')
stack traceback:
        [C]: in function 'string.formatint'
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
```pluto
local s = "hello world"
print(string.endswith(s, "world")) --> true
```
---
### `string.startswith`
Checks if a string starts with a prefix.
#### Parameters
1. The string to check.
2. The substring prefix to check for.
```pluto
local s = "hello world"
print(string.startswith(s, "hello")) --> true
```
---
### `string.tohex`
Converts a (binary) string to a hex representation.
#### Parameters
1. The string to convert.
2. An optional bool to indicate that spaces should be used.
3. An optional bool to indicate that the result should be upper-cased.
#### Returns
A new string.
```pluto
print("XYZ":tohex()) --> 58595a
print("XYZ":tohex(true)) --> 58 59 5a
print("XYZ":tohex(false, true)) --> 58595A
print("XYZ":tohex(true, true)) --> 58 59 5A
```
---
### `string.fromhex`
Converts a hex string to binary.
#### Parameters
1. The string to convert.
#### Returns
A new string.
```pluto
print("58595a":fromhex()) --> XYZ
print("58 59 5A":fromhex()) --> XYZ
```
