---
sidebar_position: 1
---

You can index strings for their characters now, which is cleaner & **3x** faster than using `string.sub`. String indexing only occurs when you index with an integer, either positive or negative. Positive integers index from the start of the string, and negative integers index from the end.
```pluto showLineNumbers title="Example Code"
local str = "hello world"
print(str[5]) -- "o"
print(str[200]) -- nil
print(str[-1]) -- "d"
```
Any character-intensive task — for example, a hash algorithm — will greatly benefit from this.

:::caution
The bytecode of this feature is not backwards-compatible with Lua.
:::
