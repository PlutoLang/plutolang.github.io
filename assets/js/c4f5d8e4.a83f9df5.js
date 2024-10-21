"use strict";(self.webpackChunkpluto=self.webpackChunkpluto||[]).push([[4195],{1065:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}const l=e=>{let{title:t,titleId:n,...l}=e;return a.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",x:10,viewBox:"0 0 496.158 496.158",style:{enableBackground:"new 0 0 496.158 496.158"},xmlSpace:"preserve","aria-labelledby":n},l))}},3261:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(7294),r=n(6010),l=n(9960),s=n(2263),i=n(179),o=n(7462);const c={features:"features_t9lD",featureSvg:"featureSvg_GfXr"},u=[{title:"New Syntax",Svg:n(1065).Z,description:a.createElement(a.Fragment,null,"Pluto implements various popular syntaxes that are absent in Lua, such as switch statements, compound operators, ternary expressions, etc.")},{title:"Compatibility",Svg:n(1065).Z,description:a.createElement(a.Fragment,null,'Pluto is remarkably compatible with Lua\'s source & bytecode. The only conflict is how our new keywords may conflict with identifiers, however we offer "Compatibility Mode" to resolve this issue.')},{title:"Larger Standard Library",Svg:n(1065).Z,description:a.createElement(a.Fragment,null,"Dozens of new string functions, table functions, portable filesystem functions, assertion libraries for unit testing, hashing algorithms, JSON, Base64, URL encoding, Vector3, and more.")}];function m(e){let{Svg:t,title:n,description:l}=e;return a.createElement("div",{className:(0,r.Z)("col col--4")},a.createElement("div",{className:"text--center"},a.createElement(t,{className:c.featureSvg,role:"img"})),a.createElement("div",{className:"text--center padding-horiz--md"},a.createElement("h3",null,n),a.createElement("p",null,l)))}function d(){return a.createElement("section",{className:c.features},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},u.map(((e,t)=>a.createElement(m,(0,o.Z)({key:t},e)))))))}const f={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};function p(){const{siteConfig:e}=(0,s.Z)();return a.createElement("header",{className:(0,r.Z)("hero hero--primary",f.heroBanner)},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline),a.createElement("div",{className:f.buttons},a.createElement(l.Z,{className:"button button--secondary button--lg",to:"/docs/Introduction"},"Learn More"))))}function h(){const{siteConfig:e}=(0,s.Z)();return a.createElement(i.Z,{title:e.title,description:"The official website for Pluto, a Lua dialect."},a.createElement(p,null),a.createElement("main",null,a.createElement(d,null)))}}}]);