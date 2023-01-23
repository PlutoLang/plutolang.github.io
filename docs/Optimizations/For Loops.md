---
sidebar_position: 1
---

The `pairs` and `ipairs` functions are optimized in Pluto. On a consistent basis, `pairs` & `ipairs` loops are **3.5x** faster than their Lua counterparts.

# How does it work?
It doesn't operate under all circumstances though, the state of the iterator is stored in the to-be-closed variable returned by these functions, which is the last variable they give. If you interact or modify this variable, then the optimization won't occur.
```
pairs: next, table, nil, nil
ipairs: ipairsaux, table, integer, nil
```
As long as you don't access the last `nil` value, you're fine.
:::info
This optimization was published by Xmelia Hermit.
:::