---
sidebar_position: 2
---
Pluto provides some powerful constructs which allow you to write code that will never be seen at runtime.

## Function calls

Certain standard library functions can be called at compile-time, as long as the arguments are also known at compile-time, by using the "$" symbol before the function call.

```pluto showLineNumbers
local runtime = require("crypto").joaat("Hello, World!")
local compile = $crypto.joaat("Hello, World!")

assert(runtime == compile)
```
If you're unfamiliar with compile-time evaluation, this is essentially what the code turns into:
```pluto showLineNumbers
local runtime = require("crypto").joaat("Hello, World!")
local compile = 847757641 -- The JOAAT hash of "Hello, World!"

assert(runtime == compile)
```

This is available on preloaded Pluto libraries, such as:
- `base32`
- `base58`
- `base64`
- `crypto`
- `json`
- `url`

And on the following functions:
- `io.contents`
- `tostring`
- `utostring`
- `tonumber`
- `utonumber`
- `type`
- `assert`

## Variables

Compile-time constant variables can be defined via the `$define` statement:
```pluto
$define a = 123
```
This may seem identical to a local declared with the const attribute:
```pluto
local a <const> = 123
```
However, `$define` also enforces that the assigned variable is a compile-time constant:
```pluto
local a <const> = {}
$define a = {} -- Error: variable was not assigned a compile-time constant value
```

## Conditionals

If there is certain code you only want to have compiled in for a certain build, such as a debug build, you can use compile-time conditionals:

```pluto
$define DEBUG = true

$if DEBUG then
    print("Script running in debug mode")
$else
    print("Script running in release mode")
$end
```

In this case, only one of the two paths will be compiled in; the rest will not take up any space.

## Aliases

Preprocessor aliases are similar to C/C++ macros. For example, you can define an alias for a keyword:

```pluto
$alias let = local
let a = 1
print(a) --> 1
```

or write simple functions which will be fully inlined at the call site:

```pluto
$alias add(a, b) = a + b
print(add(1, 2)) --> 3
```

If you want to write an alias over multiple lines, you can use a backslash to continue it:

```pluto
$alias seq = "a"  \
             ..   \
             "b"  \
             ..   \
             "c"
print(seq) --> abc
```

## `$haltcompiler`

This statement will stop the parser processing further code.

```pluto
print(io.contents("index.pluto"):split("\n$haltcompiler"):back():strip()) --> Anything after the $haltcompiler statement is not processed as Pluto source code.
$haltcompiler
Anything after the $haltcompiler statement is not processed as Pluto source code.
```
