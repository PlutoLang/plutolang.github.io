"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[9757],{3223:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=i(4848),t=i(8453);const r={title:"For Integrators",sidebar_position:9},s="For Integrators",l={id:"For Integrators",title:"For Integrators",description:"The luaconf.h in Pluto provides various battle-tested mechanisms for locking down your Pluto environments. In this article, we've documented some of those. If you are an integrator who needs help configuring any of this, or who wants us to implement another mechanism, feel free to contact us on GitHub.",source:"@site/docs/For Integrators.md",sourceDirName:".",slug:"/For Integrators",permalink:"/docs/For Integrators",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"For Integrators",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Compatibility",permalink:"/docs/Compatibility"},next:{title:"Editor Integration",permalink:"/docs/Editor Integration"}},a={},c=[{value:"Content Moderation",id:"content-moderation",level:2},{value:"Compiled Code",id:"compiled-code",level:3},{value:"Custom Module Filters",id:"custom-module-filters",level:3},{value:"Prevent Loading of Binary Modules",id:"prevent-loading-of-binary-modules",level:3},{value:"Execution Time Limit",id:"execution-time-limit",level:2},{value:"Infinite Loop Prevention",id:"infinite-loop-prevention",level:2},{value:"VM Dumping",id:"vm-dumping",level:2},{value:"Configuration",id:"configuration",level:3},{value:"What it looks like",id:"what-it-looks-like",level:3},{value:"Disabling Filesystem Access",id:"disabling-filesystem-access",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"for-integrators",children:"For Integrators"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"luaconf.h"})," in Pluto provides various battle-tested mechanisms for locking down your Pluto environments. In this article, we've documented some of those. If you are an integrator who needs help configuring any of this, or who wants us to implement another mechanism, feel free to contact us on GitHub."]}),"\n",(0,o.jsx)(n.h2,{id:"content-moderation",children:"Content Moderation"}),"\n",(0,o.jsx)(n.h3,{id:"compiled-code",children:"Compiled Code"}),"\n",(0,o.jsxs)(n.p,{children:["You can disable execution of compiled bytecode by defining ",(0,o.jsx)(n.code,{children:"PLUTO_DISABLE_COMPILED"})," in ",(0,o.jsx)(n.code,{children:"luaconf.h"})," or your build config."]}),"\n",(0,o.jsx)(n.h3,{id:"custom-module-filters",children:"Custom Module Filters"}),"\n",(0,o.jsxs)(n.p,{children:["You may already have filters before passing scripts to run onto Pluto, but mechanisms such as ",(0,o.jsx)(n.code,{children:"dofile"})," and ",(0,o.jsx)(n.code,{children:"require"})," may be used to bypass them. To help you combat this, Pluto provides ",(0,o.jsx)(n.code,{children:"PLUTO_LOADFILE_HOOK"}),". For example, if you set it to ",(0,o.jsx)(n.code,{children:"ContmodOnLoadfile"})," in ",(0,o.jsx)(n.code,{children:"luaconf.h"})," or your build config, you only need to define that function somewhere in your code, like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:'extern "C" bool ContmodOnLoadfile(const char* filename) {\r\n  return !isCodeProhibited(soup::string::fromFile(filename));\r\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"This requires you to use Pluto as a static library, as otherwise this linking relationship won't work."}),"\n",(0,o.jsx)(n.h3,{id:"prevent-loading-of-binary-modules",children:"Prevent Loading of Binary Modules"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"PLUTO_NO_BINARIES"})," macro can be defined to totally eliminate ",(0,o.jsx)(n.code,{children:"package.loadlib"})," and any DLL/SO loading capability from the ",(0,o.jsx)(n.code,{children:"require"})," function. This is helpful because ",(0,o.jsx)(n.code,{children:"package.loadlib"})," can be used to bypass sandbox restrictions by manually loading symbols from a Lua/Pluto library, and the ",(0,o.jsx)(n.code,{children:"require"})," function can load any Lua/Pluto C Module which may or may not provide dangerous functions. This is generally vital for any sandbox. This mechanism cannot be bypassed, since it configures Pluto to compile without support for any of the aforementioned features."]}),"\n",(0,o.jsx)(n.h2,{id:"execution-time-limit",children:"Execution Time Limit"}),"\n",(0,o.jsxs)(n.p,{children:["To aid environments that have to be sandboxed, Pluto provides Execution Time Limit (ETL), which can be enabled by defining ",(0,o.jsx)(n.code,{children:"PLUTO_ETL_ENABLE"})," in ",(0,o.jsx)(n.code,{children:"luaconf.h"})," or your build config."]}),"\n",(0,o.jsxs)(n.p,{children:["By default, ETL allows code to run for a total of 1 ms (1.000.000 nanos). This can be changed by overwriting ",(0,o.jsx)(n.code,{children:"PLUTO_ETL_NANOS"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Note that this is a hammer solution. If you only want to prevent stupid mistakes, Infinite Loop Prevention is a far better tool."}),"\n",(0,o.jsx)(n.h2,{id:"infinite-loop-prevention",children:"Infinite Loop Prevention"}),"\n",(0,o.jsxs)(n.p,{children:["Pluto can detect infinite loops by preventing too many successive iterations. This was implemented because game threads usually force users to call some sort of ",(0,o.jsx)(n.code,{children:"yield"})," mechanism to return control to the game thread. In Pluto, you specify a hard bottleneck on iterations, then you specify a function pointer which should prevent ILP within the loop it's called in."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-pluto",metastring:'showLineNumbers title="This will produce an error due to ILP:"',children:"while true do\r\n\r\nend\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-pluto",metastring:'showLineNumbers title="This will not, with correct configuration:"',children:"while true do\r\n    yield()\r\nend\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If your scheduling system calls ",(0,o.jsx)(n.code,{children:"coroutine.yield"})," at least once per tick, configuring the ILP mechanism can be as simple as defining ",(0,o.jsx)(n.code,{children:"PLUTO_ILP_ENABLE"}),". In any case, Pluto's configuration file (luaconf.h) is worth a look at, especially to properly configure this feature."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"This is a very simple mechanic. It has no performance overhead & it's lightweight. However, the compromise for this was coverage. This will reliably prevent most user error, however malicious users can find a way to block a thread still. For example, any forward jump will prevent the mechanism from breaking a loop. This can be exploited, so don't rely on this for security."})}),"\n",(0,o.jsx)(n.h2,{id:"vm-dumping",children:"VM Dumping"}),"\n",(0,o.jsx)(n.p,{children:"Pluto offers an optional, configurable feature to see every instruction that is executed in the Lua VM."}),"\n",(0,o.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["VM Dump can be enabled by defining ",(0,o.jsx)(n.code,{children:"PLUTO_VMDUMP"})," in ",(0,o.jsx)(n.code,{children:"luaconf.h"})," or your build config."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["To reduce noise, you can modify ",(0,o.jsx)(n.code,{children:"PLUTO_VMDUMP_COND"})," to set a custom condition for when VM Dump is active. By default, the condition is ",(0,o.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Although not a configuration specific to VM Dump, it should be noted that you can modify the output macros ",(0,o.jsx)(n.code,{children:"lua_writestring"})," and ",(0,o.jsx)(n.code,{children:"lua_writeline"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"what-it-looks-like",children:"What it looks like"}),"\n",(0,o.jsx)(n.p,{children:"Given the following code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-pluto",metastring:"showLineNumbers",children:'local value = 3\r\nswitch value do\r\n  case 1:\r\n  case 2:\r\n  case 3:\r\n  case 4:\r\n  case 5:\r\n    print("Got 1-5.")\r\n    break\r\n  default:\r\n    print("Value is greater than 5.")\r\nend\r\n-- Break jumps here.\n'})}),"\n",(0,o.jsx)(n.p,{children:"It will output:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"VARARGPREP 0        ; prepare for 0 varargs\r\nLOADI      0 3      ; push 3\r\nMOVE       1 0      ; move 3 into R(A)\r\nEQI        1 1 0    ; 3 == 1\r\nEQI        1 2 1    ; 3 == 2\r\nEQI        1 3 1    ; 3 == 3\r\nGETTABUP   2 0 0    ; push T['print'] for function-0x247d2882520 (T=table-0x247d29ec9c8)                                              \r\nLOADK      3 1      ; push \"Got 1-5.\"\r\n<OUTPUT> Got 1-5.\r\nCALL       2 2 1    ; call cfunc (nresults=0 nparams=0)                                                                                                              \r\nJMP        13       ; offset=13 newpc=0x247d29e90d8\r\nRETURN     1 1 1    ; return 0 value(s)\n"})}),"\n",(0,o.jsx)(n.p,{children:"This is great at deciphering obfuscated code which may be causing problems for your environment."}),"\n",(0,o.jsx)(n.h2,{id:"disabling-filesystem-access",children:"Disabling Filesystem Access"}),"\n",(0,o.jsxs)(n.p,{children:["Define the ",(0,o.jsx)(n.code,{children:"PLUTO_NO_FILESYSTEM"})," macro in either your build configuration or the ",(0,o.jsx)(n.code,{children:"luaconf.h"})," file. This prevents filesystem functions from being loaded into their libraries (",(0,o.jsx)(n.code,{children:"io"}),", ",(0,o.jsx)(n.code,{children:"os"}),'). Pluto will also compile any filesystem-related functions to do nothing more than "return 0;", so they\'re essentially nullsubs. This is done to protect from any attacks utilizing ',(0,o.jsx)(n.code,{children:"package.loadlib"}),", which can load a Lua/Pluto library and access any symbol. Consider defining ",(0,o.jsx)(n.code,{children:"PLUTO_NO_OS_EXECUTE"})," to disable filesystem access via process APIs."]}),"\n",(0,o.jsx)(n.p,{children:"This affects the following functions:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Every single ",(0,o.jsx)(n.code,{children:"io"})," function."]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"os.remove"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"os.rename"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var o=i(6540);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);