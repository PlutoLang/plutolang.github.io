During a function declaration, parameters can now declare their own default value, which must be a compile-time constant.
```lua showLineNumbers title="Example Code"
local function write(text = "No text provided.")
	print(text)
end

write() 		--> "No text provided."
write("Hello!") --> "Hello!"
```
```lua showLineNumbers title="This code is semantically equal."
local function write(text = "No text provided.")
	text ??= "No text provided."
	print(text)
end

write() 		--> "No text provided."
write("Hello!") --> "Hello!"
```
