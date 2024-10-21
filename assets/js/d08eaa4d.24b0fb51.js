"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[8281],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>v});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},F=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(o),F=a,v=m["".concat(c,".").concat(F)]||m[F]||d[F]||n;return o?r.createElement(v,l(l({ref:t},p),{},{components:o})):r.createElement(v,l({ref:t},p))}));function v(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=F;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<n;i++)l[i]=o[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}F.displayName="MDXCreateElement"},5395:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>i});var r=o(7462),a=(o(7294),o(3905));const n={sidebar_position:2},l=void 0,s={unversionedId:"New Features/Named Arguments",id:"New Features/Named Arguments",title:"Named Arguments",description:"Instead of positional arguments, you can use the names of arguments you want to set:",source:"@site/docs/New Features/Named Arguments.md",sourceDirName:"New Features",slug:"/New Features/Named Arguments",permalink:"/docs/New Features/Named Arguments",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Lambda Expressions",permalink:"/docs/New Features/Lambda Expressions"},next:{title:"Nodiscard Functions",permalink:"/docs/New Features/Nodiscard Functions"}},c={},i=[{value:"Try It Yourself",id:"try-it-yourself",level:4},{value:"Mixing arguments",id:"mixing-arguments",level:2},{value:"Try It Yourself",id:"try-it-yourself-1",level:4},{value:"Limitations",id:"limitations",level:2}],p={toc:i},m="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Instead of positional arguments, you can use the names of arguments you want to set:"),(0,a.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,a.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,a.kt)("div",{parentName:"pre",className:"code-container"},(0,a.kt)("code",{parentName:"div"},(0,a.kt)("div",{parentName:"code",className:"line"},(0,a.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"local"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #66D9EF",fontStyle:"italic"}},"function"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #A6E22E"}},"process_file"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,a.kt)("span",{parentName:"div",style:{color:"color: #FD971F",fontStyle:"italic"}},"file"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},","),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #FD971F",fontStyle:"italic"}},"mode"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"="),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"r"'),(0,a.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},","),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #FD971F",fontStyle:"italic"}},"version"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"="),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #AE81FF"}},"1"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},")")),(0,a.kt)("div",{parentName:"code",className:"line"},(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"    "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"print"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"$"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"Processing '),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"{file}"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}}," with mode '"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"{mode}"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},"' and version "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"{version}"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"'),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},")")),(0,a.kt)("div",{parentName:"code",className:"line"},(0,a.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"end")),(0,a.kt)("div",{parentName:"code",className:"line"},(0,a.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"process_file"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"(file "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"="),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"hello.txt"'),(0,a.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},","),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," version "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"="),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #AE81FF"}},"2"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},") "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #88846F"}},"-- \"Processing hello.txt with mode 'r' and version 2\""))))),(0,a.kt)("h4",{id:"try-it-yourself"},(0,a.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=local%20function%20process_file(file%2C%20mode%20%3D%20%22r%22%2C%20version%20%3D%201)%0D%0A%20%20%20%20print(%24%22Processing%20%7Bfile%7D%20with%20mode%20'%7Bmode%7D'%20and%20version%20%7Bversion%7D%22)%0D%0Aend%0D%0Aprocess_file(file%20%3D%20%22hello.txt%22%2C%20version%20%3D%202)"},"Try It Yourself")),(0,a.kt)("p",null,"Note that this example also makes use of ",(0,a.kt)("a",{parentName:"p",href:"/docs/New%20Features/Default%20Arguments"},"default arguments")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/New%20Features/String%20Interpolation"},"string interpolation"),"."),(0,a.kt)("h2",{id:"mixing-arguments"},"Mixing arguments"),(0,a.kt)("p",null,"You can use positional arguments for the first few arguments and then use named arguments for the latter ones, for example:"),(0,a.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,a.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,a.kt)("div",{parentName:"pre",className:"code-container"},(0,a.kt)("code",{parentName:"div"},(0,a.kt)("div",{parentName:"code",className:"line"},(0,a.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"local"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #66D9EF",fontStyle:"italic"}},"function"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #A6E22E"}},"process_file"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,a.kt)("span",{parentName:"div",style:{color:"color: #FD971F",fontStyle:"italic"}},"file"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},","),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #FD971F",fontStyle:"italic"}},"mode"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"="),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"r"'),(0,a.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},","),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #FD971F",fontStyle:"italic"}},"version"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"="),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #AE81FF"}},"1"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},")")),(0,a.kt)("div",{parentName:"code",className:"line"},(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"    "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"print"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"$"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"Processing '),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"{file}"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}}," with mode '"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"{mode}"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},"' and version "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"{version}"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"'),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},")")),(0,a.kt)("div",{parentName:"code",className:"line"},(0,a.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"end")),(0,a.kt)("div",{parentName:"code",className:"line"},(0,a.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"process_file"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,a.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"hello.txt"'),(0,a.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},","),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," version "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"="),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #AE81FF"}},"2"),(0,a.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},") "),(0,a.kt)("span",{parentName:"div",style:{color:"color: #88846F"}},"-- \"Processing hello.txt with mode 'r' and version 2\""))))),(0,a.kt)("h4",{id:"try-it-yourself-1"},(0,a.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=local%20function%20process_file(file%2C%20mode%20%3D%20%22r%22%2C%20version%20%3D%201)%0D%0A%20%20%20%20print(%24%22Processing%20%7Bfile%7D%20with%20mode%20'%7Bmode%7D'%20and%20version%20%7Bversion%7D%22)%0D%0Aend%0D%0Aprocess_file(%22hello.txt%22%2C%20version%20%3D%202)"},"Try It Yourself")),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"This feature is implemented entirely in the parser and therefore only works for local functions at the moment."))}d.isMDXComponent=!0}}]);