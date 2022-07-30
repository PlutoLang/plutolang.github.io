A series of methods was otherwise ugly to implement into a Lua table.
```lua showLineNumbers title="Old Code"
local t = {}

function t:f1(...) end
function t:f2(...) end
function t:f3(...) end
```
Now, you can inline these statements inside of your table.
```lua showLineNumbers title="New Code"
local t = {
    function f1() end,
    function f2() end,
    function f3() end
}
```
This automatically marks the functions as methods.
:::info
Keep in mind, this produces *methods*, meaning you'll need to use the colon invocation syntax to avoid positional ambiguities in your parameters.
:::