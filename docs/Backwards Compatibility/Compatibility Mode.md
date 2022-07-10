Compatibility Mode in Pluto will prefix all of the new keywords with `pluto_` to prevent conflicts with any existing identifiers.
# How do I enable Compatibility Mode?
All you must do is define a single macro, which can be found [here](https://github.com/well-in-that-case/Pluto/blob/3547522b5ed93f35ef371a2930e733ca815589bf/src/luaconf.h#L871).
### When Compatibility Mode is Enabled
Only `pluto_continue` will exist.
### When Compatibility Mode is Disabled
Both `pluto_continue` and `continue` will be valid keywords, as to provide a smooth migration path.