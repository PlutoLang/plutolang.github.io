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

When the `global` keyword is enabled, an 'implicit-global' warning is raised for any globals declared without it:

```pluto showLineNumbers
pluto_use global

a = 1
```
```
file.pluto:3: warning: implicit global creation [implicit-global]
    3 | a = 1
      | ^^^^^ here: prefix this with 'global' if creating a global was intended
```