Continue statements are meant to be used in loops, like `break`. They skip the current iteration of the loop, and they'll skip any code necessary to do so.
```lua title="Example Code"
-- Print every number besides five.
for i = 1, 10 do
    if i == 5 then
        continue
    end
    print(i)
    -- continue jumps here.
end
```
They introduce a new keyword, `continue`. These cannot be used inside switch statements.

## Using compatibility mode?
The keyword will be `pluto_continue`, not `continue`.