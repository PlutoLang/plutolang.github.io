The `__mindex` metamethod stands for 'method index'. It has a secondary priority to `__index` and it's only invoked when the lookup is being performed by method invocation syntax. This is used to avoid compatibility issues regarding Pluto's default metatable for tables. For example:
```pluto
local t = { "a", "b", "c" }
print(t:concat()) --> abc
```
In this code, the following occurs:
1. `concat` key is not directly present in the table, so `__index` is queried.
2. `__index` returns nil.
3. Since `__index` returned nil and this lookup is being performed by method invocation syntax (`:`), `__mindex` is queried.

```pluto title="An example showing how __mindex is walked recursively so :insert still works with a custom __mindex"
local t = setmetatable({}, {
    __mindex = {
        function sum()
            local accum = 0
            for self as v do
                accum += v
            end
            return accum
        end
    }
})
t:insert(1)
t:insert(2)
print(t.sum) --> nil
print(t:sum()) --> 3
```

```pluto title="An example of __index taking precedence"
local t = { 1, 2 }
print(t:min()) --> 1
t.min = 1
print(t:min()) -- attempt to call a number value
```