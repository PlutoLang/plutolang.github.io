Pluto allows you to moderate what scripts are allowed to run in your environment.

## Disable Compiled Code

You can disable execution of compiled bytecode, by defining `PLUTO_DISABLE_COMPILED` in `luaconf.h` or your build config.

## Filter Loaded Files

You may already have filters before passing scripts to run onto Pluto, but mechanisms such as `dofile` and `require` may be used to bypass them. To help you combat this, Pluto provides `PLUTO_LOADFILE_HOOK`. For example, if you set it to `ContmodOnLoadfile` in `luaconf.h` or your build config, you only need to define that function somewhere in your code, like this:

```cpp
extern "C" bool ContmodOnLoadfile(const char* filename) {
  return !isCodeProhibited(soup::string::fromFile(filename));
}
```

This requires you to use Pluto as a static library, as otherwise this linking relationship won't work.
