"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[4566],{2639:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(4848),s=t(8453);const r={sidebar_position:17},i=void 0,a={id:"New Features/Safe Navigation",title:"Safe Navigation",description:"For Member Access",source:"@site/docs/New Features/Safe Navigation.md",sourceDirName:"New Features",slug:"/New Features/Safe Navigation",permalink:"/docs/New Features/Safe Navigation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Constexpr Attribute",permalink:"/docs/New Features/Constexpr Attribute"},next:{title:"Compile-Time Evaluation",permalink:"/docs/New Features/Compile-Time Evaluation"}},l={},c=[{value:"For Member Access",id:"for-member-access",level:2},{value:"For Method Calls",id:"for-method-calls",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"for-member-access",children:"For Member Access"}),"\n",(0,o.jsxs)(n.p,{children:["Accessing deeply nested fields which can potentially be ",(0,o.jsx)(n.code,{children:"nil"}),' was problematic, because you\'d need an unreasonable amount of guard clauses to prevent an "attempt to index nil" error. Pluto now offers this syntax:']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-pluto",metastring:'showLineNumbers title="Basic Usage"',children:'local person = {\n    name = "Alice"\n}\n\nlocal pet_name = person.pet?.name\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, ",(0,o.jsx)(n.code,{children:"person.pet"}),' is nil. However, this does not throw an "attempt to index nil" error. ',(0,o.jsx)(n.code,{children:"pet_name"})," is simply set to ",(0,o.jsx)(n.code,{children:"nil"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-pluto",metastring:'showLineNumbers title="Practical Usage"',children:'-- Pretend userConfig is parsed from a JSON file, or something.\n\n--- Returning the user\'s preferred color, or Red if they have no preferred color.\nlocal function get_color()\n    return userConfig.colors?.preferred ?? "Red"\nend\n\nprint(get_color())\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, we also use the null coalescing operator ",(0,o.jsx)(n.code,{children:"??"}),"."]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:["These cannot be used for statements, like ",(0,o.jsx)(n.code,{children:"a?.b?.c = 0"}),". They're only valid as expressions."]}),(0,o.jsx)(n.p,{children:"Safe Navigation (for member access) was written by Sven Olsen."})]}),"\n",(0,o.jsx)(n.h2,{id:"for-method-calls",children:"For Method Calls"}),"\n",(0,o.jsx)(n.p,{children:"Similarly, if you want to have optional hook functions, you can use safe method calls instead of writing conditionals:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-pluto",metastring:'showLineNumbers title="Old Way"',children:"if self.onEvent then\n    self:onEvent(event)\nend\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-pluto",metastring:'showLineNumbers title="New Way"',children:"self:onEvent?(event)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can also check if the left-hand side of ",(0,o.jsx)(n.code,{children:":"})," is not nil:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-pluto",metastring:"showLineNumbers",children:"object?:onEvent(event) -- 'object' may be nil\nobject?:onEvent?(event) -- 'object' and 'object.onEvent' may be nil\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);