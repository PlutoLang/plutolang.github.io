"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[2797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=u(n),h=l,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=h;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:l,o[1]=a;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const i={sidebar_position:1},o="Getting Started",a={unversionedId:"Getting Started",id:"Getting Started",title:"Getting Started",description:"This document will explain how to get started with writing Pluto in no time.",source:"@site/docs/Getting Started.md",sourceDirName:".",slug:"/Getting Started",permalink:"/docs/Getting Started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"What is Pluto?",permalink:"/docs/Introduction"},next:{title:"Beginner's Guide",permalink:"/docs/Beginners Guide"}},p={},u=[{value:"Write Pluto Online",id:"write-pluto-online",level:2},{value:"Prebuilt Binaries",id:"prebuilt-binaries",level:2},{value:"Packages",id:"packages",level:2},{value:"Chocolatey",id:"chocolatey",level:3},{value:"APT Repository",id:"apt-repository",level:3},{value:"AUR",id:"aur",level:3},{value:"Termux",id:"termux",level:3},{value:"Compile Pluto Yourself",id:"compile-pluto-yourself",level:2},{value:"PHP Scripts",id:"php-scripts",level:3},{value:"Visual Studio",id:"visual-studio",level:3},{value:"Make",id:"make",level:3},{value:"Sun",id:"sun",level:3}],s={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getting-started"},"Getting Started"),(0,l.kt)("p",null,"This document will explain how to get started with writing Pluto in no time."),(0,l.kt)("h2",{id:"write-pluto-online"},"Write Pluto Online"),(0,l.kt)("p",null,"The easiest way to get started writing Pluto is to use ",(0,l.kt)("a",{parentName:"p",href:"https://pluto-lang.org/web/"},"Write Pluto Online"),", which runs Pluto code directly in your browser using WASM."),(0,l.kt)("h2",{id:"prebuilt-binaries"},"Prebuilt Binaries"),(0,l.kt)("p",null,"You can find pre-built binaries of Pluto for Windows, Linux, & Mac OS over on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/PlutoLang/Pluto/releases"},"Pluto's Github Releases page"),"."),(0,l.kt)("h2",{id:"packages"},"Packages"),(0,l.kt)("h3",{id:"chocolatey"},"Chocolatey"),(0,l.kt)("p",null,"You can easily install pluto & plutoc via Chocolatey as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"choco install plutolang\n")),(0,l.kt)("h3",{id:"apt-repository"},"APT Repository"),(0,l.kt)("p",null,"You can easily install pluto & plutoc via APT as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'wget -qO- https://deb.calamity.gg/key.gpg | sudo tee /usr/share/keyrings/calamity-inc.gpg > /dev/null\necho "deb [arch=amd64 signed-by=/usr/share/keyrings/calamity-inc.gpg] https://deb.calamity.gg/ buster main" | sudo tee /etc/apt/sources.list.d/calamity-inc.list > /dev/null\nsudo apt update\nsudo apt install pluto\n')),(0,l.kt)("p",null,'Don\'t worry about the "buster" part; our prebuilt binaries are compiled on Debian 10 (buster), but they work on all subsequent Debian releases, as well as Ubuntu 20 and above.'),(0,l.kt)("h3",{id:"aur"},"AUR"),(0,l.kt)("p",null,"Pluto is in the Arch User Repository under the name ",(0,l.kt)("inlineCode",{parentName:"p"},"plutolang"),"."),(0,l.kt)("h3",{id:"termux"},"Termux"),(0,l.kt)("p",null,"Pluto is available in the Termux package main repository under ",(0,l.kt)("inlineCode",{parentName:"p"},"plutolang")," for binaries and ",(0,l.kt)("inlineCode",{parentName:"p"},"libpluto")," for development library."),(0,l.kt)("h2",{id:"compile-pluto-yourself"},"Compile Pluto Yourself"),(0,l.kt)("p",null,"Pluto can compile on virtually any platform, as long as there's a C++ 17 compiler for it."),(0,l.kt)("p",null,"First, you need to clone the repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git clone https://github.com/PlutoLang/Pluto\ncd Pluto\n")),(0,l.kt)("p",null,"Then, you can use any of the build methods documented here."),(0,l.kt)("h3",{id:"php-scripts"},"PHP Scripts"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"PHP is required for this method. You can check if PHP is installed by running ",(0,l.kt)("inlineCode",{parentName:"p"},"php -v"),". You can install it via ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo apt intall php-cli")," on Debian or ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo pacman -S php")," on Arch.")),(0,l.kt)("p",null,"Simply run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"php scripts/compile.php clang\nphp scripts/link_pluto.php clang\nphp scripts/link_plutoc.php clang\nphp scripts/link_static.php\n")),(0,l.kt)("p",null,"You can easily modify these commands to a compiler other than clang, if you wish. There are also additional scripts for the various types of shared libraries."),(0,l.kt)("p",null,"The binaries will be placed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"src/")," directory."),(0,l.kt)("h3",{id:"visual-studio"},"Visual Studio"),(0,l.kt)("p",null,"In the repository you just cloned, there's a Pluto.sln you can open with Visual Studio."),(0,l.kt)("p",null,"Within Visual Studio, open the ",(0,l.kt)("strong",{parentName:"p"},"Build > Batch Build"),' dialog. Here, click "Select All", then "Build".'),(0,l.kt)("p",null,"The binaries will be placed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"out/")," directory."),(0,l.kt)("h3",{id:"make"},"Make"),(0,l.kt)("p",null,"You can simply run the make command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make -j PLAT={yourplatform}\n")),(0,l.kt)("p",null,"The platform list can be found ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/PlutoLang/Pluto/blob/main/src/Makefile#L38"},"here"),"."),(0,l.kt)("p",null,"The binaries will be placed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"src/")," directory."),(0,l.kt)("h3",{id:"sun"},"Sun"),(0,l.kt)("p",null,"Pluto supports the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/calamity-inc/Sun"},"Sun build system")," by providing .sun files in the ",(0,l.kt)("inlineCode",{parentName:"p"},"src/")," directory, you can use them to build ",(0,l.kt)("inlineCode",{parentName:"p"},"pluto")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"plutoc"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd src\nsun pluto\nsun plutoc\n")),(0,l.kt)("p",null,"The binaries will be placed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"src/")," directory."),(0,l.kt)("p",null,"If you wish to use Pluto as a static library in your own projects, simply add the following to your project's .sun file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"require ../Pluto/src\n")),(0,l.kt)("p",null,"Assuming a directory structure where your own project and Pluto share the same parent."))}d.isMDXComponent=!0}}]);