---
sidebar_position: 1
---
If you have a function that takes varargs and you want them in a table, you'd have to do something like this:

```pluto
function vfunc(...)
    local args = { ... }
    for args as arg do
        print(arg)
    end
end
vfunc("Hello") -- "Hello"
```

But, with named varargs, it can be as simple as this:

```pluto
function vfunc(...args)
    for args as arg do
        print(arg)
    end
end
vfunc("Hello") -- "Hello"
```

#### [Try It Yourself](https://pluto-lang.org/web/#code=function%20vfunc(...args)%0D%0A%20%20%20%20for%20args%20as%20arg%20do%0D%0A%20%20%20%20%20%20%20%20print(arg)%0D%0A%20%20%20%20end%0D%0Aend%0D%0Avfunc(%22Hello%22)%20--%20%22Hello%22)
