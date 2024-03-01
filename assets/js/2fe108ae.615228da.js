"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[7959],{9951:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=r(4848),a=r(8453);const s={sidebar_position:14},o=void 0,i={id:"New Features/Named Varargs",title:"Named Varargs",description:"If you have a function that takes varargs and you want them in a table, you'd have to do something like this:",source:"@site/docs/New Features/Named Varargs.md",sourceDirName:"New Features",slug:"/New Features/Named Varargs",permalink:"/docs/New Features/Named Varargs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"In Expressions",permalink:"/docs/New Features/In Expressions"},next:{title:"Destructuring",permalink:"/docs/New Features/Destructuring"}},u={},c=[{value:"Try It Yourself",id:"try-it-yourself",level:4}];function l(e){const n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"If you have a function that takes varargs and you want them in a table, you'd have to do something like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'function vfunc(...)\r\n    local args = { ... }\r\n    for args as arg do\r\n        print(arg)\r\n    end\r\nend\r\nvfunc("Hello") -- "Hello"\n'})}),"\n",(0,t.jsx)(n.p,{children:"But, with named varargs, it can be as simple as this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'function vfunc(...args)\r\n    for args as arg do\r\n        print(arg)\r\n    end\r\nend\r\nvfunc("Hello") -- "Hello"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"try-it-yourself",children:(0,t.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=function%20vfunc(...args)%0D%0A%20%20%20%20for%20args%20as%20arg%20do%0D%0A%20%20%20%20%20%20%20%20print(arg)%0D%0A%20%20%20%20end%0D%0Aend%0D%0Avfunc(%22Hello%22)%20--%20%22Hello%22",children:"Try It Yourself"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(6540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);