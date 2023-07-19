"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[5992],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>f});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(i),d=o,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return i?n.createElement(f,r(r({ref:t},u),{},{components:i})):n.createElement(f,r({ref:t},u))}));function f(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=i[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6320:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=i(7462),o=(i(7294),i(3905));const a={sidebar_position:7},r=void 0,l={unversionedId:"Compatibility",id:"Compatibility",title:"Compatibility",description:"How compatible with Lua is Pluto?",source:"@site/docs/Compatibility.md",sourceDirName:".",slug:"/Compatibility",permalink:"/docs/Compatibility",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Coroutine Functions",permalink:"/docs/Runtime Environment/Coroutine Functions"},next:{title:"Optimizations",permalink:"/docs/category/optimizations"}},p={},s=[{value:"How compatible with Lua is Pluto?",id:"how-compatible-with-lua-is-pluto",level:2},{value:"Where are the incompatibilities?",id:"where-are-the-incompatibilities",level:3},{value:"Compatibility Mode",id:"compatibility-mode",level:2},{value:"Configuration for scripters",id:"configuration-for-scripters",level:3},{value:"Configuration for integrators",id:"configuration-for-integrators",level:3},{value:"Portability &amp; proactive compatibility",id:"portability--proactive-compatibility",level:2}],u={toc:s},m="wrapper";function c(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-compatible-with-lua-is-pluto"},"How compatible with Lua is Pluto?"),(0,o.kt)("p",null,"Pluto is 99.9% compatible with most Lua source code. However, it's imperfect. Due to that, Pluto implements several compatibility macros."),(0,o.kt)("h3",{id:"where-are-the-incompatibilities"},"Where are the incompatibilities?"),(0,o.kt)("p",null,"Pluto adds the following reserved tokens:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"switch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"continue")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"enum")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"new")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"class")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"export"))),(0,o.kt)("p",null,"Which means you can't use them as variable names or for function calls. They can still be used with short-hand table indexes and goto labels though, because Pluto ",(0,o.kt)("a",{parentName:"p",href:"../QoL%20Improvements/Reserved%20Identifiers"},"removes the restriction from them"),"."),(0,o.kt)("h2",{id:"compatibility-mode"},"Compatibility Mode"),(0,o.kt)("p",null,"Compatibility mode is a per-keyword option that adds a ",(0,o.kt)("inlineCode",{parentName:"p"},"pluto_")," prefix. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"switch")," becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"pluto_switch")," under compatibility mode. However, when compatibility mode is disabled, the ",(0,o.kt)("inlineCode",{parentName:"p"},"pluto_")," syntax is still valid. This project has high regard for smooth migration paths."),(0,o.kt)("h3",{id:"configuration-for-scripters"},"Configuration for scripters"),(0,o.kt)("p",null,"You can change the meaning of Pluto's reserved tokens at any point in your scripts by using ",(0,o.kt)("inlineCode",{parentName:"p"},"pluto_use"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pluto_use * = false, switch")," enables compatibility mode for all keywords except for ",(0,o.kt)("inlineCode",{parentName:"li"},"switch"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pluto_use * = false")," enables compatibility mode for all keywords."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pluto_use switch")," disables compatibility mode for the ",(0,o.kt)("inlineCode",{parentName:"li"},"switch")," keyword.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pluto_use switch = true")," would be another way of writing this."))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'pluto_use "0.2.0"')," enables compatibility mode for all keywords except for: ",(0,o.kt)("inlineCode",{parentName:"li"},"switch"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"continue")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'pluto_use "0.5.0"')," enables compatibility mode for all keywords except for: ",(0,o.kt)("inlineCode",{parentName:"li"},"switch"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"continue"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"enum")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'pluto_use "0.6.0"')," enables compatibility mode for all keywords except for: ",(0,o.kt)("inlineCode",{parentName:"li"},"switch"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"continue"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"enum"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"new"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"class"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"parent"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"export"))),(0,o.kt)("h3",{id:"configuration-for-integrators"},"Configuration for integrators"),(0,o.kt)("p",null,"The macros for compatibility mode are well-documented, and found inside your ",(0,o.kt)("inlineCode",{parentName:"p"},"luaconf.h")," file."),(0,o.kt)("h2",{id:"portability--proactive-compatibility"},"Portability & proactive compatibility"),(0,o.kt)("p",null,"We recommend scripters place a ",(0,o.kt)("inlineCode",{parentName:"p"},"pluto_use")," statement at the beginning of their scripts for two reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Portability.")," This will override the compatibility mode settings compiled into Pluto so your script will be parsed identically in all Pluto environments."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Proactive compatibility.")," Any keywords added by future versions of Pluto will also be put in compatibility mode by these statements, so in the off-chance your script uses a future reserved keyword as a variable name, it would still parse as you intended when you wrote it.")),(0,o.kt)("p",null,"Plus, it's as simple as ",(0,o.kt)("inlineCode",{parentName:"p"},'pluto_use "0.6.0"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'pluto_use "0.5.0"'),' \u2014 see "Configuration for scripters" above.'))}c.isMDXComponent=!0}}]);