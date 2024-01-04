Lua implemented a jump table, but it is only compatible with clang and gcc. Pluto has an additional jump table implementation for other compilers; however, it is not enabled by default because it can add minutes to compile time, depending on the setup. However, it may be beneficial to you regardless, as a jump table can increase virtual machine performance by up to 5%.

If you would like to try it, define `PLUTO_FORCE_JUMPTABLE` in `luaconf.h` or your build config.
