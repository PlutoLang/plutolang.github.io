"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[3616],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>k});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),u=n,k=d["".concat(i,".").concat(u)]||d[u]||m[u]||r;return o?a.createElement(k,l(l({ref:t},c),{},{components:o})):a.createElement(k,l({ref:t},c))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<r;p++)l[p]=o[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3610:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=o(7462),n=(o(7294),o(3905));const r={sidebar_position:3},l=void 0,s={unversionedId:"Runtime Environment/HTTP",id:"Runtime Environment/HTTP",title:"HTTP",description:"Must be included via require.",source:"@site/docs/Runtime Environment/HTTP.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/HTTP",permalink:"/docs/Runtime Environment/HTTP",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Exception",permalink:"/docs/Runtime Environment/Exception"},next:{title:"JSON",permalink:"/docs/Runtime Environment/JSON"}},i={},p=[{value:"<code>http.request</code>",id:"httprequest",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Options",id:"options",level:4},{value:"Returns",id:"returns",level:4},{value:"Multitasking",id:"multitasking",level:4},{value:"Try It Yourself",id:"try-it-yourself",level:4},{value:"<code>http.hasconnection</code>",id:"httphasconnection",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Multitasking",id:"multitasking-1",level:4},{value:"<code>http.closeconnections</code>",id:"httpcloseconnections",level:3},{value:"Multitasking",id:"multitasking-2",level:4}],c={toc:p},d="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Must be included via ",(0,n.kt)("inlineCode",{parentName:"p"},"require"),"."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"httprequest"},(0,n.kt)("inlineCode",{parentName:"h3"},"http.request")),(0,n.kt)("p",null,"Performs an HTTP request."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'The URL to send a request to as a string. This parameter is optional in the sense that the options table (parameter 2) can be parameter 1 instead, but must have the "url" option then.'),(0,n.kt)("li",{parentName:"ol"},"The table of options. This parameter is optional if a URL was given.")),(0,n.kt)("h4",{id:"options"},"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"method:")," The HTTP request method to use. Defaults to GET."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"headers:")," A table of headers, e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},'{ ["Content-Type"] = "application/json" }'),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"body:")," An optional request payload. If provided, the ",(0,n.kt)("inlineCode",{parentName:"li"},"Content-Length")," header is set appropriately, and the method is set to POST unless otherwise specified."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"prefer_ipv6:"),' (Does nothing in WASM builds of Pluto.) When establishing a new connection, we attempt to lookup and connect via IPv4, retrying with IPv6 if needed. If this is set to true, we instead start with IPv6. This may be useful for "LAN" services that identify the LAN via IPv6 instead of IPv4.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"dont_reuse:")," (Does nothing in WASM builds of Pluto.) Force the implementation not to reuse an existing socket, which may involve waiting. Instead a new connection is opened. This may be useful when many requests are headed to the same remote and you consider the time taken by a fresh handshake to be less than the time taken to wait to reuse."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"dont_make_reusable:")," (Does nothing in WASM builds of Pluto.) If a new connection to the remote was opened to carry out the request, close it again after the request. This is useful to avoid burdening the remote for one-off requests.")),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,"On success:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The response body as a string."),(0,n.kt)("li",{parentName:"ol"},"The status code as an integer."),(0,n.kt)("li",{parentName:"ol"},"A table of response headers. Empty in WASM builds of Pluto."),(0,n.kt)("li",{parentName:"ol"},"The status text as a string.")),(0,n.kt)("p",null,"On failure:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Nil."),(0,n.kt)("li",{parentName:"ol"},"An approximate failure reason as an English string. Not available in WASM builds of Pluto.")),(0,n.kt)("h4",{id:"multitasking"},"Multitasking"),(0,n.kt)("p",null,"If called inside of a coroutine, this function yields. Otherwise, it blocks. In WASM builds of Pluto, it must be called inside of a coroutine that yields to the environment as otherwise the request cannot be dispatched."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The first request to a remote may take a while \u2014 especially with HTTPS \u2014 due to the TCP and TLS handshakes. We use keep-alive to keep the connection open, so subsequent requests to the same remote will be significantly faster.")),(0,n.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"local"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," http "),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"require"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"pluto:http"')),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"local"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," body"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," status_code"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," headers"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," status_text "),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," http"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},"."),(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"request"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,n.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"https://httpbin.org/anything"'),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},")")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"print"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"(status_code"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},".."),(0,n.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'" "'),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},".."),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"status_text)")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"if"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"os.platform"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"!="),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"wasm"'),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"then")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"    "),(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"print"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"dumpvar"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"(headers))")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"end")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"print"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"(body)"))))),(0,n.kt)("h4",{id:"try-it-yourself"},(0,n.kt)("a",{parentName:"h4",href:"https://pluto-lang.org/web/#code=local%20http%20%3D%20require%20%22pluto%3Ahttp%22%0D%0Alocal%20body%2C%20status_code%2C%20headers%2C%20status_text%20%3D%20http.request(%22https%3A%2F%2Fhttpbin.org%2Fanything%22)%0D%0Aprint(status_code..%22%20%22..status_text)%0D%0Aif%20os.platform%20!%3D%20%22wasm%22%20then%0D%0A%20%20%20%20print(dumpvar(headers))%0D%0Aend%0D%0Aprint(body)"},"Try It Yourself")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"httphasconnection"},(0,n.kt)("inlineCode",{parentName:"h3"},"http.hasconnection")),(0,n.kt)("p",null,"Queries if a keep-alive connection is available for a remote. This function is not available in WASM builds of Pluto."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A partial URL identifying the remote. Partial because only the protocol, host, and port are used; additional components such as path are ignored.")),(0,n.kt)("h4",{id:"multitasking-1"},"Multitasking"),(0,n.kt)("p",null,"If called inside of a coroutine, this function may yield. Otherwise, it may block."),(0,n.kt)("pre",{className:"shiki monokai",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"local"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," { http"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},","),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," scheduler } "),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"require"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"*"')),(0,n.kt)("div",{parentName:"code",className:"line"}),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"local"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," sched "),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"new"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF",fontStyle:"italic"}},"scheduler"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"()")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"sched"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"addloop"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF",fontStyle:"italic"}},"function"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"()")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"    "),(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"print"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"(http"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},"."),(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"hasconnection"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,n.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"https://httpbin.org"'),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"))")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"end"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},")")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"sched"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"add"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF",fontStyle:"italic"}},"function"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"()")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"    "),(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"print"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"((http"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},"."),(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"request"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"("),(0,n.kt)("span",{parentName:"div",style:{color:"color: #E6DB74"}},'"https://httpbin.org/anything"'),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},")))")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"color: #F92672"}},"end"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},")")),(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"sched"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #9F570F"}},":"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #66D9EF"}},"run"),(0,n.kt)("span",{parentName:"div",style:{color:"color: #F8F8F2"}},"()"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"httpcloseconnections"},(0,n.kt)("inlineCode",{parentName:"h3"},"http.closeconnections")),(0,n.kt)("p",null,"Closes all keep-alive connections like when closing the Lua state but in a non-blocking way. This function does nothing in WASM builds of Pluto."),(0,n.kt)("h4",{id:"multitasking-2"},"Multitasking"),(0,n.kt)("p",null,"This function must be called inside of a coroutine, as it will yield."))}m.isMDXComponent=!0}}]);