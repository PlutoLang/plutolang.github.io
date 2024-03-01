"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[675],{7613:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=s(4848),a=s(8453);const i={sidebar_position:3},t=void 0,o={id:"New Operators",title:"New Operators",description:"Operator Aliases",source:"@site/docs/New Operators.md",sourceDirName:".",slug:"/New Operators",permalink:"/docs/New Operators",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Beginner's Guide",permalink:"/docs/Beginners Guide"},next:{title:"New Features",permalink:"/docs/category/new-features"}},l={},d=[{value:"Operator Aliases",id:"operator-aliases",level:2},{value:"Compound Operators",id:"compound-operators",level:2},{value:"Coalescing Operator",id:"coalescing-operator",level:2},{value:"Walrus Operator",id:"walrus-operator",level:2},{value:"Spaceship Operator",id:"spaceship-operator",level:2}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"operator-aliases",children:"Operator Aliases"}),"\n",(0,r.jsx)(n.p,{children:"These operators function the same, but they're more consistent with what's been standardized through programming today."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"!"})," is an alias for ",(0,r.jsx)(n.code,{children:"not"}),", the boolean inversion operator."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"**"})," is an alias for ",(0,r.jsx)(n.code,{children:"^"}),", the exponent operator."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"!="})," is an alias for ",(0,r.jsx)(n.code,{children:"~="}),", the inequality operator."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"compound-operators",children:"Compound Operators"}),"\n",(0,r.jsx)(n.p,{children:"A plethora of compound operators are available in Pluto:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Modulo: ",(0,r.jsx)(n.code,{children:"%="})]}),"\n",(0,r.jsxs)(n.li,{children:["Addition: ",(0,r.jsx)(n.code,{children:"+="})]}),"\n",(0,r.jsxs)(n.li,{children:["Exponent: ",(0,r.jsx)(n.code,{children:"^="})]}),"\n",(0,r.jsxs)(n.li,{children:["Bitwise OR: ",(0,r.jsx)(n.code,{children:"|="})]}),"\n",(0,r.jsxs)(n.li,{children:["Subtraction: ",(0,r.jsx)(n.code,{children:"-="})]}),"\n",(0,r.jsxs)(n.li,{children:["Bitshift left: ",(0,r.jsx)(n.code,{children:"<<="})]}),"\n",(0,r.jsxs)(n.li,{children:["Bitwise AND: ",(0,r.jsx)(n.code,{children:"&="})]}),"\n",(0,r.jsxs)(n.li,{children:["Float division: ",(0,r.jsx)(n.code,{children:"/="})]}),"\n",(0,r.jsxs)(n.li,{children:["Bitshift right: ",(0,r.jsx)(n.code,{children:">>="})]}),"\n",(0,r.jsxs)(n.li,{children:["Multiplication: ",(0,r.jsx)(n.code,{children:"*="})]}),"\n",(0,r.jsxs)(n.li,{children:["Concatenation: ",(0,r.jsx)(n.code,{children:"..="})]}),"\n",(0,r.jsxs)(n.li,{children:["Integer division: ",(0,r.jsx)(n.code,{children:"//="})]}),"\n",(0,r.jsxs)(n.li,{children:["Nil-Coalescing: ",(0,r.jsx)(n.code,{children:"??="})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-pluto",metastring:"showLineNumbers=true",children:"local a = 1\r\na = a + 1 \r\na += 1\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Compound operators will call the same metamethods as the normal arithmetic operation would."})}),"\n",(0,r.jsx)(n.h2,{id:"coalescing-operator",children:"Coalescing Operator"}),"\n",(0,r.jsxs)(n.p,{children:["The nil-coalescing operator is helpful for evaluating values against ",(0,r.jsx)(n.code,{children:"nil"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If the left-hand operand is ",(0,r.jsx)(n.code,{children:"nil"}),", it returns the right-hand operand. Otherwise, it returns the left-hand operand."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-pluto",metastring:"showLineNumbers=true",children:'local function say(message)\r\n\tprint(message ?? "The message was nil.")\r\nend\r\n\r\nsay() --\x3e The message was nil.\r\nsay(nil) --\x3e The message was nil.\r\nsay("Hello, world!") --\x3e Hello, world!\n'})}),"\n",(0,r.jsx)(n.p,{children:"It's a cleaner version of this code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-pluto",metastring:"showLineNumbers=true",children:'local function say(message)\r\n\tif message == nil then\r\n\t\tmessage = "The message was nil."\r\n\tend\r\n\r\n\tprint(message)\r\nend\r\n\r\nsay() --\x3e The message was nil.\r\nsay(nil) --\x3e The message was nil.\r\nsay("Hello, world!") --\x3e Hello, world!\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can even use compound assignment:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-pluto",metastring:"showLineNumbers",children:'local function say(message)\r\n\tmessage ??= "The message was nil."\r\n\r\n\tprint(message)\r\nend\r\n\r\nsay() --\x3e The message was nil.\r\nsay(nil) --\x3e The message was nil.\r\nsay("Hello, world!") --\x3e Hello, world!\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This operator does not implement any metamethods."})}),"\n",(0,r.jsx)(n.h2,{id:"walrus-operator",children:"Walrus Operator"}),"\n",(0,r.jsx)(n.p,{children:"The Walrus operator allows you to perform assignments inside of conditional expresssions."}),"\n",(0,r.jsx)(n.p,{children:"The second operand to your assignment is the value of the expression."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-pluto",metastring:"showLineNumbers",children:"if a := get_value() then\r\n\t-- 'a' was assigned a truthy value.\r\nelse\r\n\t-- 'a' was assigned a falsy value.\r\nend\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can imagine it like this, but note they're not always the same:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-pluto",metastring:"showLineNumbers",children:"local a = get_value()\r\nif a then\r\n\t-- 'a' was assigned a truthy value.\r\nelse\r\n\t-- 'a' was assigned a falsy value.\r\nend\n"})}),"\n",(0,r.jsx)(n.p,{children:"What makes the Walrus operator different is that it'll be evaluated as many times as the condition:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-pluto",metastring:"showLineNumbers",children:"local function get()\r\n\treturn math.random(0, 1)\r\nend\r\n\r\nwhile a := get() do\r\n\t--| In the next iteration:\r\n\t--|   - `a` will be assigned to `get()`.\r\n\t--|   - Then the value will be evaluated for the condition.\r\n\t--|\r\n\t--| This happens because the Walrus operator itself is the condition.\r\n\t--| It's not a short-hand for generating an assignment.\r\n\t--|\r\n\t--| Be aware of this if you intend on using the Walrus operator with loops.\r\nend\n"})}),"\n",(0,r.jsx)(n.h2,{id:"spaceship-operator",children:"Spaceship Operator"}),"\n",(0,r.jsx)(n.p,{children:"The spaceship operator, also known as the three-way comparison operator, allows you to quickly compare 2 values for equality and order."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-pluto",children:"local eq = 1 <=> 1\r\nlocal lt = 3 <=> 42\r\nlocal gt = 9 <=> 5\r\nprint(eq, lt, gt) --\x3e 0, -1, 1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["It works with any type that supports ",(0,r.jsx)(n.code,{children:"__eq"})," and ",(0,r.jsx)(n.code,{children:"__lt"}),", making it well-suited for usage in generic algorithms like sorting. The return values are designed such that you can compare them to ",(0,r.jsx)(n.code,{children:"0"}),", e.g. with the values from above:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-pluto",children:"print(eq <= 0) --\x3e true\r\nprint(lt <= 0) --\x3e true\r\nprint(gt <= 0) --\x3e false\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var r=s(6540);const a={},i=r.createContext(a);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);