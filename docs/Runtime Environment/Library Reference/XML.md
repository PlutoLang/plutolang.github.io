Must be included via `require`.
### `xml.decode`
Returns a table representing the XML data.
#### Parameters:
1. `data` — The XML data to decode.
```pluto
local xml = require "pluto:xml"

print(dumpvar(xml.decode([[<entries><entry primary><name>primary</name></entry></entries>]])))

--> {
-->     ["tag"] = string(7) "entries",
-->     ["children"] = {
-->         [1] = {
-->             ["tag"] = string(5) "entry",
-->             ["attributes"] = {
-->                 ["primary"] = string(0) "",
-->             },
-->             ["children"] = {
-->                 [1] = {
-->                     ["tag"] = string(4) "name",
-->                     ["children"] = {
-->                         [1] = string(7) "primary",
-->                     },
-->                 },
-->             },
-->         },
-->     },
--> }
```
