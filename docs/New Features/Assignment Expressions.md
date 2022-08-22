Assignment expressions use the Walrus operator, and they allow you to make a local assignment inside of an expression. The second operand of your expression is returned.

### Examples
```lua showLineNumbers
if a := false then
	-- 'a' was assigned a truthy value.
else
	-- 'a' was assigned a falsy value.
end
assert(a == false)
```
```lua showLineNumbers
assert((a := "hello") == "hello")
assert(a == "hello")
```

This feature is inspired from Python's implementation, which can be found [here](https://docs.python.org/3/whatsnew/3.8.html#assignment-expressions).