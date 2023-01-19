The messages for syntax errors are enhanced. They include tailored messages and code snippets, which should help newer programmers identify problems quicker. It's not a game changer, but it's neat.

### Example 1
```pluto showLineNumbers title="Problematic Code"
if a < b and t == 5 return "Gottem" end
```
```diff title="Emitted Syntax Error"
syntax error: file.lua:1: expected 'then' to delimit condition.
    1 | if a < b and t == 5 return "Gottem" end
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ here: expected 'then' symbol.
```
### Example 2
```pluto showLineNumbers title="Problematic Code"
local fn = |a, b, c| => (a == b and a < c)
```
```diff title="Emitted Syntax Error"
syntax error: file.lua:1: impromper lambda definition
    1 | local fn = |a, b, c| => (a == b and a < c)
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ here: expected '->' arrow syntax for lambda expression.
```
## ANSI Coloring
These errors support coloring, but it's disabled by default. Define the `PLUTO_USE_COLORED_OUTPUT` macro in `luaconf.h` or your build config to enable colored error messages.
:::tip
For Windows users, you can enable ANSI coloring support with the following command:
  - `REG ADD HKCU\CONSOLE /f /v VirtualTerminalLevel /t REG_DWORD /d 1`
:::