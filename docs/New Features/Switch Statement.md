The switch statement consists of the following new keywords:
- `case`
- `switch`
- `default`

```pluto
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
#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20value%20%3D%203%0D%0Aswitch%20value%20do%0D%0A%20%20case%201%3A%0D%0A%20%20case%202%3A%0D%0A%20%20case%203%3A%0D%0A%20%20case%204%3A%0D%0A%20%20case%205%3A%0D%0A%20%20%20%20print%20%22Got%201-5.%22%0D%0A%20%20%20%20break%0D%0A%20%20default%3A%0D%0A%20%20%20%20print%20%22Value%20is%20greater%20than%205.%22%0D%0Aend%0D%0A--%20Break%20jumps%20here.)

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
