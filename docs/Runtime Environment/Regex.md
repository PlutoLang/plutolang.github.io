The Regex module is available via `require "pluto:regex"` and provides [Soup's flavor](https://github.com/calamity-inc/Soup/blob/senpai/docs/user/regex.md) of the popular string matching language.

### `regex.new`
Parses a pattern and creates an instance for it.
#### Parameters
1. The regex to be *compiled*. Note that this must be a full pattern with a start and end delimiter (commonly `/`). Flags may optionally be present after the end delimiter.
#### Returns
A pattern instance.

### `regex.match`
Attempt to match a pattern instance.
#### Parameters
1. The pattern instance.
#### Returns
A table with an index/key for each matching group or nil if no matches.

```pluto
local regex = require "pluto:regex"
local pattern = new regex [[/^the (?:(.+) )?one$/]]

print(dumpvar(pattern:match("the one")))
--> {
-->     [0] = string(7) "the one",
--> }

print(dumpvar(pattern:match("the chosen one")))
--> {
-->     [1] = string(6) "chosen",
-->     [0] = string(14) "the chosen one",
--> }

print(pattern:match("not the one"))
--> nil
```
The overall pattern match is in index 0, and in this case there is only the 1 capturing group, that being `(.+)`.

Capture group names will be used if available:
```pluto
local regex = require "pluto:regex"
local pattern = new regex [[/^the (?:(?'what'.+) )?one$/]]

print(dumpvar(pattern:match("the chosen one")))
--> {
-->     [0] = string(14) "the chosen one",
-->     ["what"] = string(6) "chosen",
--> }
```
