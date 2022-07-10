"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[535],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,l={unversionedId:"New Operators/Compound Operators",id:"New Operators/Compound Operators",title:"Compound Operators",description:"Pluto implements a plethora of compound operators, which are actually faster than their Lua counterparts.",source:"@site/docs/New Operators/Compound Operators.md",sourceDirName:"New Operators",slug:"/New Operators/Compound Operators",permalink:"/docs/New Operators/Compound Operators",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Alternative Operators",permalink:"/docs/New Operators/Alternative Operators"},next:{title:"Optimizations",permalink:"/docs/category/optimizations"}},p={},u=[],s={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pluto implements a plethora of compound operators, which are actually faster than their Lua counterparts."),(0,a.kt)("h1",{id:"additions"},"Additions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Modulo: ",(0,a.kt)("inlineCode",{parentName:"li"},"%=")),(0,a.kt)("li",{parentName:"ul"},"Addition: ",(0,a.kt)("inlineCode",{parentName:"li"},"+=")),(0,a.kt)("li",{parentName:"ul"},"Exponent: ",(0,a.kt)("inlineCode",{parentName:"li"},"^=")),(0,a.kt)("li",{parentName:"ul"},"Bitwise OR: ",(0,a.kt)("inlineCode",{parentName:"li"},"|=")),(0,a.kt)("li",{parentName:"ul"},"Subtraction: ",(0,a.kt)("inlineCode",{parentName:"li"},"-=")),(0,a.kt)("li",{parentName:"ul"},"Bitshift left: ",(0,a.kt)("inlineCode",{parentName:"li"},"<<=")),(0,a.kt)("li",{parentName:"ul"},"Bitwise AND: ",(0,a.kt)("inlineCode",{parentName:"li"},"&=")),(0,a.kt)("li",{parentName:"ul"},"Float division: ",(0,a.kt)("inlineCode",{parentName:"li"},"/=")),(0,a.kt)("li",{parentName:"ul"},"Bitshift right: ",(0,a.kt)("inlineCode",{parentName:"li"},">>=")),(0,a.kt)("li",{parentName:"ul"},"Multiplication: ",(0,a.kt)("inlineCode",{parentName:"li"},"*=")),(0,a.kt)("li",{parentName:"ul"},"Concatenation: ",(0,a.kt)("inlineCode",{parentName:"li"},"..=")),(0,a.kt)("li",{parentName:"ul"},"Integer division: ",(0,a.kt)("inlineCode",{parentName:"li"},"//="))),(0,a.kt)("h1",{id:"why-are-they-faster"},"Why are they faster?"),(0,a.kt)("p",null,"They store their left-operand in a temporary register, which reduces a lookup & makes them roughly 30% faster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Example Code"',title:'"Example','Code"':!0},"local a = 5\n\n-- Old\na = a + 5\n\n-- New\na += 5\n")))}c.isMDXComponent=!0}}]);