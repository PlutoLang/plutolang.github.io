"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[5743],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>O});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,O=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return t?n.createElement(O,l(l({ref:r},c),{},{components:t})):n.createElement(O,l({ref:r},c))}));function O(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7616:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={},l=void 0,i={unversionedId:"New Operators/Null-Coalescing Operator",id:"New Operators/Null-Coalescing Operator",title:"Null-Coalescing Operator",description:"The null-coalescing operator (or more appropriately, nil-coalescing operator) can be used as follows:",source:"@site/docs/New Operators/Null-Coalescing Operator.md",sourceDirName:"New Operators",slug:"/New Operators/Null-Coalescing Operator",permalink:"/docs/New Operators/Null-Coalescing Operator",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Increment Operator",permalink:"/docs/New Operators/Increment Operator"},next:{title:"Walrus Operator",permalink:"/docs/New Operators/Walrus Operator"}},s={},p=[],c={toc:p},u="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The null-coalescing operator (or more appropriately, nil-coalescing operator) can be used as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:"showLineNumbers",showLineNumbers:!0},'local permissions, group = nil, nil\n\nlocal effective_permissions = permissions ?? "NO_PERMISSIONS"\n\ngroup ??= "User"\n')),(0,o.kt)("p",null,"It's semantically equal to the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:"showLineNumbers",showLineNumbers:!0},'local permissions, group = nil, nil\n\nlocal effective_permissions = permissions == nil ? "NO_PERMISSIONS" : permissions\n\nif group == nil then\n    group = "User"\nend\n')),(0,o.kt)("p",null,"As you can see, the null-coalescing operator allows for more concise statements."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This is a lazily-evaluated operator. It will not \"choose whatever isn't nil\", it'll simply evaluate the second expression if the first expression is nil.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The bytecode of this feature is not backwards-compatible with Lua.")))}m.isMDXComponent=!0}}]);