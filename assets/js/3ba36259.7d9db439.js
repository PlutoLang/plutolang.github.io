"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[5992],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var o=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=l,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||n;return a?o.createElement(k,r(r({ref:t},c),{},{components:a})):o.createElement(k,r({ref:t},c))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<n;p++)r[p]=a[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6320:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=a(7462),l=(a(7294),a(3905));const n={sidebar_position:10},r=void 0,i={unversionedId:"Compatibility",id:"Compatibility",title:"Compatibility",description:"Pluto aims to be source- and bytecode-compatible with existing Lua code such that it can simply be used as a drop-in replacement for Lua, and Lua modules can simply be used in Pluto codebases. In the vast majority of cases, we do succeed, but there are a few things to be aware of.",source:"@site/docs/Compatibility.md",sourceDirName:".",slug:"/Compatibility",permalink:"/docs/Compatibility",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Table Length",permalink:"/docs/Optimizations/Table Length"},next:{title:"For Integrators",permalink:"/docs/For Integrators"}},s={},p=[{value:"New Keywords",id:"new-keywords",level:2},{value:"Mitigations",id:"mitigations",level:3},{value:"Compile-time Configuration (pluto_use)",id:"compile-time-configuration-pluto_use",level:3},{value:"Compatible Keywords",id:"compatible-keywords",level:3},{value:"Default Table Metatable",id:"default-table-metatable",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Pluto aims to be source- and bytecode-compatible with existing Lua code such that it can simply be used as a drop-in replacement for Lua, and Lua modules can simply be used in Pluto codebases. In the vast majority of cases, we do succeed, but there are a few things to be aware of."),(0,l.kt)("h2",{id:"new-keywords"},"New Keywords"),(0,l.kt)("p",null,"Pluto adds the following reserved tokens:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"switch")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"continue")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enum")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"new")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"class")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"parent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"try")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"catch"))),(0,l.kt)("p",null,"Which means you can't use them as identifiers. They can still be used with short-hand table indexes and goto labels because Pluto ",(0,l.kt)("a",{parentName:"p",href:"QoL%20Improvements/Reserved%20Identifiers"},"allows reserved keywords to be used in those contexts"),"."),(0,l.kt)("h3",{id:"mitigations"},"Mitigations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"For Integrators:")," Check your ",(0,l.kt)("inlineCode",{parentName:"li"},"luaconf.h"),' file to find the relevant macros under the "Compatibility" heading.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"For Scripters:")," Use ",(0,l.kt)("inlineCode",{parentName:"li"},"pluto_use")," in the source files. ",(0,l.kt)("inlineCode",{parentName:"li"},"-- @pluto_use * = false")," to simply disable all incompatible keywords."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"For Users:")," Pass the ",(0,l.kt)("inlineCode",{parentName:"li"},"-c")," flag to ",(0,l.kt)("inlineCode",{parentName:"li"},"pluto")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"plutoc"),".")),(0,l.kt)("p",null,"The following sections will go more in-depth on source-level mitigations (for scripters)."),(0,l.kt)("h3",{id:"compile-time-configuration-pluto_use"},"Compile-time Configuration (pluto_use)"),(0,l.kt)("p",null,"You can change the meaning of Pluto's reserved tokens at any point in your scripts using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--@pluto_use")," comment or ",(0,l.kt)("inlineCode",{parentName:"p"},"pluto_use")," statement."),(0,l.kt)("p",null,"For example, to disable all non-compatible keywords except for ",(0,l.kt)("inlineCode",{parentName:"p"},"switch"),":"),(0,l.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: #88846F"}},"-- "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"@pluto_use"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #88846F"}}," * = false, switch"))))),(0,l.kt)("p",null,"It is also possible to specify a version number, which is a shorthand for the keywords available at that version:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"0.2.0"')," corresponds to ",(0,l.kt)("inlineCode",{parentName:"li"},"* = false, switch, continue")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"0.5.0"')," corresponds to ",(0,l.kt)("inlineCode",{parentName:"li"},"* = false, switch, continue, enum")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"0.6.0"')," corresponds to ",(0,l.kt)("inlineCode",{parentName:"li"},"* = false, switch, continue, enum, new, class, parent, export")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"0.8.0"')," corresponds to ",(0,l.kt)("inlineCode",{parentName:"li"},"* = false, switch, continue, enum, new, class, parent, export, try, catch"))),(0,l.kt)("p",null,"So, writing a portable script that only makes use of Pluto 0.8.0's features requires this at the beginning:"),(0,l.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"pluto_use"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"0.8.0"'))))),(0,l.kt)("p",null,"This feature also supports quick encompassing of optional features. So, instead of:"),(0,l.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"pluto_use"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"0.8.0"'),(0,l.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"global"))))),(0,l.kt)("p",null,"You can use a '+' after the version number to also enable all of the optional features. As of 0.9.0, the only optional feature is ",(0,l.kt)("a",{parentName:"p",href:"New%20Features/Explicit%20Globals"},"explicit globals")," (",(0,l.kt)("inlineCode",{parentName:"p"},"global"),")."),(0,l.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"pluto_use"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"0.9.0+"')),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: #88846F"}},'-- The same as pluto_use "0.9.0", global'))))),(0,l.kt)("p",null,"For module developers and scripts which may be used in future versions of Pluto, we recommend you use ",(0,l.kt)("inlineCode",{parentName:"p"},"pluto_use")," for two reasons:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Portability.")," This will override the compatibility mode settings compiled into Pluto so your script will be parsed identically in all Pluto environments."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Proactive compatibility.")," Any keywords added by future versions of Pluto will also be put in compatibility mode by these statements, so in the off-chance your script uses a future reserved keyword as a variable name, it would still parse as you intended when you wrote it.")),(0,l.kt)("h3",{id:"compatible-keywords"},"Compatible Keywords"),(0,l.kt)("p",null,"Another way of using Pluto's features regardless of compatibility mode is by prefixing the keyword with ",(0,l.kt)("inlineCode",{parentName:"p"},"pluto_"),". For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"switch")," becomes ",(0,l.kt)("inlineCode",{parentName:"p"},"pluto_switch"),". These Compatibility Mode variants will always be valid, even when Compatibility Mode is disabled."),(0,l.kt)("p",null,"These are what they look like:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pluto_switch")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pluto_continue")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pluto_enum")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pluto_new")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pluto_class")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pluto_parent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pluto_export")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pluto_try")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pluto_catch"))),(0,l.kt)("h2",{id:"default-table-metatable"},"Default Table Metatable"),(0,l.kt)("p",null,"This is ",(0,l.kt)("a",{parentName:"p",href:"Runtime%20Environment/Global%20&%20Base#default-metatables"},"a feature in Pluto")," that, by itself, is a benign QoL improvement for developers. However, in combination with our added standard library functions like ",(0,l.kt)("a",{parentName:"p",href:"Runtime%20Environment/Table#tablemin"},"table.min"),", it can be an unexpected semantic change:"),(0,l.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"},showlinenumbers:"true"},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"local"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #66D9EF",fontStyle:"italic"}},"function"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #A6E22E"}},"roll"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"color: #FD971F",fontStyle:"italic"}},"opts"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"return"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"math"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},"."),(0,l.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"random"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"(opts"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},"."),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"min "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"or"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #AE81FF"}},"1"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," opts"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},"."),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"max "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"or"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #AE81FF"}},"100"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"end")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"print"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"roll"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"{ max "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #AE81FF"}},"10"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," })"))))),(0,l.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: undefined"}},"pluto: test.pluto:2: bad argument #1 to 'random' (number expected, got function)")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: undefined"}},"stack traceback:")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: undefined"}},"    [C]: in function 'math.rand'")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: undefined"}},"    test.pluto:2: in local 'roll'")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: undefined"}},"    test.pluto:4: in main chunk"))))),(0,l.kt)("p",null,"Integrators can disable this feature by defining the ",(0,l.kt)("inlineCode",{parentName:"p"},"PLUTO_NO_DEFAULT_TABLE_METATABLE")," macro in their luaconf.h or build config, to aid in a smooth transition, should scripts in their ecosystem require it."),(0,l.kt)("p",null,"Scripters are advised to use ",(0,l.kt)("inlineCode",{parentName:"p"},"rawget")," and/or ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," to better codify their expectations. For example, the example above seems to care only about providing fallback values and not at all about type-checking, so ",(0,l.kt)("inlineCode",{parentName:"p"},"rawget")," would be an excellent fit for it:"),(0,l.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.kt)("div",{parentName:"pre",className:"code-container"},(0,l.kt)("code",{parentName:"div"},(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"local"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #66D9EF",fontStyle:"italic"}},"function"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #A6E22E"}},"roll"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"color: #FD971F",fontStyle:"italic"}},"opts"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"    "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"return"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"math"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},"."),(0,l.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"random"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"rawget"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"(opts"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"min"'),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},") "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"or"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #AE81FF"}},"1"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"rawget"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"(opts"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},","),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"max"'),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},") "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"or"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #AE81FF"}},"100"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},")")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"end")),(0,l.kt)("div",{parentName:"code",className:"line"},(0,l.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"print"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,l.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"roll"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"{ max "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"="),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,l.kt)("span",{parentName:"div",style:{color:"color: #AE81FF"}},"10"),(0,l.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," })"))))))}d.isMDXComponent=!0}}]);