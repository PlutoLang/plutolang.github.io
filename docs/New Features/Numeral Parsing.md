---
sidebar_position: 1
---
Pluto makes two small changes to numeral parsing.

## Cosmetic Underscores

You can add underscores to your numeric literals to make them more readable.
```pluto
local n = 10_000_000
print(n) --> 10000000
```
These underscores are ignored by the compiler, so they are purely cosmetic.

## Binary & Octal Numerals

Similar to how Lua allows you to input numbers in hexadecimal:
```pluto
local n = 0x2A
print(n) --> 42
```
Pluto allows you to input numbers in binary and octal as well:
```pluto
local n = 0b101010
print(n) --> 42
```
```pluto
local n = 0o52
print(n) --> 42
```
