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

Note that this example also makes use of [default arguments](Default%20Arguments.md) and [string interpolation](String%20Interpolation.md).

## Mixing arguments

You can use positional arguments for the first few arguments and then use named arguments for the latter ones, for example:

```pluto
local function process_file(file, mode = "r", version = 1)
	print($"Processing {file} with mode '{mode}' and version {version}")
end
process_file("hello.txt", version = 2) -- "Processing hello.txt with mode 'r' and version 2"
```

## Limitations

This feature is implemented entirely in the parser and therefore only works for local functions at the moment.
