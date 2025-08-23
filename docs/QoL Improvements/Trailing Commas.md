Parameter and argument lists are allowed to have trailing commas in Pluto.

```pluto
local function print_favs(
    color: string,
    food: string,
)
    print($"My favorite color is {color}, and my favorite food is {food}!")
end

print_favs(
    "red",
    "pizza",
) --> My favorite color is red, and my favorite food is pizza!
```
