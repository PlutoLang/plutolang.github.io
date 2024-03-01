"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[4403],{5903:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(4848),s=t(8453);const o={sidebar_position:11},i=void 0,l={id:"New Features/Named Arguments",title:"Named Arguments",description:"Instead of positional arguments, you can use the names of arguments you want to set:",source:"@site/docs/New Features/Named Arguments.md",sourceDirName:"New Features",slug:"/New Features/Named Arguments",permalink:"/docs/New Features/Named Arguments",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Default Arguments",permalink:"/docs/New Features/Default Arguments"},next:{title:"Type Hinting",permalink:"/docs/New Features/Type Hinting"}},a={},u=[{value:"Try It Yourself",id:"try-it-yourself",level:4},{value:"Mixing arguments",id:"mixing-arguments",level:2},{value:"Try It Yourself",id:"try-it-yourself-1",level:4},{value:"Limitations",id:"limitations",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Instead of positional arguments, you can use the names of arguments you want to set:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-pluto",children:'local function process_file(file, mode = "r", version = 1)\r\n    print($"Processing {file} with mode \'{mode}\' and version {version}")\r\nend\r\nprocess_file(file = "hello.txt", version = 2) -- "Processing hello.txt with mode \'r\' and version 2"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"try-it-yourself",children:(0,r.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=local%20function%20process_file(file%2C%20mode%20%3D%20%22r%22%2C%20version%20%3D%201)%0D%0A%20%20%20%20print(%24%22Processing%20%7Bfile%7D%20with%20mode%20'%7Bmode%7D'%20and%20version%20%7Bversion%7D%22)%0D%0Aend%0D%0Aprocess_file(file%20%3D%20%22hello.txt%22%2C%20version%20%3D%202)",children:"Try It Yourself"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that this example also makes use of ",(0,r.jsx)(n.a,{href:"/docs/New%20Features/Default%20Arguments",children:"default arguments"})," and ",(0,r.jsx)(n.a,{href:"/docs/New%20Features/String%20Interpolation",children:"string interpolation"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"mixing-arguments",children:"Mixing arguments"}),"\n",(0,r.jsx)(n.p,{children:"You can use positional arguments for the first few arguments and then use named arguments for the latter ones, for example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-pluto",children:'local function process_file(file, mode = "r", version = 1)\r\n    print($"Processing {file} with mode \'{mode}\' and version {version}")\r\nend\r\nprocess_file("hello.txt", version = 2) -- "Processing hello.txt with mode \'r\' and version 2"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"try-it-yourself-1",children:(0,r.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=local%20function%20process_file(file%2C%20mode%20%3D%20%22r%22%2C%20version%20%3D%201)%0D%0A%20%20%20%20print(%24%22Processing%20%7Bfile%7D%20with%20mode%20'%7Bmode%7D'%20and%20version%20%7Bversion%7D%22)%0D%0Aend%0D%0Aprocess_file(%22hello.txt%22%2C%20version%20%3D%202)",children:"Try It Yourself"})}),"\n",(0,r.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,r.jsx)(n.p,{children:"This feature is implemented entirely in the parser and therefore only works for local functions at the moment."})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(6540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);