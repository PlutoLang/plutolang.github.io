"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[6737],{5680:(e,a,r)=>{r.d(a,{xA:()=>d,yg:()=>g});var n=r(6540);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=n.createContext({}),p=function(e){var a=n.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},d=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),y=p(r),m=t,g=y["".concat(i,".").concat(m)]||y[m]||c[m]||o;return r?n.createElement(g,l(l({ref:a},d),{},{components:r})):n.createElement(g,l({ref:a},d))}));function g(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[y]="string"==typeof e?e:t,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6165:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(8168),t=(r(6540),r(5680));const o={},l=void 0,s={unversionedId:"Runtime Environment/Base64",id:"Runtime Environment/Base64",title:"Base64",description:"Must be included via require.",source:"@site/docs/Runtime Environment/Base64.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/Base64",permalink:"/docs/Runtime Environment/Base64",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Base32",permalink:"/docs/Runtime Environment/Base32"},next:{title:"Bigint",permalink:"/docs/Runtime Environment/Bigint"}},i={},p=[{value:"<code>base64.encode</code>",id:"base64encode",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>base64.decode</code>",id:"base64decode",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>base64.urlencode</code>",id:"base64urlencode",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>base64.urldecode</code>",id:"base64urldecode",level:3},{value:"Parameters",id:"parameters-3",level:4}],d={toc:p},y="wrapper";function c(e){let{components:a,...r}=e;return(0,t.yg)(y,(0,n.A)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Must be included via ",(0,t.yg)("inlineCode",{parentName:"p"},"require"),"."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"base64encode"},(0,t.yg)("inlineCode",{parentName:"h3"},"base64.encode")),(0,t.yg)("p",null,"Returns a base64-encoded string."),(0,t.yg)("h4",{id:"parameters"},"Parameters"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"data")," \u2014 A string of data to encode."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"pad")," \u2014 Whether or not to apply padding. Defaults to ",(0,t.yg)("inlineCode",{parentName:"li"},"true"),".")),(0,t.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,t.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,t.yg)("div",{parentName:"pre",className:"code-container"},(0,t.yg)("code",{parentName:"div"},(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," base64 "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"base64"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(base64"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"encode"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Hello, World!"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")) "),(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e SGVsbG8sIFdvcmxkIQ=="))))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"base64decode"},(0,t.yg)("inlineCode",{parentName:"h3"},"base64.decode")),(0,t.yg)("p",null,"Returns a decoded base64 string."),(0,t.yg)("h4",{id:"parameters-1"},"Parameters"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"data")," \u2014 A string of base64 data.")),(0,t.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,t.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,t.yg)("div",{parentName:"pre",className:"code-container"},(0,t.yg)("code",{parentName:"div"},(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," base64 "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"base64"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(base64"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"decode"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"SGVsbG8sIFdvcmxkIQ=="'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")) "),(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e Hello, world!"))))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"base64urlencode"},(0,t.yg)("inlineCode",{parentName:"h3"},"base64.urlencode")),(0,t.yg)("p",null,"Returns a base64url-encoded string. This variant is sometimes refered to as filename safe base64."),(0,t.yg)("h4",{id:"parameters-2"},"Parameters"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"data")," \u2014 A string of data to encode."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"pad")," \u2014 Whether or not to apply padding. Defaults to ",(0,t.yg)("inlineCode",{parentName:"li"},"false"),".")),(0,t.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,t.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,t.yg)("div",{parentName:"pre",className:"code-container"},(0,t.yg)("code",{parentName:"div"},(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," base64 "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"base64"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(base64"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"urlencode"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Hello, World!"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")) "),(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e SGVsbG8sIFdvcmxkIQ"))))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"base64urldecode"},(0,t.yg)("inlineCode",{parentName:"h3"},"base64.urldecode")),(0,t.yg)("p",null,"Similar to ",(0,t.yg)("inlineCode",{parentName:"p"},"base64.decode")," except for base64url."),(0,t.yg)("h4",{id:"parameters-3"},"Parameters"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"data")," \u2014 A string of base64 data.")),(0,t.yg)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,t.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,t.yg)("div",{parentName:"pre",className:"code-container"},(0,t.yg)("code",{parentName:"div"},(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," base64 "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"base64"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(base64"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"urldecode"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"SGVsbG8sIFdvcmxkIQ"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")) "),(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e Hello, world!"))))))}c.isMDXComponent=!0}}]);