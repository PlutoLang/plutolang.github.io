"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[3076],{9543:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=i(4848),o=i(8453);const r={},l=void 0,s={id:"New Features/Compile-Time Evaluation",title:"Compile-Time Evaluation",description:"Pluto's parser provides some powerful constructs which allow you to write code that will never be seen at runtime.",source:"@site/docs/New Features/Compile-Time Evaluation.md",sourceDirName:"New Features",slug:"/New Features/Compile-Time Evaluation",permalink:"/docs/New Features/Compile-Time Evaluation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Safe Navigation",permalink:"/docs/New Features/Safe Navigation"},next:{title:"Compiler Warnings",permalink:"/docs/New Features/Compiler Warnings"}},a={},c=[{value:"Function calls",id:"function-calls",level:2},{value:"Conditionals",id:"conditionals",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Pluto's parser provides some powerful constructs which allow you to write code that will never be seen at runtime."}),"\n",(0,t.jsx)(n.h2,{id:"function-calls",children:"Function calls"}),"\n",(0,t.jsx)(n.p,{children:'Certain standard library functions can be called at compile-time, as long as the arguments are also known at compile-time, by using the "$" symbol before the function call.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",metastring:"showLineNumbers",children:'local runtime = require("crypto").joaat("Hello, World!")\r\nlocal compile = $crypto.joaat("Hello, World!")\r\n\r\nassert(runtime == compile)\n'})}),"\n",(0,t.jsx)(n.p,{children:"If you're unfamiliar with compile-time evaluation, this is essentially what the code turns into:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",metastring:"showLineNumbers",children:'local runtime = require("crypto").joaat("Hello, World!")\r\nlocal compile = 847757641 -- The JOAAT hash of "Hello, World!"\r\n\r\nassert(runtime == compile)\n'})}),"\n",(0,t.jsx)(n.p,{children:"This is available on preloaded Pluto libraries, such as:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"json"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"base32"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"base58"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"base64"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"crypto"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"And on the following functions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"tostring"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"utostring"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"tonumber"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"utonumber"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conditionals",children:"Conditionals"}),"\n",(0,t.jsx)(n.p,{children:"If there is certain code you only want to have compiled in for a certain build, such as a debug build, you can use compile-time conditionals:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local DEBUG <constexpr> = true\r\n\r\n$if DEBUG then\r\n    print("Script running in debug mode")\r\n$else\r\n    print("Script running in release mode")\r\n$end\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this case, only one of the two paths will be compiled in; the rest will not take up any space. We're also using the ",(0,t.jsx)(n.a,{href:"Constexpr%20Attribute",children:"constexpr attribute"})," here, for stricter guarantees than ",(0,t.jsx)(n.code,{children:"<const>"}),", although ",(0,t.jsx)(n.code,{children:"$if"})," would throw an error if the condition was not known at compile-time."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>s});var t=i(6540);const o={},r=t.createContext(o);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);