Although Lua presents the option to use long jumps even when compiling as C++, it doesn't default to doing so, instead requiring you to define `LUA_USE_LONGJMP`.

Pluto, which is exclusively compiled as C++, defaults to using long jumps as they're faster than C++ exceptions and means Lua errors won't complicate your exception handling. However, you may still define `PLUTO_USE_THROW` in `luaconf.h` or your build config to fall back to using C++ exceptions.

`LUAI_THROW` and `LUAI_TRY` can still be modified and will take precedence.
