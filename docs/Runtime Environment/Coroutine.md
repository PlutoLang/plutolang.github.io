This page documents the changes & additions to the `coroutine` library in Pluto, which is built on top of Lua 5.4's.

---
### `coroutine.xresume`
An alternative to coroutine.resume that rethrows any errors thrown by the coroutine.

---
### `coroutine.sleep`
Yields the current coroutine for the given number of milliseconds.
#### Parameters
1. The number of milliseconds to yield for.
