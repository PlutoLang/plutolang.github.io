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
:::info
Note, `continue` will skip code. If any code within your loop will determine if the loop continues, make sure `continue` doesn't jump over it.
:::

## Using compatibility mode?
The keyword will be `pluto_continue`, not `continue`.

### [Interactive Example](https://plutolang.github.io/web/#code=--%20Print%20every%20number%20besides%20five.%0D%0Afor%20i%20%3D%201%2C%2010%20do%0D%0A%20%20%20%20if%20i%20%3D%3D%205%20then%0D%0A%20%20%20%20%20%20%20%20continue%0D%0A%20%20%20%20end%0D%0A%20%20%20%20print(i)%0D%0A%20%20%20%20--%20continue%20jumps%20here.%0D%0Aend)