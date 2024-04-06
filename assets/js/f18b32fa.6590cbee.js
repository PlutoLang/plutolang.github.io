"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[7666],{6403:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=s(4848),i=s(8453);const r={sidebar_position:3},c=void 0,l={id:"Runtime Environment/Socket",title:"Socket",description:"Must be included via require. This library is not available in WASM builds of Pluto.",source:"@site/docs/Runtime Environment/Socket.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/Socket",permalink:"/docs/Runtime Environment/Socket",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Scheduler",permalink:"/docs/Runtime Environment/Scheduler"},next:{title:"URL",permalink:"/docs/Runtime Environment/URL"}},o={},a=[{value:"<code>socket.connect</code>",id:"socketconnect",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Multitasking",id:"multitasking",level:4},{value:"<code>socket.listen</code>",id:"socketlisten",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>socket.bind</code>",id:"socketbind",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Socket Class",id:"socket-class",level:2},{value:"<code>socket.send</code>",id:"socketsend",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>socket.recv</code>",id:"socketrecv",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Multitasking",id:"multitasking-1",level:4},{value:"<code>socket.unrecv</code>",id:"socketunrecv",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"<code>socket.starttls</code>",id:"socketstarttls",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Multitasking",id:"multitasking-2",level:4},{value:"<code>socket.close</code>",id:"socketclose",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Listener Class",id:"listener-class",level:2},{value:"<code>accept</code>",id:"accept",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Multitasking",id:"multitasking-3",level:4},{value:"<code>hasconnection</code>",id:"hasconnection",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Must be included via ",(0,t.jsx)(n.code,{children:"require"}),". This library is not available in WASM builds of Pluto."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"socketconnect",children:(0,t.jsx)(n.code,{children:"socket.connect"})}),"\n",(0,t.jsx)(n.p,{children:"Establishes a TCP connection."}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The host to connect to. Either an IPv4 or IPv6 address, or a domain name resolving to one."}),"\n",(0,t.jsx)(n.li,{children:"The port to contact the host on."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"A socket instance on success. Nil on failure."}),"\n",(0,t.jsx)(n.h4,{id:"multitasking",children:"Multitasking"}),"\n",(0,t.jsx)(n.p,{children:"If called inside of a coroutine, this function yields. Otherwise, it blocks."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"socketlisten",children:(0,t.jsx)(n.code,{children:"socket.listen"})}),"\n",(0,t.jsx)(n.p,{children:"Creates a new listener for the given port."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The port to listen on."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"A listener instance on success. Nil on failure."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"socketbind",children:(0,t.jsx)(n.code,{children:"socket.bind"})}),"\n",(0,t.jsxs)(n.p,{children:["A convenience function that wraps ",(0,t.jsx)(n.code,{children:"socket.listen"}),", automatically accepting new clients and spinning up a coroutine for them."]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"Scheduler",children:"scheduler"})," instance."]}),"\n",(0,t.jsx)(n.li,{children:"The port to listen on."}),"\n",(0,t.jsx)(n.li,{children:"The callback function that will be called in a new coroutine for each client socket."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local { scheduler, socket } = require "*"\r\n\r\nlocal sched = new scheduler()\r\nsocket.bind(sched, 80, |s| -> do\r\n    local content = "Hello, world!"\r\n    s:send("HTTP/1.1 200 OK\\r\\nConnection: Close\\r\\nContent-Length: "..#content.."\\r\\n\\r\\n"..content)\r\nend)\r\nsched:run()\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"socket-class",children:"Socket Class"}),"\n",(0,t.jsxs)(n.p,{children:["Socket instances are obtained by calling ",(0,t.jsx)(n.code,{children:"socket.connect"})," (client), or from a listener (server)."]}),"\n",(0,t.jsx)(n.h3,{id:"socketsend",children:(0,t.jsx)(n.code,{children:"socket.send"})}),"\n",(0,t.jsx)(n.p,{children:"Sends data on a socket."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The socket instance."}),"\n",(0,t.jsx)(n.li,{children:"The data to send."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"socketrecv",children:(0,t.jsx)(n.code,{children:"socket.recv"})}),"\n",(0,t.jsx)(n.p,{children:"Receive data from a socket."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The socket instance."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the socket is open: The oldest chunk of data received on the transport layer (TCP packet) or crypto layer (TLS record) as a string."}),"\n",(0,t.jsx)(n.li,{children:"If the socket is closed: Nil."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"multitasking-1",children:"Multitasking"}),"\n",(0,t.jsx)(n.p,{children:"If a message is buffered, the function can return immediately. If not, it will yield if inside a coroutine, and block otherwise."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local socket = require "pluto:socket"\r\n\r\nlocal s = socket.connect("google.com", 80)\r\ns:send("GET / HTTP/1.1\\r\\nHost: google.com\\r\\n\\r\\n")\r\nprint(s:recv())\n'})}),"\n",(0,t.jsx)(n.h3,{id:"socketunrecv",children:(0,t.jsx)(n.code,{children:"socket.unrecv"})}),"\n",(0,t.jsxs)(n.p,{children:["Pushes a chunk of data to the front of the receive buffer, making it oldest for the purposes of ",(0,t.jsx)(n.code,{children:"socket.recv"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The socket instance."}),"\n",(0,t.jsx)(n.li,{children:"The data to push."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local socket = require "pluto:socket"\r\n\r\nlocal sock = socket.connect("google.com", 80)\r\nsock:unrecv("World")\r\nsock:unrecv("Hello")\r\nprint(sock:recv()) --\x3e Hello\r\nprint(sock:recv()) --\x3e World\n'})}),"\n",(0,t.jsx)(n.h3,{id:"socketstarttls",children:(0,t.jsx)(n.code,{children:"socket.starttls"})}),"\n",(0,t.jsx)(n.p,{children:"Attempts to add the TLS crypto layer to the socket, making the transport layer a sole carrier for TLS traffic."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The socket instance."}),"\n",(0,t.jsxs)(n.li,{children:["The host name of the intended remote. This may be the same as what was passed to ",(0,t.jsx)(n.code,{children:"socket.connect"}),". This name must be on the certificate that the remote will send."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"True on success. On failure, returns false and the socket is closed. If the socket is already using TLS, returns nil."}),"\n",(0,t.jsx)(n.h4,{id:"multitasking-2",children:"Multitasking"}),"\n",(0,t.jsx)(n.p,{children:"If called inside of a coroutine, this function yields. Otherwise, it blocks."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local socket = require "pluto:socket"\r\n\r\nlocal s = socket.connect("pluto-lang.org", 443)\r\nassert(s:starttls("pluto-lang.org"), "Failed to establish secure connection.")\r\ns:send("GET / HTTP/1.1\\r\\nHost: pluto-lang.org\\r\\nConnection: close\\r\\n\\r\\n")\r\nwhile data := s:recv() do\r\n    print(data)\r\nend\n'})}),"\n",(0,t.jsx)(n.h3,{id:"socketclose",children:(0,t.jsx)(n.code,{children:"socket.close"})}),"\n",(0,t.jsx)(n.p,{children:"Closes a socket."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The socket instance."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"listener-class",children:"Listener Class"}),"\n",(0,t.jsxs)(n.p,{children:["Listener instances are obtained by calling ",(0,t.jsx)(n.code,{children:"socket.listen"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"accept",children:(0,t.jsx)(n.code,{children:"accept"})}),"\n",(0,t.jsx)(n.p,{children:"Accepts an incoming client connection, waiting until there is one."}),"\n",(0,t.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"A new socket instance. The socket can be used as per usual, with the exception of the starttls function being unavailable."}),"\n",(0,t.jsx)(n.h4,{id:"multitasking-3",children:"Multitasking"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If there is an incoming client connection, this function returns immediately."}),"\n",(0,t.jsx)(n.li,{children:"If there is not, it waits for one. Waiting means yielding if called inside a coroutine, and blocking otherwise."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"hasconnection",children:(0,t.jsx)(n.code,{children:"hasconnection"})}),"\n",(0,t.jsxs)(n.p,{children:["Checks if there is an incoming client connection. If this function returns true, the next call to ",(0,t.jsx)(n.code,{children:"accept"})," is guaranteed not to block or yield."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pluto",children:'local socket = require "pluto:socket"\r\n\r\nlocal l = socket.listen(80) or error("Failed to bind TCP/80")\r\nwhile not l:hasconnection() do -- Visit http://localhost to break this loop\r\n    os.sleep(1)\r\nend\r\nprint(l:accept():recv())\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var t=s(6540);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);