During a function declaration, parameters can now declare their own default value, which must be a compile-time constant.
```pluto showLineNumbers title="Example Code"
local function write(text = "No text provided.")
	print(text)
end

write() 		--> "No text provided."
write("Hello!") --> "Hello!"
```
```pluto showLineNumbers title="This code is semantically equal."
local function write(text)
	text ??= "No text provided."
	print(text)
end

write() 		--> "No text provided."
write("Hello!") --> "Hello!"
```
