This page documents the changes & additions to the `coroutine` library in Pluto, which is built on top of Lua 5.5's.

---
### Default Metatable
Pluto gives each coroutine/thread a metatable by default, akin to how each string has a metatable by default.
```pluto
local c = coroutine.create(|| -> do end)

-- Can do this:
c:resume()

-- As opposed to this:
coroutine.resume(c)
```
The default metatable is `{ __index = _G.coroutine }`.

---
### `coroutine.xresume`
An alternative to coroutine.resume that rethrows any errors thrown by the coroutine.

---
### `coroutine.sleep`
Yields the current coroutine for the given number of milliseconds.
#### Parameters
1. The number of milliseconds to yield for.
