"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[5507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=i,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:12},o=void 0,l={unversionedId:"New Features/Type Hinting",id:"New Features/Type Hinting",title:"Type Hinting",description:"Type-hinting looks like this:",source:"@site/docs/New Features/Type Hinting.md",sourceDirName:"New Features",slug:"/New Features/Type Hinting",permalink:"/docs/New Features/Type Hinting",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Named Arguments",permalink:"/docs/New Features/Named Arguments"},next:{title:"In Expressions",permalink:"/docs/New Features/In Expressions"}},p={},s=[{value:"What types can I use?",id:"what-types-can-i-use",level:3}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Type-hinting looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-pluto",metastring:"showLineNumbers",showLineNumbers:!0},'local var: string = "hello world"\n')),(0,i.kt)("p",null,"It works with functions too:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-pluto",metastring:"showLineNumbers",showLineNumbers:!0},'local function myfunc(a: string, b: string): number\n    return tonumber(a) + tonumber(b)\nend\n\nprint(myfunc(1, "1")) -- This will emit a warning for argument type mismatch.\n')),(0,i.kt)("p",null,"There's no effect on performance. This is implemented entirely during the compilation phase."),(0,i.kt)("h3",{id:"what-types-can-i-use"},"What types can I use?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"float")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"bool")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"function")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userdata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"void")," (return type only)")),(0,i.kt)("p",null,"Prefix a ",(0,i.kt)("inlineCode",{parentName:"p"},"?")," to indicate nil-able types, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"?string")," indicates that it may be nil or a string."),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," to delimit alternatives, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"string|int")," indicates that it may be a string or an int."),(0,i.kt)("p",null,"Putting all of this together, we could also have e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"?string|int")," to indicate that it may be nil, a string, or an int."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This is a WIP feature, and it's very difficult to implement in a one-pass compiler. Allow tolerance for missing coverage, and report any bugs.")))}m.isMDXComponent=!0}}]);