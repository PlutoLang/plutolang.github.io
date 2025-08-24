---
sidebar_position: 1
---
Pluto offers optional compiler warnings for certain misbehaviors.

## Warning Types

### unused
This is raised when a local is declared but never used.
```pluto showLineNumbers
local a
```
```
file.pluto:1: warning: unused local variable [unused]
    1 | local a
      | ^^^^^^^ here: 'a' is unused
```

This warning is not raised for variables starting with an underscore (`_`) as this is a common convention for unused variables.

### var-shadow
This is raised when a new local is created with the same name as an existing one.
```pluto showLineNumbers
local var = 5
do
  local var = "hello"
end
```
```
file.pluto:3: warning: duplicate local declaration [var-shadow]
    3 | local var = "hello"
      | ^^^^^^^^^^^^^^^^^^^ here: this shadows the initial declaration of 'var' on line 1.
```

### global-shadow
This is raised when a new local is created with the same name as a global variable.
```pluto showLineNumbers
local table = {}
```
```
file.pluto:1: warning: duplicate global declaration [global-shadow]
    1 | local table = {}
      | ^^^^^^^^^^^^^^^^ here: this shadows the initial global definition of 'table'
```
To avoid excessive annoyance, this warning type is off by default. To enable it, scripters can use the [compile-time configuration](#compile-time-configuration) and integrators can define the `PLUTO_WARN_GLOBAL_SHADOW` macro.

Furthermore, this only covers the globals 'table', 'string', and 'arg' by default. Integrators can overwrite the `PLUTO_COMMON_GLOBAL_NAMES` macro to change this list.

### field-shadow
This is raised when the same field is declared multiple times in a table constructor:
```pluto showLineNumbers
local t = {
  key = "fruit",
  value = "apple",
  value = "banana"
}
```
```
file.pluto:4: warning: duplicate table field [field-shadow]
    4 | value = "banana"
      | ^^^^^^^^^^^^^^^^ here: this overwrites the value assigned to this field earlier
```

### type-mismatch
This is raised when the type of an expression doesn't match the hinted type. See [Type Hinting](<Type Hinting>).
```pluto showLineNumbers
local var: number = 5
var = "hello"
```
```
file.pluto:2: warning: variable type mismatch [type-mismatch]
    2 | var = "hello"
      | ^^^^^^^^^^^^^ here: 'var' type-hinted as 'number', but assigned a string value.
```

### unreachable-code
This is raised when a block of code will never be ran.
```pluto showLineNumbers
for i = 1, 10 do
  if i == 5 then
    continue
    print("message")
  end
end
```
```
file.pluto:4: warning: unreachable code [unreachable-code]
    4 | print("message")
      | ^^^^^^^^^^^^^^^^ here: this code comes after an escaping 'continue' statement.
```

### excessive-arguments
This is raised when too many arguments are given to a non-vararg function.
```pluto showLineNumbers
local function func(a, b, c)

end

func(1, 2, 3, 4)
```
```
file.pluto:5: warning: too many arguments [excessive-arguments]
    5 | func(1, 2, 3, 4)
      | ^^^^^^^^^^^^^^^^ here: expected 3 arguments, got 4.
```

### bad-practice
This is raised when the code does something stupid but not quite stupid enough to cause an error.
```pluto showLineNumbers
pluto_use *
```
```
file.pluto:1: warning: 'pluto_use *' is a bad idea because future Pluto versions may add keywords that will break your script [bad-practice]
    1 | pluto_use *
      | ^^^^^^^^^^^ here: consider using 'pluto_use "0.8.0"' instead
```

### possible-typo
This is raised when the code seems syntactically incorrect.
```pluto showLineNumbers
local magic const = 42
```
```
file.pluto:1: warning: Possibly mistyped attribute [possible-typo]
    1 | local magic const = 42
      | ^^^^^^^^^^^^^^^^^^^^^^ here: Did you mean '<const>'?
```

### non-portable-code
This is raised when the code may not be considered valid by all Pluto environments due to compatibility mode.
```pluto showLineNumbers
new exception("Not implemented")
```
```
file.pluto:1: warning: non-portable keyword usage [non-portable-code]
    1 | new exception("Not implemented")
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ here: use 'pluto_new' instead, or 'pluto_use' this keyword: https://pluto.do/compat
```
To avoid excessive annoyance, this warning type is off by default. To enable it, scripters can use the [compile-time configuration](#compile-time-configuration) and integrators can define the `PLUTO_WARN_NON_PORTABLE_CODE` macro.

### non-portable-name
This is raised when a variable name is only valid due to compatibility mode.
```pluto showLineNumbers
local class = "fruit"
```
```
file.pluto:1: warning: 'class' is a non-portable name [non-portable-name]
    1 | local class = "fruit"
      | ^^^^^^^^^^^^^^^^^^^^^ here: use a different name, or use 'pluto_use' to disable this keyword: https://pluto.do/compat
```
To avoid excessive annoyance, this warning type is off by default. To enable it, scripters can use the [compile-time configuration](#compile-time-configuration) and integrators can define the `PLUTO_WARN_NON_PORTABLE_NAME` macro.

### non-portable-bytecode
This is raised when the code will not run in Lua environments (when compiling Pluto to bytecode).
```pluto showLineNumbers
print("h" in "hello")
```
```
file.pluto:1: warning: non-portable operator usage [non-portable-bytecode]
    1 | print("h" in "hello")
      | ^^^^^^^^^^^^^^^^^^^^^ here: this operator generates bytecode which is incompatible with Lua.
```
To avoid excessive annoyance, this warning type is off by default. To enable it, scripters can use the [compile-time configuration](#compile-time-configuration) and integrators can define the `PLUTO_WARN_NON_PORTABLE_BYTECODE` macro.

### unannotated-fallthrough
This is raised when there's a non-obvious fallthrough in a switch block:
```pluto showLineNumbers
local a = 1
switch a do
  case 1:
    print("Case 1")
  case 2:
    print("Case 2")
end
```
```
file.pluto:5: warning: possibly unwanted fallthrough [unannotated-fallthrough]
    5 | case 2:
      | ^^^^^^^ here: the case on line 3 flows into this case
      + note: place `--@fallthrough` before this case if this is intended
```
As the warning points out, a `@fallthrough` annotation can be used to label the fallthrough, in turn silencing the warning:
```pluto showLineNumbers
local a = 1
switch a do
  case 1:
    print("Case 1")
    -- @fallthrough
  case 2:
    print("Case 2")
end
```

### discarded-return
This is raised when the return value of a function declared `<nodiscard>` was discarded. See [Nodiscard Functions](<Nodiscard Functions>).
```pluto showLineNumbers
local function add(a, b) <nodiscard>
    return a + b
end

add(1, 2)
```
```
file.pluto:5: warning: discarding return value of function declared '<nodiscard>' [discarded-return]
    5 | add(1, 2)
      | ^^^^^^^^^ here
```

## Compile-time Configuration
The state of each warning type can be changed during compile-time and exceptions for certain code can be made.

### Changing Warning States

Warnings have 3 states: 'disable', 'enable', and 'error'. The 'error' state is a more aggressive version of 'enable' that causes compilation to fail if the warning type is raied.

To change the state of a warning, write a `@pluto_warnings` comment with the state and warning type joined by a hyphen (-):
```pluto
local var = 5
do
  -- @pluto_warnings: disable-var-shadow
  local var = "hello"
  -- @pluto_warnings: enable-var-shadow
end
```

For this, there is also the special type, 'all', which can be used e.g. to enable all warnings except for non-portable-bytecode:
```pluto
-- @pluto_warnings: enable-all, disable-non-portable-bytecode
```

### Disable Warnings On Line
To disable warnings on a specific line of code, simply put a comment on the line before it with `@pluto_warnings: disable-next`.
```pluto showLineNumbers
local var = 5
do
  -- @pluto_warnings: disable-next
  local var = "hello"
end
```
