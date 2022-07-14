New functions for the `string` type, implemented by Pluto.
### string.split
Splits a string by a separator.
#### Parameters
1. The string to split.
2. The separator to split a string by. This can be any string.
#### Returns
A table.
#### Example
```lua title="Splitting a string by a single character."
local s = "hello world, how is everyone doing?"
local r = string.split(s, " ")
--[[
    The value of 'r':
    {
        "hello",
        "world",
        "how",
        "is",
        "everyone",
        "doing?"
    }
--]]
```
```lua title="Splitting a string by a substring."
local s = "helloHALLOWORLDworld,HALLOWORLDhowHALLOWORLDisHALLOWORLDeveryoneHALLOWORLDdoing?"
local r = string.split(s, "HALLOWORLD")
--[[
    The value of 'r':
    {
        "hello",
        "world",
        "how",
        "is",
        "everyone",
        "doing?"
    }
--]]
```
### string.lfind
Returns the index of where a substring starts. Begins searching at the left side of the string.
#### Parameters
1. The string to search.
2. The substring to search for.
#### Returns
An integer for the index of the substring, or `nil` if the substring was not found.
#### Example
```lua title="Basic Usage"
local s = "hello world"
local r = string.lfind(s, "world") --> 7
```
### string.rfind
Returns the index of where a substring starts. Begins searching at the right side of the string.
#### Parameters
1. The string to search.
2. The substring to search for.
#### Returns
An integer for the index of the substring, or `nil` if the substring was not found.
#### Example
```lua title="Basic Usage"
local s = "hello world"
local r = string.rfind(s, "world") --> 7
```
### string.strip
Strips characters from both ends of a string.
#### Parameters
1. The string to strip.
2. A string of characters to strip.
#### Returns
The new string.
#### Example
```lua title="Basic Usage"
local s = "{}|hello world>{|}"
local r = string.strip(s, "{}|") --> "hello world"
```
### string.lstrip
Strips characters from the left side of a string.
#### Parameters
1. The string to strip.
2. A string of characters to strip.
#### Returns
The new string.
#### Example
```lua title="Basic Usage"
local s = "<{}|hello world>{|}"
local r = string.strip(s, "{}|") --> "<hello world>{|}"
```
### string.rstrip
Strips characters from the right side of a string.
#### Parameters
1. The string to strip.
2. A string of characters to strip.
#### Returns
The new string.
#### Example
```lua title="Basic Usage"
local s = "<{}|hello world>{|}"
local r = string.strip(s, "{}|") --> "<{}|<hello world>"
```
### string.isascii
Checks if a string is entirely composed of ASCII characters.
#### Parameters
1. The string to check.
#### Returns
A Boolean.
#### Example
```lua title="Basic Usage"
local s = "HELLOWORLD123"
local r = string.isascii(r) --> true
```
:::info
This would exclude any multi-byte characters, like emojis.
:::
### string.islower
Checks if a string is entirely composed of lowercase characters.
#### Parameters
1. The string to check.
#### Returns
A Boolean.
#### Example
```lua title="Basic Usage"
local s = "helloworld"
local r = string.islower(r) --> true
```
:::info
Whitespace characters are not lowercase characters.
:::
### string.isalpha
Checks if a string is entirely composed of alphabetic characters.
#### Parameters
1. The string to check.
#### Returns
A Boolean.
#### Example
```lua title="Basic Usage"
local s = "HELLOWORLD"
local r = string.isalpha(r) --> true
```
:::info
Whitespace characters are not alphabetic characters.
:::
### string.isupper
Checks if a string is entirely composed of uppercase characters.
#### Parameters
1. The string to check.
#### Returns
A Boolean.
#### Example
```lua title="Basic Usage"
local s = "HELLOWORLD"
local r = string.isupper(r) --> true
```
:::info
Whitespace characters are not uppercase characters.
:::
### string.isalnum
Checks if a string is entirely composed of alphanumeric characters.
#### Parameters
1. The string to check.
#### Returns
A Boolean.
#### Example
```lua title="Basic Usage"
local s = "HELLOWORLD123"
local r = string.isalnum(r) --> true
```
:::info
Whitespace characters are not alphanumeric characters.
:::
### string.contains
Checks if a string contains a substring.
#### Parameters
1. The string to check.
2. The substring to check for.
#### Returns
A boolean.
#### Example
```lua title="Basic Usage"
local s = "hello world"
local r = string.contains(s, "worl") --> true
```
### string.casefold
Compares two strings, agnostic of any capitalization.
#### Parameters
1. The first string to compare.
2. The second string to compare.
#### Returns
A boolean.
#### Example
```lua title="Basic Usage"
local s1 = "hello world"
local s2 = "heLLo WoRlD"
local r1 = string.casefold(s1, s2) --> true
```
### string.partition
Splits a string once, on the first occurance of a separator.
#### Parameters
1. The string to partition.
2. The separator to partition the string by.
3. A boolean specifying whether to search from the right. By default, this is false, which starts at the left.
#### Returns
Two strings: A substring for all the content before the first occurance of `sep`, and another substring for all the content afterwards.
#### Example
```lua title="A Basic Partition"
local s = "hello world, what's up?"
local before, after = string.partition(s, " ")

assert(before == "hello")
assert(after == "world, what's up?")
```
```lua title="Partioning From The Right"
local s = "hello world, what's up?"
local before, after = string.partition(s, " ", true)

assert(before == "hello world, what's")
assert(after == "up?")
```
### string.endswith
Checks if a string ends with a suffix.
#### Parameters
1. The string to check.
2. The substring suffix to check for.
#### Returns
A boolean.
#### Example
```lua title="Basic Usage"
local s = "hello world"
local r = string.endswith(s, "world") --> true
```
### string.startswith
Checks if a string starts with a prefix.
#### Parameters
1. The string to check.
2. The substring prefix to check for.
#### Returns
A boolean.
#### Example
```lua title="Basic Usage"
local s = "hello world"
local r = string.startswith(s, "hello") --> true
```
### string.find_last_of
Searches the string for the last character that matches any of the characters specified in its arguments.
#### Parameters
1. The string to search.
2. A string of characters to match.
#### Returns
An integer, or `nil` if nothing is matched.
#### Example
```lua title="Basic Usage"
-- This will find the last occurance of any listed characters.
local s = "he$$o ?$! world$"
local r = string.find_last_of(s, "!$") --> 16
```
### string.find_first_of
Searches the string for the first character that matches any of the characters specified in its arguments.
#### Parameters
1. The string to search.
2. A string of characters to match.
#### Returns
An integer, or `nil` if nothing is matched.
#### Example
```lua title="Basic Usage"
-- This will find the first occurance of any listed characters.
local s = "he$$o ?$! world$"
local r = string.find_first_of(s, "!$") --> 3
```
### string.iswhitespace
Checks if this string is entirely composed of whitespace characters.
#### Paramaters
1. The string to check.
#### Returns
A boolean.
#### Example
```lua title="Basic Usage"
local s = "    \t \v \f     \t\t\t\t"
local r = string.iswhitespace(s) --> true
```
### string.find_last_not_of
Searches the string for the last character that does not match any of the characters specified in its arguments.
#### Parameters
1. The string to search.
2. A string of characters to match.
#### Returns
An integer, or `nil` if nothing is matched.
#### Example
```lua title="Basic Usage"
-- This will find the last non-occurance of any listed characters.
local s = "he$$o ?$! world$"
local r = string.find_last_not_of(s, "!$") --> 15
```
### string.find_first_not_of
Searches the string for the first character that does not match any of the characters specified in its arguments.
#### Parameters
1. The string to search.
2. A string of characters to match.
#### Returns
An integer, or `nil` if nothing is matched.
#### Example
```lua title="Basic Usage"
-- This will find the first non-occurance of any listed characters.
local s = "he$$o ?$! world$"
local r = string.find_first_not_of(s, "!$") --> 1
```