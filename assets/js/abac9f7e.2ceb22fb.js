"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[2639],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var o=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,y=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return t?o.createElement(y,i(i({ref:n},p),{},{components:t})):o.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8192:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(8168),r=(t(6540),t(5680));const a={},i=void 0,s={unversionedId:"Runtime Environment/OS",id:"Runtime Environment/OS",title:"OS",description:"This page documents the changes & additions to the os library in Pluto, which is built on top of Lua 5.4's.",source:"@site/docs/Runtime Environment/OS.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/OS",permalink:"/docs/Runtime Environment/OS",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Math",permalink:"/docs/Runtime Environment/Math"},next:{title:"Regex",permalink:"/docs/Runtime Environment/Regex"}},l={},c=[{value:"<code>os.sleep</code>",id:"ossleep",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Example",id:"example",level:4},{value:"<code>os.nanos</code>, <code>os.micros</code>, <code>os.millis</code>, <code>os.seconds</code>",id:"osnanos-osmicros-osmillis-osseconds",level:3},{value:"<code>os.unixseconds</code>",id:"osunixseconds",level:3}],p={toc:c},m="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,o.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This page documents the changes & additions to the ",(0,r.yg)("inlineCode",{parentName:"p"},"os")," library in Pluto, which is built on top of Lua 5.4's."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"ossleep"},(0,r.yg)("inlineCode",{parentName:"h3"},"os.sleep")),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The amount of milliseconds to sleep for.")),(0,r.yg)("h4",{id:"example"},"Example"),(0,r.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,r.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.yg)("div",{parentName:"pre",className:"code-container"},(0,r.yg)("code",{parentName:"div"},(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"os"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"sleep"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1000"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},") "),(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- Pause this thread for 1000ms."))))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"osnanos-osmicros-osmillis-osseconds"},(0,r.yg)("inlineCode",{parentName:"h3"},"os.nanos"),", ",(0,r.yg)("inlineCode",{parentName:"h3"},"os.micros"),", ",(0,r.yg)("inlineCode",{parentName:"h3"},"os.millis"),", ",(0,r.yg)("inlineCode",{parentName:"h3"},"os.seconds")),(0,r.yg)("p",null,"All of these return their respective times since implementation-specific epoch."),(0,r.yg)("h3",{id:"osunixseconds"},(0,r.yg)("inlineCode",{parentName:"h3"},"os.unixseconds")),(0,r.yg)("p",null,"Returns seconds since UNIX epoch."))}d.isMDXComponent=!0}}]);