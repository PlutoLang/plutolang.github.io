This page documents the `debug` library in Pluto, which is built on top of Lua 5.5's.

:::warning
The functions in this library break assumptions about Lua/Pluto code (e.g., that userdata metatables cannot be changed by Lua/Pluto code; that Lua/Pluto programs do not crash) and therefore can compromise otherwise secure code.
:::

## Unchanged
### `debug.debug`
Enters an interactive mode with the user, running each string that the user enters. Using simple commands and other debug facilities, the user can inspect global and local variables, change their values, evaluate expressions, and so on. A line containing only the word `cont` finishes this function, so that the caller continues its execution.

Commands for `debug.debug` are not lexically nested within any function, so they have no direct access to local variables.
```pluto norun
x = 1
debug.debug()
--< print(_G.x)
--> 1
--< cont
```
---
### `debug.gethook`
Get the current hook settings of a thread.
#### Parameters
1. The thread (optional).
#### Returns
Returns `nil` or 3 values as set by [debug.sethook](#debugsethook):
1. The current hook function.
2. The current hook mask.
3. The current hook count.
---
### `debug.sethook`
Sets a debug hook.
#### Parameters
1. The thread (optional).
2. The hook function.
3. A string describing when the hook is called:
    - `'c'` — every time Lua calls a function.
    - `'r'` — every time Lua returns from a function.
    - `'l'` — every time Lua enters a new line of code.
4. An optional count. If non-zero, the hook is also called after every `count` instructions.

When the hook is called, its first parameter is a string describing the event: `"call"`, `"tail call"`, `"return"`, `"line"`, or `"count"`. For `"line"` events, the hook also receives the new line number as its second parameter.
```pluto showLineNumbers
debug.sethook(function(event, line)
    print(event, line)
end, "l")
x = 1
debug.sethook() -- remove the hook
x = 2
--> line    4
--> line    5
```
---
### `debug.getinfo`
Get a table with information about a function.
#### Parameters
1. The thread (optional).
2. The stack level or a function.
3. An optional string describing which fields to fill in. Defaults to `"flnrStu"`.
    - `'f'` adds the function itself.
    - `'l'` adds the current line.
    - `'n'` adds the name.
    - `'r'` adds transfer info.
    - `'S'` adds source info.
    - `'t'` adds tail call info.
    - `'u'` adds parameter info.
    - `'L'` adds a table of valid lines, provided the function is a Lua function.
#### Returns
A table with the requested information, or `nil` if the level is greater than the number of active functions.
```pluto
print(dumpvar(debug.getinfo(1, "lnS")))
--> {
-->     ["lastlinedefined"] = 0,
-->     ["source"] = string(12) "@index.pluto",
-->     ["what"] = string(4) "main",
-->     ["namewhat"] = string(0) "",
-->     ["currentline"] = 1,
-->     ["linedefined"] = 0,
-->     ["short_src"] = string(11) "index.pluto",
--> }

print(dumpvar(debug.getinfo(0, "lnS")))
--> {
-->     ["lastlinedefined"] = -1,
-->     ["source"] = string(4) "=[C]",
-->     ["what"] = string(1) "C",
-->     ["name"] = string(7) "getinfo",
-->     ["namewhat"] = string(5) "field",
-->     ["currentline"] = -1,
-->     ["linedefined"] = -1,
-->     ["short_src"] = string(3) "[C]",
--> }
```
---
### `debug.getlocal`
Get the name and value of local variables.
#### Parameters
1. The thread (optional).
2. The stack level or a function. When given a function, only the names of its parameters are returned.
3. The index of the local variable. Negative indices refer to vararg arguments.
#### Returns
The name and value of the local variable or `nil`.
```pluto
-- @pluto_warnings disable-next ('a' is unused)
local function add(a, ...)
    local { n } = table.pack(...)
    print(debug.getlocal(1, 1))
    for i = -1, -n, -1 do
        print(debug.getlocal(1, i))
    end
end
add(1, 2, 3)
--> a    1
--> (vararg)    2
--> (vararg)    3
```
---
### `debug.setlocal`
Set the value of a local variable.
#### Parameters
1. The thread (optional).
2. The stack level.
3. The index of the local variable. Negative indices refer to vararg arguments.
4. The new value.
#### Returns
The name of the local variable or `nil`.
```pluto
local function add(a, b)
    debug.setlocal(1, 1, a + b)
    return a
end
print(add(1, 2)) --> 3
```
---
### `debug.getmetatable`
Get the metatable of a value.
#### Parameters
1. The value.
#### Returns
The metatable of the value or `nil` if it does not have one.
```pluto
local t = setmetatable({}, { __metatable = "no looking!" })
print(dumpvar(getmetatable(t))) --> string(11) "no looking!"
print(dumpvar(debug.getmetatable(t)))
--> {
-->    ["__metatable"] = string(11) "no looking!",
--> }
```
---
### `debug.setmetatable`
Sets the metatable for a value.
#### Parameters
1. The value.
2. The new metatable or `nil`.
#### Returns
The value.
```pluto
local ud = newuserdata()
print(pcall(setmetatable, ud, { __tostring = || -> ":o" })) --> false    bad argument #1 to 'setmetatable' (table expected, got userdata)
debug.setmetatable(ud, { __tostring = || -> ":o" })
print(ud) --> :o
```
---
### `debug.getregistry`
Get the registry table.
#### Returns
The registry table.
```pluto
print(dumpvar(debug.getregistry()))
```
---
### `debug.getupvalue`
Get the name and value of an upvalue.
#### Parameters
1. The function.
2. The index of the upvalue.
#### Returns
The name and value of the upvalue or `nil`. For C functions, the empty string `""` is used as the name of all upvalues. Variables with no known names are given the name `?`.
```pluto
local x = 10
local function get() return x end
print(debug.getupvalue(get, 1)) --> x    10
```
---
### `debug.setupvalue`
Set the value of an upvalue.
#### Parameters
1. The function.
2. The index of the upvalue.
3. The new value.
#### Returns
The name of the upvalue or `nil`.
```pluto
local x = 10
local function get() return x end
debug.setupvalue(get, 1, 20)
print(get()) --> 20
```
---
### `debug.upvalueid`
Get a unique identifier for an upvalue.
#### Parameters
1. The function.
2. The index of the upvalue.
#### Returns
A unique identifier, as a light userdata.
```pluto
local x = 1
local function f() return x end
local function g() return x end

print(debug.upvalueid(f, 1) == debug.upvalueid(g, 1)) --> true
```
---
### `debug.upvaluejoin`
Make an upvalue refer to another upvalue.
#### Parameters
1. The first Lua function.
2. The index of the upvalue in the first function.
3. The second Lua function.
4. The index of the upvalue in the second function.
```pluto
local a, b = 1, 2
local function f() return a end
local function g() return b end

print(a()) --> 1
debug.upvaluejoin(f, 1, g, 1)
print(a()) --> 2
```
---
### `debug.getuservalue`
Get a user value associated with a userdata.
#### Parameters
1. The userdata.
2. The index of the user value. Defaults to 1.
#### Returns
Returns the user value followed by `true`, if the index is valid; `nil` otherwise.
### `debug.setuservalue`
Sets a user value associated with a userdata.
#### Parameters
1. The userdata.
2. The new value.
3. The index of the user value. Defaults to 1.
#### Returns
The userdata, if the index is valid; `nil` otherwise.
```pluto
local ud = newuserdata()
debug.setuservalue(ud, "hello")
print(debug.getuservalue(ud)) --> hello    true
```
---
### `debug.traceback`
Get a traceback of the call stack.
#### Parameters
1. The thread (optional).
2. An optional string to be prepended to the traceback.
3. The level at which to start the traceback. Defaults to 1.
#### Returns
The traceback string.
```pluto showLineNumbers
local function process()
    print("processing "..data)
end
xpcall(process, function(err)
    print(debug.traceback(err, 2))
end)
--> index.pluto:2: attempt to concatenate a nil value (global 'data')
--> stack traceback:
-->     index.pluto:2: in function <index.pluto:1>
-->     [C]: in global 'xpcall'
-->     index.pluto:4: in main chunk
```
