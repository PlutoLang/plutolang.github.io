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
