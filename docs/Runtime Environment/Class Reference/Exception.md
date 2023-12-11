# Exception

The `exception` class makes errors easier to parse with `where` and `what` members, as opposed to having a string with both.

For ease of use, constructing an exception automatically _throws_ it.

```pluto showLineNumbers
try
    new exception("Not implemented")
catch e then
    print(e) -- same as error("Not implemented")
    print(e.what)
    print(e.where)
end
```
**Output:**
```
script.pluto:2: Not implemented
Not implemented
script.pluto:2
```

#### [Try It Yourself](https://pluto-lang.org/web/#code=try%0A%20%20%20%20new%20exception(%22Not%20implemented%22)%0Acatch%20e%20then%0A%20%20%20%20print(e)%20--%20same%20as%20error(%22Not%20implemented%22)%0A%20%20%20%20print(e.what)%0A%20%20%20%20print(e.where)%0Aend)
