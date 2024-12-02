"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[6155],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(8168),o=(n(6540),n(5680));const i={},a=void 0,s={unversionedId:"Optimizations/For Loops",id:"Optimizations/For Loops",title:"For Loops",description:"The pairs and ipairs functions are optimized in Pluto. On a consistent basis, pairs & ipairs loops are 3.5x faster than their Lua counterparts.",source:"@site/docs/Optimizations/For Loops.md",sourceDirName:"Optimizations",slug:"/Optimizations/For Loops",permalink:"/docs/Optimizations/For Loops",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Optimizations",permalink:"/docs/category/optimizations"},next:{title:"Jump Table",permalink:"/docs/Optimizations/Jump Table"}},p={},l=[{value:"How does it work?",id:"how-does-it-work",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"pairs")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"ipairs")," functions are optimized in Pluto. On a consistent basis, ",(0,o.yg)("inlineCode",{parentName:"p"},"pairs")," & ",(0,o.yg)("inlineCode",{parentName:"p"},"ipairs")," loops are ",(0,o.yg)("strong",{parentName:"p"},"3.5x")," faster than their Lua counterparts."),(0,o.yg)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.yg)("p",null,"It doesn't operate under all circumstances though, the state of the iterator is stored in the to-be-closed variable returned by these functions, which is the last variable they give. If you interact or modify this variable, then the optimization won't occur."),(0,o.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,o.yg)("div",{parentName:"pre",className:"code-container"},(0,o.yg)("code",{parentName:"div"},(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"undefined"}},"pairs: next, table, nil, nil")),(0,o.yg)("div",{parentName:"code",className:"line"},(0,o.yg)("span",{parentName:"div",style:{color:"undefined"}},"ipairs: ipairsaux, table, integer, nil"))))),(0,o.yg)("p",null,"As long as you don't access the last ",(0,o.yg)("inlineCode",{parentName:"p"},"nil")," value, you're fine."),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"This optimization was published and implemented entirely by Xmelia Hermit.")))}m.isMDXComponent=!0}}]);