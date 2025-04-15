"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[8823],{5680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>d});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},y=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),c=s(t),g=r,d=c["".concat(p,".").concat(g)]||c[g]||m[g]||i;return t?a.createElement(d,o(o({ref:n},y),{},{components:t})):a.createElement(d,o({ref:n},y))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8179:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(8168),r=(t(6540),t(5680));const i={sidebar_position:1},o=void 0,l={unversionedId:"New Features/Type Hinting",id:"New Features/Type Hinting",title:"Type Hinting",description:"Type-hinting looks like this:",source:"@site/docs/New Features/Type Hinting.md",sourceDirName:"New Features",slug:"/New Features/Type Hinting",permalink:"/docs/New Features/Type Hinting",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Ternary Expressions",permalink:"/docs/New Features/Ternary Expressions"},next:{title:"Compile-Time Evaluation",permalink:"/docs/New Features/Compile-Time Evaluation"}},p={},s=[{value:"What types can I use?",id:"what-types-can-i-use",level:3}],y={toc:s},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Type-hinting looks like this:"),(0,r.yg)("pre",{className:"shiki monokai-patched",style:{backgroundColor:"#272822",color:"#F8F8F2"},showlinenumbers:"true"},(0,r.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.yg)("div",{parentName:"pre",className:"code-container"},(0,r.yg)("code",{parentName:"div"},(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," var"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"string"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"hello world"'))))),(0,r.yg)("p",null,"It works with functions too:"),(0,r.yg)("pre",{className:"shiki monokai-patched",style:{backgroundColor:"#272822",color:"#F8F8F2"},showlinenumbers:"true"},(0,r.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.yg)("div",{parentName:"pre",className:"code-container"},(0,r.yg)("code",{parentName:"div"},(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"function"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#A6E22E"}},"myfunc"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#FD971F",fontStyle:"italic"}},"a"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"string"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#FD971F",fontStyle:"italic"}},"b"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"string"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"number")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"return"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"tonumber"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(a) "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"+"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"tonumber"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(b)")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end")),(0,r.yg)("div",{parentName:"code",className:"line"}),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"myfunc"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"1"'),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")) "),(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- This will emit a warning for argument type mismatch."))))),(0,r.yg)("p",null,"There's no effect on performance. This is implemented entirely during the compilation phase."),(0,r.yg)("h3",{id:"what-types-can-i-use"},"What types can I use?"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"string")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"number"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"int")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"float")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"boolean"),"/",(0,r.yg)("inlineCode",{parentName:"li"},"bool")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"function")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"table")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"userdata")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"void")," (return type only)")),(0,r.yg)("p",null,"Prefix a ",(0,r.yg)("inlineCode",{parentName:"p"},"?")," to indicate nil-able types, e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"?string")," indicates that it may be nil or a string."),(0,r.yg)("p",null,"You can also use ",(0,r.yg)("inlineCode",{parentName:"p"},"|")," to delimit alternatives, e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"string|int")," indicates that it may be a string or an int."),(0,r.yg)("p",null,"Putting all of this together, we could also have e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"?string|int")," to indicate that it may be nil, a string, or an int."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"This is a WIP feature, and it's very difficult to implement in a one-pass compiler. Allow tolerance for missing coverage, and report any bugs.")))}m.isMDXComponent=!0}}]);