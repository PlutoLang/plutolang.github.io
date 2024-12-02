"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[4403],{5680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>F});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},y=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,F=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return t?n.createElement(F,s(s({ref:a},y),{},{components:t})):n.createElement(F,s({ref:a},y))}));function F(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8875:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(8168),r=(t(6540),t(5680));const o={sidebar_position:2},s=void 0,l={unversionedId:"New Features/Named Arguments",id:"New Features/Named Arguments",title:"Named Arguments",description:"Instead of positional arguments, you can use the names of arguments you want to set:",source:"@site/docs/New Features/Named Arguments.md",sourceDirName:"New Features",slug:"/New Features/Named Arguments",permalink:"/docs/New Features/Named Arguments",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Lambda Expressions",permalink:"/docs/New Features/Lambda Expressions"},next:{title:"Nodiscard Functions",permalink:"/docs/New Features/Nodiscard Functions"}},i={},p=[{value:"Mixing arguments",id:"mixing-arguments",level:2},{value:"Limitations",id:"limitations",level:2}],y={toc:p},c="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(c,(0,n.A)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Instead of positional arguments, you can use the names of arguments you want to set:"),(0,r.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,r.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.yg)("div",{parentName:"pre",className:"code-container"},(0,r.yg)("code",{parentName:"div"},(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"function"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#A6E22E"}},"process_file"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#FD971F",fontStyle:"italic"}},"file"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#FD971F",fontStyle:"italic"}},"mode"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"r"'),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#FD971F",fontStyle:"italic"}},"version"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"$"),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Processing '),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"{file}"),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}}," with mode '"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"{mode}"),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"' and version "),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"{version}"),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"'),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"process_file"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(file "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"hello.txt"'),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," version "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"2"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},") "),(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- \"Processing hello.txt with mode 'r' and version 2\""))))),(0,r.yg)("p",null,"Note that this example also makes use of ",(0,r.yg)("a",{parentName:"p",href:"/docs/New%20Features/Default%20Arguments"},"default arguments")," and ",(0,r.yg)("a",{parentName:"p",href:"/docs/New%20Features/String%20Interpolation"},"string interpolation"),"."),(0,r.yg)("h2",{id:"mixing-arguments"},"Mixing arguments"),(0,r.yg)("p",null,"You can use positional arguments for the first few arguments and then use named arguments for the latter ones, for example:"),(0,r.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,r.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.yg)("div",{parentName:"pre",className:"code-container"},(0,r.yg)("code",{parentName:"div"},(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"function"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#A6E22E"}},"process_file"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#FD971F",fontStyle:"italic"}},"file"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#FD971F",fontStyle:"italic"}},"mode"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"r"'),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#FD971F",fontStyle:"italic"}},"version"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"$"),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Processing '),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"{file}"),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}}," with mode '"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"{mode}"),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},"' and version "),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"{version}"),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"'),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"process_file"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"hello.txt"'),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," version "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"2"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},") "),(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- \"Processing hello.txt with mode 'r' and version 2\""))))),(0,r.yg)("h2",{id:"limitations"},"Limitations"),(0,r.yg)("p",null,"This feature is implemented entirely in the parser and therefore only works for local functions at the moment."))}m.isMDXComponent=!0}}]);