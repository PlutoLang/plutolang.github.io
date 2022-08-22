During a function declaration, parameters can now declare their own default value.
```lua showLineNumbers="Example Code"
local function write(text = "No text provided.")
	print(text)
end

write() 		--> "No text provided."
write("Hello!") --> "Hello!"
```
Your default value must be a compile-time constant.