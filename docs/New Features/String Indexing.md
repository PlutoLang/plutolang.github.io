You can index strings for their characters now, which is cleaner & **3x** faster than using `string.sub`. String indexing only occurs when you index with an integer, either positive or negative. Positive integers index from the start of the string, and negative integers index from the end.
```pluto showLineNumbers title="Example Code"
local str = "hello world"
print(str[5]) -- "o"
print(str[200]) -- nil
print(str[-1]) -- "d"
```
Any character-intensive task — for example, a hash algorithm — will greatly benefit from this.

:::info
The bytecode of this feature is not backwards-compatible with Lua.
:::

#### [Interactive Example](https://plutolang.github.io/web/#code=local%20str%20%3D%20%22hello%20world%22%0D%0Aprint(str%5B5%5D)%20--%20%22o%22%0D%0Aprint(str%5B200%5D)%20--%20nil%0D%0Aprint(str%5B-1%5D)%20--%20%22d%22)
