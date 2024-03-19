---
sidebar_position: 3
---
Must be included via `require`.
### `assert.isnil`
Asserts that `value` is `nil`
#### Parameters
1. `value` — The value which *should* be nil.
#### Errors
An assertion error is thrown if the `value` is not `nil`.
```pluto showLineNumbers
local assert = require("assert")

assert.isnil(nil) -- Passes.
assert.isnil(5) -- Error:
--[[
test.pluto:4 -> Assertion Error: (assert.isnil)
    Intended Value: nil
    Received Value: 5

stack traceback:
    [C]: in function 'error'
    [string "pluto:assert"]:75: in function <[string "pluto:assert"]:46>
    (...tail calls...)
    [C]: in ?
--]]
```
---
### `assert.istrue`
Asserts that `value` is `true`.
#### Parameters
1. `value` — The value which *should* be `true`.
#### Errors
An assertion error is thrown if `value` is not `true`
```pluto showLineNumbers
local assert = require("assert")

assert.istrue(true) -- Passes.
assert.istrue(false) -- Error:
--[[
pluto: test.pluto:4 -> Assertion Error: (assert.istrue)
    Intended Value: true
    Received Value: false

stack traceback:
    [C]: in function 'error'
    [string "pluto:assert"]:75: in function <[string "pluto:assert"]:46>
    (...tail calls...)
    test.pluto:4: in main chunk
    [C]: in ?
--]]
```
---
### `assert.isfalse`
Asserts that `value` is `false`.
#### Parameters
1. `value` — The value which *should* be `false`.
#### Errors
An assertion error is thrown if `value` is not `false`.
```pluto showLineNumbers
local assert = require("assert")

assert.isfalse(false) -- Passes.
assert.isfalse(true) -- Error:
--[[
pluto: test.pluto:4 -> Assertion Error: (assert.isfalse)
    Intended Value: false
    Received Value: true

stack traceback:
    [C]: in function 'error'
    [string "pluto:assert"]:75: in function <[string "pluto:assert"]:46>
    (...tail calls...)
    test.pluto:4: in main chunk
    [C]: in ?
--]]
```
---
### `assert.falsy`
Asserts that `value` is a "falsy" value. Falsy means the value is `nil` or `false`.
#### Parameters
1. `value` — The value which *should* be falsy.
#### Errors
An assertion error is thrown if `value` is not falsy.
```pluto showLineNumbers
local assert = require("assert")

assert.falsy(nil) -- Passes.
assert.falsy(false) -- Passes.
assert.falsy("Hello, world!") -- Error:
--[[
pluto: test.pluto:4 -> Assertion Error: (assert.falsy)
    Intended Value: nil or false
    Received Value: string(13) "Hello, world!"

stack traceback:
    [C]: in function 'error'
    [string "pluto:assert"]:75: in function <[string "pluto:assert"]:46>
    (...tail calls...)
    test.pluto:4: in main chunk
    [C]: in ?
--]]
```
---
### `assert.truthy`
Asserts that `value` is a "truthy" value. This is the inverse of "falsy", a.k.a, any value that isn't `nil` or `false` is truthy.
#### Parameters
1. `value` — The value which *should* be truthy, a.k.a it *should not* be `nil` or `false`.
#### Errors
An assertion error is thrown if `value` is not truthy, i.e if `value` is `nil` or `false`.
```pluto showLineNumbers
local assert = require("assert")

assert.truthy("Hello, world!") -- Passes.
assert.truthy(nil) -- Error:
--[[
pluto: test.pluto:4 -> Assertion Error: (assert.truthy)
    Intended Value: not nil or false
    Received Value: nil

stack traceback:
    [C]: in function 'error'
    [string "pluto:assert"]:75: in function <[string "pluto:assert"]:46>
    (...tail calls...)
    test.pluto:4: in main chunk
    [C]: in ?
--]]
```
---
### `assert.notnil`
Asserts that `value` is not `nil`.
#### Parameters
1. `value` — The value which should *not* be `nil`.
#### Errors
An assertion error is thrown if `value` is `nil`.
```pluto showLineNumbers
local assert = require("assert")

assert.notnil("Hello, world!") -- Passes.
assert.notnil(nil) -- Error:
--[[
pluto: test.pluto:4 -> Assertion Error: (assert.notnil)
    Intended Value: not nil
    Received Value: nil

stack traceback:
    [C]: in function 'error'
    [string "pluto:assert"]:75: in function <[string "pluto:assert"]:46>
    (...tail calls...)
    test.pluto:4: in main chunk
    [C]: in ?
--]]
```
---
### `assert.equal`
Asserts that `value1` is equal to `value2`.

This function can compare tables, looking at both the table's reference and what's inside it. If the tables aren't exactly the same (meaning they don't reference the same table), the function will go through the contents of the tables and compare them step by step.
#### Parameters
1. `value1` — The first value.
2. `value2` — The second value.
#### Errors
An assertion error is thrown if `value1` does not equal `value2`.
```pluto showLineNumbers
local assert = require("assert")

assert.equal("Hello, world!", "Hello, world...") -- Error:
--[[
pluto: test.pluto:3 -> Assertion Error: (assert.equal)
    Intended Value: string(13) "Hello, world!"
    Received Value: string(15) "Hello, world..."
--]]

assert.equal("Hi there.":split(" "), "Hello there.":split(" ")) -- Error:
--[[
pluto: test.pluto:4 -> Assertion Error: (assert.equal)
    Intended Value: { [1] = string(2) "Hi", [2] = string(6) "there.", }
    Received Value: { [1] = string(5) "Hello", [2] = string(6) "there.", }
--]]
```
---
### `assert.nequal`
Asserts that `value1` is *not* equal to `value2`.

