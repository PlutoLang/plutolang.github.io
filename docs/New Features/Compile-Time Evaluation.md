Pluto's parser provides some powerful constructs which allow you to write code that will never be seen at runtime.

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
- `json`
- `base32`
- `base58`
- `base64`
- `crypto`

And on the following functions:
- `tostring`
- `utostring`
- `tonumber`
- `utonumber`

## Conditionals

If there is certain code you only want to have compiled in for a certain build, such as a debug build, you can use compile-time conditionals:

```pluto
local DEBUG <constexpr> = true

$if DEBUG then
    print("Script running in debug mode")
$else
    print("Script running in release mode")
$end
```

In this case, only one of the two paths will be compiled in; the rest will not take up any space. We're also using the [constexpr attribute](Constexpr Attribute.md) here, for stricter guarantees than `<const>`, although `$if` would throw an error if the condition was not known at compile-time.
