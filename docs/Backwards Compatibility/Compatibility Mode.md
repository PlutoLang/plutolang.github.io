Compatibility Mode in Pluto will prefix all of the new keywords with `pluto_` to prevent conflicts with any existing identifiers.

## How do I enable Compatibility Mode?
All you must do is define `PLUTO_COMPATIBLE_MODE` in `luaconf.h` or your build config.
### When Compatibility Mode is Enabled
Only `pluto_continue` will exist.
### When Compatibility Mode is Disabled
Both `pluto_continue` and `continue` will be valid keywords, as to provide a smooth migration path.

## Granual Compatibility Mode

Pluto allows you to granually enable compatibility mode for individual keywords by defining their related macro, e.g. `PLUTO_COMPATIBLE_SWITCH` for `switch`.

By default, `PLUTO_COMPATIBLE_MODE` will simply set the related macro for every keyword.
