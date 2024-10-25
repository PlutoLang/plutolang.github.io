---
sidebar_position: 1
---
During a function declaration, parameters can now declare their own default value.
```pluto showLineNumbers title="Example Code"
local function write(text = "No text provided.")
    print(text)
end

write()         --> No text provided.
write("Hello!") --> Hello!
```
```pluto showLineNumbers title="This code behaves identically."
local function write(text)
    if text == nil then
        text = "No text provided."
    end
    print(text)
end

write()         --> No text provided.
write("Hello!") --> Hello!
```
