"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[5507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,y=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},l=void 0,i={unversionedId:"New Features/Type Hinting",id:"New Features/Type Hinting",title:"Type Hinting",description:"Type-hinting looks like this:",source:"@site/docs/New Features/Type Hinting.md",sourceDirName:"New Features",slug:"/New Features/Type Hinting",permalink:"/docs/New Features/Type Hinting",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Ternary Expressions",permalink:"/docs/New Features/Ternary Expressions"},next:{title:"Compile-Time Evaluation",permalink:"/docs/New Features/Compile-Time Evaluation"}},p={},s=[{value:"What types can I use?",id:"what-types-can-i-use",level:3}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Type-hinting looks like this:"),(0,r.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"},showlinenumbers:"true"},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"local"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," var"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"color: #66D9EF",fontStyle:"italic"}},"string"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"hello world"'))))),(0,r.kt)("p",null,"It works with functions too:"),(0,r.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"},showlinenumbers:"true"},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"local"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"color: #66D9EF",fontStyle:"italic"}},"function"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"color: #A6E22E"}},"myfunc"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"color: #FD971F",fontStyle:"italic"}},"a"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"color: #66D9EF",fontStyle:"italic"}},"string"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"color: #FD971F",fontStyle:"italic"}},"b"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"color: #66D9EF",fontStyle:"italic"}},"string"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"color: #66D9EF",fontStyle:"italic"}},"number")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"tonumber"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"(a) "),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"+"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"tonumber"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"(b)")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"end")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"print"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"myfunc"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"color: #AE81FF"}},"1"),(0,r.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"1"'),(0,r.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},")) "),(0,r.kt)("span",{parentName:"div",style:{color:"color: #88846F"}},"-- This will emit a warning for argument type mismatch."))))),(0,r.kt)("p",null,"There's no effect on performance. This is implemented entirely during the compilation phase."),(0,r.kt)("h3",{id:"what-types-can-i-use"},"What types can I use?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"float")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"bool")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"table")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userdata")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void")," (return type only)")),(0,r.kt)("p",null,"Prefix a ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," to indicate nil-able types, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"?string")," indicates that it may be nil or a string."),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," to delimit alternatives, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"string|int")," indicates that it may be a string or an int."),(0,r.kt)("p",null,"Putting all of this together, we could also have e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"?string|int")," to indicate that it may be nil, a string, or an int."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is a WIP feature, and it's very difficult to implement in a one-pass compiler. Allow tolerance for missing coverage, and report any bugs.")))}d.isMDXComponent=!0}}]);