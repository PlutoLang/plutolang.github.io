Pluto offers an optional, configurable feature to see every instruction that is executed in the Lua VM.

## Configuration

VM Dump can be enabled by defining `PLUTO_VMDUMP` in `luaconf.h` or your build config.

- To reduce noise, you can modify `PLUTO_VMDUMP_COND` to set a custom condition for when VM Dump is active. By default, the condition is `true`.
- Although not a configuration specific to VM Dump, it should be noted that you can modify the output macros `lua_writestring` and `lua_writeline`.

## What it looks like

Given the following code:

```lua showLineNumbers
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
VARARGPREP
[test.lua:1] LOADI 3
[test.lua:2] MOVE
[test.lua:3] EQI 1
[test.lua:4] EQI 2
[test.lua:5] EQI 3
[test.lua:5] JMP
[test.lua:8] GETTABUP print
[test.lua:8] LOADK {string "Got 1-5."}
[test.lua:8] CALL
<OUTPUT> Got 1-5.
[test.lua:9] JMP
[test.lua:12] RETURN
```

Or, if it was compiled to stripped bytecode:

```
VARARGPREP
LOADI 3
MOVE
EQI 1
EQI 2
EQI 3
JMP
GETTABUP print
LOADK {string "Got 1-5."}
CALL
<OUTPUT> Got 1-5.
JMP
RETURN
```
