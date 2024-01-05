Pluto introduces 2 optional shorthands for the `local` statement.

## Let

To enable the `let` keyword, simply do:
```pluto
pluto_use let
```

The usage is exactly the same as the `local` keyword.

However, note that this will make `let` a reserved keyword, so you can't name any variables as such.
If this is causing ambiguities in your script, you can disable it again after you're done with it:
```pluto
pluto_use let = false
```

## Const

To enable the `const` keyword, simply do:
```pluto
pluto_use const
```

This allows you to do the following:
```pluto
const meaning = 42
```
As a shorthand for:
```pluto
local meaning <const> = 42
```

## `pluto_use` Shorthands

When using `pluto_use` with a version number, you can also enable optional keywords using '+':
- `pluto_use "0.7.0+"` is the same as `pluto_use "0.6.0", let`
- `pluto_use "0.8.0+"` is the same as `pluto_use "0.8.0", let, const`

## For Integrators

You can enable `let` and `const` in your Pluto environment by default by defining the `PLUTO_USE_LET` and `PLUTO_USE_CONST` macros in `luaconf.h` or your build config.
