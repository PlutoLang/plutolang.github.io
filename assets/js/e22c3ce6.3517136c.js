"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[5164],{5495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(4848),o=n(8453);const i={sidebar_position:1},s=void 0,a={id:"New Features/Default Arguments",title:"Default Arguments",description:"During a function declaration, parameters can now declare their own default value.",source:"@site/docs/New Features/Default Arguments.md",sourceDirName:"New Features",slug:"/New Features/Default Arguments",permalink:"/docs/New Features/Default Arguments",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Continue Statement",permalink:"/docs/New Features/Continue Statement"},next:{title:"For-As Loop",permalink:"/docs/New Features/For-As Loop"}},l={},u=[{value:"Try It Yourself",id:"try-it-yourself",level:4}];function c(e){const t={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"During a function declaration, parameters can now declare their own default value."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-pluto",metastring:'showLineNumbers title="Example Code"',children:'local function write(text = "No text provided.")\r\n    print(text)\r\nend\r\n\r\nwrite()         --\x3e "No text provided."\r\nwrite("Hello!") --\x3e "Hello!"\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-pluto",metastring:'showLineNumbers title="This code behaves identically."',children:'local function write(text)\r\n    if text == nil then\r\n        text = "No text provided."\r\n    end\r\n    print(text)\r\nend\r\n\r\nwrite()         --\x3e "No text provided."\r\nwrite("Hello!") --\x3e "Hello!"\n'})}),"\n",(0,r.jsx)(t.h4,{id:"try-it-yourself",children:(0,r.jsx)(t.a,{href:"https://pluto-lang.org/web/#code=local%20function%20write(text%20%3D%20%22No%20text%20provided.%22)%0D%0A%20%20%20%20print(text)%0D%0Aend%0D%0A%0D%0Awrite()%20%20%20%20%20%20%20%20%20--%3E%20%22No%20text%20provided.%22%0D%0Awrite(%22Hello!%22)%20--%3E%20%22Hello!%22",children:"Try It Yourself"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);