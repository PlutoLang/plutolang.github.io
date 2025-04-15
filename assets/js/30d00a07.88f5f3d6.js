"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[664],{5680:(e,a,n)=>{n.d(a,{xA:()=>i,yg:()=>m});var t=n(6540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=t.createContext({}),y=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},i=function(e){var a=y(e.components);return t.createElement(p.Provider,{value:a},e.children)},c="mdxType",F={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,s=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),c=y(n),d=l,m=c["".concat(p,".").concat(d)]||c[d]||F[d]||s;return n?t.createElement(m,r(r({ref:a},i),{},{components:n})):t.createElement(m,r({ref:a},i))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var s=n.length,r=new Array(s);r[0]=d;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var y=2;y<s;y++)r[y]=n[y];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8404:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>F,frontMatter:()=>s,metadata:()=>o,toc:()=>y});var t=n(8168),l=(n(6540),n(5680));const s={sidebar_position:1},r=void 0,o={unversionedId:"New Features/Switch Blocks",id:"New Features/Switch Blocks",title:"Switch Blocks",description:"Switch blocks consists of the following new keywords:",source:"@site/docs/New Features/Switch Blocks.md",sourceDirName:"New Features",slug:"/New Features/Switch Blocks",permalink:"/docs/New Features/Switch Blocks",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"String Interpolation",permalink:"/docs/New Features/String Interpolation"},next:{title:"Ternary Expressions",permalink:"/docs/New Features/Ternary Expressions"}},p={},y=[{value:"Switch Statement",id:"switch-statement",level:2},{value:"Case Blocks",id:"case-blocks",level:2},{value:"Switch Expression",id:"switch-expression",level:2},{value:"Using Compatibility Mode?",id:"using-compatibility-mode",level:2}],i={toc:y},c="wrapper";function F(e){let{components:a,...n}=e;return(0,l.yg)(c,(0,t.A)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Switch blocks consists of the following new keywords:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"case")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"switch")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"default"))),(0,l.yg)("h2",{id:"switch-statement"},"Switch Statement"),(0,l.yg)("pre",{className:"shiki monokai-patched",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," value "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"switch"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," value "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"do")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"There is only one!"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"break")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"2"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"There is only two!"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"break")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- Break jumps here."))))),(0,l.yg)("p",null,"Switch statements also support fallthrough."),(0,l.yg)("pre",{className:"shiki monokai-patched",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," value "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"switch"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," value "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"do")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"2"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"3"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"4"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"5"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Got 1-5."'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"break")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"default"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Value is greater than 5."'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- Break jumps here."))))),(0,l.yg)("p",null,"In this example, cases 1-4 fall through to case 5."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Remember to use break whenever you do not want fallthrough"),". Here is an example of a potential bug:"),(0,l.yg)("pre",{className:"shiki monokai-patched",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," value "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"switch"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," value "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"do")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"There is only one!"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"2"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"There is only two!"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end")),(0,l.yg)("div",{parentName:"code",className:"line"}),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- Output:")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--  There is only one!")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--  There is only two! <-- Uh oh."))))),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"default")," case is executed if none of the other cases are true. For example:"),(0,l.yg)("pre",{className:"shiki monokai-patched",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," value "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"switch"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," value "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"do")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"2"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"3"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"break")),(0,l.yg)("div",{parentName:"code",className:"line"}),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"default"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Value is neither 2 nor 3!"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end"))))),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"default")," case can be placed anywhere in the block. It also supports fallthrough, so remember to use ",(0,l.yg)("inlineCode",{parentName:"p"},"break")," if you place it above any cases."),(0,l.yg)("h2",{id:"case-blocks"},"Case Blocks"),(0,l.yg)("p",null,"Any expression can be used for the case condition:"),(0,l.yg)("pre",{className:"shiki monokai-patched",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"switch"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"true"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"do")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"42"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"42"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"42 is 42 is true"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"break")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end"))))),(0,l.yg)("p",null,"There is a short-hand fallthrough syntax:"),(0,l.yg)("pre",{className:"shiki monokai-patched",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"switch"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," value "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"do")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"2"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"3"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"1-3"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"break")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"4"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"5"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"6"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"4-6"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"break")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end"))))),(0,l.yg)("p",null,"However, note that method calls needs to be encapsulated with parentheses:"),(0,l.yg)("pre",{className:"shiki monokai-patched",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," {")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"function"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#A6E22E"}},"getVal"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"return"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"42")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"}")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"switch"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"42"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"do")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," t"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"getVal"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},'-- This is interpreted as `case t: getVal():print("val is 42")`')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"val is 42"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"break")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," (t"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"getVal"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"())"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- This works as expected")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"val is 42"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"break")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end"))))),(0,l.yg)("h2",{id:"switch-expression"},"Switch Expression"),(0,l.yg)("p",null,"Just like ternary expressions, these allow you to conditionally provide values, with massively simplified case blocks:"),(0,l.yg)("pre",{className:"shiki monokai-patched",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," place "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"place "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"switch"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," place "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"do")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"->"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"1st"')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"2"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"->"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"2nd"')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"3"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"->"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"3rd"')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"default"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"->"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"$"),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"'),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"{place}"),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'th"')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(place) "),(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 1st"))))),(0,l.yg)("p",null,"Note that the case blocks here have their conditions delimited by an arrow (->) instead of a colon (:)."),(0,l.yg)("p",null,"Despite not being able to manually fall through, the shorthand fallthrough syntax still works:"),(0,l.yg)("pre",{className:"shiki monokai-patched",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,l.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,l.yg)("div",{parentName:"pre",className:"code-container"},(0,l.yg)("code",{parentName:"div"},(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"function"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#A6E22E"}},"print_range"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#FD971F",fontStyle:"italic"}},"value"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"switch"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," value "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"do")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"2"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"3"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"->"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"1-3"')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"case"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"4"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"5"),(0,l.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"6"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"->"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,l.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"4-6"')),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print_range"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},") "),(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 1-3")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print_range"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"6"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},") "),(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 4-6")),(0,l.yg)("div",{parentName:"code",className:"line"},(0,l.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print_range"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,l.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"9"),(0,l.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},") "),(0,l.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e nil"))))),(0,l.yg)("p",null,"Notice how the ",(0,l.yg)("inlineCode",{parentName:"p"},"default")," case was omitted in this example, so it was implicitly set to ",(0,l.yg)("inlineCode",{parentName:"p"},"default -> nil"),"."),(0,l.yg)("h2",{id:"using-compatibility-mode"},"Using Compatibility Mode?"),(0,l.yg)("p",null,"You may need to use ",(0,l.yg)("inlineCode",{parentName:"p"},"pluto_switch")," instead of ",(0,l.yg)("inlineCode",{parentName:"p"},"switch"),". Alternatively, ",(0,l.yg)("inlineCode",{parentName:"p"},"pluto_use switch")," will enable the keyword independently of environment settings."))}F.isMDXComponent=!0}}]);