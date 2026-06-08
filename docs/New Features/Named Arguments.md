---
sidebar_position: 2
---
Instead of positional arguments, you can use the names of arguments you want to set:

```pluto
local function process_file(file, mode = "r", version = 1)
    print($"Processing {file} with mode '{mode}' and version {version}")
end
process_file(file = "hello.txt", version = 2) -- "Processing hello.txt with mode 'r' and version 2"
```

## Mixing arguments

You can use positional arguments for the first few arguments and then use named arguments for the latter ones, for example:

```pluto
local function process_file(file, mode = "r", version = 1)
    print($"Processing {file} with mode '{mode}' and version {version}")
end
process_file("hello.txt", version = 2) -- "Processing hello.txt with mode 'r' and version 2"
```

## Global functions

This feature is implemented entirely in the parser, so it only works for functions where the parser knows the signature. However, `$declare` can be used to (re)introduce this information:

```pluto
$declare sdiv: function(dividend: number, divisor: number): number

print(sdiv(divisor = 3, dividend = 6)) --> 2
```
