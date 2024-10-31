"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[58],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),v=r,N=m["".concat(i,".").concat(v)]||m[v]||d[v]||o;return a?n.createElement(N,l(l({ref:t},c),{},{components:a})):n.createElement(N,l({ref:t},c))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=v;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},4203:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:3},l=void 0,s={unversionedId:"Runtime Environment/Regex",id:"Runtime Environment/Regex",title:"Regex",description:'The Regex module is available via require "pluto:regex" and provides Soup\'s flavor of the popular string matching language.',source:"@site/docs/Runtime Environment/Regex.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/Regex",permalink:"/docs/Runtime Environment/Regex",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"JSON",permalink:"/docs/Runtime Environment/JSON"},next:{title:"Scheduler",permalink:"/docs/Runtime Environment/Scheduler"}},i={},p=[{value:"<code>regex.new</code>",id:"regexnew",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>regex.match</code>",id:"regexmatch",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4}],c={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Regex module is available via ",(0,r.kt)("inlineCode",{parentName:"p"},'require "pluto:regex"')," and provides ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/calamity-inc/Soup/blob/senpai/docs/user/regex.md"},"Soup's flavor")," of the popular string matching language."),(0,r.kt)("h3",{id:"regexnew"},(0,r.kt)("inlineCode",{parentName:"h3"},"regex.new")),(0,r.kt)("p",null,"Parses a pattern and creates an instance for it."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The regex to be ",(0,r.kt)("em",{parentName:"li"},"compiled"),". Note that this must be a full pattern with a start and end delimiter (commonly ",(0,r.kt)("inlineCode",{parentName:"li"},"/"),"). Flags may optionally be present after the end delimiter.")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,"A pattern instance."),(0,r.kt)("h3",{id:"regexmatch"},(0,r.kt)("inlineCode",{parentName:"h3"},"regex.match")),(0,r.kt)("p",null,"Attempt to match a pattern instance."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The pattern instance.")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"A table with an index/key for each matching group or nil if no matches."),(0,r.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," regex "),(0,r.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:regex"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," pattern "),(0,r.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"regex"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},"[[/^the (?:(.+) )?one$/]]")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"dumpvar"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(pattern"),(0,r.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"match"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"the one"'),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")))")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     [0] = string(7) "the one",')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e }")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"dumpvar"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(pattern"),(0,r.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"match"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"the chosen one"'),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")))")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     [1] = string(6) "chosen",')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     [0] = string(14) "the chosen one",')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e }")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(pattern"),(0,r.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"match"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"not the one"'),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"))")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e nil"))))),(0,r.kt)("p",null,"The overall pattern match is in index 0, and in this case there is only the 1 capturing group, that being ",(0,r.kt)("inlineCode",{parentName:"p"},"(.+)"),"."),(0,r.kt)("p",null,"Capture group names will be used if available:"),(0,r.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," regex "),(0,r.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"pluto:regex"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," pattern "),(0,r.kt)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"regex"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},"[[/^the (?:(?'what'.+) )?one$/]]")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"dumpvar"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(pattern"),(0,r.kt)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#66D9EF"}},"match"),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#E6DB74"}},'"the chosen one"'),(0,r.kt)("span",{parentName:"div",style:{color:"#F8F8F2"}},")))")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     [0] = string(14) "the chosen one",')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#88846F"}},'--\x3e     ["what"] = string(6) "chosen",')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e }"))))))}d.isMDXComponent=!0}}]);