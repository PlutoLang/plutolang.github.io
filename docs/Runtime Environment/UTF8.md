This page documents the `utf8` library in Pluto, which is built on top of Lua 5.5's.

## Unchanged
### `utf8.char`
Constructs a concatenation of UTF-8 byte sequences for the given codepoints.
#### Parameters
1. The code points, each an integer.
#### Returns
The new string.
```pluto
print(utf8.char(72, 233, 8364)) --> Hé€
```
---
### `utf8.charpattern`
A pattern (a string, not a function) that matches exactly one UTF-8 byte sequence, assuming that the subject is a valid UTF-8 string. It is equal to `"[\0-\x7F\xC2-\xFD][\x80-\xBF]*"`. See the [pattern](https://www.lua.org/manual/5.5/manual.html#6.5.1) documentation for details.
```pluto
for c in string.gmatch("héllo", utf8.charpattern) do
    print(c)
end
--> h
--> é
--> l
--> l
--> o
```
---
### `utf8.codes`
Iterates over all UTF-8 characters in a string.
#### Parameters
1. The string to iterate over.
2. An optional bool that indicates if code points up to `0x7FFFFFFF` should be accepted. Defaults to false.
#### Errors
An error is thrown if an invalid byte sequence is encountered.
```pluto
for p, c in utf8.codes("hé") do
    print(p, c)
end
--> 1    104
--> 2    233
```
---
### `utf8.codepoint`
Returns the code points (as integers) from all characters in a string that start between byte positions `i` and `j`, both included.
#### Parameters
1. The string (`s`).
2. The starting byte position (`i`). Defaults to `1`.
3. The ending byte position (`j`). Defaults to `i`.
4. An optional bool that indicates if code points up to `0x7FFFFFFF` should be accepted. Defaults to false.
#### Returns
The code points, as multiple values.
#### Errors
An error is thrown if an invalid byte sequence is encountered.
```pluto
print(utf8.codepoint("héllo", 1, -1)) --> 104    233    108    108    111
```
---
### `utf8.len`
Returns the number of UTF-8 characters in a string that start between positions `i` and `j`, both inclusive.
#### Parameters
1. The string (`s`).
2. The starting byte position (`i`). Defaults to `1`.
3. The ending byte position (`j`). Defaults to `-1`.
4. An optional bool that indicates if code points up to `0x7FFFFFFF` should be accepted. Defaults to false.
#### Returns
The number of characters. If an invalid byte sequence is found, returns `nil` followed by the position of the first invalid byte.
```pluto
print(utf8.len("héllo")) --> 5
print(utf8.len("\xff"))  --> nil    1
```
---
### `utf8.offset`
Returns the position of the `n`-th character of a string, counting from byte position `i`, as two integers: the byte index where its encoding starts, and the byte index where it ends.
#### Parameters
1. The string (`s`). This function assumes it is a valid UTF-8 string.
2. The character index (`n`). A negative value counts characters backwards from `i`. As a special case, when `n` is 0 the function returns the start and end of the encoding of the character that contains the `i`-th byte of `s`.
3. The starting byte position (`i`). Defaults to `1` when `n` is non-negative, and `#s + 1` otherwise.
#### Returns
The start and end byte indices of the character, or `nil` if the character is neither in the string nor right after its end.
```pluto
print(utf8.offset("héllo", 1))    --> 1    1
print(utf8.offset("héllo", 2))    --> 2    3
print(utf8.offset("héllo", 0, 3)) --> 2    3
print(utf8.offset("héllo", 3))    --> 4    4
print(utf8.offset("héllo", -1))   --> 6    6
```
