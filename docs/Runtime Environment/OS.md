This page documents the changes & additions to the `os` library in Pluto, which is built on top of Lua 5.4's.

---
### `os.platform`
`os.platform` is a global string containing the host platform. Can be "windows", "wasm", "linux", "macos", "android", or "unknown".

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

---
### `os.dnsresolve`
Asks the operating system to perform a DNS lookup.
#### Parameters
1. The DNS record type, e.g. `"A"` for IPv4 or `"AAAA"` for IPv6.
2. The domain name to query.
#### Return
An array of tables describing each record. Each table contains a `type` and `data` field.
#### Example
```pluto norun
print(dumpvar(os.dnsresolve("A", "one.one.one.one"))) -- { { type = "A", data = "1.1.1.1" }, { type = "A", data = "1.0.0.1" } }
```
Not available on Android/Termux or WASM builds of Pluto.

---
### `os.rename`, `os.remove`
Although we'd rather these functions be in the IO library, these Lua variants are retained, but modified to assume UTF-8 path encoding for the same cross-platform consistency the IO library has.

