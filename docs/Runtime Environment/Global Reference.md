---
title: Global Reference
sidebar_position: 1
---

Currently, Pluto's standard library is built on top of the base Lua 5.4 standard library.

The search bar at the top right of the page is available. (Or Ctrl+F)

---
Some changes & additions to the environment must be disclosed:
1. `_PVERSION` is the global to check your current version of Pluto.
2. `_PSOUP` is a global boolean you can access to check linkage with Soup. Always true as of 0.8.0.
3. `package.path` is modified to also search for `.pluto` files.
```pluto
if _PVERSION == nil then
    print("Plain Lua detected (".._VERSION..")")
else
    local soup = ""
    if not _PSOUP then
        soup = "not "
    end
    print("Pluto detected (".._PVERSION.."), based on ".._VERSION..", "..soup.."compiled with Soup integration")
end
```

Tables have metatables by default now, akin to how each string has a metatable by default. Now, this is possible:
```pluto showLineNumbers
local t = {}

t:contains(1)
t:concat("\n")

-- As opposed to...
table.contains(t, 1)
table.concat(t, "\n")
```

This behavior is implemented by setting the `__index` metamethod to `_G.table`. If you override the metatable, you may want to replicate that.
 
## Global
### `utostring`
Same as `tostring`, but performs the operation under the `en_US.UTF-8` locale. Ensures the same result on all systems.

---
### `utonumber`
Same as `tonumber`, but performs the operation under the `en_US.UTF-8` locale. Ensures the same result on all systems.

---
### `require`
This function has been modified to prioritize the loading of local files before standard library modules. This was done to ensure a smooth migration when a codebase might have local dependencies named after Pluto libraries. For example:
```pluto showLineNumbers
local json = require("json")
```
If you had a custom JSON module, that would be loaded instead of Pluto's JSON module. If there are no local module conflicts, then this will still load the Pluto libary. If you want to specifically load the Pluto library, then you can do this:
```pluto showLineNumbers
local json = require("pluto:json")
```
The `pluto:` prefix tells `require` that you specifically want to load a Pluto library named `json` and nothing else.

---
### `dumpvar`
A debug function designed to dump values into human-readable formats.
#### Parameters
1. The value to dump.
#### Returns
A string representation of the value.
```pluto showLineNumbers
local t = {
    ["hello"] = 1234,
    ["goodbye"] = _G.table,

    ["name"] = "John",
    ["lastname"] = "Doe",

    ["details"] = {
        "No details available."
    }
}

print(dumpvar(t))
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
### `exportvar`
Similar to dumpvar, but returns valid Lua/Pluto code. May error if the value can not be represented accordingly.
#### Parameters
1. The value to dump.
#### Returns
A string representation of the value.
```pluto showLineNumbers
-- Slightly altered data from last example as C functions can not be exported.
local t = {
    ["hello"] = 1234,

    ["name"] = "John",
    ["lastname"] = "Doe",

    ["details"] = {
        "No details available."
    }
}

