"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[1609],{5680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>u});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,u=m["".concat(s,".").concat(d)]||m[d]||y[d]||o;return t?n.createElement(u,l(l({ref:a},c),{},{components:t})):n.createElement(u,l({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7616:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(8168),r=(t(6540),t(5680));const o={},l=void 0,i={unversionedId:"Runtime Environment/Math",id:"Runtime Environment/Math",title:"Math",description:"This page documents the changes & additions to the math library in Pluto, which is built on top of Lua 5.4's.",source:"@site/docs/Runtime Environment/Math.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/Math",permalink:"/docs/Runtime Environment/Math",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JSON",permalink:"/docs/Runtime Environment/JSON"},next:{title:"OS",permalink:"/docs/Runtime Environment/OS"}},s={},p=[{value:"<code>math.isnan</code>",id:"mathisnan",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>math.round</code>",id:"mathround",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>math.atan2</code>",id:"mathatan2",level:3}],c={toc:p},m="wrapper";function y(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This page documents the changes & additions to the ",(0,r.yg)("inlineCode",{parentName:"p"},"math")," library in Pluto, which is built on top of Lua 5.4's."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"mathisnan"},(0,r.yg)("inlineCode",{parentName:"h3"},"math.isnan")),(0,r.yg)("p",null,"Checks if a number is NaN."),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The number to check.")),(0,r.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,r.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.yg)("div",{parentName:"pre",className:"code-container"},(0,r.yg)("code",{parentName:"div"},(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," x "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"0"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"/"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"0")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(x "),(0,r.yg)("span",{parentName:"div",style:{color:"#F92672"}},"~="),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," x) "),(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"-- Lua way: Prove the variable is NaN because it is not equal to itself. Works, but unintuitive.")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"math"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"isnan"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(x))"))))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"mathround"},(0,r.yg)("inlineCode",{parentName:"h3"},"math.round")),(0,r.yg)("p",null,"Rounds a number to the nearest integer."),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The number to round.")),(0,r.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,r.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.yg)("div",{parentName:"pre",className:"code-container"},(0,r.yg)("code",{parentName:"div"},(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"math"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"round"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"2.4"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")) "),(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 2")),(0,r.yg)("div",{parentName:"code",className:"line"},(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"math"),(0,r.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,r.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"round"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"2.5"),(0,r.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")) "),(0,r.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e 3"))))),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"mathatan2"},(0,r.yg)("inlineCode",{parentName:"h3"},"math.atan2")),(0,r.yg)("p",null,"An alias of ",(0,r.yg)("inlineCode",{parentName:"p"},"math.atan"),"."))}y.isMDXComponent=!0}}]);