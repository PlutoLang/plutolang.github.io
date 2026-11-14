This page documents the `string` library in Pluto, which is built on top of Lua 5.5's.

## Added
### `string.split`
Splits a string by a separator.
#### Parameters
1. The string to split.
2. The separator to split the string by.
3. An optional limit for the returned table size.
#### Returns
A table.
```pluto title="Splitting a string by an empty separator"
print(dumpvar("ABC":split(""))) -- { "A", "B", "C" }
```
```pluto title="Splitting a string by a single character"
local s = "hello world, how is everyone doing?"
print(dumpvar(s:split(" "))) -- { "hello", "world,", "how", "is", "everyone", "doing?" }
```
```pluto title="Splitting a string by a substring"
local s = "helloFOOworld,FOOhowFOOisFOOeveryoneFOOdoing?"
print(dumpvar(s:split("FOO"))) -- { "hello", "world,", "how", "is", "everyone", "doing?" }
```
```pluto title="Splitting a string by a single character with a limit"
local s = "hello world, how is everyone doing?"
print(dumpvar(s:split(" ", 3))) -- { "hello", "world,", "how is everyone doing?" }
```
---
### `string.rfind`
Identical to the base Lua [string.find](#stringfind) in every way, except it searches right-to-left instead of left-to-right.

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
Same as [string.format](#stringformat), but performs the operation under the `en_US.UTF-8` locale. Ensures the same result on all systems.

---
### `string.replace`
Replace substrings with another substring. Similar to `string.gsub`, but it operates on plain-text and is not burdened by a pattern capture limit.
#### Parameters
1. `string` — The string to modify.
2. `original` — The substring to replace.
3. `substitute` — The replacement substring.
4. `max_replace` — The maximum number of replacements you wish to occur. The default value is `0`, which means "infinite". If you pass `1`, this leads to a maximum of one replacement, and so on.
#### Errors
An error is thrown under the following conditions:
1. `max_replace` is less than zero.
2. The length of `original` is zero.
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
---
### `string.span`
Returns a substring from a starting position and length. This differs from [string.sub](#stringsub), which takes a start and end position.
#### Parameters
1. The string.
2. The starting position.
3. The length.
#### Returns
The substring.
```pluto
print("abcd":sub(2, 2)) --> b
print("abcd":span(2, 2)) --> bc
```

## Changed
### `string.format`
Formats a string according to a format string and a list of values, similar to C's `sprintf`. The format string contains conversion specifications (introduced by `%`) that are replaced by the corresponding values.

Supported conversions include:
- `%c` — a character with the given numeric code
- `%d`, `%i` — a signed integer
- `%o`, `%x`, `%X` — an unsigned octal or hexadecimal integer
- `%a`, `%A`, `%e`, `%E`, `%f`, `%g`, `%G` — floating-point numbers
- `%p` — a pointer
- `%q` — a string or number in a form that can be read back by Lua
- `%Q` — quotes the string in a UTF-8 safe manner **(Added by Pluto)**
- `%s` — a string, optionally with a precision (e.g. `%.3s`) and width
- `%%` — a literal `%`

Options such as flags (`-`, `+`, space, `#`, `0`) and width/precision may be used between `%` and the conversion character, as in C.

```pluto
print(string.format("%d + %f = %.02f", 1, 0.2, 1.2)) --> 1 + 0.200000 = 1.20
print(string.format("%q", "\xff")) --> "�"
print(string.format("%Q", "\xff")) --> "\255"
```
---
### `string.upper`
Creates an uppercased copy of a string.
#### Parameters
1. The string to convert.
2. The index of the character to capitalize. **(Added by Pluto)**
#### Returns
The new string.
```pluto
local s = "hello"
print(s:upper()) --> HELLO
print(s:upper(1)) --> Hello
```
---
### `string.lower`
Creates a lowercased copy of a string.
#### Parameters
1. The string to convert.
2. The index of the character to lowercase. **(Added by Pluto)**
#### Returns
The new string.
```pluto
local s = "HELLO"
print(s:lower()) --> hello
print(s:lower(1)) --> hELLO
```

## Unchanged
### `string.byte`
Returns the internal numeric codes of the characters `s[i]` through `s[j]`.
#### Parameters
1. The string (`s`).
2. The starting index (`i`). Defaults to `1`. Negative indices count from the end of the string.
3. The ending index (`j`). Defaults to the starting index.
#### Returns
The numeric codes of the characters in the range, as multiple values. Returns no values if the range is empty.
```pluto
print(string.byte("ABC"))        --> 65
print(string.byte("ABC", 1, -1)) --> 65    66    67
```
---
### `string.char`
Receives zero or more integers and returns a string whose bytes have those numeric codes.
#### Parameters
1. The integer codes, each in the range `[0, 255]`.
#### Returns
The new string.
#### Errors
An error is thrown if any code is outside the range `[0, 255]`.
```pluto
print(string.char(72, 105)) --> Hi
```
---
### `string.dump`
Returns a binary string containing a precompiled version of the function `f`. The string can later be passed to `load` to recreate the function.
#### Parameters
1. The Lua function to dump. C functions cannot be dumped.
2. An optional bool indicating if debug information should be removed from the result.
#### Returns
A binary string.
#### Errors
An error is thrown if the function cannot be dumped, such as when it is a C function.
```pluto
local add = |a, b| -> a + b
local bytes = string.dump(add)
local also_add = load(bytes, "=add", "b")
print(also_add(2, 3)) --> 5
```
:::warning
Be careful when referencing local values from enclosing scopes as those accesses may become invalid when loaded in a different context.
:::
---
### `string.find`
Looks for the first match of a pattern in a string.
#### Parameters
1. The string to search.
2. The [pattern](https://www.lua.org/manual/5.5/manual.html#6.5.1) to search for.
3. An optional starting position. Defaults to `1`. Negative values count from the end of the string.
4. An optional bool to indicate if the pattern should be treated as plain text rather than a Lua pattern.
#### Returns
The start and end indices of the first match, followed by any captures from the pattern. Returns `nil` if there is no match.
```pluto
print(string.find("hello world", "wor"))       --> 7    9
print(string.find("a.b.c", ".", 1, true))      --> 2    2
print(string.find("key=value", "(%w+)=(%w+)")) --> 1    9    key    value
```
---
### `string.gsub`
Returns a copy of a string in which some or all occurrences of a pattern have been replaced.
#### Parameters
1. The string to modify.
2. The [pattern](https://www.lua.org/manual/5.5/manual.html#6.5.1) to search for.
3. The replacement. This may be a string, a table, or a function:
    - If a string, `%0` is replaced by the whole match and `%1`–`%9` by the corresponding captures. `%%` produces a single `%`.
    - If a table, the first capture (or the whole match if there are no captures) is used as the key to look up the replacement.
    - If a function, it is called with the captures (or the whole match) and its return value is used as the replacement.
4. An optional maximum number of substitutions.
#### Returns
The new string, and the total number of matches that were found.
```pluto
print(string.gsub("hello world", "o", "0"))                                --> hell0 w0rld    2
print(string.gsub("hello world", "(%w+)", "<%1>"))                         --> <hello> <world>    2
print(string.gsub("$name is $age", "%$(%w+)", { name = "Ann", age = 30 })) --> Ann is 30    2
print(string.gsub("abc", "%w", |c| -> string.upper(c), 2))                 --> ABc    2
```
---
### `string.len`
Returns the length of a string, in bytes. Embedded zeros are counted.
#### Parameters
1. The string.
#### Returns
The length of the string.
```pluto
print(string.len("abc"))  --> 3
print(string.len("a\0b")) --> 3
```
---
### `string.match`
Looks for the first match of `pattern` in the string `s`.
#### Parameters
1. The string to search.
2. The [pattern](https://www.lua.org/manual/5.5/manual.html#6.5.1) to search for.
3. An optional starting position. Defaults to `1`. Negative values count from the end of the string.
#### Returns
If the pattern has captures, the captured values. Otherwise, the whole match. Returns `nil` if there is no match.
```pluto
print(string.match("hello 123", "%d+"))         --> 123
print(string.match("key=value", "(%w+)=(%w+)")) --> key    value
print(string.match("hello", "%d+"))             --> nil
```
---
### `string.rep`
Returns a string that is the concatenation of several copies of a given string, with an optional separator.
#### Parameters
1. The string to repeat.
2. The number of copies.
3. An optional separator string placed between each copy. Defaults to the empty string.
#### Returns
The new string. Returns an empty string if `n` is less than or equal to zero.
```pluto
print(string.rep("ab", 3))      --> ababab
print(string.rep("ab", 3, ",")) --> ab,ab,ab
```
---
### `string.reverse`
Returns reversed copy of a string.
#### Parameters
1. The string to reverse.
#### Returns
The reversed string.
```pluto
print(string.reverse("abc")) --> cba
```
---
### `string.sub`
Returns the substring of `s` that starts at `i` and continues until `j`.
#### Parameters
1. The string (`s`).
2. The starting index (`i`). Negative indices count from the end of the string.
3. The ending index (`j`). Defaults to `-1`, the end of the string.
#### Returns
The substring.
```pluto
print(string.sub("hello", 2, 4)) --> ell
print(string.sub("hello", -3))   --> llo
```
---
### `string.pack`, `string.unpack`, `string.packsize`
These functions serialize and deserialize values to and from binary strings, according to a format string.

- `string.pack(fmt, ...)` — Returns a binary string containing the values packed according to `fmt`.
- `string.unpack(fmt, s [, pos])` — Returns the values unpacked from `s` starting at position `pos` (default `1`), followed by the next position in the string.
- `string.packsize(fmt)` — Returns the size, in bytes, of a string described by `fmt`. Variable-length formats (`s` and `z`) cannot be used here.

Format options:
- `<`, `>`, `=` — Little endian, big endian, or native endianness.
- `!n` — Sets the maximum alignment to `n` bytes (default is native alignment).
- `b`, `B` — A signed or unsigned `char`.
- `h`, `H` — A signed or unsigned `short`.
- `l`, `L` — A signed or unsigned `long`.
- `j`, `J` — A signed or unsigned `lua_Integer`.
- `T` — A `size_t`.
- `i[n]`, `I[n]` — A signed or unsigned `int` with `n` bytes (default is the size of `int`).
- `f`, `d`, `n` — A `float`, `double`, or `lua_Number`.
- `s[n]` — A string preceded by its length, stored as an unsigned integer of `n` bytes (default is `size_t`).
- `z` — A zero-terminated string.
- `x` — One byte of padding.
- `Xop` — Aligns to the alignment of option `op`, without consuming any data.

Spaces are ignored.

```pluto
print(string.packsize("<i4"))         --> 4
local packed = string.pack("<i4s1", 1000, "hi")
print(packed:tohex())                 --> e8030000026869
print(string.unpack("<i4s1", packed)) --> 1000    hi    8
```
