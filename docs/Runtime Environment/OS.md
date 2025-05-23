This page documents the changes & additions to the `os` library in Pluto, which is built on top of Lua 5.4's.

### `os.platform`
`os.platform` is a global string containing the host platform. Can be "windows", "wasm", "linux", "macos", "android", or "unknown".

```pluto
if _PVERSION == nil then
    print("Plain Lua detected (".._VERSION..")")
else
    io.write("Pluto detected (".._PVERSION.."), based on ".._VERSION)
    if os.platform then
        io.write(", running on "..os.platform)
    end
    io.write("\n")
end
```

---
### `os.arch`

`os.arch` is a global string containing the host CPU architecture as well as the bit width, separated by a comma. For example, it would be `x86, 64-bit` for x86_64, `arm, 64-bit` for ARM64, and `wasm, 32-bit` for a typical WebAssembly environment.

---
### `os.sleep`
#### Parameters
1. The amount of milliseconds to sleep for.
#### Example
```pluto
os.sleep(1000) -- Pause this thread for 1000ms.
```
---
### `os.nanos`, `os.micros`, `os.millis`, `os.seconds`
All of these return their respective times since implementation-specific epoch.
### `os.unixseconds`
Returns seconds since UNIX epoch.
