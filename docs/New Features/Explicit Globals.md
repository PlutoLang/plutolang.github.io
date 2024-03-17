---
sidebar_position: 2
---

The optional `global` keyword can be used to explicitly declare global variables.

To enable it, simply do:
```pluto
pluto_use global
```

Then it can be used like this:
```pluto
global a = 1
```

Being identical to the following code:
```pluto
a = 1
```

## Compiler Warnings

When the `global` keyword is enabled, an 'implicit-global' warning is raised for any locals declared without it:

```pluto showLineNumbers
pluto_use global

a = 1
```
```
file.pluto:3: warning: implicit global creation [implicit-global]
    3 | a = 1
      | ^^^^^ here: prefix this with 'global' if creating a global was intended
```

## `pluto_use` Shorthand

Instead of having to do this:
```pluto
pluto_use "0.8.0", global
```
You can use a '+' after the version number to not only enable all non-compatible keywords, but also all optional keywords. In this case, the only optional keyword as of Pluto 0.9.0 is `global`, so the above and the following statement are identical:
```pluto
pluto_use "0.9.0+"
```
