Pluto offers optional compiler warnings for certain misbehaviors. Currently, this is applied only to duplicated local definitions. These internal checks are faster, and more reliable than analytical third-party software. Compiler warnings need to be explicity enabled with the `-D` flag, which is optimal for developers and users alike.
```lua title="Problematic Code"
local variable = "hello world"
do
    local variable = "shadowed"
end
```
```lua title="Emitted Warning"
file.lua:3: warning: duplicate local declaration [-D]
         3 | local variable =
           | ^^^^^^^^^^^^^^^^ here: this shadows the value of the initial declaration on line 1.
           |
```
This feature can be removed from Pluto by defining the `PLUTO_NO_PARSER_WARNINGS` macro in `luaconf.h` or your build config.