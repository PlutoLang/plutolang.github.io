---
sidebar_position: 12
---

# For Integrators
This page documents every macro Pluto adds to `luaconf.h`. You can define these macros as part of your build process or by modifying `luaconf.h` directly.

## General
### Colored Output
If `PLUTO_USE_COLORED_OUTPUT` is defined, Pluto spruces its warning and error messages with ANSI color codes.
### Short Errors
You can define `PLUTO_SHORT_ERRORS` to disable code snippets being included in warning and error messages, shortening them.
### UTF-8 Variable Names
By default, Pluto allows UTF-8 symbol names, e.g.:
```pluto
local ひゃく = 100
```
This can be disabled by defining `PLUTO_NO_UTF8`.
### Jump Table
[This optional optimization](<Optimizations/Jump Table>) can be enabled by defining `PLUTO_FORCE_JUMPTABLE`.
### Default Metatables
[This feature](<Runtime Environment/Global & Base#default-metatables>) can be disabled by defining `PLUTO_FORCE_JUMPTABLE`.
### Table Freezing
[This optional feature](<New Features/Table Freezing>) can be enabled by defining `PLUTO_ENABLE_TABLE_FREEZING`.
### Parser Cache
Defining `PLUTO_PARSER_CACHE` enables a parser cache that aims to improve performance in projects with lots of plain text source files that rarely change.

## Warnings
[Pluto's compiler warnings](<New Features/Compiler Warnings>) can all be enabled or disabled by default using their respective macros, e.g. `PLUTO_WARN_GLOBAL_SHADOW` or `PLUTO_NO_WARN_TYPE_MISMATCH`.
### global-shadow
For [the global-shadow warning](<New Features/Compiler Warnings#global-shadow>), `PLUTO_COMMON_GLOBAL_NAMES` defines which names are covered, with the default being:
```cpp
#define PLUTO_COMMON_GLOBAL_NAMES "table","string","arg"
```

## Compatibility
### Compatibility Mode
You can define `PLUTO_COMPATIBLE_MODE` to enable [compatibility mode](<Compatibility#compatibility-mode>). Under the hood, this defines `PLUTO_COMPATIBLE_*` for each keyword (`PLUTO_COMPATIBLE_SWITCH`, etc.), which in turn change the default state of the respective booleans on `global_State`.
### Paranoid Keyword Detection
Some integrators may wish to have ongoing compatibility with a different ecosystem without requiring their users to enable a compatibility setting or their scripters to need compromises like `pluto_use` or a 'pluto_' prefix. For that, we offer yet another compromise: define `PLUTO_PARANOID_KEYWORD_DETECTION` to have Pluto disable its keywords far more aggressively, allowing them to be used as names for globals across files or before their definition.
### Lua Linkability
Define `PLUTO_LUA_LINKABLE` to disable changes to Pluto's headers that would cause your code to fail to link against Lua.

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

## Execution Time Limit
To aid environments that have to be sandboxed, Pluto provides Execution Time Limit (ETL), which can be enabled by defining `PLUTO_ETL_ENABLE` in `luaconf.h` or your build config.

By default, ETL allows code to run for a total of 1 ms (1.000.000 nanos). This can be changed by overwriting `PLUTO_ETL_NANOS`.

Note that this is a hammer solution. If you only want to prevent stupid mistakes, Infinite Loop Prevention is a far better tool.

## Memory Limit
You can set `PLUTO_MEMORY_LIMIT` to any amount of bytes you would like to limit scripts to. This will change the memory allocation function set in luaL_newstate accordingly.

## VM Dump
You can define `PLUTO_VMDUMP` to see every VM instruction that gets executed.
#### Configuration
- To reduce noise, you can modify `PLUTO_VMDUMP_COND` to set a custom condition for when VM Dump is active. By default, the condition is `true`.
- Although not a configuration specific to VM Dump, it should be noted that you can modify the output macros `lua_writestring` and `lua_writeline`.
#### What it looks like
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
EQI        0 1 0    ; 3 == 1
EQI        0 2 1    ; 3 == 2
EQI        0 3 1    ; 3 == 3
GETTABUP   1 0 0    ; push T['print'] for function-00007FF6211485A0 (T=table-0000019FEDA45580)
LOADK      2 1      ; push "Got 1-5."
CALL       1 2 1    ; call function-00007FF6211485A0 (nresults=0 nparams=1)
<OUTPUT> Got 1-5.
JMP        13       ; offset=13 newpc=0000019FEDA5C2C4
RETURN     1 1 1    ; return 0 value(s)
```
This is great at deciphering obfuscated code which may be causing problems for your environment.

## Content Moderation
### Compiled Code
You can disable execution of compiled bytecode by defining `PLUTO_DISABLE_COMPILED` in `luaconf.h` or your build config.
### Custom Module Filters
You may already have filters before passing scripts to run onto Pluto, but mechanisms such as `dofile` and `require` may be used to bypass them. To help you combat this, Pluto provides `PLUTO_LOADFILE_HOOK`. For example, if you set it to `ContmodOnLoadfile` in `luaconf.h` or your build config, you only need to define that function somewhere in your code, like this:
```cpp
extern bool ContmodOnLoadfile(lua_State* L, const char* filename) {
  return !isCodeProhibited(soup::string::fromFile(filename));
}
```
You may also wish to define `PLUTO_DISABLE_UNMODERATED_LOAD` to disable reader functions being passed to load as that could otherwise be used to load code from a file without this check.
:::info
This requires you to use Pluto as a static library, as otherwise this linking relationship won't work.
:::
### Binary Module Filters
Similar to the loadfile hook, `PLUTO_LOADCLIB_HOOK` can be defined to moderate C modules.
### Disable Filesystem Access
You can define `PLUTO_NO_FILESYSTEM` to disable the io library, os.remove, os.rename, as well as [the $include directive](<New Features/Preprocessing#include>).
### Disable Command Access
Define `PLUTO_NO_OS_EXECUTE` to disable os.execute and io.popen.
### Prevent Loading of Binary Modules
The `PLUTO_NO_BINARIES` macro can be defined to totally eliminate `package.loadlib` and any DLL/SO loading capability from the `require` function. This is helpful because `package.loadlib` can be used to bypass sandbox restrictions by manually loading symbols from a Lua/Pluto library, and the `require` function can load any Lua/Pluto C Module which may or may not provide dangerous functions. This is generally vital for any sandbox. This mechanism cannot be bypassed, since it configures Pluto to compile without support for any of the aforementioned features.
### Disable HTTP Requests
You can define `PLUTO_DISABLE_HTTP_COMPLETELY` to make all [HTTP requests](<Runtime Environment/HTTP#httprequest>) fail. Note that you may also wish to disable [the socket library](<Runtime Environment/Socket>) as it could be used to the same effect with more effort:
```cpp
luaL_openselectedlibs(L, PLUTO_DEFAULTLOADLIBS, ~PLUTO_SOCKETLIBK);
```
### HTTP Request Hook
Set `PLUTO_HTTP_REQUEST_HOOK` to a function to be called for any [HTTP request](<Runtime Environment/HTTP#httprequest>) with the following signature:
```cpp
extern bool ContmodOnHttpRequest(lua_State* L, const char* url);
```
As with disabling HTTP requests, the 'socket' library is not affected by this.
:::info
This requires you to use Pluto as a static library, as otherwise this linking relationship won't work.
:::
### File Read/Write Hook
The `PLUTO_READ_FILE_HOOK` and `PLUTO_WRITE_FILE_HOOK` macros can be defined to have functions called before a script obtains read or write access to any given file, with the following signature:
```cpp
extern bool ContmodOnAccessFile(lua_State* L, const char* utf8_path);
```
:::info
This requires you to use Pluto as a static library, as otherwise this linking relationship won't work.
:::
### FFI Call Hook
You can define `PLUTO_FFI_CALL_HOOK` to have a function called before a foreign function is called, with the following signature:
```cpp
extern bool ContmodOnFFICall(lua_State* L, void* addr);
```
:::info
This requires you to use Pluto as a static library, as otherwise this linking relationship won't work.
:::
