Pluto provides a more intuitive way to handle errors than `pcall` and `xpcall`.

```pluto
local function get_fruit_rating(fruit)
    return switch fruit do
        case "apple" -> 8
        case "banana" -> 7
        case "orange" -> 9
        case "mango" -> 10
        case "grape" -> 6
        case "strawberry" -> 9
        case "cucumber", "tomato" -> error("What are you, a botanist?")
    end
end

local function try_get_fruit_rating(fruit)
    try
        return get_fruit_rating(fruit)
    catch e then
        if e:find("What are you, a botanist?") then
            return -10
        end
    end
end

print(try_get_fruit_rating("apple")) --> 8
print(try_get_fruit_rating("cucumber")) --> -10
print(try_get_fruit_rating("car")) --> nil
```

## Using Compatibility Mode?

You may need to use `pluto_try` and `pluto_catch` instead. Alternatively, `pluto_use try, catch` will enable both keywords independently of the environment settings.
