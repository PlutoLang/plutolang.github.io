"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[6446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),v=o,m=d["".concat(c,".").concat(v)]||d[v]||s[v]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},3693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,l={unversionedId:"Runtime Environment/Class Reference/Vector3",id:"Runtime Environment/Class Reference/Vector3",title:"Vector3",description:"Must be included via require.",source:"@site/docs/Runtime Environment/Class Reference/Vector3.md",sourceDirName:"Runtime Environment/Class Reference",slug:"/Runtime Environment/Class Reference/Vector3",permalink:"/docs/Runtime Environment/Class Reference/Vector3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Exception",permalink:"/docs/Runtime Environment/Class Reference/Exception"},next:{title:"Optimizations",permalink:"/docs/category/optimizations"}},c={},u=[{value:"<code>__construct</code>",id:"__construct",level:3},{value:"<code>__tostring</code>",id:"__tostring",level:3},{value:"<code>__add</code>, <code>__sub</code>, <code>__mul</code>, <code>__div</code>",id:"__add-__sub-__mul-__div",level:3},{value:"<code>__eq</code>",id:"__eq",level:3},{value:"<code>__len</code>, <code>magnitude</code>",id:"__len-magnitude",level:3},{value:"<code>sum</code>",id:"sum",level:3},{value:"<code>min</code>",id:"min",level:3},{value:"<code>max</code>",id:"max",level:3},{value:"<code>dot</code>",id:"dot",level:3},{value:"<code>abs</code>",id:"abs",level:3},{value:"<code>normalized</code>, <code>normalised</code>",id:"normalized-normalised",level:3},{value:"<code>torot</code>",id:"torot",level:3},{value:"<code>lookat</code>",id:"lookat",level:3},{value:"<code>todir</code>",id:"todir",level:3}],p={toc:u},d="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Must be included via ",(0,o.kt)("inlineCode",{parentName:"p"},"require"),"."),(0,o.kt)("h3",{id:"__construct"},(0,o.kt)("inlineCode",{parentName:"h3"},"__construct")),(0,o.kt)("p",null,"The constructor takes up to 3 arguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},'local vector3 = require "pluto:vector3"\nprint(new vector3())        --\x3e vector3(0, 0, 0)\nprint(new vector3(1))       --\x3e vector3(1, 1, 1)\nprint(new vector3(1, 2))    --\x3e vector3(1, 2, 0)\nprint(new vector3(1, 2, 3)) --\x3e vector3(1, 2, 3)\n')),(0,o.kt)("p",null,"There is also a shorthand for this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},'local vector3 = require "pluto:vector3"\nprint(vector3(1, 2, 3)) --\x3e vector3(1, 2, 3)\n')),(0,o.kt)("h3",{id:"__tostring"},(0,o.kt)("inlineCode",{parentName:"h3"},"__tostring")),(0,o.kt)("p",null,"As seen above, the ",(0,o.kt)("inlineCode",{parentName:"p"},"__tostring")," method provides a string representation of the class."),(0,o.kt)("h3",{id:"__add-__sub-__mul-__div"},(0,o.kt)("inlineCode",{parentName:"h3"},"__add"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"__sub"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"__mul"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"__div")),(0,o.kt)("p",null,"Vector3 instances support arithmetic operations. The right-hand side can either be a Vector3 instance or a number. They create a new instance for the result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},'local vector3 = require "pluto:vector3"\nprint(new vector3(1) + new vector3(2)) --\x3e vector3(3, 3, 3)\nprint(new vector3(0, 0.6, 0.4) * 3)    --\x3e vector3(0, 1.8, 1.2)\n')),(0,o.kt)("h3",{id:"__eq"},(0,o.kt)("inlineCode",{parentName:"h3"},"__eq")),(0,o.kt)("p",null,"Vector3 instances can effortlessly be compared to each other."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},'local vector3 = require "pluto:vector3"\nprint(new vector3(2, 2, 2) == new vector3(2)) --\x3e true\nprint(new vector3(1, 2, 3) == new vector3(2)) --\x3e false\n')),(0,o.kt)("h3",{id:"__len-magnitude"},(0,o.kt)("inlineCode",{parentName:"h3"},"__len"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"magnitude")),(0,o.kt)("p",null,"To get the magnitude of a vector, you can either use the unary length operator (",(0,o.kt)("inlineCode",{parentName:"p"},"#"),") or call the ",(0,o.kt)("inlineCode",{parentName:"p"},"magnitude")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},'local vec = new (require"pluto:vector3") (1, 2, 3)\nprint(#vec)            --\x3e 3.7416573867739\nprint(vec:magnitude()) --\x3e 3.7416573867739\n')),(0,o.kt)("h3",{id:"sum"},(0,o.kt)("inlineCode",{parentName:"h3"},"sum")),(0,o.kt)("p",null,"Computes the sum of the ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"z")," fields."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},'local vec = new (require"pluto:vector3") (1, 2, 3)\nprint(vec:sum()) --\x3e 6\n')),(0,o.kt)("h3",{id:"min"},(0,o.kt)("inlineCode",{parentName:"h3"},"min")),(0,o.kt)("p",null,"Returns the value of axis with the lowest value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},'local vec = new (require"pluto:vector3") (1, 2, 3)\nprint(vec:min()) --\x3e 1\n')),(0,o.kt)("h3",{id:"max"},(0,o.kt)("inlineCode",{parentName:"h3"},"max")),(0,o.kt)("p",null,"Returns the value of axis with the highest value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},'local vec = new (require"pluto:vector3") (1, 2, 3)\nprint(vec:max()) --\x3e 3\n')),(0,o.kt)("h3",{id:"dot"},(0,o.kt)("inlineCode",{parentName:"h3"},"dot")),(0,o.kt)("p",null,"Computes the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dot_product"},"dot product")," with the Vector3 given as an argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},'local vector3 = require "pluto:vector3"\nprint(new vector3(1):dot(new vector3(2))) --\x3e 6\n')),(0,o.kt)("h3",{id:"abs"},(0,o.kt)("inlineCode",{parentName:"h3"},"abs")),(0,o.kt)("p",null,"Returns a new Vector3 instance with each axis being an absolute value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},'local vector3 = require "pluto:vector3"\nprint(new vector3(-1, -2, 3):abs()) --\x3e vector3(1, 2, 3)\n')),(0,o.kt)("h3",{id:"normalized-normalised"},(0,o.kt)("inlineCode",{parentName:"h3"},"normalized"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"normalised")),(0,o.kt)("p",null,"Returns a new Vector3 instance that is a unit vector equivalent."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},'local vector3 = require "pluto:vector3"\nprint(new vector3(0, 3, 0):normalized()) --\x3e vector3(0.0, 1.0, 0.0)\n')),(0,o.kt)("h3",{id:"torot"},(0,o.kt)("inlineCode",{parentName:"h3"},"torot")),(0,o.kt)("p",null,"Returns a rotation vector based on the direction given by the current vector."),(0,o.kt)("p",null,"You can specify the up-axis and handedness of the coordinate system. By default, a left-handed Y-up system is used."),(0,o.kt)("p",null,"The up-axis also determines which axis contains which value:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Y-Up: Pitch, Yaw, Roll"),(0,o.kt)("li",{parentName:"ul"},"Z-Up: Pitch, Roll, Yaw")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},'local vector3 = require "pluto:vector3"\nprint(new vector3(0, 1, 0):torot("y")) -- Y up. Pointing up -> vector3(90.0, 0.0, 0)\nprint(new vector3(0, 0, -1):torot("z")) -- Z up. Pointing down -> vector3(-90.0, 0, -0.0)\nprint(new vector3(1, 0, 0):torot("yr")) -- Y up, right-handed. Pointing right -> vector3(0.0, -90.0, 0)\nprint(new vector3(1, 0, 0):torot("yl")) -- Y up, left-handed. Pointing right -> vector3(0.0, 90.0, 0)\nprint(new vector3(1, 0, 0):torot("zr")) -- Z up, right-handed. Pointing right -> vector3(0.0, 0, 90.0)\nprint(new vector3(0, 0, 1):torot("y")) -- Y up. Pointing forward -> vector3(0.0, 0.0, 0)\nprint(new vector3(0, 0, -1):torot("y")) -- Y up. Pointing backward -> vector3(0.0, 180.0, 0)\n')),(0,o.kt)("h3",{id:"lookat"},(0,o.kt)("inlineCode",{parentName:"h3"},"lookat")),(0,o.kt)("p",null,"Returns a rotation vector based on the position given by the current vector and argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},'local v3 = require "pluto:vector3"\nprint(new v3(0):lookat(new v3(0, 1, 0), "y")) -- Y up. From origin to a point above -> vector3(90.0, 0.0, 0)\n')),(0,o.kt)("h3",{id:"todir"},(0,o.kt)("inlineCode",{parentName:"h3"},"todir")),(0,o.kt)("p",null,"Returns a direction vector based on the rotation given by the current vector."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pluto"},'local vector3 = require "pluto:vector3"\nprint(new vector3(90, 0, 0):todir("y")) -- Y up. Pointing up -> vector3(0.0, 1.0, 6.1232339957368e-17)\nprint(new vector3(0, 90, 0):todir("yl")) -- Y up, left-handed. Pointing right -> vector3(1.0, 0.0, 6.1232339957368e-17)\nprint(new vector3(0, 90, 0):todir("yr")) -- Y up, right-handed. Pointing right -> vector3(-1.0, 0.0, 6.1232339957368e-17)\n')))}s.isMDXComponent=!0}}]);