String preallocation can be used in C functions to avoid a copy when data is allocated just for Lua, e.g.:

```cpp
auto data = malloc(size);
some_func(data, size);
lua_pushlstring(L, (const char*)data, size);
free(data);
```

This can be optimized by including `lstring.h` and replacing the lines around the call:

```cpp
char shrtbuf[LUAI_MAXSHORTLEN];
auto data = plutoS_prealloc(L, shrtbuf, size);
some_func(data, size); // same as before
plutoS_commit(L, data, size);
```

This is something we use throughout many of our standard libraries (base64, crypto, etc.) for more performance.
