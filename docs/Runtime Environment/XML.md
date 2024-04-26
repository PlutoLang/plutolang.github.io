---
sidebar_position: 3
---
Must be included via `require`.

---
### `xml.encode`
Returns a string of XML.
#### Parameters
1. `data` — A table or string to encode as XML.
2. `pretty` — Whether to return a human-readable string of XML. Defaults to `false`.
```pluto
local xml = require "pluto:xml"

print(xml.encode({
    tag = "root",
    children = {
        {
            tag = "entry",
            attributes = {
                ["type"] = "primary"
            },
            children = {
                "Text node"
            }
        },
        {
            tag = "entry"
        }
    }
}, true))
--> <root>
-->     <entry type="primary">
-->         Text node
-->     </entry>
-->     <entry></entry>
--> </root>
```
---
### `xml.decode`
Returns a table representing the XML data.
#### Parameters
1. `data` — The XML data to decode.
2. `parser` — Which parser to use against the data. Can be "html", "xml" (default), or "lax" (XML but accepts attributes without `=`).
```pluto
local xml = require "pluto:xml"

local root = xml.decode([[
    <entries>
        <entry type="primary">
            <name>primary</name>
        </entry>
    </entries>
]])

print(dumpvar(root))
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

For ease of use, the returned tables have an `__index` metamethod:
```pluto
-- root is <entries>, so its first child is <entry>.
-- we make use of the metamethod to get to <name>:
print(dumpvar(root.children[1].name))
--> {
-->     ["tag"] = string(4) "name",
-->     ["children"] = {
-->         [1] = string(7) "primary",
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
