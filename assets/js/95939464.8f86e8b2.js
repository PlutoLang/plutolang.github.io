"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[9424],{9832:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var d=r(4848),o=r(8453);const s={sidebar_position:3},t=void 0,l={id:"Runtime Environment/JSON",title:"JSON",description:"Must be included via require.",source:"@site/docs/Runtime Environment/JSON.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/JSON",permalink:"/docs/Runtime Environment/JSON",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"HTTP",permalink:"/docs/Runtime Environment/HTTP"},next:{title:"Scheduler",permalink:"/docs/Runtime Environment/Scheduler"}},c={},i=[{value:"<code>json.encode</code>",id:"jsonencode",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>json.decode</code>",id:"jsondecode",level:3},{value:"Parameters",id:"parameters-1",level:4}];function a(e){const n={code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["Must be included via ",(0,d.jsx)(n.code,{children:"require"}),"."]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"jsonencode",children:(0,d.jsx)(n.code,{children:"json.encode"})}),"\n",(0,d.jsx)(n.p,{children:"Returns a string of JSON."}),"\n",(0,d.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"data"})," \u2014 A boolean, number, string, or table to encode as JSON."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"pretty"})," \u2014 Whether to return a human-readable string of JSON. Defaults to ",(0,d.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-pluto",children:'local json = require("json")\r\nlocal data\r\n\r\ndata = "Hello, World!"\r\nprint(json.encode(data, true))\r\n--\x3e "Hello, World!"\r\n\r\ndata = {\r\n    key = "Hello, World!",\r\n    nested = {\r\n        nested_key = 1337\r\n    }\r\n}\r\nprint(json.encode(data, true))\r\n--\x3e {\r\n--\x3e     "key": "Hello, World!",\r\n--\x3e     "nested": {\r\n--\x3e         "nested_key": 1337\r\n--\x3e     }\r\n--\x3e }\n'})}),"\n",(0,d.jsxs)(n.p,{children:["Because Lua tables do not have order guarantees, you can add an ",(0,d.jsx)(n.code,{children:"__order"})," field to fix the order:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-pluto",children:'local t = {\r\n    __order = { "a", "b", "c" },\r\n    a = 1,\r\n    b = 2,\r\n    c = 3\r\n}\r\nprint(require"json".encode(t)) -- {"a":1,"b":2,"c":3}\n'})}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"json.null"})," value \u2014 assuming you did ",(0,d.jsx)(n.code,{children:'local json = require("json")'})," \u2014 can be used to encode JSON null values."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-pluto",children:'local json = require("json")\r\n\r\nprint(json.encode(json.null)) --\x3e null\n'})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"jsondecode",children:(0,d.jsx)(n.code,{children:"json.decode"})}),"\n",(0,d.jsx)(n.p,{children:"Returns multiple potential types. If you pass a serialized boolean, number, or string, then it will return the same type. If you pass a complex JSON object, it will return a table."}),"\n",(0,d.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"data"})," \u2014 The JSON data to decode."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"flags"})," \u2014 Options to augment the return value. Multiple options can be combined with bitwise OR (",(0,d.jsx)(n.code,{children:"|"}),"). Defaults to ",(0,d.jsx)(n.code,{children:"0"}),".","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"json.withnull"})," \u2014 decodes JSON null values as ",(0,d.jsx)(n.code,{children:"json.null"})," instead of ",(0,d.jsx)(n.code,{children:"nil"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"json.withorder"})," \u2014 adds an ",(0,d.jsx)(n.code,{children:"__order"})," field to tables of decoded JSON objects. ",(0,d.jsx)(n.code,{children:"json.encode"})," respects this, so this is perfect for modifying data while preserving order."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-pluto",children:'local json = require("json")\r\nlocal data, encoded, decoded\r\n\r\n-- Basic Type\r\n\r\ndata = "Hello, World!"\r\nencoded = json.encode(data, true)\r\ndecoded = json.decode(encoded)\r\n\r\nassert(decoded == data)\r\nassert(type(decoded) == "string")\r\n\r\n-- Complex Type\r\n\r\ndata = {\r\n    key = "Hello",\r\n    nested = {\r\n        nested_key = 1337\r\n    }\r\n}\r\nencoded = json.encode(data, true)\r\ndecoded = json.decode(encoded)\r\n\r\nassert(decoded.key == "Hello")\r\nassert(type(decoded) == "table")\r\nassert(decoded.nested.nested_key == 1337)\r\n\r\n-- Flags\r\n\r\nencoded = [[{\r\n    "null": null,\r\n    "string": "Hello"\r\n}]]\r\ndecoded = json.decode(encoded, json.withnull | json.withorder)\r\nassert(decoded.__order[1] == "null")\r\nassert(decoded.null == json.null)\r\nassert(json.encode(decoded, true) == encoded)\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var d=r(6540);const o={},s=d.createContext(o);function t(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);