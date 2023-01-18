Pluto makes two small changes to numeral parsing.

## Cosmetic Underscores

You can add underscores to your numeric literals to make them more readable.
```pluto showLineNumbers title="Example Code"
local n = 10_000_000
assert(n == 10000000)
```
These underscores are ignored by the compiler, so they are purely cosmetic.

## Binary Integers

Similar to how Lua allows you to input numbers in hexadecimal:
```pluto showLineNumbers title="Example Code"
local n = 0x420
assert(n == 1056)
```
Pluto allows you to input numbers in binary as well:
```pluto showLineNumbers title="Example Code"
local n = 0b1000101
assert(n == 69)
```
