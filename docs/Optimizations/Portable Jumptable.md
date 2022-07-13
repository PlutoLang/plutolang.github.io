Lua does come with a jumptable, but it only compiles via GCC. Pluto has an additional jumptable implementation for other compilers; however, it is not enabled by default as it can add minutes to compile time, depending on the setup.

If you would like to try it, define `PLUTO_FORCE_JUMPTABLE` in `luaconf.h` or your build config.
