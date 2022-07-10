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

<a href="https://plutolang.github.io/web/#code=local%20value%20%3D%203%0D%0Aswitch%20value%20do%0D%0A%20%20case%201%3A%0D%0A%20%20case%202%3A%0D%0A%20%20case%203%3A%0D%0A%20%20case%204%3A%0D%0A%20%20case%205%3A%0D%0A%20%20%20%20print%20%22Got%201-5.%22%0D%0A%20%20%20%20break%0D%0A%20%20default%3A%0D%0A%20%20%20%20print%20%22Value%20is%20greater%20than%205.%22%0D%0Aend%0D%0A--%20Break%20jumps%20here.">Try it yourself!</a>

# Using Compatibility Mode?
The keywords will be:
  - `pluto_case`
  - `pluto_switch`
  - `pluto_default`