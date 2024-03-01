---
sidebar_position: 11
---
During a function declaration, parameters can now declare their own default value.
```pluto showLineNumbers title="Example Code"
local function write(text = "No text provided.")
    print(text)
end

write()         --> "No text provided."
write("Hello!") --> "Hello!"
```
```pluto showLineNumbers title="This code behaves identically."
local function write(text)
    if text == nil then
        text = "No text provided."
    end
    print(text)
end

write()         --> "No text provided."
write("Hello!") --> "Hello!"
```

#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20function%20write(text%20%3D%20%22No%20text%20provided.%22)%0D%0A%20%20%20%20print(text)%0D%0Aend%0D%0A%0D%0Awrite()%20%20%20%20%20%20%20%20%20--%3E%20%22No%20text%20provided.%22%0D%0Awrite(%22Hello!%22)%20--%3E%20%22Hello!%22)
