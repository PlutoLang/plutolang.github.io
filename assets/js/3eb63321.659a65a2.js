"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[7870],{5680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>F});var r=t(6540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),i=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},y=function(e){var a=i(e.components);return r.createElement(p.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),c=i(t),m=n,F=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(F,l(l({ref:a},y),{},{components:t})):r.createElement(F,l({ref:a},y))}));function F(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6850:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=t(8168),n=(t(6540),t(5680));const o={sidebar_position:1},l=void 0,s={unversionedId:"New Features/For-As Loop",id:"New Features/For-As Loop",title:"For-As Loop",description:"When you only want to iterate over the values of a table, you can use Pluto's for-as syntax.",source:"@site/docs/New Features/For-As Loop.md",sourceDirName:"New Features",slug:"/New Features/For-As Loop",permalink:"/docs/New Features/For-As Loop",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Default Arguments",permalink:"/docs/New Features/Default Arguments"},next:{title:"Named Varargs",permalink:"/docs/New Features/Named Varargs"}},p={},i=[],y={toc:i},c="wrapper";function d(e){let{components:a,...t}=e;return(0,n.yg)(c,(0,r.A)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"When you only want to iterate over the values of a table, you can use Pluto's for-as syntax."),(0,n.yg)("pre",{className:"shiki monokai with-title",style:{backgroundColor:"#272822",color:"#F8F8F2"},showlinenumbers:"true",title:"New Code"},(0,n.yg)("div",{parentName:"pre",className:"code-title"},"New Code"),(0,n.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.yg)("div",{parentName:"pre",className:"code-container"},(0,n.yg)("code",{parentName:"div"},(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t "),(0,n.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," { "),(0,n.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,n.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"2"),(0,n.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"3"),(0,n.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"hello"'),(0,n.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"world"'),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," }")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#F92672"}},"for"),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t "),(0,n.yg)("span",{parentName:"div",style:{color:"#F92672"}},"as"),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," value "),(0,n.yg)("span",{parentName:"div",style:{color:"#F92672"}},"do")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,n.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(value)")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end")),(0,n.yg)("div",{parentName:"code",className:"line"}),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 1")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 2")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 3")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e hello")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e world"))))),(0,n.yg)("p",null,"That code is identical to this:"),(0,n.yg)("pre",{className:"shiki monokai with-title",style:{backgroundColor:"#272822",color:"#F8F8F2"},showlinenumbers:"true",title:"Old Code"},(0,n.yg)("div",{parentName:"pre",className:"code-title"},"Old Code"),(0,n.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.yg)("div",{parentName:"pre",className:"code-container"},(0,n.yg)("code",{parentName:"div"},(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t "),(0,n.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," { "),(0,n.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,n.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"2"),(0,n.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"3"),(0,n.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"hello"'),(0,n.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,n.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"world"'),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," }")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#F92672"}},"for"),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," _"),(0,n.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," value "),(0,n.yg)("span",{parentName:"div",style:{color:"#F92672"}},"in"),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t "),(0,n.yg)("span",{parentName:"div",style:{color:"#F92672"}},"do")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,n.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,n.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(value)")),(0,n.yg)("div",{parentName:"code",className:"line"},(0,n.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end"))))),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"The bytecode of this feature is only backwards-compatible with Lua when ",(0,n.yg)("inlineCode",{parentName:"p"},"pairs"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"ipairs"),", or ",(0,n.yg)("inlineCode",{parentName:"p"},"next")," is used. See ",(0,n.yg)("a",{parentName:"p",href:"/docs/QoL%20Improvements/Generalized%20Iteration"},"Generalized Iteration"),".")))}d.isMDXComponent=!0}}]);