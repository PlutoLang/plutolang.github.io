You can optionally use 'let' instead of 'local' when declaring scoped variables.

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
