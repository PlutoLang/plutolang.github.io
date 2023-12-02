---
sidebar_position: 3
---
## Operator Aliases
These operators function the same, but they're more consistent with what's been standardized through programming today.

- `!` is an alias for `not`, the boolean inversion operator.
- `**` is an alias for `^`, the exponent operator.
- `!=` is an alias for `~=`, the inequality operator.

## Compound Operators
A plethora of compound operators are available in Pluto:
- Modulo: `%=`
- Addition: `+=`
- Exponent: `^=`
- Bitwise OR: `|=`
- Subtraction: `-=`
- Bitshift left: `<<=`
- Bitwise AND: `&=`
- Float division: `/=`
- Bitshift right: `>>=`
- Multiplication: `*=`
- Concatenation: `..=`
- Integer division: `//=`
- Nil-Coalescing: `??=`

```pluto showLineNumbers=true
local a = 1
a = a + 1 
a += 1
```

:::info
Compound operators will call the same metamethods as the normal arithmetic operation would.

For older processors, compound operators can yield a noteworthy performance improvement.
:::

## Coalescing Operator
The nil-coalescing operator is helpful for evaluating values against `nil`. 

If the left-hand operand is `nil`, it returns the right-hand operand. Otherwise, it returns the left-hand operand.
```pluto showLineNumbers=true
local function say(message)
	print(message ?? "The message was nil.")
end

say() --> The message was nil.
say(nil) --> The message was nil.
say("Hello, world!") --> Hello, world!
````

It's a cleaner version of this code:
```pluto showLineNumbers=true
local function say(message)
	if message == nil then
		message = "The message was nil."
	end

	print(message)
end

say() --> The message was nil.
say(nil) --> The message was nil.
say("Hello, world!") --> Hello, world!
```

You can even use compound assignment:
```pluto showLineNumbers
local function say(message)
	message ??= "The message was nil."

	--[[
		It's the same as this:

		if message == nil then
			message = "The message was nil."
		end
	--]]

	print(message)
end

say() --> The message was nil.
say(nil) --> The message was nil.
say("Hello, world!") --> Hello, world!
```
:::info
This operator does not implement any metamethods.
:::

## Walrus Operator
The Walrus operator allows you to perform assignments inside of conditional expresssions.

The second operand to your assignment is the value of the expression.

```pluto showLineNumbers
if a := get_value() then
	-- 'a' was assigned a truthy value.
else
	-- 'a' was assigned a falsy value.
end
```
You can imagine it like this, but note they're not always the same:
```pluto showLineNumbers
local a = get_value()
if a then
	-- 'a' was assigned a truthy value.
else
	-- 'a' was assigned a falsy value.
end
```

What makes the Walrus operator different is that it'll be evaluated as many times as the condition:
```pluto showLineNumbers
local function get()
	return math.random(0, 1)
end

while a := get() do
	--> In the next iteration:
	-->   - `a` will be assigned to `get()`.
	-->   - Then the value will be evaluated for the condition.
	-->
	--> This happens because the Walrus operator itself is the condition.
	--> It's not a short-hand for generating an assignment.
	-->
	--> Be aware of this if you intend on using the Walrus operator with loops.
end
```