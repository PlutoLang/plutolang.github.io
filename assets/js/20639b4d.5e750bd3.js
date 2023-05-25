"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[8400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),f=o,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,l={unversionedId:"New Features/Export Modifier",id:"New Features/Export Modifier",title:"Export Modifier",description:"The export modifier allows you to automatically aggregate things you want to export into a table.",source:"@site/docs/New Features/Export Modifier.md",sourceDirName:"New Features",slug:"/New Features/Export Modifier",permalink:"/docs/New Features/Export Modifier",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Default Arguments",permalink:"/docs/New Features/Default Arguments"},next:{title:"In Expressions",permalink:"/docs/New Features/In Expressions"}},p={},u=[{value:"Using Compatibility Mode?",id:"using-compatibility-mode",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"export")," modifier allows you to automatically aggregate things you want to export into a table."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'title="Old Code"',title:'"Old','Code"':!0},"local version = 2\n\nlocal function add(a, b)\n    return a + b\nend\n\nlocal class Bigint\n    chunks = {}\nend\n\nreturn {\n    version = version,\n    add = add,\n    Bigint = Bigint\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto",metastring:'title="New Code"',title:'"New','Code"':!0},"export version = 2\n\nexport function add(a, b)\n    return a + b\nend\n\nexport class Bigint\n    chunks = {}\nend\n")),(0,o.kt)("p",null,"The return statement is automatically generated."),(0,o.kt)("h2",{id:"using-compatibility-mode"},"Using Compatibility Mode?"),(0,o.kt)("p",null,"You may need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"pluto_export")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"export"),"."))}d.isMDXComponent=!0}}]);