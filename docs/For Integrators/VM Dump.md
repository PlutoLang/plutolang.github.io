Pluto offers an optional, configurable feature to see every instruction that is executed in the Lua VM.

## Configuration

VM Dump can be enabled by defining `PLUTO_VMDUMP` in `luaconf.h` or your build config.

- To reduce noise, you can modify `PLUTO_VMDUMP_COND` to set a custom condition for when VM Dump is active. By default, the condition is `true`.
- Although not a configuration specific to VM Dump, it should be noted that you can modify the output macros `lua_writestring` and `lua_writeline`.

## What it looks like

Given the following code:

```pluto showLineNumbers
local value = 3
switch value do
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    print("Got 1-5.")
    break
  default:
    print("Value is greater than 5.")
end
-- Break jumps here.
```

It will output:

```
VARARGPREP 0        ; prepare for 0 varargs
LOADI      0 3      ; push 3
MOVE       1 0      ; move 3 into R(A)
EQI        1 1 0    ; 3 == 1
EQI        1 2 1    ; 3 == 2
EQI        1 3 1    ; 3 == 3
GETTABUP   2 0 0    ; push T['print'] for function-0x247d2882520 (T=table-0x247d29ec9c8)                                              
LOADK      3 1      ; push "Got 1-5."
<OUTPUT> Got 1-5.
CALL       2 2 1    ; call cfunc (nresults=0 nparams=0)                                                                                                              
JMP        13       ; offset=13 newpc=0x247d29e90d8
RETURN     1 1 1    ; return 0 value(s)
```