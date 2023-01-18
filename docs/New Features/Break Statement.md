This keyword accepts an optional integral argument which tells it how many levels of enclosing loops it should break. The default value is 1, thus breaking out of the current loop.
```pluto showLineNumbers title="Example 1"
for i = 1, 10 do -- Loop 1.
    break 1 --> This is identical to `break` without any arguments.
end
```
```pluto showLineNumbers title="Example 2"
for i = 1, 10 do -- Loop 1.
    for ii = 1, 5 do -- Loop 2.
        break 1 --> This will break from Loop 2.
        break 2 --> This will break from Loop 1.
    end
end
```