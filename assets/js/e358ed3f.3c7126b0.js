"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[9907],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={},a=void 0,s={unversionedId:"New Features/String Indexing",id:"New Features/String Indexing",title:"String Indexing",description:"You can index strings for their characters now, which is cleaner & 3x faster than using string.sub. String indexing only occurs when you index with an integer, either positive or negative. Positive integers index from the start of the string, and negative integers index from the end.",source:"@site/docs/New Features/String Indexing.md",sourceDirName:"New Features",slug:"/New Features/String Indexing",permalink:"/docs/New Features/String Indexing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Safe Navigation",permalink:"/docs/New Features/Safe Navigation"},next:{title:"String Interpolation",permalink:"/docs/New Features/String Interpolation"}},l={},c=[{value:"Try It Yourself",id:"try-it-yourself",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can index strings for their characters now, which is cleaner & ",(0,i.kt)("strong",{parentName:"p"},"3x")," faster than using ",(0,i.kt)("inlineCode",{parentName:"p"},"string.sub"),". String indexing only occurs when you index with an integer, either positive or negative. Positive integers index from the start of the string, and negative integers index from the end."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'showLineNumbers title="Example Code"',showLineNumbers:!0,title:'"Example','Code"':!0},'local str = "hello world"\nprint(str[5]) -- "o"\nprint(str[200]) -- nil\nprint(str[-1]) -- "d"\n')),(0,i.kt)("p",null,"Any character-intensive task \u2014 for example, a hash algorithm \u2014 will greatly benefit from this."),(0,i.kt)("h4",{id:"try-it-yourself"},(0,i.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=local%20str%20%3D%20%22hello%20world%22%0D%0Aprint(str%5B5%5D)%20--%20%22o%22%0D%0Aprint(str%5B200%5D)%20--%20nil%0D%0Aprint(str%5B-1%5D)%20--%20%22d%22"},"Try It Yourself")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The bytecode of this feature is not backwards-compatible with Lua.")))}u.isMDXComponent=!0}}]);