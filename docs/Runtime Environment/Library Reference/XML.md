Must be included via `require`.
### `xml.decode`
Returns a table representing the XML data.
#### Parameters:
1. `data` — The XML data to decode.
```pluto
local xml = require "pluto:xml"

print(dumpvar(xml.decode([[
    <entries>
        <entry primary>
            <name>primary</name>
        </entry>
    </entries>
]])))

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
If there is no single root element, a "body" element is implied as the root:
```pluto
local xml = require "pluto:xml"

print(dumpvar(xml.decode([[
    <entry/>
    <entry/>
]])))

--> {
-->     ["tag"] = string(4) "body",
-->     ["children"] = {
-->         [1] = {
-->             ["tag"] = string(5) "entry",
-->         },
-->         [2] = {
-->             ["tag"] = string(5) "entry",
-->         },
-->     },
--> }
```
