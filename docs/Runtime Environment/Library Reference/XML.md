Must be included via `require`.
### `xml.decode`
Returns a table representing the XML data.
#### Parameters:
1. `data` — The XML data to decode.
2. `parser` — Which parser to use against the data. Can be "html", "xml" (default), or "lax" (XML but accepts attributes without `=`).
```pluto
local xml = require "pluto:xml"

print(dumpvar(xml.decode([[
    <entries>
        <entry type="primary">
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
-->                 ["type"] = string(7) "primary",
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
