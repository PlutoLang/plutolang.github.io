Pluto allows you to use non-ASCII characters for variable names, whereas in Lua this would be invalid:

```pluto
local ヴァ = "hello"
print(ヴァ) --> hello
```

On the technical side, this just means the byte range 0x80-0xff is now allowed, so one might say that this is not specific to the Unicode/UTF-8 standard, but we highly discourage the use of encodings other than UTF-8 due to interoperability concerns.
