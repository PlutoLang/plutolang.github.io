Type-hinting looks like this:
```pluto showLineNumbers
local var: string = "hello world"
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
  - `int`
  - `float`
- `boolean`/`bool`
- `function`
- `table`
- `userdata`
- `void` (return type only)

Prefix a `?` to indicate nil-able types, e.g. `?string` indicates that it may be nil or a string.

You can also use `|` to delimit alternatives, e.g. `string|int` indicates that it may be a string or an int.

Putting all of this together, we could also have e.g. `?string|int` to indicate that it may be nil, a string, or an int.

:::info
This is a WIP feature, and it's very difficult to implement in a one-pass compiler. Allow tolerance for missing coverage, and report any bugs.
:::