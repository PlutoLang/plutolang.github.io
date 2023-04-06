Pluto allows you to use reserved tokens such as `if` from Lua and `class` from Pluto as identifiers with shorthand table syntax and for goto labels.

```pluto showLineNumbers title="Reserved tokens as identifiers with shorthand table syntax"
local t = {
    class = "key"
}
print(t.class)
```

```pluto showLineNumbers title="Reserved tokens as identifiers for goto labels"
-- Print every number besides five.
for i = 1, 10 do
    if i == 5 then
        goto continue
    end
    print(i)
    ::continue::
end
```

However, variable names and function calls will not allow you to use reserved tokens as identifiers.
