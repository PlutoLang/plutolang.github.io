---
sidebar_position: 1
---
Switch blocks consists of the following new keywords:
- `case`
- `switch`
- `default`

## Switch Statement

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
-- Break jumps here.
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
In this example, cases 1-4 fall through to case 5.

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
--  There is only two! <-- Uh oh.
```
 
The `default` case is executed if none of the other cases are true. For example:
```pluto
local value = 1
switch value do
    case 2:
    case 3:
        break

    default:
        print("Value is neither 2 nor 3!")
end
```
The `default` case can be placed anywhere in the block. It also supports fallthrough, so remember to use `break` if you place it above any cases.

#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20value%20%3D%203%0D%0Aswitch%20value%20do%0D%0A%20%20case%201%3A%0D%0A%20%20case%202%3A%0D%0A%20%20case%203%3A%0D%0A%20%20case%204%3A%0D%0A%20%20case%205%3A%0D%0A%20%20%20%20print%20%22Got%201-5.%22%0D%0A%20%20%20%20break%0D%0A%20%20default%3A%0D%0A%20%20%20%20print%20%22Value%20is%20greater%20than%205.%22%0D%0Aend%0D%0A--%20Break%20jumps%20here.)

## Case Blocks

Any expression can be used for the case condition:

```pluto
switch true do
    case 42 == 42:
        print("42 is 42 is true")
        break
end
```

There is a short-hand fallthrough syntax:
```pluto
switch value do
    case 1, 2, 3:
        print("1-3")
        break
    case 4, 5, 6:
        print("4-6")
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
    case t:getVal(): -- This is interpreted as `case t: getVal():print("val is 42")`
        print("val is 42")
        break
    case (t:getVal()): -- This works as expected
        print("val is 42")
        break
end
```

## Switch Expression

Just like ternary expressions, these allow you to conditionally provide values, with massively simplified case blocks:

```pluto
local place = 1
place = switch place do
    case 1 -> "1st"
    case 2 -> "2nd"
    case 3 -> "3rd"
    default -> $"{place}th"
end
print(place) --> 1st
```

Note that the case blocks here have their conditions delimited by an arrow (->) instead of a colon (:).

#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20place%20%3D%201%0D%0Aplace%20%3D%20switch%20place%20do%0D%0A%20%20%20%20case%201%20-%3E%20%221st%22%0D%0A%20%20%20%20case%202%20-%3E%20%222nd%22%0D%0A%20%20%20%20case%203%20-%3E%20%223rd%22%0D%0A%20%20%20%20default%20-%3E%20%24%22%7Bplace%7Dth%22%0D%0Aend%0D%0Aprint(place))

Despite not being able to manually fall through, the shorthand fallthrough syntax still works:

```pluto
local function print_range(value)
    print(switch value do
        case 1, 2, 3 -> "1-3"
        case 4, 5, 6 -> "4-6"
    end)
end
print_range(1) --> 1-3
print_range(6) --> 4-6
print_range(9) --> nil
```

Notice how the `default` case was omitted in this example, so it was implicitly set to `default -> nil`.

#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20function%20print_range(value)%0D%0A%20%20%20%20print(switch%20value%20do%0D%0A%20%20%20%20%20%20%20%20case%201%2C%202%2C%203%20-%3E%20%221-3%22%0D%0A%20%20%20%20%20%20%20%20case%204%2C%205%2C%206%20-%3E%20%224-6%22%0D%0A%20%20%20%20end)%0D%0Aend%0D%0Aprint_range(1)%20--%3E%20%221-3%22%0D%0Aprint_range(6)%20--%3E%20%224-6%22%0D%0Aprint_range(9)%20--%3E%20nil)

## Using Compatibility Mode?
You may need to use `pluto_switch` instead of `switch`. Alternatively, `pluto_use switch` will enable the keyword independently of environment settings.
