To aid environments that have to be sandboxed, Pluto provides Execution Time Limit (ETL), which can be enabled by defining `PLUTO_ETL_ENABLE` in `luaconf.h` or your build config.

By default, ETL allows code to run for a total of 1 ms (1.000.000 nanos). This can be changed by overwriting `PLUTO_ETL_NANOS`.

Note that this is a hammer solution. If you only want to prevent stupid mistakes, [Infinite Loop Prevention](Infinite%20Loop%20Prevention) is a far better tool.
