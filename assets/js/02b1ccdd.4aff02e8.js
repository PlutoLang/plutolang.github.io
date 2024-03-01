"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[9440],{2615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=n(4848),i=n(8453);const a={},s=void 0,r={id:"Optimizations/Jump Table",title:"Jump Table",description:"Lua implemented a jump table, but it is only compatible with clang and gcc. Pluto has an additional jump table implementation for other compilers; however, it is not enabled by default because it can add minutes to compile time, depending on the setup. However, it may be beneficial to you regardless, as a jump table can increase virtual machine performance by up to 5%.",source:"@site/docs/Optimizations/Jump Table.md",sourceDirName:"Optimizations",slug:"/Optimizations/Jump Table",permalink:"/docs/Optimizations/Jump Table",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"For Loops",permalink:"/docs/Optimizations/For Loops"},next:{title:"Long Jump",permalink:"/docs/Optimizations/Long Jump"}},c={},l=[];function u(e){const t={code:"code",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Lua implemented a jump table, but it is only compatible with clang and gcc. Pluto has an additional jump table implementation for other compilers; however, it is not enabled by default because it can add minutes to compile time, depending on the setup. However, it may be beneficial to you regardless, as a jump table can increase virtual machine performance by up to 5%."}),"\n",(0,o.jsxs)(t.p,{children:["If you would like to try it, define ",(0,o.jsx)(t.code,{children:"PLUTO_FORCE_JUMPTABLE"})," in ",(0,o.jsx)(t.code,{children:"luaconf.h"})," or your build config."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(6540);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);