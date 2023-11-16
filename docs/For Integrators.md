---
title: For Integrators
sidebar_position: 9
---

# For Integrators
These mechanisms are battle-tested. If you are an integrator who needs help configuring any of this, or who wants us to implement another mechanism, feel free to contact us on GitHub.

## Content Moderation
### Compiled Code
You can disable execution of compiled bytecode by defining `PLUTO_DISABLE_COMPILED` in `luaconf.h` or your build config.
### Module Loading

You may already have filters before passing scripts to run onto Pluto, but mechanisms such as `dofile` and `require` may be used to bypass them. To help you combat this, Pluto provides `PLUTO_LOADFILE_HOOK`. For example, if you set it to `ContmodOnLoadfile` in `luaconf.h` or your build config, you only need to define that function somewhere in your code, like this:

```cpp
extern "C" bool ContmodOnLoadfile(const char* filename) {
  return !isCodeProhibited(soup::string::fromFile(filename));
}
```

This requires you to use Pluto as a static library, as otherwise this linking relationship won't work.

## Execution Time Limit
To aid environments that have to be sandboxed, Pluto provides Execution Time Limit (ETL), which can be enabled by defining `PLUTO_ETL_ENABLE` in `luaconf.h` or your build config.

By default, ETL allows code to run for a total of 1 ms (1.000.000 nanos). This can be changed by overwriting `PLUTO_ETL_NANOS`.

Note that this is a hammer solution. If you only want to prevent stupid mistakes, [Infinite Loop Prevention](Infinite%20Loop%20Prevention) is a far better tool.

## Infinite Loop Prevention
Pluto can detect infinite loops by preventing too many successive iterations. This was implemented because game threads usually force users to call some sort of `yield` mechanism to return control to the game thread. In Pluto, you specify a hard bottleneck on iterations, then you specify a function pointer which should prevent ILP within the loop it's called in.
```pluto showLineNumbers title="This will produce an error due to ILP:"
while true do

end
```
```pluto showLineNumbers title="This will not, with correct configuration:"
while true do
    yield()
end
```
If your scheduling system calls `coroutine.yield` at least once per tick, configuring the ILP mechanism can be as simple as defining `PLUTO_ILP_ENABLE`. In any case, Pluto's configuration file (luaconf.h) is worth a look at, especially to properly configure this feature.

:::info
This is a very simple mechanic. It has no performance overhead & it's lightweight. However, the compromise for this was coverage. This will reliably prevent most user error, however malicious users can find a way to block a thread still. For example, any forward jump will prevent the mechanism from breaking a loop. This can be exploited, so don't rely on this for security.
:::

## VM Dumping
Pluto offers an optional, configurable feature to see every instruction that is executed in the Lua VM.

### Configuration

VM Dump can be enabled by defining `PLUTO_VMDUMP` in `luaconf.h` or your build config.

- To reduce noise, you can modify `PLUTO_VMDUMP_COND` to set a custom condition for when VM Dump is active. By default, the condition is `true`.
- Although not a configuration specific to VM Dump, it should be noted that you can modify the output macros `lua_writestring` and `lua_writeline`.

### What it looks like

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
This is great at deciphering obfuscated code which may be causing problems for your environment.