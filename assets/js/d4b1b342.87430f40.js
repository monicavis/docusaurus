"use strict";(self.webpackChunkarchive_view=self.webpackChunkarchive_view||[]).push([[5539],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=a,m=u["".concat(s,".").concat(h)]||u[h]||v[h]||i;return r?t.createElement(m,o(o({ref:n},p),{},{components:r})):t.createElement(m,o({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2176:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(87462),a=(r(67294),r(3905));const i={},o="2. Installing the Archive Viewer",l={unversionedId:"Installation Manual/Installing_AV/Installing_AV",id:"version-11.7.0.1/Installation Manual/Installing_AV/Installing_AV",title:"2. Installing the Archive Viewer",description:"The Archive Viewer application consists of the components based on",source:"@site/versioned_docs/version-11.7.0.1/Installation Manual/2.Installing_AV/2.Installing_AV.md",sourceDirName:"Installation Manual/2.Installing_AV",slug:"/Installation Manual/Installing_AV/",permalink:"/docusaurus/docs/11.7.0.1/Installation Manual/Installing_AV/",draft:!1,tags:[],version:"11.7.0.1",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1.4.2 Software Requirements for Archive Viewer Reporting Server",permalink:"/docusaurus/docs/11.7.0.1/Installation Manual/Introduction_OAV/1.4Requirements_AV_Reporting_Server/1.4.2Software_Requirements_AV_Reporting_Server/"},next:{title:"2.1 Installing the Archive Viewer Conversion Server",permalink:"/docusaurus/docs/11.7.0.1/Installation Manual/Installing_AV/2.1Installing_AV_Conversion_Server/"}},s={},c=[],p={toc:c},u="wrapper";function v(e){let{components:n,...r}=e;return(0,a.kt)(u,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2-installing-the-archive-viewer"},"2. Installing the Archive Viewer"),(0,a.kt)("p",null,"The Archive Viewer application consists of the components based on\nthe requirement and library dependency, as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Archive Viewer Conversion Server")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Archive Viewer Query Server")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Archive Viewer Reporting Server (optional)"),(0,a.kt)("p",{parentName:"li"},"This chapter explains how to install the Conversion, Query and\nReporting servers."),(0,a.kt)("p",{parentName:"li"},"You can install the Conversion Server in a Windows or Linux\nplatform. The Conversion Server is the core component of the\nArchive Viewer application, which is used to manage, monitor and\ntrack all the processes."),(0,a.kt)("p",{parentName:"li"},"\ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"/docusaurus/docs/11.7.0.1/Installation%20Manual/Installing_AV/2.1Installing_AV_Conversion_Server/"}," See Section 2.1 Installing the ArchiveViewer Conversion Server")," for guidelines on installing the\nConversion Server."),(0,a.kt)("p",{parentName:"li"},"You should install the Query and Reporting servers only in a Linux\nplatform:"),(0,a.kt)("p",{parentName:"li"},"\ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"/docusaurus/docs/11.7.0.1/Installation%20Manual/Installing_AV/2.2_Installing_AV_Query_Server/"},"See Section 2.2 Installing the Archive Viewer QueryServer")),(0,a.kt)("p",{parentName:"li"},"\ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"/docusaurus/docs/11.7.0.1/Installation%20Manual/Installing_AV/2.3Installing_AV_Reporting_Server/"},"Section 2.3 Installing the Archive Viewer Reporting Server")," for guidelines on installing the Query and Reporting servers"))))}v.isMDXComponent=!0}}]);