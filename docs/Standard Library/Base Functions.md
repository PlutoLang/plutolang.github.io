New functions for the base library, implemented by Pluto.

### sleep
#### Parameters:
1. The amount of milliseconds to sleep for.
#### Example
```pluto showLineNumbers title="Basic Usage"
sleep(1000) --> Pause this thread for 1000ms.
```
:::info
This function has been deprecated in favor of `os.sleep`. It will be removed in 0.5.0.
:::