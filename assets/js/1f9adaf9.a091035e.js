"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[8174],{5680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>F});var n=t(6540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},y=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=o,F=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return t?n.createElement(F,l(l({ref:a},y),{},{components:t})):n.createElement(F,l({ref:a},y))}));function F(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6216:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=t(8168),o=(t(6540),t(5680));const r={sidebar_position:1},l=void 0,i={unversionedId:"New Features/Continue Statement",id:"New Features/Continue Statement",title:"Continue Statement",description:"Continue statements, like break, are meant to be used in loops. They skip the current iteration of the loop.",source:"@site/docs/New Features/Continue Statement.md",sourceDirName:"New Features",slug:"/New Features/Continue Statement",permalink:"/docs/New Features/Continue Statement",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Compiler Warnings",permalink:"/docs/New Features/Compiler Warnings"},next:{title:"Default Arguments",permalink:"/docs/New Features/Default Arguments"}},s={},p=[{value:"Continue&#39;s Only Argument",id:"continues-only-argument",level:2},{value:"Using Compatibility Mode?",id:"using-compatibility-mode",level:2}],y={toc:p},c="wrapper";function m(e){let{components:a,...t}=e;return(0,o.yg)(c,(0,n.A)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Continue statements, like ",(0,o.yg)("inlineCode",{parentName:"p"},"break"),", are meant to be used in loops. They skip the current iteration of the loop."),(0,o.yg)("p",null,"They introduce a new keyword, ",(0,o.yg)("inlineCode",{parentName:"p"},"continue"),". These cannot be used inside switch statements."),(0,o.yg)("pre",{className:"shiki monokai-patched with-title",style:{backgroundColor:"#272822",color:"#F8F8F2"},showlinenumbers:"true",title:"Example Code"},(0,o.yg)("div",{parentName:"pre",className:"code-title"},"Example Code"),(0,o.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,o.yg)("div",{parentName:"pre",className:"code-container"},(0,o.yg)("code",{parentName:"div"},(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- Print every number besides five.")),(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"for"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," i "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,o.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"10"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"do")),(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"if"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," i "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"=="),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"5"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"then")),(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"continue")),(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end")),(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,o.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(i)")),(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,o.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- continue jumps here.")),(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end"))))),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Note, ",(0,o.yg)("inlineCode",{parentName:"p"},"continue")," will skip code. If any code within your loop will determine if the loop continues, make sure ",(0,o.yg)("inlineCode",{parentName:"p"},"continue")," doesn't jump over it.")),(0,o.yg)("h2",{id:"continues-only-argument"},"Continue's Only Argument"),(0,o.yg)("p",null,"This keyword accepts an optional integral argument which tells it how many levels of enclosing loops it should skip to the end of. The default value is 1, thus skipping to the end of the current loop."),(0,o.yg)("pre",{className:"shiki monokai-patched with-title",style:{backgroundColor:"#272822",color:"#F8F8F2"},showlinenumbers:"true",title:"Example 1"},(0,o.yg)("div",{parentName:"pre",className:"code-title"},"Example 1"),(0,o.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,o.yg)("div",{parentName:"pre",className:"code-container"},(0,o.yg)("code",{parentName:"div"},(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"for"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," i "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,o.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"10"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"do"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- Loop 1.")),(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"continue"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- This is identical to `continue` without any arguments.")),(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end"))))),(0,o.yg)("pre",{className:"shiki monokai-patched with-title",style:{backgroundColor:"#272822",color:"#F8F8F2"},showlinenumbers:"true",title:"Example 2"},(0,o.yg)("div",{parentName:"pre",className:"code-title"},"Example 2"),(0,o.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,o.yg)("div",{parentName:"pre",className:"code-container"},(0,o.yg)("code",{parentName:"div"},(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"for"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," i "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,o.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"10"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"do"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- Loop 1.")),(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"for"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," ii "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,o.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"5"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"do"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- Loop 2.")),(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"continue"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"1"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- This will continue from Loop 2.")),(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"        "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"continue"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"2"),(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,o.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- This will continue from Loop 1.")),(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"    "),(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end")),(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"#F92672"}},"end"))))),(0,o.yg)("h2",{id:"using-compatibility-mode"},"Using Compatibility Mode?"),(0,o.yg)("p",null,"You may need to use ",(0,o.yg)("inlineCode",{parentName:"p"},"pluto_continue")," instead of ",(0,o.yg)("inlineCode",{parentName:"p"},"continue"),". Alternatively, ",(0,o.yg)("inlineCode",{parentName:"p"},"pluto_use continue")," will enable the keyword independently of environment settings."))}m.isMDXComponent=!0}}]);