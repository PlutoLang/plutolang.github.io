The scheduler class — available via `require` — can be used to easily set up coroutine-based cooperative multitasking.

### `__construct`
The constructor takes no arguments.

### `add`
The `add` method can be used to turn a function into a coroutine. The coroutine is resumed once and then added to the scheduler.

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

### `yieldfunc`
`yieldfunc` is a property on the scheduler that can be used to customize how the scheduler itself yields. By default, this is a function calling `os.sleep(1)`.

```pluto
local scheduler = new (require"pluto:scheduler") ()

-- Yield to OS every second instead of every millisecond.
scheduler.yieldfunc = || -> os.sleep(1000)

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
```

### `errorfunc`
`errorfunc` is a property on the scheduler that can optionally be set to customize how the scheduler reports errors in its coroutines. By default, this is `nil`, in which case any coroutine errors are rethrown (via `coroutine.xresume`).
```pluto
local { scheduler } = require "*"

local sched = new scheduler()
sched.errorfunc = |err| -> do print(debug.traceback(err)) end
sched:add(function()
    error("this is urgent: fatal error")
end)
```
