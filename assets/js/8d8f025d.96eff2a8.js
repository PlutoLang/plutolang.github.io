"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[1564],{8360:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=s(4848),r=s(8453);const o={sidebar_position:4},a=void 0,i={id:"New Features/Lambda Expressions",title:"Lambda Expressions",description:"Lambda expressions are shorthand function objects for evaluating quick expressions. Take this code:",source:"@site/docs/New Features/Lambda Expressions.md",sourceDirName:"New Features",slug:"/New Features/Lambda Expressions",permalink:"/docs/New Features/Lambda Expressions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Continue Statement",permalink:"/docs/New Features/Continue Statement"},next:{title:"Table Freezing",permalink:"/docs/New Features/Table Freezing"}},c={},l=[{value:"Try It Yourself",id:"try-it-yourself",level:4}];function u(e){const t={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Lambda expressions are shorthand function objects for evaluating quick expressions. Take this code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-pluto",metastring:'showLineNumbers title="The Old Way"',children:'local s1 = "123"\nlocal s2 = s1:gsub(".", function (c) return tonumber(c) + 1 end)\nprint(s2) -- "234"\n'})}),"\n",(0,n.jsx)(t.p,{children:"A lambda expression is simply syntactic sugar, because you can do this instead:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-pluto",metastring:'title="The New Way"',children:'local s1 = "123"\nlocal s2 = s1:gsub(".", |c| -> tonumber(c) + 1)\nprint(s2) -- "234"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Anywhere a function object would work, a lambda will work. Because a lambda is just a function."}),"\n",(0,n.jsx)(t.h4,{id:"try-it-yourself",children:(0,n.jsx)(t.a,{href:"https://pluto-lang.org/web/#code=local%20str%20%3D%20%22123%22%0D%0Alocal%20inc_str%20%3D%20str%3Agsub(%22.%22%2C%20%7Cc%7C%20-%3E%20tonumber(c)%20%2B%201)%0D%0Aprint(inc_str)%20--%20%22234%22",children:"Try It Yourself"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var n=s(6540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);