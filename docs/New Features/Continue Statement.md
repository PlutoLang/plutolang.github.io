---
sidebar_position: 1
---
Continue statements, like `break`, are meant to be used in loops. They skip the current iteration of the loop.

They introduce a new keyword, `continue`. These cannot be used inside switch statements.
```pluto showLineNumbers title="Example Code"
-- Print every number besides five.
for i = 1, 10 do
    if i == 5 then
        continue
    end
    print(i)
    -- continue jumps here.
end
```

:::caution
Note, `continue` will skip code. If any code within your loop will determine if the loop continues, make sure `continue` doesn't jump over it.
:::

## Continue's Only Argument
This keyword accepts an optional integral argument which tells it how many levels of enclosing loops it should skip to the end of. The default value is 1, thus skipping to the end of the current loop.
```pluto norun title="Example 1"
for i = 1, 10 do -- Loop 1.
    continue 1 -- This is identical to `continue` without any arguments.
end
```
```pluto norun title="Example 2"
for i = 1, 10 do -- Loop 1.
    for ii = 1, 5 do -- Loop 2.
        continue 1 -- This will continue from Loop 2.
        continue 2 -- This will continue from Loop 1.
    end
end
```

## Using Compatibility Mode?
You may need to use `pluto_continue` instead of `continue`. Alternatively, `pluto_use continue` will enable the keyword independently of environment settings.
