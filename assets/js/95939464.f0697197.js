"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[9424],{5680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>m});var t=n(6540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=t.createContext({}),y=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=y(e.components);return t.createElement(p.Provider,{value:a},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},F=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),i=y(n),F=l,m=i["".concat(p,".").concat(F)]||i[F]||c[F]||r;return n?t.createElement(m,o(o({ref:a},d),{},{components:n})):t.createElement(m,o({ref:a},d))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=F;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[i]="string"==typeof e?e:l,o[1]=s;for(var y=2;y<r;y++)o[y]=n[y];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}F.displayName="MDXCreateElement"},5124:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>y});var t=n(8168),l=(n(6540),n(5680));const r={},o=void 0,s={unversionedId:"Runtime Environment/JSON",id:"Runtime Environment/JSON",title:"JSON",description:"Must be included via require.",source:"@site/docs/Runtime Environment/JSON.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/JSON",permalink:"/docs/Runtime Environment/JSON",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IO",permalink:"/docs/Runtime Environment/IO"},next:{title:"Math",permalink:"/docs/Runtime Environment/Math"}},p={},y=[{value:"<code>json.encode</code>",id:"jsonencode",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>json.decode</code>",id:"jsondecode",level:3},{value:"Parameters",id:"parameters-1",level:4}],d={toc:y},i="wrapper";function c(e){let{components:a,...n}=e;return(0,l.yg)(i,(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Must be included via ",(0,l.yg)("inlineCode",{parentName:"p"},"require"),"."),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"jsonencode"},(0,l.yg)("inlineCode",{parentName:"h3"},"json.encode")),(0,l.yg)("p",null,"Returns a string of JSON."),(0,l.yg)("h4",{id:"parameters"},"Parameters"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"data")," \u2014 A boolean, number, string, or table to encode as JSON."),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"pretty")," \u2014 Whether to return a human-readable string of JSON. Defaults to ",(0,l.yg)("inlineCode",{parentName:"li"},"false"),".")),(0,l.yg)("pre",{className:"shiki monokai-patched",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," json "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"json"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," data")),(0,l.yg)("div",{parentName:"code",className:"line"}),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"data "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Hello, World!"')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(json"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"encode"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(data"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"true"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"))")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e "Hello, World!"')),(0,l.yg)("div",{parentName:"code",className:"line"}),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"data "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," {")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    key "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Hello, World!"'),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},",")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    nested "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," {")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        nested_key "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1337")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    }")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"}")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(json"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"encode"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(data"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"true"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"))")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e {")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     "key": "Hello, World!",')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     "nested": {')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e         "nested_key": 1337')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e     }")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e }"))))),(0,l.yg)("p",null,"Because Lua tables do not have order guarantees, you can add an ",(0,l.yg)("inlineCode",{parentName:"p"},"__order")," field to fix the order:"),(0,l.yg)("pre",{className:"shiki monokai-patched",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," {")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    __order "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," { "),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"a"'),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"b"'),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"c"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," }"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},",")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    a "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},",")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    b "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"2"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},",")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    c "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"3")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"}")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"json"'),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"encode"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(t)) "),(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},'-- {"a":1,"b":2,"c":3}'))))),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"json.null")," value \u2014 assuming you did ",(0,l.yg)("inlineCode",{parentName:"p"},'local json = require("json")')," \u2014 can be used to encode JSON null values."),(0,l.yg)("pre",{className:"shiki monokai-patched",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," json "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"json"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"}),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(json"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"encode"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"json.null"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")) "),(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e null"))))),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"jsondecode"},(0,l.yg)("inlineCode",{parentName:"h3"},"json.decode")),(0,l.yg)("p",null,"Returns multiple potential types. If you pass a serialized boolean, number, or string, then it will return the same type. If you pass a complex JSON object, it will return a table."),(0,l.yg)("h4",{id:"parameters-1"},"Parameters"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"data")," \u2014 The JSON data to decode."),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("inlineCode",{parentName:"li"},"flags")," \u2014 Options to augment the return value. Multiple options can be combined with bitwise OR (",(0,l.yg)("inlineCode",{parentName:"li"},"|"),"). Defaults to ",(0,l.yg)("inlineCode",{parentName:"li"},"0"),".",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"json.withnull")," \u2014 decodes JSON null values as ",(0,l.yg)("inlineCode",{parentName:"li"},"json.null")," instead of ",(0,l.yg)("inlineCode",{parentName:"li"},"nil"),"."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"json.withorder")," \u2014 adds an ",(0,l.yg)("inlineCode",{parentName:"li"},"__order")," field to tables of decoded JSON objects. ",(0,l.yg)("inlineCode",{parentName:"li"},"json.encode")," respects this, so this is perfect for modifying data while preserving order.")))),(0,l.yg)("pre",{className:"shiki monokai-patched",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," json "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"json"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," data"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," encoded"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," decoded")),(0,l.yg)("div",{parentName:"code",className:"line"}),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- Basic Type")),(0,l.yg)("div",{parentName:"code",className:"line"}),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"data "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Hello, World!"')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"encoded "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," json"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"encode"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(data"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"true"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"decoded "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," json"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"decode"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(encoded)")),(0,l.yg)("div",{parentName:"code",className:"line"}),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(decoded "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," data)")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"type"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(decoded) "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"string"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"}),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- Complex Type")),(0,l.yg)("div",{parentName:"code",className:"line"}),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"data "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," {")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    key "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Hello"'),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},",")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    nested "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," {")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        nested_key "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1337")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    }")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"}")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"encoded "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," json"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"encode"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(data"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"true"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"decoded "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," json"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"decode"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(encoded)")),(0,l.yg)("div",{parentName:"code",className:"line"}),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(decoded"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"key "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Hello"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"type"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(decoded) "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"table"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(decoded"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"nested"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"nested_key "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1337"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"}),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- Flags")),(0,l.yg)("div",{parentName:"code",className:"line"}),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"encoded "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"[[{")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'    "null": null,')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'    "string": "Hello"')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"}]]")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"decoded "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," json"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"decode"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(encoded"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"json.withnull"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"|"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"json.withorder"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(decoded"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"__order["),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"] "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"null"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(decoded"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"null "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"json.null"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"assert"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(json"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"encode"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(decoded"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"true"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},") "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," encoded)"))))))}c.isMDXComponent=!0}}]);