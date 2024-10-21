"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[7150],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>N});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(r),u=o,N=m["".concat(c,".").concat(u)]||m[u]||d[u]||n;return r?a.createElement(N,l(l({ref:t},p),{},{components:r})):a.createElement(N,l({ref:t},p))}));function N(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<n;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>i});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_position:1},l=void 0,s={unversionedId:"New Features/Numeral Parsing",id:"New Features/Numeral Parsing",title:"Numeral Parsing",description:"Pluto makes two small changes to numeral parsing.",source:"@site/docs/New Features/Numeral Parsing.md",sourceDirName:"New Features",slug:"/New Features/Numeral Parsing",permalink:"/docs/New Features/Numeral Parsing",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Named Varargs",permalink:"/docs/New Features/Named Varargs"},next:{title:"String Indexing",permalink:"/docs/New Features/String Indexing"}},c={},i=[{value:"Cosmetic Underscores",id:"cosmetic-underscores",level:2},{value:"Binary Integers",id:"binary-integers",level:2}],p={toc:i},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pluto makes two small changes to numeral parsing."),(0,o.kt)("h2",{id:"cosmetic-underscores"},"Cosmetic Underscores"),(0,o.kt)("p",null,"You can add underscores to your numeric literals to make them more readable."),(0,o.kt)("pre",{className:"shiki monokai with-title",style:{backgroundColor:"#272822",color:"#F8F8F2"},showlinenumbers:"true",title:"Example Code"},(0,o.kt)("div",{parentName:"pre",className:"code-title"},"Example Code"),(0,o.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"local"),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," n "),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"color: #AE81FF"}},"10_000_000")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"assert"),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"(n "),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"=="),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"color: #AE81FF"}},"10000000"),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},")"))))),(0,o.kt)("p",null,"These underscores are ignored by the compiler, so they are purely cosmetic."),(0,o.kt)("h2",{id:"binary-integers"},"Binary Integers"),(0,o.kt)("p",null,"Similar to how Lua allows you to input numbers in hexadecimal:"),(0,o.kt)("pre",{className:"shiki monokai with-title",style:{backgroundColor:"#272822",color:"#F8F8F2"},showlinenumbers:"true",title:"Example Code"},(0,o.kt)("div",{parentName:"pre",className:"code-title"},"Example Code"),(0,o.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"local"),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," n "),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"color: #AE81FF"}},"0x420")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"assert"),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"(n "),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"=="),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"color: #AE81FF"}},"1056"),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},")"))))),(0,o.kt)("p",null,"Pluto allows you to input numbers in binary as well:"),(0,o.kt)("pre",{className:"shiki monokai with-title",style:{backgroundColor:"#272822",color:"#F8F8F2"},showlinenumbers:"true",title:"Example Code"},(0,o.kt)("div",{parentName:"pre",className:"code-title"},"Example Code"),(0,o.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"local"),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," n "),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"color: #AE81FF"}},"0b1000101")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"assert"),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"(n "),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"=="),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"color: #AE81FF"}},"69"),(0,o.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},")"))))))}d.isMDXComponent=!0}}]);