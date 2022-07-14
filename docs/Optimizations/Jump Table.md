Lua implemented a jump table, but it is not portable. Pluto has an additional jump table implementation for other compilers; however, it is not enabled by default as it can add minutes to compile time, depending on the setup. In some instances, it can increase overall virtual machine performance by ~5%.

If you would like to try it, define `PLUTO_FORCE_JUMPTABLE` in `luaconf.h` or your build config.