This function can compare tables, looking at both the table's reference and what's inside it. If the tables aren't exactly the same (meaning they don't reference the same table), the function will go through the contents of the tables and compare them step by step.
#### Parameters
1. `value1` — The first value.
2. `value2` — The second value.
#### Errors
An assertion error is thrown of `value1` does equal `value2`.
```pluto showLineNumbers
local assert = require("assert")

assert.nequal("Hello, world!", "Hi, world!") -- Passes.
assert.nequal("Hi there.":split(" "), "Hello there.":split(" ")) -- Passes.
```
---
### `assert.less`
Asserts that `value1` is less than `value2`.
#### Parameters
1. `value1` — The first number.
2. `value2` — The second number.
#### Errors
An assertion error is thrown if `value1` is not less than `value2`.
```pluto showLineNumbers
local assert = require("assert")

assert.less(1, 2) -- Passes.
assert.less(1, 1) -- Error:
--[[
pluto: test.pluto:4 -> Assertion Error: (assert.less)
    Expression: (1 < 1) == false
--]]
```
---
### `assert.lesseq`
Asserts that `value1` is less than or equal to `value2`.
#### Parameters
1. `value1` — The first number.
2. `value2` — The second number.
#### Errors
An assertion error is thrown if `value1` is not less than or equal to `value2`.
```pluto showLineNumbers
local assert = require("assert")

assert.lesseq(1, 2) -- Passes.
assert.lesseq(1, 0) -- Error:
--[[
pluto: test.pluto:3 -> Assertion Error: (assert.lesseq)
    Expression: (1 <= 0) == false
--]]
```
---
### `assert.greater`
Asserts that `value1` is greater than `value2`.
#### Parameters
1. `value1` — The first number.
2. `value2` — The second number.
#### Errors
An assertion errros is thrown if `value1` is not greater than `value2`.
```pluto showLineNumbers
local assert = require("assert")

assert.greater(3, 2) -- Passes.
assert.greater(3, 3) -- Error:
--[[
pluto: test.pluto:4 -> Assertion Error: (assert.greater)
    Expression: (3 > 3) == false
--]]
```
---
### `assert.greatereq`
Asserts that `value1` is greater than or equal to `value2`.
#### Parameters
1. `value1` — The first number.
2. `value2` — The second number.
#### Errors
An assertion errros is thrown if `value1` is not greater than or equal to `value2`.
```pluto showLineNumbers
local assert = require("assert")

assert.greatereq(3, 2) -- Passes.
assert.greatereq(3, 3) -- Passes.
```
---
### `assert.noerror`
Asserts that `callback` does not raise an error when called.
#### Parameters
1. `callback` — A function reference.
2. `...` — Any other parameters passed to this function will be passed to the `callback`.
#### Errors
An assertion error is thrown if `callback` raises an error.
```pluto showLineNumbers
local assert = require("assert")

assert.noerror(tostring, 400) -- Passes.
assert.noerror(error, "argument argument") -- Error:
--[[
pluto: test.pluto:4 -> Assertion Error: (assert.noerror)
    An error was raised: argument argument
--]]
```
---
### `assert.haserror`
Asserts that `callback` does raise an error when called.
#### Parameters
1. `callback` — A function reference.
2. `...` — Any other parameters passed to this function will be passed to the `callback`.
#### Errors
An assertion error is thrown if `callback` does not raise an error.
```pluto showLineNumbers
local assert = require("assert")

assert.haserror(error, "argument argument") -- Passes.
assert.haserror(tostring, 400) -- Error:
--[[
pluto: test.pluto:4 -> Assertion Error: (assert.haserror)
    Expected an error, but there was none.
--]]
```
---
### `assert.searcherror`
Asserts that `callback` raises an error, and that `substring` is present within the error message.
#### Parameters
1. `substring` — The substring that should be inside of the error message.
2. `callback` — A function reference.
3. `...` — Any other parameters passed to this function will be passed to the `callback`.
#### Errors
An assertion error is thrown if:
1. `callback` does not raise an error.
2. `callback` does raise an error, but the error message does not contain `substring`.
```pluto showLineNumbers
local assert = require("assert")

assert.searcherror("argument", error, "argument argument") -- Passes.
assert.searcherror("something", tostring, 400) -- Error:
--[[
pluto: test.pluto:4 -> Assertion Error: (assert.searcherror)
    Expected an error, but there was none.
--]]

assert.searcherror("argument", error, "argument argument") -- Passes.
assert.searcherror("argument", error, "something something") -- Error:
--[[
pluto: test.pluto:4 -> Assertion Error: (assert.searcherror)
    Absent String: argument
    Error Message: something s
--]]
```