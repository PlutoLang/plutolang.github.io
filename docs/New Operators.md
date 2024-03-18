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

```pluto showLineNumbers=true
local a = 1
a = a + 1 
a += 1
```

:::info
Compound operators will call the same metamethods as the normal arithmetic operation would.
:::

## Coalescing Operator
The nil-coalescing operator is helpful for evaluating values against `nil`. 

If the left-hand operand is `nil`, it returns the right-hand operand. Otherwise, it returns the left-hand operand.
```pluto showLineNumbers=true
local function say(message)
    print(message ?? "The message was nil.")
end

say() --> The message was nil.
say(nil) --> The message was nil.
say("Hello, world!") --> Hello, world!
````

It's a cleaner version of this code:
```pluto showLineNumbers=true
local function say(message)
    if message == nil then
        message = "The message was nil."
    end

    print(message)
end

say() --> The message was nil.
say(nil) --> The message was nil.
say("Hello, world!") --> Hello, world!
```

You can even use compound assignment:
```pluto showLineNumbers
local function say(message)
    message ??= "The message was nil."

    print(message)
end

say() --> The message was nil.
say(nil) --> The message was nil.
say("Hello, world!") --> Hello, world!
```
:::info
This operator does not implement any metamethods.
:::

## Walrus Operator
The Walrus operator allows you to perform assignments inside of conditional expresssions.

The second operand to your assignment is the value of the expression.

```pluto showLineNumbers
if a := get_value() then
    -- 'a' was assigned a truthy value.
else
    -- 'a' was assigned a falsy value.
end
```
You can imagine it like this, but note they're not always the same:
```pluto showLineNumbers
local a = get_value()
if a then
    -- 'a' was assigned a truthy value.
else
    -- 'a' was assigned a falsy value.
end
```

What makes the Walrus operator different is that it'll be evaluated as many times as the condition:
```pluto showLineNumbers
local function get()
    return math.random(0, 1)
end

while a := get() do
    --| In the next iteration:
    --|   - `a` will be assigned to `get()`.
    --|   - Then the value will be evaluated for the condition.
    --|
    --| This happens because the Walrus operator itself is the condition.
    --| It's not a short-hand for generating an assignment.
    --|
    --| Be aware of this if you intend on using the Walrus operator with loops.
end
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

```pluto
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
#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20%7B%20http%2C%20json%20%7D%20%3D%20require%20%22pluto%3A*%22%0D%0A%0D%0Ahttp.request(%22https%3A%2F%2Fhttpbin.org%2Fget%22)%0D%0A%7C%3E%20json.decode%0D%0A%7C%3E%20dumpvar%0D%0A%7C%3E%20print%0D%0A)
The HTTP-to-print pipeline here would otherwise be written like this:
```pluto
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
#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20producer%20%3D%20%7C%7C%20-%3E%20%2210%22%0D%0A%0D%0Aproducer()%0D%0A%7C%3E%20tonumber%7C16%7C%0D%0A%7C%3E%20print%20--%3E%2016%0D%0A)

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
#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20producer%20%3D%20%7C%7C%20-%3E%2021%0D%0A%0D%0Alocal%20obj%20%3D%20%7B%0D%0A%20%20%20%20function%20multiply(value)%0D%0A%20%20%20%20%20%20%20%20return%20value%20*%20self.factor%0D%0A%20%20%20%20end%0D%0A%7D%0D%0Aobj.factor%20%3D%202%0D%0A%0D%0Aproducer()%0D%0A%7C%3E%20obj%3Amultiply%0D%0A%7C%3E%20print%20--%3E%2042%0D%0A)

### Anonymous Functions
The righthand side of the pipe operator can also be an anonymous function, allowing for more advanced usage like this:
```pluto
local producer = || -> 42

producer()
|> |res| -> print($"The result was {res}")

--> The result was 42
```
#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20producer%20%3D%20%7C%7C%20-%3E%2042%0D%0A%0D%0Aproducer()%0D%0A%7C%3E%20%7Cres%7C%20-%3E%20print(%24%22The%20result%20was%20%7Bres%7D%22)%0D%0A%0D%0A--%3E%20The%20result%20was%2042%0D%0A)
