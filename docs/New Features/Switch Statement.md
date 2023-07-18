---
sidebar_position: 10
---
The switch statement consists of the following new keywords:
- `case`
- `switch`
- `default`

```pluto
local value = 1
switch value do
	case 1:
		print("There is only one!")
		break
	case 2:
		print("There is only two!")
		break
end
```

Switch statements also support fallthrough.
```pluto
local value = 1
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

**Remember to use break whenever you do not want fallthrough**. Here is an example of a potential bug:
```pluto
local value = 1
switch value do
	case 1:
		print("There is only one!")
	case 2:
		print("There is only two!")
end

-- Output:
--  There is only one!
--  There is only two! --> Uh oh.
```
 
The `default` case is executed if none of the other cases are true. For example:
```pluto
local value = 1
switch value do
	case 2:
		... -- Example code.
		break
	case 3:
		...
		break

	default:
		print("Neither case 2 or 3 have ran!s")
end
```
The `default` case can be placed anywhere in the statement. It also supports fallthrough, so remember to use `break` if you place it above any cases.

#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20value%20%3D%203%0D%0Aswitch%20value%20do%0D%0A%20%20case%201%3A%0D%0A%20%20case%202%3A%0D%0A%20%20case%203%3A%0D%0A%20%20case%204%3A%0D%0A%20%20case%205%3A%0D%0A%20%20%20%20print%20%22Got%201-5.%22%0D%0A%20%20%20%20break%0D%0A%20%20default%3A%0D%0A%20%20%20%20print%20%22Value%20is%20greater%20than%205.%22%0D%0Aend%0D%0A--%20Break%20jumps%20here.)

## Case Statement

Any expression can be used for the case statement:

```pluto
switch true do
	case 42 == 42:
		print("42 is 42 is true")
		break
end
```

However, note that method calls needs to be encapsulated with parentheses:
```pluto
local t = {
	function getVal()
		return 42
	end
}
switch 42 do
// ERROR:
	case t:getVal(): -- This is interpreted as case t: getVal():print...
// ERROR:
		print("val is 42")
// ERROR:
		break
	case (t:getVal()):
		print("val is 42")
		break
end
```


## Using Compatibility Mode?
You may need to use `pluto_switch` instead of `switch`.
