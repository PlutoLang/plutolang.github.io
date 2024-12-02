"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[6796],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=o,y=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(8168),o=(n(6540),n(5680));const i={sidebar_position:2},a=void 0,l={unversionedId:"Editor Integration",id:"Editor Integration",title:"Editor Integration",description:"Although Pluto can theoretically be used with Lua-based tooling, we provide specialized support for .pluto files to enhance your coding experience with features such as:",source:"@site/docs/Editor Integration.md",sourceDirName:".",slug:"/Editor Integration",permalink:"/docs/Editor Integration",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/Getting Started"},next:{title:"New Operators",permalink:"/docs/New Operators"}},s={},u=[{value:"Installation",id:"installation",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Although Pluto can theoretically be used with Lua-based tooling, we provide specialized support for .pluto files to enhance your coding experience with features such as:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Syntax Highlighting"),(0,o.yg)("li",{parentName:"ul"},'Snippets \u2014 e.g. for when you type "fun" and press tab'),(0,o.yg)("li",{parentName:"ul"},'Comment Information \u2014 for editor features such as "Toggle Comment", "Toggle Block Comment"'),(0,o.yg)("li",{parentName:"ul"},'Indentation Rules \u2014 for editor features such as "Reindent Lines"'),(0,o.yg)("li",{parentName:"ul"},"Build Systems \u2014 run & lint scripts directly in your editor with Ctrl+(Shift+)B in Sublime Text or Ctrl+Shift+P in VS Code")),(0,o.yg)("h2",{id:"installation"},"Installation"),(0,o.yg)("p",null,"The installation process depends on your editor:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"VS Code:")," Search for ",(0,o.yg)("inlineCode",{parentName:"li"},"calamity-inc.pluto-syntax-highlighting"),' in the marketplace and press "Install."'),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Sublime Text:"),' Open the command palette (Ctrl+Shift+P), select "Package Control: Install Package", search for "Pluto", and press enter.'),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Visual Studio:")," Click on Extensions > Manage Extensions. In the Online section, search for ",(0,o.yg)("inlineCode",{parentName:"li"},"calamity-inc.pluto-vsix"),' and press "Download."'),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"IntelliJ:")," Clone ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/PlutoLang/Syntax-Highlighting"},"our syntax highlighting repository")," and add the tmbundle folder to ",(0,o.yg)("strong",{parentName:"li"},"Editor > TextMate Bundles"),".")),(0,o.yg)("p",null,"If your editor is not listed here, check if it is able to load TextMate bundles, in which case you should be able to do something similar to the IntelliJ instructions above."))}d.isMDXComponent=!0}}]);