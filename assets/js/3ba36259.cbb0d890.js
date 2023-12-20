"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[5992],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>k});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=s(i),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return i?n.createElement(k,o(o({ref:t},u),{},{components:i})):n.createElement(k,o({ref:t},u))}));function k(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,o=new Array(l);o[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[m]="string"==typeof e?e:a,o[1]=r;for(var s=2;s<l;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6320:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var n=i(7462),a=(i(7294),i(3905));const l={sidebar_position:9},o=void 0,r={unversionedId:"Compatibility",id:"Compatibility",title:"Compatibility",description:"How compatible with Lua is Pluto?",source:"@site/docs/Compatibility.md",sourceDirName:".",slug:"/Compatibility",permalink:"/docs/Compatibility",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Table Length",permalink:"/docs/Optimizations/Table Length"},next:{title:"For Integrators",permalink:"/docs/For Integrators"}},p={},s=[{value:"How compatible with Lua is Pluto?",id:"how-compatible-with-lua-is-pluto",level:2},{value:"Where are the incompatibilities?",id:"where-are-the-incompatibilities",level:3},{value:"Writing Scripts Under Compatibility Mode",id:"writing-scripts-under-compatibility-mode",level:2},{value:"Compile-time Configuration",id:"compile-time-configuration",level:3},{value:"Portability &amp; proactive compatibility",id:"portability--proactive-compatibility",level:2}],u={toc:s},m="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-compatible-with-lua-is-pluto"},"How compatible with Lua is Pluto?"),(0,a.kt)("p",null,"Pluto is 99.9% compatible with most Lua source code. However, it's imperfect. Due to that, Pluto implements several compatibility macros."),(0,a.kt)("h3",{id:"where-are-the-incompatibilities"},"Where are the incompatibilities?"),(0,a.kt)("p",null,"Pluto adds the following reserved tokens:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"switch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"continue")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enum")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"new")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"class")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"export")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"try")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"catch"))),(0,a.kt)("p",null,"Which means you can't use them as variable names or for function calls. They can still be used with short-hand table indexes and goto labels though, because Pluto ",(0,a.kt)("a",{parentName:"p",href:"QoL%20Improvements/Reserved%20Identifiers"},"removes the restriction from them"),"."),(0,a.kt)("p",null,"However, we have a simple solution for this: Compatibility Mode. This allows integrators to disable Pluto's reserved tokens. Integrators: Check your ",(0,a.kt)("inlineCode",{parentName:"p"},"luaconf.h"),' file to find the relevant macros under the "Compatibility" heading.'),(0,a.kt)("h2",{id:"writing-scripts-under-compatibility-mode"},"Writing Scripts Under Compatibility Mode"),(0,a.kt)("p",null,"Obviously, you want to use Pluto's features, so how can you do it if the Pluto environment has all of its tokens disabled? The secret is that each reserved token mentioned above has a portable variant with a ",(0,a.kt)("inlineCode",{parentName:"p"},"pluto_")," prefix. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"switch")," has a twin called ",(0,a.kt)("inlineCode",{parentName:"p"},"pluto_switch")," that is always valid."),(0,a.kt)("h3",{id:"compile-time-configuration"},"Compile-time Configuration"),(0,a.kt)("p",null,"You can also change the meaning of Pluto's reserved tokens at any point in your scripts by using ",(0,a.kt)("inlineCode",{parentName:"p"},"pluto_use"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pluto_use * = false, switch")," disables all non-compatible keywords except for ",(0,a.kt)("inlineCode",{parentName:"li"},"switch"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pluto_use * = false")," disables all non-compatible keywords."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pluto_use switch")," enables the ",(0,a.kt)("inlineCode",{parentName:"li"},"switch")," keyword.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pluto_use switch = true")," would be another way of writing this."))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'pluto_use "0.2.0"')," disables all non-compatible keywords except for: ",(0,a.kt)("inlineCode",{parentName:"li"},"switch"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"continue")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'pluto_use "0.5.0"')," disables all non-compatible keywords except for: ",(0,a.kt)("inlineCode",{parentName:"li"},"switch"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"continue"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"enum")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'pluto_use "0.6.0"')," disables all non-compatible keywords except for: ",(0,a.kt)("inlineCode",{parentName:"li"},"switch"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"continue"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"enum"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"new"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"class"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"parent"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"export")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'pluto_use "0.8.0"')," disables all non-compatible keywords except for: ",(0,a.kt)("inlineCode",{parentName:"li"},"switch"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"continue"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"enum"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"new"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"class"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"parent"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"export"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"try"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"catch"))),(0,a.kt)("h2",{id:"portability--proactive-compatibility"},"Portability & proactive compatibility"),(0,a.kt)("p",null,"We recommend scripters place a ",(0,a.kt)("inlineCode",{parentName:"p"},"pluto_use")," statement at the beginning of their scripts for two reasons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Portability.")," This will override the compatibility mode settings compiled into Pluto so your script will be parsed identically in all Pluto environments."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proactive compatibility.")," Any keywords added by future versions of Pluto will also be put in compatibility mode by these statements, so in the off-chance your script uses a future reserved keyword as a variable name, it would still parse as you intended when you wrote it.")),(0,a.kt)("p",null,"Plus, it's as simple as ",(0,a.kt)("inlineCode",{parentName:"p"},'pluto_use "0.6.0"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'pluto_use "0.5.0"'),' \u2014 see "Configuration for scripters" above.'))}c.isMDXComponent=!0}}]);