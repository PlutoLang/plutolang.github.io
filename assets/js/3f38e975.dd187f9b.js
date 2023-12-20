"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[9973],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),c=l,f=d["".concat(s,".").concat(c)]||d[c]||h[c]||r;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7682:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:3,title:"Beginner's Guide"},o=void 0,i={unversionedId:"Beginners Guide",id:"Beginners Guide",title:"Beginner's Guide",description:"This article is for people completely unfamiliar with Lua who want to jump right into Pluto.",source:"@site/docs/Beginners Guide.md",sourceDirName:".",slug:"/Beginners Guide",permalink:"/docs/Beginners Guide",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Beginner's Guide"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/Getting Started"},next:{title:"New Operators",permalink:"/docs/New Operators"}},s={},p=[{value:"Your first program",id:"your-first-program",level:2},{value:"Try It Yourself",id:"try-it-yourself",level:4},{value:"Simple arithmetic",id:"simple-arithmetic",level:2},{value:"Try It Yourself",id:"try-it-yourself-1",level:4},{value:"Variables",id:"variables",level:2},{value:"Try It Yourself",id:"try-it-yourself-2",level:4},{value:"Conditionals",id:"conditionals",level:2},{value:"Try It Yourself",id:"try-it-yourself-3",level:4},{value:"Loops",id:"loops",level:2},{value:"Try It Yourself",id:"try-it-yourself-4",level:4},{value:"Try It Yourself",id:"try-it-yourself-5",level:4},{value:"Tables",id:"tables",level:2},{value:"Try It Yourself",id:"try-it-yourself-6",level:4},{value:"Try It Yourself",id:"try-it-yourself-7",level:4},{value:"Calculating K/D ratios",id:"calculating-kd-ratios",level:2},{value:"Try It Yourself",id:"try-it-yourself-8",level:4},{value:"Encapsulation in functions",id:"encapsulation-in-functions",level:2},{value:"Try It Yourself",id:"try-it-yourself-9",level:4},{value:"Local variables",id:"local-variables",level:2},{value:"Try It Yourself",id:"try-it-yourself-10",level:4},{value:"Nil values",id:"nil-values",level:2},{value:"Try It Yourself",id:"try-it-yourself-11",level:4},{value:"Where to go from here",id:"where-to-go-from-here",level:2}],u={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This article is for people completely unfamiliar with Lua who want to jump right into Pluto."),(0,l.kt)("p",null,"For people already familiar with Lua, the rest of this documentation should be a good introduction to Pluto."),(0,l.kt)("h2",{id:"your-first-program"},"Your first program"),(0,l.kt)("p",null,"Let's start simple by saying hello to the world."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pluto"},'print("Hello, world!")\n')),(0,l.kt)("h4",{id:"try-it-yourself"},(0,l.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=print(%22Hello%2C%20world!%22)"},"Try It Yourself")),(0,l.kt)("p",null,'Participation using the "try it yourself" links is recommended. Also feel free to modify the code and use the terminal to run it again (Arrow Key Up + Enter).'),(0,l.kt)("p",null,'As you can see, this program prints "Hello, world!", and it does so by calling the builtin ',(0,l.kt)("inlineCode",{parentName:"p"},"print")," function from Lua."),(0,l.kt)("h2",{id:"simple-arithmetic"},"Simple arithmetic"),(0,l.kt)("p",null,"Of course, we want more than a glorified text file, so let's get a bit more programmatic with some arithmetics."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pluto"},'print($"2 + 2 is {2 + 2}")\n')),(0,l.kt)("p",null,"Notice the ",(0,l.kt)("inlineCode",{parentName:"p"},"$")," before the string; this allows us to use curly brackets to embed expressions directly into the string. In this case, we embed the expression ",(0,l.kt)("inlineCode",{parentName:"p"},"2 + 2"),", which evaluates to 4."),(0,l.kt)("h4",{id:"try-it-yourself-1"},(0,l.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=print(%24%222%20%2B%202%20is%20%7B2%20%2B%202%7D%22)"},"Try It Yourself")),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("p",null,"Variables in Lua/Pluto are global by default and are assigned trivially:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pluto"},'a = 2\nprint($"a is {a}")\na += 2\nprint($"I added 2 and now it\'s {a}")\n')),(0,l.kt)("p",null,"Notice how we still have a ",(0,l.kt)("inlineCode",{parentName:"p"},"$")," before the strings but this time we're embedding the expression ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," which simply evaluates to the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," at that particular moment."),(0,l.kt)("h4",{id:"try-it-yourself-2"},(0,l.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=a%20%3D%202%0D%0Aprint(%24%22a%20is%20%7Ba%7D%22)%0D%0Aa%20%2B%3D%202%0D%0Aprint(%24%22I%20added%202%20and%20now%20it's%20%7Ba%7D%22)"},"Try It Yourself")),(0,l.kt)("h2",{id:"conditionals"},"Conditionals"),(0,l.kt)("p",null,"Programming isn't just about arithmetics, tho, so let's get into the flow \u2014 or the \"control flow\", as computer scientists would call it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pluto"},'a = 1\nb = 2\n\nif a + b == 4 then\n    print("The sum is 4!")\nelse\n    print("The sum is not 4. Could you change a or b to fix it?")\nend\n')),(0,l.kt)("h4",{id:"try-it-yourself-3"},(0,l.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=a%20%3D%201%0D%0Ab%20%3D%202%0D%0A%0D%0Aif%20a%20%2B%20b%20%3D%3D%204%20then%0D%0A%20%20%20%20print(%22The%20sum%20is%204!%22)%0D%0Aelse%0D%0A%20%20%20%20print(%22The%20sum%20is%20not%204.%20Could%20you%20change%20a%20or%20b%20to%20fix%20it%3F%22)%0D%0Aend"},"Try It Yourself")),(0,l.kt)("p",null,"As you see, the message being printed changes based on whether the expression ",(0,l.kt)("inlineCode",{parentName:"p"},"a + b == 4")," is ",(0,l.kt)("em",{parentName:"p"},"true")," or ",(0,l.kt)("em",{parentName:"p"},"false"),"."),(0,l.kt)("h2",{id:"loops"},"Loops"),(0,l.kt)("p",null,"We can't just change ",(0,l.kt)("em",{parentName:"p"},"if")," code will run, but also how often. For example, we could make a script that counts from 1 to 10:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pluto"},"for i=1, 10 do\n    print(i)\nend\n")),(0,l.kt)("h4",{id:"try-it-yourself-4"},(0,l.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=for%20i%3D1%2C%2010%20do%0D%0A%20%20%20%20print(i)%0D%0Aend"},"Try It Yourself")),(0,l.kt)("p",null,"We can also change the interval. For example, count from 0 to 100 in intervals of 10:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pluto"},"for i=0, 100, 10 do\n    print(i)\nend\n")),(0,l.kt)("h4",{id:"try-it-yourself-5"},(0,l.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=for%20i%3D0%2C%20100%2C%2010%20do%0D%0A%20%20%20%20print(i)%0D%0Aend"},"Try It Yourself")),(0,l.kt)("h2",{id:"tables"},"Tables"),(0,l.kt)("p",null,"Alright, you know the basic control flow, and data types (numbers and string), so let's look at a more interesting data type: tables. These can store organised data, for example, scores for each player in a game:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pluto"},'players = {\n    ["John"] = 15,\n    ["Jane"] = 10,\n    ["Bob"] = 12,\n}\nfor name, score in players do\n    print($"{name} has a score of {score}.")\nend\n')),(0,l.kt)("h4",{id:"try-it-yourself-6"},(0,l.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=players%20%3D%20%7B%0D%0A%20%20%20%20%5B%22John%22%5D%20%3D%2015%2C%0D%0A%20%20%20%20%5B%22Jane%22%5D%20%3D%2010%2C%0D%0A%20%20%20%20%5B%22Bob%22%5D%20%3D%2012%2C%0D%0A%7D%0D%0Afor%20name%2C%20score%20in%20players%20do%0D%0A%20%20%20%20print(%24%22%7Bname%7D%20has%20a%20score%20of%20%7Bscore%7D.%22)%0D%0Aend"},"Try It Yourself")),(0,l.kt)("p",null,"Notice how we're still using a for-loop, but this time we're ",(0,l.kt)("em",{parentName:"p"},"iterating")," over the our players table instead of a range of numbers."),(0,l.kt)("p",null,"We can also store tables within tables, so we could have more data than just a single number for each player:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pluto"},'players = {\n    ["John"] = {\n        ["kills"] = 15,\n        ["deaths"] = 5,\n    },\n    ["Jane"] = {\n        ["kills"] = 10,\n        ["deaths"] = 8,\n    },\n    ["Bob"] = {\n        ["kills"] = 12,\n        ["deaths"] = 8,\n    },\n}\nfor name, data in players do\n    print($"{name} has {data.kills} kills and {data.deaths} deaths.")\nend\n')),(0,l.kt)("h4",{id:"try-it-yourself-7"},(0,l.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=players%20%3D%20%7B%0D%0A%20%20%20%20%5B%22John%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2015%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%205%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Jane%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2010%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Bob%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2012%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%7D%0D%0Afor%20name%2C%20data%20in%20players%20do%0D%0A%20%20%20%20print(%24%22%7Bname%7D%20has%20%7Bdata.kills%7D%20kills%20and%20%7Bdata.deaths%7D%20deaths.%22)%0D%0Aend"},"Try It Yourself")),(0,l.kt)("h2",{id:"calculating-kd-ratios"},"Calculating K/D ratios"),(0,l.kt)("p",null,"Let's put all of what we've learned so far to the test and make a program that actually does some work for us instead of the other way around."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pluto"},'players = {\n    ["John"] = {\n        ["kills"] = 15,\n        ["deaths"] = 5,\n    },\n    ["Jane"] = {\n        ["kills"] = 10,\n        ["deaths"] = 8,\n    },\n    ["Bob"] = {\n        ["kills"] = 12,\n        ["deaths"] = 8,\n    },\n}\n-- Add "kd" field to each player\nfor players as player do\n    player.kd = player.kills / player.deaths\nend\n-- Print\nfor name, data in players do\n    print($"{name} has a K/D of {data.kd}.")\nend\n')),(0,l.kt)("h4",{id:"try-it-yourself-8"},(0,l.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=players%20%3D%20%7B%0D%0A%20%20%20%20%5B%22John%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2015%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%205%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Jane%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2010%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Bob%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2012%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%7D%0D%0A--%20Add%20%22kd%22%20field%20to%20each%20player%0D%0Afor%20players%20as%20player%20do%0D%0A%20%20%20%20player.kd%20%3D%20player.kills%20%2F%20player.deaths%0D%0Aend%0D%0A--%20Print%0D%0Afor%20name%2C%20data%20in%20players%20do%0D%0A%20%20%20%20print(%24%22%7Bname%7D%20has%20a%20K%2FD%20of%20%7Bdata.kd%7D.%22)%0D%0Aend"},"Try It Yourself")),(0,l.kt)("p",null,"Notice another variant of the for-loop: The for-as loop. This is handy for calculating the K/D since we don't care about the name."),(0,l.kt)("h2",{id:"encapsulation-in-functions"},"Encapsulation in functions"),(0,l.kt)("p",null,"We've been using functions quite a bit \u2014 or at least, the ",(0,l.kt)("inlineCode",{parentName:"p"},"print")," function \u2014 so it's about time we make our own function."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pluto"},'function calculate_kd(plys: table)\n    for plys as ply do\n        ply.kd = ply.kills / ply.deaths\n    end\nend\nplayers = {\n    ["John"] = {\n        ["kills"] = 15,\n        ["deaths"] = 5,\n    },\n    ["Jane"] = {\n        ["kills"] = 10,\n        ["deaths"] = 8,\n    },\n    ["Bob"] = {\n        ["kills"] = 12,\n        ["deaths"] = 8,\n    },\n}\ncalculate_kd(players)\nfor name, data in players do\n    print($"{name} has a K/D of {data.kd}.")\nend\n')),(0,l.kt)("h4",{id:"try-it-yourself-9"},(0,l.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=function%20calculate_kd(plys%3A%20table)%0D%0A%20%20%20%20for%20plys%20as%20ply%20do%0D%0A%20%20%20%20%20%20%20%20ply.kd%20%3D%20ply.kills%20%2F%20ply.deaths%0D%0A%20%20%20%20end%0D%0Aend%0D%0Aplayers%20%3D%20%7B%0D%0A%20%20%20%20%5B%22John%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2015%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%205%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Jane%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2010%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%5B%22Bob%22%5D%20%3D%20%7B%0D%0A%20%20%20%20%20%20%20%20%5B%22kills%22%5D%20%3D%2012%2C%0D%0A%20%20%20%20%20%20%20%20%5B%22deaths%22%5D%20%3D%208%2C%0D%0A%20%20%20%20%7D%2C%0D%0A%7D%0D%0Acalculate_kd(players)%0D%0Afor%20name%2C%20data%20in%20players%20do%0D%0A%20%20%20%20print(%24%22%7Bname%7D%20has%20a%20K%2FD%20of%20%7Bdata.kd%7D.%22)%0D%0Aend"},"Try It Yourself")),(0,l.kt)("p",null,"And as you can see, the code behaves exactly the same as before! Perhaps not very interesting, but better than the alternative."),(0,l.kt)("p",null,"Let's break down what exactly is happening:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"On the first line, we declare a function with the name ",(0,l.kt)("inlineCode",{parentName:"li"},"calculate_kd")," and a parameter ",(0,l.kt)("inlineCode",{parentName:"li"},"plys")," of type ",(0,l.kt)("inlineCode",{parentName:"li"},"table"),". Note that the ",(0,l.kt)("inlineCode",{parentName:"li"},": table")," part is optional, but it's always good to be explicit about assumptions! (Didn't think you'd find relationship advice here, did you?)"),(0,l.kt)("li",{parentName:"ul"},"Then near the end of the script, we call ",(0,l.kt)("inlineCode",{parentName:"li"},"calculate_kd")," with our ",(0,l.kt)("inlineCode",{parentName:"li"},"players")," table as an argument.")),(0,l.kt)("h2",{id:"local-variables"},"Local variables"),(0,l.kt)("p",null,"Next, I'd like to introduce local variables, but you've actually already seen them! In the example above, the ",(0,l.kt)("inlineCode",{parentName:"p"},"calculate_kd")," function's ",(0,l.kt)("inlineCode",{parentName:"p"},"plys")," argument is a local variable, because it is only available within that function's body."),(0,l.kt)("p",null,"However, other than having a local variable by virtue of it being a function parameter, we can also manually define one just like we've already defined variables except we put ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," before it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pluto"},"local a = 1\nprint(a)\n")),(0,l.kt)("h4",{id:"try-it-yourself-10"},(0,l.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=local%20a%20%3D%201%0D%0Aprint(a)"},"Try It Yourself")),(0,l.kt)("h2",{id:"nil-values"},"Nil values"),(0,l.kt)("p",null,"However, what happens when we use a variable we didn't define, or we don't give it a value?"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-pluto"},"local no_value_given\nprint(no_value_given)\nprint(never_defined)\n")),(0,l.kt)("h4",{id:"try-it-yourself-11"},(0,l.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=local%20no_value_given%0D%0Aprint(no_value_given)%0D%0Aprint(never_defined)%0D%0A"},"Try It Yourself")),(0,l.kt)("p",null,'As you can see, this prints "nil" two times, so that\'s the answer \u2014 we get ',(0,l.kt)("inlineCode",{parentName:"p"},"nil")," in both cases. ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")," is a special type that is used as the result of valueless expressions."),(0,l.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here"),(0,l.kt)("p",null,"You should now have an understanding of the fundemantals of Pluto. If you want to learn more, the rest of this documentation is certainly a good place to learn more about Pluto."),(0,l.kt)("p",null,"You could start with some of the Pluto features we already made use of in this guide:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/New%20Features/String%20Interpolation"},"String Interpolation")," (",(0,l.kt)("inlineCode",{parentName:"li"},"$"),"-strings)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/New%20Features/For-As%20Loop"},"For-As Loop")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/New%20Features/Type%20Hinting"},"Type Hinting"))),(0,l.kt)("p",null,"If you want to understand the underpinnings of Pluto a bit better, ",(0,l.kt)("a",{parentName:"p",href:"https://www.lua.org/manual/5.4/"},"the Lua manual")," would be a good place to look."))}h.isMDXComponent=!0}}]);