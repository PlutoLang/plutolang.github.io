---
sidebar_position: 1
---

The `pairs` and `ipairs` functions are optimized by Pluto in several complex ways. On a consistent basis, `pairs` & `ipairs` loops are **3.5x** faster than their Lua counterparts.

# How does it work?
This optimization was published by Xmelia Hermit. It turns `pairs` & `ipairs` into stateless iterators by storing the state directly inside the loop. Whenever you use these in Pluto, the virtual machine will manually iterate the table structure within memory to avoid the overhead associated with lookups and function calls. 

It doesn't operate under all circumstances though, the state of the iterator is stored in the to-be-closed variable returned by these functions, which is the last variable they give. If you interact or modify this variable, then the optimization won't occur.
```
pairs: next, table, nil, nil
ipairs: ipairsaux, table, integer, nil
```
As long as you don't access the last `nil` value, you're fine.