The scheduler class — available via `require` — can be used to easily set up coroutine-based cooperative multitasking.

### `__construct`
The constructor takes no arguments.

### `yieldfunc`
`yieldfunc` is a property on the scheduler that can be used to customize how the scheduler itself yields. By default, this is a function calling `os.sleep(1)`.

### `add`
The `add` method can be used to turn a function into a coroutine, and adds that coroutine to the scheduler.

### `addloop`
The `addloop` method is a wrapper for the `add` method that keeps invoking the given function until it returns false.

### `run`
The `run` method activates the scheduler. The scheduler resumes all coroutines and then calls its yieldfunc until either all coroutines are finished, or coroutine throws an error — in which case it is rethrown.

```pluto
local scheduler = new (require"pluto:scheduler") ()

local loops = 0
scheduler:addloop(function()
    ++loops
    print(loops)
    return loops != 5
end)
scheduler:run()
--> 1
--> 2
--> 3
--> 4
--> 5

scheduler:add(function()
    print("3...")
    coroutine.sleep(1000)
    print("2...")
    coroutine.sleep(1000)
    print("1...")
    coroutine.sleep(1000)
    print("Boom!")
end)
scheduler:run()
--> 3...
--> 2...
--> 1...
--> Boom!
```
