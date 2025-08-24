---
sidebar_position: 3
---
## Operator Aliases
These operators function the same, but they're more consistent with what's been standardized through programming today.

- `!` is an alias for `not`, the boolean inversion operator.
- `!=` is an alias for `~=`, the inequality operator.

## Compound Operators
A plethora of compound operators are available in Pluto:
- Addition: `+=`
- Subtraction: `-=` 
- Multiplication: `*=`
- Float division: `/=`
- Integer division: `//=`
- Modulo: `%=`
- Exponent: `^=`
- Bitwise AND: `&=`
- Bitwise OR: `|=`
- Bitwise XOR: `~=`
  - In Lua, the inequality operator cannot be used in statements. It must be used in expressions. Because compound operators can only be used in statements (and cannot be used in expressions), this is not a compatibility break.
- Bitshift left: `<<=`
- Bitshift right: `>>=`
- Concatenation: `..=`
- Nil-Coalescing: `??=`

```pluto
local a = 1
a = a + 1 
a += 1
```

:::info
Compound operators are syntactic sugar. They'll call the same metamethods as their non-compound counterparts.
:::

## Increment Operator
In addition to the compound operator `+=`, there is an even faster way to increment a value by 1 using the ++ operator:
```pluto
local a = 1
-- Prefix
print(++a) --> 2
++a
print(a) --> 3
-- Postfix
print(a++) --> 3
a++
print(a) --> 5
```

## Integer Exponentiation
Exponentiates 2 integers, as opposed to Lua's `^` which is floating point based.
```pluto
print(2 ** 2) --> 4
print(2 ^ 2) --> 4.0
```
```pluto
print(30 ** 30) --> 2565992168703393792
print(30 ^ 30) --> 2.0589113209465e+44
```

## Comparison Chaining
The `<`, `<=`, `>`, and `>=` operators can now be chained successively.

```pluto
if 1 < 2 < 3 then
    print("Hello, world!")
end

-- Pluto generates code which effectively evaluates to this:
if 1 < 2 and 2 < 3 then
    print("Hello, world!")
end
```

## Coalescing Operator
The nil-coalescing operator is helpful for evaluating values against `nil`. 

If the left-hand operand is `nil`, it returns the right-hand operand. Otherwise, it returns the left-hand operand.
```pluto
local function say(message)
    print(message ?? "The message was nil.")
end

say() --> The message was nil.
say(nil) --> The message was nil.
say("Hello, world!") --> Hello, world!
````

You can even use it with compound assignments:
```pluto
local function config(data)
    data.dark_mode ??= true

    print("Dark mode is "..data.dark_mode)
end

config{ dark_mode = false } --> Dark mode is false
config{}                    --> Dark mode is true
```
:::info
This operator does not implement any metamethods.
:::

## Walrus Operator
The Walrus operator allows you to perform assignments inside of conditional expresssions.
```pluto
local get_value = || -> 1

if val := get_value() then       -- scope of 'val' begins
    print("got value: "..val)
else                             -- scope of 'val' ends
    print("got no value")
end
```

It can also be used in while loops, where it will be executed as many times as the condition:
```pluto norun title="Pluto Way"
while a := next_value() do
    -- ...
end
```
```pluto norun title="Lua Way"
while true do
    local a = next_value()
    if not a then break end
    -- ...
end
```

In both cases, it is not limited to initialize only a single variable, although only the first is checked for truthiness:
```pluto
local co = coroutine.create(function()
    while true do
        while _has_val, val := coroutine.yield() do
            print(val)
        end
    end
end)
co:resume() -- start coroutine
co:resume(true, 1) --> 1
co:resume(false)
co:resume(true, 2) --> 2
co:resume(true, nil) --> nil
```

## Spaceship Operator
The spaceship operator, also known as the three-way comparison operator, allows you to quickly compare 2 values for equality and order.

```pluto
local eq = 1 <=> 1
local lt = 3 <=> 42
local gt = 9 <=> 5
print(eq, lt, gt) --> 0, -1, 1
```

It works with any type that supports `__eq` and `__lt`, making it well-suited for usage in generic algorithms like sorting. The return values are designed such that you can compare them to `0`, e.g. with the values from above:

```pluto norun
print(eq <= 0) --> true
print(lt <= 0) --> true
print(gt <= 0) --> false
```

## Pipe Operator
The pipe operator allows you represent data pipelines more succinctly.
```pluto
local { http, json } = require "pluto:*"

http.request("https://httpbin.org/get")
|> json.decode
|> dumpvar
|> print

--> {
-->     ["args"] = {},
-->     ["headers"] = {
-->         ["Host"] = string(11) "httpbin.org",
-->         ["User-Agent"] = string(56) "Mozilla/5.0 (compatible; Soup Library; +https://soup.do)",
-->         ["X-Amzn-Trace-Id"] = string(40) "Root=1-65e05b66-6aa8b7c94e7580774a804c24",
-->         ["Accept-Encoding"] = string(13) "deflate, gzip",
-->     },
-->     ["origin"] = string(13) "1.2.3.4",
-->     ["url"] = string(23) "https://httpbin.org/get",
--> }
```
The HTTP-to-print pipeline here would otherwise be written like this:
```pluto norun
print(dumpvar(json.decode((http.request("https://httpbin.org/get")))))
```
Note that the pipe operator only passes on the first return value, which is classically achieved by wrapping the expression in an extra pair of parentheses.

### Additional Arguments
It is also possible to provide additional arguments for the righthand side of the pipe operator:
```pluto
local producer = || -> "10"

producer()
|> tonumber|16|
|> print --> 16
```

### Methods Calls
There is specialized syntax for method calls with the pipe operator, too:
```pluto
local producer = || -> 21

local obj = {
    function multiply(value)
        return value * self.factor
    end
}
obj.factor = 2

producer()
|> obj:multiply
|> print --> 42
```

### Anonymous Functions
The righthand side of the pipe operator can also be an anonymous function, allowing for more advanced usage like this:
```pluto
local producer = || -> 42

producer()
|> |res| -> print($"The result was {res}")

--> The result was 42
```
