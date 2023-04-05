Pluto makes a plethora of improvements when it comes to object-oriented programming.

## Method Creation

A series of methods was otherwise ugly to implement into a Lua table.
```pluto showLineNumbers title="Old Code"
local t = {}

function t:f1(...) end
function t:f2(...) end
function t:f3(...) end
```
Now, you can inline these statements inside of your table.
```pluto showLineNumbers title="New Code"
local t = {
    function f1() end,
    function f2() end,
    function f3() end
}
```
This automatically marks the functions as methods.
:::caution
Keep in mind, this produces *methods*, meaning you'll need to use the colon invocation syntax to avoid positional ambiguities in your parameters.
:::

## Static Functions

For consistency with the above syntax, you can use 'static function' to declare non-method functions in your tables:

```pluto showLineNumbers
local t = {
    static function say(msg)
        print(msg)
    end
}
t.say("Hello") -- "Hello"
```
