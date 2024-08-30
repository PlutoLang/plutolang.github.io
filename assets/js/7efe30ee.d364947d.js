"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[3071],{7178:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(4848),r=t(8453);const a={sidebar_position:1},o=void 0,i={id:"New Features/Ternary Expressions",title:"Ternary Expressions",description:"Ternary expressions behave identical as to how they would in C. They introduce no new keywords.",source:"@site/docs/New Features/Ternary Expressions.md",sourceDirName:"New Features",slug:"/New Features/Ternary Expressions",permalink:"/docs/New Features/Ternary Expressions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Switch Blocks",permalink:"/docs/New Features/Switch Blocks"},next:{title:"Type Hinting",permalink:"/docs/New Features/Type Hinting"}},l={},c=[{value:"Try It Yourself",id:"try-it-yourself",level:4},{value:"Doesn&#39;t Lua already have ternaries?",id:"doesnt-lua-already-have-ternaries",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Ternary expressions behave identical as to how they would in C. They introduce no new keywords."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",metastring:'showLineNumbers title="Old Code"',children:"local max\r\nif a > b then\r\n  max = a\r\nelse\r\n  max = b\r\nend\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",metastring:'showLineNumbers title="New Code"',children:"local max = a > b ? a : b\n"})}),"\n",(0,s.jsx)(n.h4,{id:"try-it-yourself",children:(0,s.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=local%20a%20%3D%206%0Alocal%20b%20%3D%209%0A%0Alocal%20max%20%3D%20a%20%3E%20b%20%3F%20a%20%3A%20b%0A%0Aprint(max)",children:"Try It Yourself"})}),"\n",(0,s.jsx)(n.h2,{id:"doesnt-lua-already-have-ternaries",children:"Doesn't Lua already have ternaries?"}),"\n",(0,s.jsx)(n.p,{children:"While it is true that you can do something like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",children:"local max = a > b and a or b\n"})}),"\n",(0,s.jsx)(n.p,{children:"Keep in mind that this falls apart when the true-expression has a falsy value:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",children:"local x = -1\r\nx = (x == -1 and nil or x)\n"})}),"\n",(0,s.jsx)(n.p,{children:"In this case, x will be -1 despite the intention being to set it to nil. There are no such issues using Pluto's ternary expressions."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(6540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);