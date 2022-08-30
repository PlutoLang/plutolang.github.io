Pluto offers optional compiler warnings for certain misbehaviors.

These are the current warning circumstances:
- Type mismatch.
  - When the type of an expression doesn't match the hinted type.
- Variable shadowing.
  - When a new local is created with the same name as an existing one.
- Unreachable code.
  - When a block of code will never be ran.
- Excessive arguments.
  - When too many arguments are given to a non-vararg function.

## Examples
#### Type Mismatch
```lua showLineNumbers
local var: number = 5
var = "hello"
```
```
file.lua:2: warning: 'var' was type-hinted as 'number', but is assigned a string value.                                               
         2 | var = "hello"
           | ^^^^^^^^^^^^^ here: type mismatch
           |
```
#### Variable Shadowing
```lua showLineNumbers
local var = 5
do
  local var = "hello"
end
```
```
file.lua:3: warning: duplicate local declaration
         3 | local var =
           | ^^^^^^^^^^^ here: this shadows the value of the initial declaration on line1.
           |
```
#### Unreachable Code
```lua showLineNumbers
for i = 1, 10 do
  if i == 5 then
    continue
    print("message")
  end
end
```
```
file.lua:4: warning: unreachable code
         4 | print
           | ^^^^^ here: this code comes after an escaping 'continue' statement.
           |
```
#### Excessive Arguments
```lua showLineNumbers
local function func(a, b, c)

end

func(1, 2, 3, 4)
```
```
tests/quick.lua:5: warning: too many arguments
         5 | func(1, 2, 3, 4)
           | ^^^^^^^^^^^^^^^^ here: expected 3 arguments, got 4.
           | 
```

## Compile-time Configuration
Warnings can be disabled during compile-time, so you can make exceptions for the next line, a region of code, or the entire warning itself.
```lua title="These are the configuration comments."
--- @pluto_warnings: enable-all
--- @pluto_warnings: disable-all

--- @pluto_warnings: disable-next

--- @pluto_warnings: enable-var-shadow
--- @pluto_warnings: disable-var-shadow

--- @pluto_warnings: enable-type-mismatch
--- @pluto_warnings: disable-type-mismatch

--- @pluto_warnings: enable-unreachable-code
--- @pluto_warnings: disable-unreachable-code

--- @pluto_warnings: enable-excessive-arguments
--- @pluto_warnings: disable-excessive-arguments
```