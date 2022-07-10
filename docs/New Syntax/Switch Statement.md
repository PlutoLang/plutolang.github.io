The switch statement consists of the following new keywords:
- `case`
- `switch`
- `default`

The behavior of this syntax is nearly identical with C, so you should learn how they work in C if you're unaware. Proper fall-through is supported. However, your `default` case will always run if you do not exit in a prior case, so remember to use `break`, `return`, or even `goto` if you're that kind of guy.
```lua title="Example Code"
local value = 3
switch value do
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    print "Got 1-5."
    break
  default:
    print "Value is greater than 5."
end
-- Break jumps here.
```
# Using Compatibility Mode?
The keywords will be:
  - `pluto_case`
  - `pluto_switch`
  - `pluto_default`