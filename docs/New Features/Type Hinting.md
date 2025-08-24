---
sidebar_position: 1
---
Type-hinting looks like this:
```pluto
local var: string = "hello world"
```
It works with functions too:
```pluto
local function myfunc(a: string, b: string): number
    return tonumber(a) + tonumber(b)
end

print(myfunc(1, "1")) -- This will emit a warning for argument type mismatch.
```
There's no effect on performance. This is implemented entirely during the compilation phase.

### Primitive Types
- `string`
- `number`
  - `int`
  - `float`
- `boolean`/`bool`
- `function`
- `table`
- `userdata`
- `nil`
- `any`

### Multiple Return Values

For function return values, there is the `void` hint to indicate 0 return values, as well as the following syntax for 2 or more:

```pluto
local function get_status(): (bool, string)
    return true, "OK!"
end
print(get_status())
```

### Union Types

Prefix a `?` to indicate void-able types, e.g. `?string` indicates that it may be absent, nil, or a string.

You can also use `|` to delimit alternatives, e.g. `string|int` indicates that it may be a string or an int.

Putting all of this together, we could also have e.g. `?string|int` to indicate that it may be absent, nil, a string, or an int.

### Complex Table Types

You can specify type requirements for fields inside of tables like so:

```pluto
local point: { x: number, y: number } = { x = 1, y = 2 }
```

### Named Types

You can use `$type` to assign a name to a type.

```pluto
$type Point = { x: number, y: number }

local p: Point = { x = 1, y = 2 }
```

### Complex Function Types

You can also specify type expectations for the parameters and/or return values of functions.

```pluto
$type LogCallback = function(msg: string): void

function write_env(log: LogCallback)
    log(_VERSION)
    log(_PVERSION)
end

write_env(print)
```

### `$declare`

The parser can only do typechecking for what it can see, so `$declare` allows you to directly set the type of globals.

```pluto
$declare _VERSION: string
```
```pluto
$declare function tonumber(str: string, base: ?number): number
```

### `$getproptype`

If you want to know what type the parser propagation has detected for a given variable, you can use `$getproptype` to ask it:
```pluto
local x = "hello"
print($getproptype(x)) --> string
```
Note that the return value of this function should not be relied upon.
