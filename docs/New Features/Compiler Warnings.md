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
```pluto showLineNumbers
local var: number = 5
var = "hello"
```
```
file.lua:2: warning: variable type mismatch [type-mismatch]
    2 | var = "hello"
      | ^^^^^^^^^^^^^ here: 'var' type-hinted as 'number', but assigned a string value.
```
#### Variable Shadowing
```pluto showLineNumbers
local var = 5
do
  local var = "hello"
end
```
```
file.lua:3: warning: duplicate local declaration [var-shadow]
    3 | local var = "hello"
      | ^^^^^^^^^^^^^^^^^^^ here: this shadows the initial declaration of 'var' on line 1.
```
#### Unreachable Code
```pluto showLineNumbers
for i = 1, 10 do
  if i == 5 then
    continue
    print("message")
  end
end
```
```
file.lua:4: warning: unreachable code [unreachable-code]
    4 | print("message")
      | ^^^^^^^^^^^^^^^^ here: this code comes after an escaping 'continue' statement.
```
#### Excessive Arguments
```pluto showLineNumbers
local function func(a, b, c)

end

func(1, 2, 3, 4)
```
```
file.lua:5: warning: too many arguments [excessive-arguments]
    5 | func(1, 2, 3, 4)
      | ^^^^^^^^^^^^^^^^ here: expected 3 arguments, got 4.
```

## Compile-time Configuration
Warnings can be disabled during compile-time, so you can make exceptions for the next line, a region of code, or the entire warning itself.
```pluto title="These are the configuration comments."
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