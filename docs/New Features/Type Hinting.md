Type-hinting looks like this:
```pluto showLineNumbers
local var: string = "hello world"
```
The parser will occasionally raise warnings when you violate the hinted type:
```pluto showLineNumbers
local var: string = "hello world"
do
    var = 5
end
```
The warning will look like this:
```
file.lua:3: warning: 'var' was type-hinted as 'string', but is assigned a number value.
         3 | var = 5
           | ^^^^^^^ here: type mismatch
           |
```
It works with functions too:
```pluto showLineNumbers
local function myfunc(a: string, b: string): number
    return tonumber(a) + tonumber(b)
end

print(myfunc(1, "1")) --> This will emit a warning for argument type mismatch.
```
There's no effect on performance. This is implemented entirely during the compilation phase.
### What types can I use?
- `string`
- `number`
- `boolean`/`bool`
- `function`
- `table`
- `userdata`

You can also suffix a `?` to indicate nil-able types, e.g. `?string` indicates that it may be nil or a string.

:::info
This is a WIP feature, and it's very difficult to implement in a one-pass compiler. Allow tolerance for missing coverage, and report any bugs.
:::