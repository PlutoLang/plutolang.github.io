Must be included via `require`.

:::caution
This is intended for advanced users.
:::

---
### `ffi.open`
Loads a DLL/SO (dynamic link library/shared object).
#### Parameters
1. The name of the library which is to be located by the operating system. A relative or absolute path also works.
#### Returns
An FFI library instance.
#### Example
The following C++ code:
```cpp title="lib.cpp"
#ifdef _WIN32
    #define EXPORT __declspec(dllexport)
#else
    #define EXPORT
#endif

extern "C" EXPORT int MY_MAGIC_INT = 69;

extern "C" EXPORT int add(int a, int b) {
    return a + b;
}
```
Compiled like this:
- Windows: `clang -std=c++17 --shared -o lib.dll lib.cpp`
- Linux/MacOS: `clang -std=c++17 --shared -o liblib.so lib.cpp`

Can be used like this:
```pluto norun
local ffi = require "pluto:ffi"
local lib = ffi.open(os.platform == "windows" ? "lib" : "./liblib.so")
assert(lib:value("i32", "MY_MAGIC_INT") == 69)
assert(lib:wrap("i32", "add", "i32", "i32")(38, 4) == 42)
```
---
### `ffi.struct`
Parses a subset of C for a struct.
#### Paramters
1. The C source code.
#### Returns
An FFI Struct Type instance.
#### Example 
```pluto
local ffi = require "pluto:ffi"

local Color = ffi.struct[[
    struct Color {
        uint8_t r;
        uint8_t g;
        uint8_t b;
    };
]]

local c = new Color()
c.r = 255
print(c.r) --> 255
```

---
### `ffi.new`
Instantiate an FFI Struct Type by name or instance.
#### Parameters
1. An FFI Struct Type instance or the name of one stored on the FFI library itself.
#### Returns
A new instance of the struct.

---
### `ffi.cdef`
Parses a subset of C for structs to be stored on the FFI library itself.
#### Parameters
1. The C source code.
#### Example
```pluto
local ffi = require "pluto:ffi"

ffi.cdef[[
    struct Color {
        uint8_t r;
        uint8_t g;
        uint8_t b;
    };
]]

local c = ffi.new("Color")
c.r = 255
print(c.r) --> 255
```

---
### `ffi.sizeof`
Measures the size of an FFI Struct Type.
#### Parameters
1. An FFI Struct Type instance, the name of a struct stored on the FFI library itself, or an instance of the struct.
#### Returns
The size in bytes.

---
### `ffi.offsetof`
Measures the offset of a field on an FFI Struct Type.
#### Parameters
1. An FFI Struct Type instance, the name of a struct stored on the FFI library itself, or an instance of the struct.
2. The name of the field.
#### Returns
The offset in bytes.

---
### `ffi.nullptr`
This constant can be used to give `0` to a "ptr"-type argument.

---
### `ffi.alloc`
Creates a userdata with the given size.
#### Parameters
1. The size in bytes.
#### Returns
A new userdata.

---
### `ffi.write`
Copies data from a string to a userdata.
#### Parameters
1. The string.
2. The userdata.

---
### `ffi.read`
Turns a userdata into a string.
#### Parameters
1. The userdata.
#### Returns
A string.

---
### `ffi.callback`
Creates a function pointer callable from native code. This function is only available on x86, x86_64, and aarch64.
#### Parameters
1. The return type. Can be "void", "i8", "i16", "i32", "i64", "u8", "u16", "u32", "u64", "f32", "f64", "ptr" or "str".
2. The argument type(s).
3. The Pluto function to execute.
#### Returns
An FFI Callback instance.
#### Example
```pluto norun
local ffi = require "pluto:ffi"
local cb = ffi.callback("i32", "i32", function(val)
    return val + 69
end)
lib:wrap("void", "set_cb", "ptr")(cb)
assert(lib:wrap("i32", "call_cb", "i32")(42) == 42 + 69)
```

:::info
This function is incompatible with [W^X](https://en.wikipedia.org/wiki/W%5EX). ARM-based MacOS may enforce this without the `com.apple.security.cs.allow-jit` entitlement.
:::

---
## FFI Library Class
Obtained from `ffi.open`.

### `wrap`
Creates a function wrapper.
#### Parameters
1. The return type. Can be "void", "i8", "i16", "i32", "i64", "u8", "u16", "u32", "u64", "f32", "f64", "ptr" or "str".
2. The name of the function.
3. The argument type(s). Can be "void", "i8", "i16", "i32", "i64", "u8", "u16", "u32", "u64", "f32", "f64", "ptr" or "str".
#### Returns
A new function wrapper instance, which can be called.

### `value`
Gets an exported value and interprets it using the given type.
#### Parameters
1. The type. Can be "void", "i8", "i16", "i32", "i64", "u8", "u16", "u32", "u64", "f32", "f64", "ptr" or "str".
2. The name of the export.
#### Returns
The interpreted value.

### `cdef`
Parses a subset of C for values and functions and puts them on the library instance.
#### Parameters
1. The C source code.
#### Example
```pluto norun
local ffi = require "pluto:ffi"
local lib = ffi.open(os.platform == "windows" ? "lib" : "./liblib.so")
lib:cdef[[
    int MY_MAGIC_INT;
    int add(int a, int b);
]]
assert(lib.MY_MAGIC_INT == 69)
assert(lib.add(38, 4) == 42)
```
This is equivalent to the following:
```pluto norun
local ffi = require "pluto:ffi"
local lib = ffi.open(os.platform == "windows" ? "lib" : "./liblib.so")

lib.MY_MAGIC_INT = lib:value("i32", "MY_MAGIC_INT")
lib.add = lib:wrap("i32", "add", "i32", "i32")

assert(lib.MY_MAGIC_INT == 69)
assert(lib.add(38, 4) == 42)
```

---
## FFI Callback Class
Returned from `ffi.callback`.

### `blocking`
Gets or sets whether native calls from non-Pluto threads block until processed.
#### Parameters
1. (optional) A boolean.
#### Returns
The current state if no parameter is provided.

### `tick`
Processes pending callback invocations queued from other threads.

### `defaultreturn`
Gets or sets the value returned to native code while callbacks are queued in non-blocking mode.
#### Parameters
1. (optional) The value to return.
#### Returns
The current default return value if no parameter is provided.

### `callcount`
Returns the number of times the callback has been invoked.
