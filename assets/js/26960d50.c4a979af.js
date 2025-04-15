"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[1281],{5680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>m});var r=n(6540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=r.createContext({}),p=function(e){var a=r.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=p(e.components);return r.createElement(i.Provider,{value:a},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=p(n),g=t,m=y["".concat(i,".").concat(g)]||y[g]||d[g]||l;return n?r.createElement(m,o(o({ref:a},c),{},{components:n})):r.createElement(m,o({ref:a},c))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,o=new Array(l);o[0]=g;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[y]="string"==typeof e?e:t,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2110:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(8168),t=(n(6540),n(5680));const l={},o=void 0,s={unversionedId:"Runtime Environment/Canvas",id:"Runtime Environment/Canvas",title:"Canvas",description:"Must be included via require.",source:"@site/docs/Runtime Environment/Canvas.md",sourceDirName:"Runtime Environment",slug:"/Runtime Environment/Canvas",permalink:"/docs/Runtime Environment/Canvas",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CaT",permalink:"/docs/Runtime Environment/CaT"},next:{title:"Coroutine",permalink:"/docs/Runtime Environment/Coroutine"}},i={},p=[{value:"<code>canvas.new</code>",id:"canvasnew",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>canvas.bmp</code>",id:"canvasbmp",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>canvas.qrcode</code>",id:"canvasqrcode",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Options",id:"options",level:4},{value:"<code>canvas.get</code>",id:"canvasget",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>canvas.set</code>",id:"canvasset",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"<code>canvas.fill</code>",id:"canvasfill",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"<code>canvas.size</code>",id:"canvassize",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>canvas.mulsize</code>",id:"canvasmulsize",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"<code>canvas.tobmp</code>",id:"canvastobmp",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-2",level:4},{value:"<code>canvas.topng</code>",id:"canvastopng",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-3",level:4},{value:"<code>canvas.tobwstring</code>",id:"canvastobwstring",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-4",level:4}],c={toc:p},y="wrapper";function d(e){let{components:a,...n}=e;return(0,t.yg)(y,(0,r.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Must be included via ",(0,t.yg)("inlineCode",{parentName:"p"},"require"),"."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"canvasnew"},(0,t.yg)("inlineCode",{parentName:"h3"},"canvas.new")),(0,t.yg)("p",null,"Creates a new canvas instance."),(0,t.yg)("h4",{id:"parameters"},"Parameters"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Width."),(0,t.yg)("li",{parentName:"ol"},"Height.")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"canvasbmp"},(0,t.yg)("inlineCode",{parentName:"h3"},"canvas.bmp")),(0,t.yg)("p",null,"Creates a new canvas instance based on a BMP image."),(0,t.yg)("h4",{id:"parameters-1"},"Parameters"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The BMP image as a string.")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"canvasqrcode"},(0,t.yg)("inlineCode",{parentName:"h3"},"canvas.qrcode")),(0,t.yg)("p",null,"Creates a new canvas instance containing a QR code."),(0,t.yg)("h4",{id:"parameters-2"},"Parameters"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The string to be encoded."),(0,t.yg)("li",{parentName:"ol"},"An optional table of options.")),(0,t.yg)("h4",{id:"options"},"Options"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},'"ecl" specifies the error correction level between "low", "medium", "quartile", "high". defaults to "low".'),(0,t.yg)("li",{parentName:"ul"},'"border" specifies the number of pixels around the QR code. defaults to 0.'),(0,t.yg)("li",{parentName:"ul"},'"bg" specifies the background color. defaults to ',(0,t.yg)("inlineCode",{parentName:"li"},"0x000000")," for black."),(0,t.yg)("li",{parentName:"ul"},'"fg" specifies the background color. defaults to ',(0,t.yg)("inlineCode",{parentName:"li"},"0xffffff")," for white.")),(0,t.yg)("pre",{className:"shiki monokai-patched",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,t.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,t.yg)("div",{parentName:"pre",className:"code-container"},(0,t.yg)("code",{parentName:"div"},(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," canvas "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"canvas"')),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," c "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," canvas"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"qrcode"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"Hello from Pluto!"'),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," { fg "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"0xffffff"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," bg "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"0x000000"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," })")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(c"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"tobwstring"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"0xffffff"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"))")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e \u2588\u2580\u2580\u2580\u2580\u2580\u2588 \u2584 \u2588\u2584\u2584 \u2588\u2580\u2580\u2580\u2580\u2580\u2588")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e \u2588 \u2588\u2588\u2588 \u2588 \u2584\u2588\u2584\u2584\u2588 \u2588 \u2588\u2588\u2588 \u2588")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e \u2588 \u2580\u2580\u2580 \u2588 \u2584\u2580 \u2588\u2584 \u2588 \u2580\u2580\u2580 \u2588")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e \u2580\u2580\u2580\u2580\u2580\u2580\u2580 \u2580\u2584\u2580\u2584\u2588 \u2580\u2580\u2580\u2580\u2580\u2580\u2580")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e \u2580\u2580\u2588\u2588\u2588 \u2580\u2588\u2588\u2588 \u2588\u2580\u2580 \u2580\u2584\u2588\u2584\u2580\u2584")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e \u2588\u2584\u2580\u2584\u2580\u2588\u2580\u2588\u2580\u2580 \u2580\u2588\u2584\u2580\u2584\u2584\u2588\u2588\u2580 ")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e \u2580\u2580\u2580\u2580\u2580 \u2580 \u2588\u2580\u2588\u2580 \u2584\u2588\u2584\u2584\u2584  \u2580")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e \u2588\u2580\u2580\u2580\u2580\u2580\u2588 \u2580  \u2580\u2588\u2588\u2580\u2584 \u2584\u2588\u2588 ")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e \u2588 \u2588\u2588\u2588 \u2588 \u2588\u2584 \u2584\u2588\u2584\u2588\u2588\u2584\u2584 \u2584 ")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e \u2588 \u2580\u2580\u2580 \u2588 \u2588\u2584 \u2580\u2588\u2580 \u2580\u2584\u2584\u2588  ")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e \u2580\u2580\u2580\u2580\u2580\u2580\u2580 \u2580   \u2580 \u2580 \u2580  \u2580 "))))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"canvasget"},(0,t.yg)("inlineCode",{parentName:"h3"},"canvas.get")),(0,t.yg)("p",null,"Gets the color of the pixel at the given coordinates."),(0,t.yg)("h4",{id:"parameters-3"},"Parameters"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The canvas instance."),(0,t.yg)("li",{parentName:"ol"},"The X coordinate."),(0,t.yg)("li",{parentName:"ol"},"The Y coordinate.")),(0,t.yg)("h4",{id:"returns"},"Returns"),(0,t.yg)("p",null,"The color as an integer."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"canvasset"},(0,t.yg)("inlineCode",{parentName:"h3"},"canvas.set")),(0,t.yg)("p",null,"Sets the color of the pixel at the given coordinates."),(0,t.yg)("h4",{id:"parameters-4"},"Parameters"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The canvas instance."),(0,t.yg)("li",{parentName:"ol"},"The X coordinate."),(0,t.yg)("li",{parentName:"ol"},"The Y coordinate."),(0,t.yg)("li",{parentName:"ol"},"The color as an integer.")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"canvasfill"},(0,t.yg)("inlineCode",{parentName:"h3"},"canvas.fill")),(0,t.yg)("p",null,"Sets every pixel to the given color."),(0,t.yg)("h4",{id:"parameters-5"},"Parameters"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The canvas instance."),(0,t.yg)("li",{parentName:"ol"},"The color as an integer.")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"canvassize"},(0,t.yg)("inlineCode",{parentName:"h3"},"canvas.size")),(0,t.yg)("p",null,"Get the size of a canvas."),(0,t.yg)("h4",{id:"parameters-6"},"Parameters"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The canvas instance.")),(0,t.yg)("h4",{id:"returns-1"},"Returns"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Width."),(0,t.yg)("li",{parentName:"ol"},"Height.")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"canvasmulsize"},(0,t.yg)("inlineCode",{parentName:"h3"},"canvas.mulsize")),(0,t.yg)("p",null,"Multiplies the size of a canvas."),(0,t.yg)("h4",{id:"parameters-7"},"Parameters"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The canvas instance."),(0,t.yg)("li",{parentName:"ol"},"The multiplier. Must be 2 or higher.")),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"canvastobmp"},(0,t.yg)("inlineCode",{parentName:"h3"},"canvas.tobmp")),(0,t.yg)("p",null,"Convert a canvas to a BMP image."),(0,t.yg)("h4",{id:"parameters-8"},"Parameters"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The canvas instance.")),(0,t.yg)("h4",{id:"returns-2"},"Returns"),(0,t.yg)("p",null,"A string."),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"canvastopng"},(0,t.yg)("inlineCode",{parentName:"h3"},"canvas.topng")),(0,t.yg)("p",null,"Convert a canvas to a PNG image."),(0,t.yg)("h4",{id:"parameters-9"},"Parameters"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The canvas instance.")),(0,t.yg)("h4",{id:"returns-3"},"Returns"),(0,t.yg)("p",null,"A string."),(0,t.yg)("pre",{className:"shiki monokai-patched",style:{backgroundColor:"#272822",color:"#F8F8F2"}},(0,t.yg)("div",{parentName:"pre",className:"language-id"},"pluto"),(0,t.yg)("div",{parentName:"pre",className:"code-container"},(0,t.yg)("code",{parentName:"div"},(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," { base64"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," canvas } "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"require"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"*"')),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"local"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," c "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"="),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},"new"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF",fontStyle:"italic"}},"canvas"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"5"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},","),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}}," "),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"5"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"c"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"fill"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#AE81FF"}},"0xff0000"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},")")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"print"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"("),(0,t.yg)("span",{parentName:"div",style:{color:"#E6DB74"}},'"data:image/png;base64,"'),(0,t.yg)("span",{parentName:"div",style:{color:"#F92672"}},".."),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"base64"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},"."),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"encode"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"(c"),(0,t.yg)("span",{parentName:"div",style:{color:"#9F570F"}},":"),(0,t.yg)("span",{parentName:"div",style:{color:"#66D9EF"}},"topng"),(0,t.yg)("span",{parentName:"div",style:{color:"#F8F8F2"}},"()))")),(0,t.yg)("div",{parentName:"code",className:"line"},(0,t.yg)("span",{parentName:"div",style:{color:"#88846F"}},"--\x3e data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAW0lEQVQIHQFQAK//AP8AAP8AAP8AAP8AAP8AAAD/AAD/AAD/AAD/AAD/AAAA/wAA/wAA/wAA/wAA/wAAAP8AAP8AAP8AAP8AAP8AAAD/AAD/AAD/AAD/AAD/AAD9fBjo3iScjwAAAABJRU5ErkJggg=="))))),(0,t.yg)("hr",null),(0,t.yg)("h3",{id:"canvastobwstring"},(0,t.yg)("inlineCode",{parentName:"h3"},"canvas.tobwstring")),(0,t.yg)("p",null,"Convert a canvas to a black and white unicode string. This requires the height of the canvas to be an even number; if it is not, a black line will be added to the bottom of the canvas."),(0,t.yg)("h4",{id:"parameters-10"},"Parameters"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The canvas instance."),(0,t.yg)("li",{parentName:"ol"},'The color to be "white." Any other color will be "black."')),(0,t.yg)("h4",{id:"returns-4"},"Returns"),(0,t.yg)("p",null,"A string."))}d.isMDXComponent=!0}}]);