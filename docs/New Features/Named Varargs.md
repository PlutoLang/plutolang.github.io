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
vfunc("Hello") --> Hello
```

But, with named varargs, it can be as simple as this:

```pluto
function vfunc(...args)
    for args as arg do
        print(arg)
    end
end
vfunc("Hello") --> Hello
```
