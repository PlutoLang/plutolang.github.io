"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[8536],{1916:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var l=i(4848),t=i(8453);const o={sidebar_position:2},r=void 0,s={id:"New Features/Explicit Globals",title:"Explicit Globals",description:"The optional global keyword can be used to explicitly declare global variables.",source:"@site/docs/New Features/Explicit Globals.md",sourceDirName:"New Features",slug:"/New Features/Explicit Globals",permalink:"/docs/New Features/Explicit Globals",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Enumerations",permalink:"/docs/New Features/Enumerations"},next:{title:"Export Modifier",permalink:"/docs/New Features/Export Modifier"}},a={},c=[{value:"Compiler Warnings",id:"compiler-warnings",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["The optional ",(0,l.jsx)(n.code,{children:"global"})," keyword can be used to explicitly declare global variables."]}),"\n",(0,l.jsx)(n.p,{children:"To enable it, simply do:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-pluto",children:"pluto_use global\n"})}),"\n",(0,l.jsx)(n.p,{children:"Then it can be used like this:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-pluto",children:"global a = 1\n"})}),"\n",(0,l.jsx)(n.p,{children:"Being identical to the following code:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-pluto",children:"a = 1\n"})}),"\n",(0,l.jsx)(n.h2,{id:"compiler-warnings",children:"Compiler Warnings"}),"\n",(0,l.jsxs)(n.p,{children:["When the ",(0,l.jsx)(n.code,{children:"global"})," keyword is enabled, an 'implicit-global' warning is raised for any globals declared without it:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-pluto",metastring:"showLineNumbers",children:"pluto_use global\r\n\r\na = 1\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"file.pluto:3: warning: implicit global creation [implicit-global]\r\n    3 | a = 1\r\n      | ^^^^^ here: prefix this with 'global' if creating a global was intended\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var l=i(6540);const t={},o=l.createContext(t);function r(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);