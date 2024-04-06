"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[1609],{1268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(4848),r=t(8453);const a={sidebar_position:2},s=void 0,o={id:"Runtime Environment/Math",title:"Math",description:"This page documents the changes & additions to the math library in Pluto, which is built on top of Lua 5.4's.",source:"@site/docs/Runtime Environment/Math.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/Math",permalink:"/docs/Runtime Environment/Math",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"IO",permalink:"/docs/Runtime Environment/IO"},next:{title:"OS",permalink:"/docs/Runtime Environment/OS"}},c={},d=[{value:"<code>math.isnan</code>",id:"mathisnan",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>math.round</code>",id:"mathround",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>math.atan2</code>",id:"mathatan2",level:3}];function l(e){const n={code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This page documents the changes & additions to the ",(0,i.jsx)(n.code,{children:"math"})," library in Pluto, which is built on top of Lua 5.4's."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"mathisnan",children:(0,i.jsx)(n.code,{children:"math.isnan"})}),"\n",(0,i.jsx)(n.p,{children:"Checks if a number is NaN."}),"\n",(0,i.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The number to check."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pluto",children:"local x = 0 / 0\r\nprint(x ~= x) -- Lua way: Prove the variable is NaN because it is not equal to itself. Works, but unintuitive.\r\nprint(math.isnan(x))\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"mathround",children:(0,i.jsx)(n.code,{children:"math.round"})}),"\n",(0,i.jsx)(n.p,{children:"Rounds a number to the nearest integer."}),"\n",(0,i.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The number to round."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pluto",children:"print(math.round(2.4)) --\x3e 2\r\nprint(math.round(2.5)) --\x3e 3\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"mathatan2",children:(0,i.jsx)(n.code,{children:"math.atan2"})}),"\n",(0,i.jsxs)(n.p,{children:["An alias of ",(0,i.jsx)(n.code,{children:"math.atan"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(6540);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);