print(exportvar(t))
```
```
{
    ["hello"] = 1234,
    ["name"] = "John",
    ["details"] = {
        [1] = "No details available.",
    },
    ["lastname"] = "Doe",
}
```

---
### `compareversions`
Performs a three-way comparison on 2 version numbers, similar to the [Spaceship Operator](../New%20Operators#spaceship-operator).
```pluto
assert(compareversions("1.0.0", "0.9.0")     >= 0)
assert(compareversions("1.0.0", "1.0.0-dev") >= 0)
```
Note that pre-release versions (e.g. with `-dev` suffix) are considered to be _less than_ their final counterparts.

---
### `wcall`
Calls the given function and returns a string of warnings raised by it.
```pluto showLineNumbers
local w = wcall(|| -> warn("Bad!"))
print(w ~= "" ? (w:strip()) : "No warnings")
-- Output: "Bad!"
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
---
### `io.part`
Extracts the given part from a path.
#### Parameters
1. A string path or file stream.
2. The part to return, "parent" or "name".
#### Returns
The extracted part.
```pluto showLineNumbers
print(io.part("/path/to/foo.txt", "parent")) -- "/path/to"
print(io.part("/path/to/foo.txt", "name")) -- "foo.txt"
```
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
2. An optional bool if the path should be canonicalized. A canonical path does not go through symlinks.
#### Returns
A string representing the new file path.
```pluto showLineNumbers title="Example Usage"
io.absolute("cfg/cfg.txt") --> "C:\Users\Username\Desktop\Project\cfg\cfg.txt"
```
---
### `io.filesize`
Fetch the size of a file in bytes.
#### Parameters
1. A string path or file stream.
#### Returns
A number.
```pluto showLineNumbers title="Example Usage"
if io.filesize("cfg/config.txt") <= 1 then
    print("Config is too small or empty.")
end
```
---
### `io.writetime`
Get or set a file's modification time.
#### Parameters
1. A string path or file stream.
2. The desired timestamp. If this parameter is absent, this function works as a *getter.*
#### Returns
If this function is acting as a *getter*, it will return the file's last write time as seconds since the UNIX epoch.
```pluto
local time = io.writetime("foo.txt")
time += 3600
io.writetime("foo.txt", time)
```
This example adds an hour (= 60 minutes = 3600 seconds) to the last write time of "foo.txt" (or errors if that file does not exist).

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
### `table.sort`
This function was slightly modified to return the mutated input table instead of `nil.` Such that:
```pluto showLineNumbers
local t = { 3, 2, 1 }
t = t:sort(...)
```
Will not result in `t` becoming `nil`.
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
The index or key if found, otherwise `nil`.
```pluto title="Basic Usage"
local t = { 1, 2, 3, 4, 5, 6, key = "value" }
assert(table.contains(t, 4) == 4)
assert(table.contains(t, "value") == "key")
assert(table.contains(t, "nothing") == nil)
```
---
### `table.reverse`
Reverses the array elements of a table.
#### Parameters
1. The table to reverse.
#### Returns
This modifies the table you pass, but it'll also return it.
```pluto
local t = { 1, 2, hello = "world", 3, 4, 5, key = "value" }

print(dumpvar(t))
local same = t:reverse()
assert(same == t)
print(dumpvar(t))

--[[
Before:
{
    [1] = 1,
    [2] = 2,
    [3] = 3,
    [4] = 4,
    [5] = 5,
    ["key"] = string(5) "value",
    ["hello"] = string(5) "world",
}

After:
{
    [1] = 5,
    [2] = 4,
    [3] = 3,
    [4] = 2,
    [5] = 1,
    ["key"] = string(5) "value",
    ["hello"] = string(5) "world",
}
--]]
```
---
### `table.reorder`
Reorders the array portion of a table so it becomes a continuous array with no holes.
#### Parameters
1. The table.
#### Returns
This modifies the input, so you don't need the return value. But, it still returns the input value either way.
```pluto
local assert = require("assert")
local t1 = { 1, nil, 2, nil, nil, 3, nil, 4 }

assert.equal(t1:reorder(), { 1, 2, 3, 4 })
```
---
### `table.foreach`
Note that this function is not the same as the Lua function that was deprecated/removed in 5.1.
#### Parameters
1. The table.
2. The callback to be called for every element.
3. An optional bool if the callback function also takes a key (`|k, v|`) as opposed to only a value (`|v|`).
#### Returns
Nothing.
```pluto
local t = { 1, 2, 3 }
t:foreach(print)
--> 1
--> 2
--> 3
```
---
### `table.filter`
Filters away keys (both array and non-array) that fail to meet the condition established by `callback`. Elimination is done by setting the value to `nil`, consider using `table.reorder` if you want a continuous array after filtering.
#### Parameters
1. The table.
2. The callback responsible for deciding which keys to keep or remove. This should return `false` or `nil` if you want the key to be eliminated.
3. An optional bool if the callback function also takes a key (`|k, v|`) as opposed to only a value (`|v|`).
#### Returns
This modifies the input, so you don't need the return value. But, it still returns the input value either way.
```pluto
data = { 1, 2, 3, 4, 5 }
print(data:filter(|v| -> v % 2 ~= 0):reorder():concat(" ")) -- "1 3 5"

data = { 2, 2, 3, 4, 4 }
print(data:filter(|k, v| -> k == v, true):reorder():concat(" ")) -- "2 3 4"
```
### `table.map`
Remaps every key to a new value, provided by the `callback` function.
#### Parameters
1. The table.
2. The callback responsible for producing the updated values.
3. An optional bool if the callback function also takes a key (`|k, v|`) as opposed to only a value (`|v|`).
#### Returns
This modifies the input, so you don't need the return value. But, it still returns the input value either way.
```pluto
data = "41 20 68"
print(data:split(" "):map(tonumber):map(|v| -> v + 1):concat(" ")) -- "42 21 69"

data = "10 15 10"
print(data:split(" "):map(tonumber):map(|k, v| -> k * v, true):concat(" ")) -- "10 30 30"
```
In this example, we first use the `tonumber` function to turn the strings into numbers, then add 1 to them. (Although the first step is not needed in Lua/Pluto since the `+` operator would take care of it, it is used here for demonstration purposes.)

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
### `string.rfind`
Identical to the base Lua `string.find` in every way, except it searches right-to-left instead of left-to-right.

---
### `string.strip`
Strips characters from both ends of a string.
#### Parameters
1. The string to strip.
2. A string of characters to strip. Defaults to ` \n\r\t\v\0`.
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
2. A string of characters to strip. Defaults to ` \n\r\t\v\0`.
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
2. A string of characters to strip. Defaults to ` \n\r\t\v\0`.
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
1. `max_replace` is less than zero.
2. The length of `substitute` is zero.
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
3. A boolean indicating whether or not to replace the last three character of the string with `...` **if** it is truncated. This is `false` by default.
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
### `string.formatint`
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
string.formatint(500)      --> "500"
string.formatint(-5000)    --> "-5,000"
string.formatint(50000)    --> "50,000"
string.formatint(-500000)  --> "-500,000"

string.formatint(500, ".", 2)     --> "5.00"
string.formatint("-5000", ",", 1) --> "-5,0,0,0"
string.formatint(50000, ",", 4)   --> "5,0000"
```
```pluto showLineNumbers title="Error Example"
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
## `math`
### `math.isnan`
Checks if a number is NaN.
#### Parameters
1. The number to check.
#### Returns
A boolean.
```pluto
local x = 0 / 0
print(x ~= x) -- Old way: Prove the variable is NaN because it is not equal to itself. Works, but unintuitive.
print(math.isnan(x))
```
---
### `math.atan2`
An alias of `math.atan`.

---
## `coroutine`
### `coroutine.xresume`
An alternative to coroutine.resume that rethrows any errors thrown by the coroutine.