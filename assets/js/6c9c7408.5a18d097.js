"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[675],{7613:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=r(4848),t=r(8453);const o={sidebar_position:3},l=void 0,i={id:"New Operators",title:"New Operators",description:"Operator Aliases",source:"@site/docs/New Operators.md",sourceDirName:".",slug:"/New Operators",permalink:"/docs/New Operators",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Editor Integration",permalink:"/docs/Editor Integration"},next:{title:"New Features",permalink:"/docs/category/new-features"}},a={},d=[{value:"Operator Aliases",id:"operator-aliases",level:2},{value:"Compound Operators",id:"compound-operators",level:2},{value:"Coalescing Operator",id:"coalescing-operator",level:2},{value:"Walrus Operator",id:"walrus-operator",level:2},{value:"Spaceship Operator",id:"spaceship-operator",level:2},{value:"Pipe Operator",id:"pipe-operator",level:2},{value:"Try It Yourself",id:"try-it-yourself",level:4},{value:"Additional Arguments",id:"additional-arguments",level:3},{value:"Try It Yourself",id:"try-it-yourself-1",level:4},{value:"Methods Calls",id:"methods-calls",level:3},{value:"Try It Yourself",id:"try-it-yourself-2",level:4},{value:"Anonymous Functions",id:"anonymous-functions",level:3},{value:"Try It Yourself",id:"try-it-yourself-3",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"operator-aliases",children:"Operator Aliases"}),"\n",(0,s.jsx)(n.p,{children:"These operators function the same, but they're more consistent with what's been standardized through programming today."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"!"})," is an alias for ",(0,s.jsx)(n.code,{children:"not"}),", the boolean inversion operator."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"!="})," is an alias for ",(0,s.jsx)(n.code,{children:"~="}),", the inequality operator."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"compound-operators",children:"Compound Operators"}),"\n",(0,s.jsx)(n.p,{children:"A plethora of compound operators are available in Pluto:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Addition: ",(0,s.jsx)(n.code,{children:"+="})]}),"\n",(0,s.jsxs)(n.li,{children:["Subtraction: ",(0,s.jsx)(n.code,{children:"-="})]}),"\n",(0,s.jsxs)(n.li,{children:["Multiplication: ",(0,s.jsx)(n.code,{children:"*="})]}),"\n",(0,s.jsxs)(n.li,{children:["Float division: ",(0,s.jsx)(n.code,{children:"/="})]}),"\n",(0,s.jsxs)(n.li,{children:["Integer division: ",(0,s.jsx)(n.code,{children:"//="})]}),"\n",(0,s.jsxs)(n.li,{children:["Modulo: ",(0,s.jsx)(n.code,{children:"%="})]}),"\n",(0,s.jsxs)(n.li,{children:["Exponent: ",(0,s.jsx)(n.code,{children:"^="})]}),"\n",(0,s.jsxs)(n.li,{children:["Bitwise AND: ",(0,s.jsx)(n.code,{children:"&="})]}),"\n",(0,s.jsxs)(n.li,{children:["Bitwise OR: ",(0,s.jsx)(n.code,{children:"|="})]}),"\n",(0,s.jsxs)(n.li,{children:["Bitwise XOR: ",(0,s.jsx)(n.code,{children:"~="}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In Lua, the inequality operator cannot be used in statements. It must be used in expressions. Because compound operators can only be used in statements (and cannot be used in expressions), this is not a compatibility break."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Bitshift left: ",(0,s.jsx)(n.code,{children:"<<="})]}),"\n",(0,s.jsxs)(n.li,{children:["Bitshift right: ",(0,s.jsx)(n.code,{children:">>="})]}),"\n",(0,s.jsxs)(n.li,{children:["Concatenation: ",(0,s.jsx)(n.code,{children:"..="})]}),"\n",(0,s.jsxs)(n.li,{children:["Nil-Coalescing: ",(0,s.jsx)(n.code,{children:"??="})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",children:"local a = 1\r\na = a + 1 \r\na += 1\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Compound operators are syntactic sugar. They'll call the same metamethods as their non-compound counterparts."})}),"\n",(0,s.jsx)(n.h2,{id:"coalescing-operator",children:"Coalescing Operator"}),"\n",(0,s.jsxs)(n.p,{children:["The nil-coalescing operator is helpful for evaluating values against ",(0,s.jsx)(n.code,{children:"nil"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If the left-hand operand is ",(0,s.jsx)(n.code,{children:"nil"}),", it returns the right-hand operand. Otherwise, it returns the left-hand operand."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",children:'local function say(message)\r\n    print(message ?? "The message was nil.")\r\nend\r\n\r\nsay() --\x3e The message was nil.\r\nsay(nil) --\x3e The message was nil.\r\nsay("Hello, world!") --\x3e Hello, world!\n'})}),"\n",(0,s.jsx)(n.p,{children:"It's a cleaner version of this code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",children:'local function say(message)\r\n    if message == nil then\r\n        message = "The message was nil."\r\n    end\r\n\r\n    print(message)\r\nend\r\n\r\nsay() --\x3e The message was nil.\r\nsay(nil) --\x3e The message was nil.\r\nsay("Hello, world!") --\x3e Hello, world!\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can even use compound assignment:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",children:'local function say(message)\r\n    message ??= "The message was nil."\r\n\r\n    print(message)\r\nend\r\n\r\nsay() --\x3e The message was nil.\r\nsay(nil) --\x3e The message was nil.\r\nsay("Hello, world!") --\x3e Hello, world!\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"This operator does not implement any metamethods."})}),"\n",(0,s.jsx)(n.h2,{id:"walrus-operator",children:"Walrus Operator"}),"\n",(0,s.jsx)(n.p,{children:"The Walrus operator allows you to perform assignments inside of conditional expresssions."}),"\n",(0,s.jsx)(n.p,{children:"The second operand to your assignment is the value of the expression."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",children:"if a := get_value() then\r\n    -- 'a' was assigned a truthy value.\r\nelse\r\n    -- 'a' was assigned a falsy value.\r\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can imagine it like this, but note they're not always the same:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",children:"local a = get_value()\r\nif a then\r\n    -- 'a' was assigned a truthy value.\r\nelse\r\n    -- 'a' was assigned a falsy value.\r\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"What makes the Walrus operator different is that it'll be evaluated as many times as the condition:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",children:"local function get()\r\n    return math.random(0, 1)\r\nend\r\n\r\nwhile a := get() do\r\n    --| In the next iteration:\r\n    --|   - `a` will be assigned to `get()`.\r\n    --|   - Then the value will be evaluated for the condition.\r\n    --|\r\n    --| This happens because the Walrus operator itself is the condition.\r\n    --| It's not a short-hand for generating an assignment.\r\n    --|\r\n    --| Be aware of this if you intend on using the Walrus operator with loops.\r\nend\n"})}),"\n",(0,s.jsx)(n.h2,{id:"spaceship-operator",children:"Spaceship Operator"}),"\n",(0,s.jsx)(n.p,{children:"The spaceship operator, also known as the three-way comparison operator, allows you to quickly compare 2 values for equality and order."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",children:"local eq = 1 <=> 1\r\nlocal lt = 3 <=> 42\r\nlocal gt = 9 <=> 5\r\nprint(eq, lt, gt) --\x3e 0, -1, 1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It works with any type that supports ",(0,s.jsx)(n.code,{children:"__eq"})," and ",(0,s.jsx)(n.code,{children:"__lt"}),", making it well-suited for usage in generic algorithms like sorting. The return values are designed such that you can compare them to ",(0,s.jsx)(n.code,{children:"0"}),", e.g. with the values from above:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",children:"print(eq <= 0) --\x3e true\r\nprint(lt <= 0) --\x3e true\r\nprint(gt <= 0) --\x3e false\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pipe-operator",children:"Pipe Operator"}),"\n",(0,s.jsx)(n.p,{children:"The pipe operator allows you represent data pipelines more succinctly."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",children:'local { http, json } = require "pluto:*"\r\n\r\nhttp.request("https://httpbin.org/get")\r\n|> json.decode\r\n|> dumpvar\r\n|> print\r\n\r\n--\x3e {\r\n--\x3e     ["args"] = {},\r\n--\x3e     ["headers"] = {\r\n--\x3e         ["Host"] = string(11) "httpbin.org",\r\n--\x3e         ["User-Agent"] = string(56) "Mozilla/5.0 (compatible; Soup Library; +https://soup.do)",\r\n--\x3e         ["X-Amzn-Trace-Id"] = string(40) "Root=1-65e05b66-6aa8b7c94e7580774a804c24",\r\n--\x3e         ["Accept-Encoding"] = string(13) "deflate, gzip",\r\n--\x3e     },\r\n--\x3e     ["origin"] = string(13) "1.2.3.4",\r\n--\x3e     ["url"] = string(23) "https://httpbin.org/get",\r\n--\x3e }\n'})}),"\n",(0,s.jsx)(n.h4,{id:"try-it-yourself",children:(0,s.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=local%20%7B%20http%2C%20json%20%7D%20%3D%20require%20%22pluto%3A*%22%0D%0A%0D%0Ahttp.request(%22https%3A%2F%2Fhttpbin.org%2Fget%22)%0D%0A%7C%3E%20json.decode%0D%0A%7C%3E%20dumpvar%0D%0A%7C%3E%20print%0D%0A",children:"Try It Yourself"})}),"\n",(0,s.jsx)(n.p,{children:"The HTTP-to-print pipeline here would otherwise be written like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",children:'print(dumpvar(json.decode((http.request("https://httpbin.org/get")))))\n'})}),"\n",(0,s.jsx)(n.p,{children:"Note that the pipe operator only passes on the first return value, which is classically achieved by wrapping the expression in an extra pair of parentheses."}),"\n",(0,s.jsx)(n.h3,{id:"additional-arguments",children:"Additional Arguments"}),"\n",(0,s.jsx)(n.p,{children:"It is also possible to provide additional arguments for the righthand side of the pipe operator:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",children:'local producer = || -> "10"\r\n\r\nproducer()\r\n|> tonumber|16|\r\n|> print --\x3e 16\n'})}),"\n",(0,s.jsx)(n.h4,{id:"try-it-yourself-1",children:(0,s.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=local%20producer%20%3D%20%7C%7C%20-%3E%20%2210%22%0D%0A%0D%0Aproducer()%0D%0A%7C%3E%20tonumber%7C16%7C%0D%0A%7C%3E%20print%20--%3E%2016%0D%0A",children:"Try It Yourself"})}),"\n",(0,s.jsx)(n.h3,{id:"methods-calls",children:"Methods Calls"}),"\n",(0,s.jsx)(n.p,{children:"There is specialized syntax for method calls with the pipe operator, too:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",children:"local producer = || -> 21\r\n\r\nlocal obj = {\r\n    function multiply(value)\r\n        return value * self.factor\r\n    end\r\n}\r\nobj.factor = 2\r\n\r\nproducer()\r\n|> obj:multiply\r\n|> print --\x3e 42\n"})}),"\n",(0,s.jsx)(n.h4,{id:"try-it-yourself-2",children:(0,s.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=local%20producer%20%3D%20%7C%7C%20-%3E%2021%0D%0A%0D%0Alocal%20obj%20%3D%20%7B%0D%0A%20%20%20%20function%20multiply(value)%0D%0A%20%20%20%20%20%20%20%20return%20value%20*%20self.factor%0D%0A%20%20%20%20end%0D%0A%7D%0D%0Aobj.factor%20%3D%202%0D%0A%0D%0Aproducer()%0D%0A%7C%3E%20obj%3Amultiply%0D%0A%7C%3E%20print%20--%3E%2042%0D%0A",children:"Try It Yourself"})}),"\n",(0,s.jsx)(n.h3,{id:"anonymous-functions",children:"Anonymous Functions"}),"\n",(0,s.jsx)(n.p,{children:"The righthand side of the pipe operator can also be an anonymous function, allowing for more advanced usage like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-pluto",children:'local producer = || -> 42\r\n\r\nproducer()\r\n|> |res| -> print($"The result was {res}")\r\n\r\n--\x3e The result was 42\n'})}),"\n",(0,s.jsx)(n.h4,{id:"try-it-yourself-3",children:(0,s.jsx)(n.a,{href:"https://pluto-lang.org/web/#code=local%20producer%20%3D%20%7C%7C%20-%3E%2042%0D%0A%0D%0Aproducer()%0D%0A%7C%3E%20%7Cres%7C%20-%3E%20print(%24%22The%20result%20was%20%7Bres%7D%22)%0D%0A%0D%0A--%3E%20The%20result%20was%2042%0D%0A",children:"Try It Yourself"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var s=r(6540);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);