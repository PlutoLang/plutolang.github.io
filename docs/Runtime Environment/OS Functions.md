---
sidebar_position: 2
---
New functions for the `os` library, implemented by Pluto.
### os.sleep
#### Parameters:
1. The amount of milliseconds to sleep for.
#### Example
```pluto showLineNumbers title="Basic Usage"
os.sleep(1000) --> Pause this thread for 1000ms.
```
### os.millis
Returns milliseconds since epoch.
:::info
The return of this function is implementation-specific.
:::
### os.nanos
Returns nanoseconds since epoch.
:::info
The return of this function is implementation-specific.
:::
### os.seconds
Returns seconds since epoch.
:::info
The return of this function is implementation-specific.
:::
### os.unixseconds
Returns seconds since UNIX epoch.