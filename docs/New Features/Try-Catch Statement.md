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

#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20function%20get_fruit_rating(fruit)%0D%0A%20%20%20%20return%20switch%20fruit%20do%0D%0A%20%20%20%20%20%20%20%20case%20%22apple%22%20-%3E%208%0D%0A%20%20%20%20%20%20%20%20case%20%22banana%22%20-%3E%207%0D%0A%20%20%20%20%20%20%20%20case%20%22orange%22%20-%3E%209%0D%0A%20%20%20%20%20%20%20%20case%20%22mango%22%20-%3E%2010%0D%0A%20%20%20%20%20%20%20%20case%20%22grape%22%20-%3E%206%0D%0A%20%20%20%20%20%20%20%20case%20%22strawberry%22%20-%3E%209%0D%0A%20%20%20%20%20%20%20%20case%20%22cucumber%22%2C%20%22tomato%22%20-%3E%20error(%22What%20are%20you%2C%20a%20botanist%3F%22)%0D%0A%20%20%20%20end%0D%0Aend%0D%0A%0D%0Alocal%20function%20try_get_fruit_rating(fruit)%0D%0A%20%20%20%20try%0D%0A%20%20%20%20%20%20%20%20return%20get_fruit_rating(fruit)%0D%0A%20%20%20%20catch%20e%20then%0D%0A%20%20%20%20%20%20%20%20if%20e%3Afind(%22What%20are%20you%2C%20a%20botanist%3F%22)%20then%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20-10%0D%0A%20%20%20%20%20%20%20%20end%0D%0A%20%20%20%20end%0D%0Aend%0D%0A%0D%0Aprint(try_get_fruit_rating(%22apple%22))%20--%3E%208%0D%0Aprint(try_get_fruit_rating(%22cucumber%22))%20--%3E%20-10%0D%0Aprint(try_get_fruit_rating(%22car%22))%20--%3E%20nil)

## Using Compatibility Mode?

You may need to use `pluto_try` and `pluto_catch` instead. Alternatively, `pluto_use try, catch` will enable both keywords independently of the environment settings.
