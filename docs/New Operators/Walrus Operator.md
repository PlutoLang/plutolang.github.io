The Walrus operator allows you to perform assignment expresssions, where the second operand to your assignment is the value of the expression.

### Examples
```lua showLineNumbers
if a := get_value() then
	-- 'a' was assigned a truthy value.
else
	-- 'a' was assigned a falsy value.
end

--> This code is semantically equal.
local a = get_value()
if a then
	-- 'a' was assigned a truthy value.
else
	-- 'a' was assigned a falsy value.
end
```

Expressions for the Walrus operator may be evaluated multiple times in circumstances like loops.
```lua showLineNumbers
local function get()
	return true
end

while a := get() do
	--> This will loop forever. It'll keep evaluating `a := get()`, just like any other condition.
end
```

Like any other expression, you can also do things like this:
```lua showLineNumbers
if (a := math.random(1, 10)) < 5 then
	print("A is less than five! Value: " .. a)
else
	print("A is greater than five! Value: " .. a)
end
```

- The Walrus operator can be used anywhere an expression is accepted.
- The Walrus operator does not support tuple assignment.

This feature is inspired from Python's implementation, which can be found [here](https://docs.python.org/3/whatsnew/3.8.html#assignment-expressions).