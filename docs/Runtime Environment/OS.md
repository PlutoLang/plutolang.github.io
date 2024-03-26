---
sidebar_position: 2
---
This page documents the changes & additions to the `os` library in Pluto, which is built on top of Lua 5.4's.

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