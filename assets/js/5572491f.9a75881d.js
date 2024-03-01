"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[7370],{6120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(4848),i=n(8453);const a={sidebar_position:4},r=void 0,s={id:"New Features/Table Freezing",title:"Table Freezing",description:"Tables can now be frozen at their current state to forbid any future modification. This action is irreversible and permanent for the lifespan of the table.",source:"@site/docs/New Features/Table Freezing.md",sourceDirName:"New Features",slug:"/New Features/Table Freezing",permalink:"/docs/New Features/Table Freezing",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Lambda Expressions",permalink:"/docs/New Features/Lambda Expressions"},next:{title:"Export Modifier",permalink:"/docs/New Features/Export Modifier"}},l={},c=[{value:"What will this prevent?",id:"what-will-this-prevent",level:3}];function d(e){const t={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Tables can now be frozen at their current state to forbid any future modification. This action is irreversible and permanent for the lifespan of the table."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-pluto",metastring:'showLineNumbers title="Example Code 1"',children:"-- Disallowing any edits to the global environment table.\ntable.freeze(_G)\n\n// ERROR:\n_G.string = {}\n// ERROR:\n-- file.pluto:2: attempt to modify frozen table.\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-pluto",metastring:'showLineNumbers title="Example Code 2"',children:'-- Creating a constant local that\'s associated with a frozen table.\nlocal Frozen <const> = table.freeze({ 1, 2, 3 })\n\n// ERROR:\nFrozen = {}\n// ERROR:\n-- file.pluto:4: attempt to reassign constant.\n\n// ERROR:\nFrozen[1] = "new value"\n// ERROR:\n-- file.pluto:7: attempt to modify frozen table.\n\n// ERROR:\nrawset(Frozen, "key", "value")\n// ERROR:\n-- file.pluto:10: attempt to modify frozen table.\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-pluto",metastring:'showLineNumbers title="Example Code 3"',children:'--- Trying to swap the value with the debug library.\nfor i = 1, 249 do\n  local name, value = debug.getlocal(1, i)\n  if name == "Frozen" then\n    // ERROR:\n    debug.setlocal(1, i, { ["key"] = "hello world" })\n    // ERROR:\n    -- file.pluto:5: attempt to modify local variable with a frozen table.\n  end\nend\n'})}),"\n",(0,o.jsx)(t.h3,{id:"what-will-this-prevent",children:"What will this prevent?"}),"\n",(0,o.jsxs)(t.p,{children:["All modifications to the table from within the Lua environment will be prevented, including those from the ",(0,o.jsx)(t.code,{children:"debug"})," library."]}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["If you're going to use this for a sandbox, ensure you call ",(0,o.jsx)(t.code,{children:"table.freeze"})," before any users can access the Lua environment, otherwise they can replace that function."]})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(6540);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);