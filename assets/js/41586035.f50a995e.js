"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[7703],{4776:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=r(4848),i=r(8453);const a={sidebar_position:2},s=void 0,o={id:"New Features/Nodiscard Functions",title:"Nodiscard Functions",description:"Functions can be declared nodiscard, causing a warning to be raised when the return value is discarded:",source:"@site/docs/New Features/Nodiscard Functions.md",sourceDirName:"New Features",slug:"/New Features/Nodiscard Functions",permalink:"/docs/New Features/Nodiscard Functions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Named Arguments",permalink:"/docs/New Features/Named Arguments"},next:{title:"Safe Navigation",permalink:"/docs/New Features/Safe Navigation"}},d={},c=[];function u(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Functions can be declared nodiscard, causing a warning to be raised when the return value is discarded:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",metastring:"showLineNumbers",children:"local function add(a, b) <nodiscard>\r\n    return a + b\r\nend\r\n\r\nadd(1, 2)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"file.pluto:5: warning: discarding return value of function declared '<nodiscard>' [discarded-return]\r\n    5 | add(1, 2)\r\n      | ^^^^^^^^^ here\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This can also be combined with ",(0,t.jsx)(n.a,{href:"Type%20Hinting",children:"type hints"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:"local function add(a: number, b: number): number <nodiscard>\r\n    return a + b\r\nend\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"The warning coverage is currently limited to local functions."})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(6540);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);