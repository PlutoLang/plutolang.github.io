The `__mindex` metatable field is accessed when a method call is attempted on a nil value.

```pluto
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

Notice how the above sample uses `:insert` instead of `table.insert`, this works because:
- Pluto sets a default metatable on every table with `{ __mindex = _G.table }`
- `__mindex` is looked up recursively — in this case the metatable of our metatable has Pluto's default metatable.

Furthermore, note that `__mindex` is only checked after direct/raw access and `__index` lookups have yielded nil:

```pluto
local t = { 1, 2 }
print(t:min()) --> 1
t.min = 1
print(t:min()) -- attempt to call a number value
```
