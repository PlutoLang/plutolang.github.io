---
sidebar_position: 11
---
Instead of positional arguments, you can use the names of arguments you want to set:

```pluto
local function process_file(file, mode = "r", version = 1)
	print($"Processing {file} with mode '{mode}' and version {version}")
end
process_file(file = "hello.txt", version = 2) -- "Processing hello.txt with mode 'r' and version 2"
```

#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20function%20process_file(file%2C%20mode%20%3D%20%22r%22%2C%20version%20%3D%201)%0D%0A%20%20%20%20print(%24%22Processing%20%7Bfile%7D%20with%20mode%20'%7Bmode%7D'%20and%20version%20%7Bversion%7D%22)%0D%0Aend%0D%0Aprocess_file(file%20%3D%20%22hello.txt%22%2C%20version%20%3D%202))

Note that this example also makes use of [default arguments](Default%20Arguments.md) and [string interpolation](String%20Interpolation.md).

## Mixing arguments

You can use positional arguments for the first few arguments and then use named arguments for the latter ones, for example:

```pluto
local function process_file(file, mode = "r", version = 1)
	print($"Processing {file} with mode '{mode}' and version {version}")
end
process_file("hello.txt", version = 2) -- "Processing hello.txt with mode 'r' and version 2"
```

#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20function%20process_file(file%2C%20mode%20%3D%20%22r%22%2C%20version%20%3D%201)%0D%0A%20%20%20%20print(%24%22Processing%20%7Bfile%7D%20with%20mode%20'%7Bmode%7D'%20and%20version%20%7Bversion%7D%22)%0D%0Aend%0D%0Aprocess_file(%22hello.txt%22%2C%20version%20%3D%202))

## Limitations

This feature is implemented entirely in the parser and therefore only works for local functions at the moment.
