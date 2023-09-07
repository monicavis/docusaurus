"use strict";(self.webpackChunkarchive_view=self.webpackChunkarchive_view||[]).push([[8492],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,h=p["".concat(c,".").concat(d)]||p[d]||v[d]||o;return t?n.createElement(h,i(i({ref:r},u),{},{components:t})):n.createElement(h,i({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39945:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={},i="1.1 Components of the Archive Viewer",s={unversionedId:"User Manual/Introduction_OAV/1.1Components_AV/1.1Components_AV",id:"version-11.7.0.1/User Manual/Introduction_OAV/1.1Components_AV/1.1Components_AV",title:"1.1 Components of the Archive Viewer",description:"The Archive Viewer is used to access data from Optim Archive Files",source:"@site/versioned_docs/version-11.7.0.1/User Manual/1.Introduction_OAV/1.1Components_AV/1.1Components_AV.md",sourceDirName:"User Manual/1.Introduction_OAV/1.1Components_AV",slug:"/User Manual/Introduction_OAV/1.1Components_AV/",permalink:"/docusaurus/docs/11.7.0.1/User Manual/Introduction_OAV/1.1Components_AV/",draft:!1,tags:[],version:"11.7.0.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1. Introduction to the Optim Archive Viewer",permalink:"/docusaurus/docs/11.7.0.1/User Manual/Introduction_OAV/"},next:{title:"1.2 Using this Manual",permalink:"/docusaurus/docs/11.7.0.1/User Manual/Introduction_OAV/1.2using_manual/"}},c={},l=[{value:"Archive Viewer metadata database",id:"archive-viewer-metadata-database",level:3},{value:"Archive Viewer Conversion Server",id:"archive-viewer-conversion-server",level:3},{value:"Archive Viewer Query Server",id:"archive-viewer-query-server",level:3},{value:"Archive Viewer Reporting Server (optional)",id:"archive-viewer-reporting-server-optional",level:3}],u={toc:l},p="wrapper";function v(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"11-components-of-the-archive-viewer"},"1.1 Components of the Archive Viewer"),(0,a.kt)("p",null,"The Archive Viewer is used to access data from Optim Archive Files\nvia open (JDBC/ODBC) technologies."),(0,a.kt)("p",null,"The various components required for the Archive Viewer to function\nare listed below:"),(0,a.kt)("h3",{id:"archive-viewer-metadata-database"},"Archive Viewer metadata database"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This database is a set of\ntables in which the Archive Viewer stores the data that are needed\nfor processing and tracking the status of the processes. Before you\nuse Archive Viewer, you must follow the Onboarding process to\ncreate or configure the Archive Viewer metadata database tables\nthat are needed to access the Archive Viewer metadata database.")),(0,a.kt)("h3",{id:"archive-viewer-conversion-server"},"Archive Viewer Conversion Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This server unloads the data\nfrom the proprietary Archive File format to highly compressed\nopen data files. You can deploy the Conversion Server in both\nWindows and Linux platforms. If the Conversion Server and\nQuery Server are installed on different platforms, a shared\nnetwork drive is required to access generated Parquet files\nbetween both servers.")),(0,a.kt)("h3",{id:"archive-viewer-query-server"},"Archive Viewer Query Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This server leverages Apache\nSpark which is an open-source unified analytics engine for large-scale data processing. It provides high performance access with\nno performance tuning necessary as in the standard industry\ncolumnar relational databases. Supported only in Linux.")),(0,a.kt)("h3",{id:"archive-viewer-reporting-server-optional"},"Archive Viewer Reporting Server (optional)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This server\nleverages Apache Superset which is a modern data exploration\nand visualization platform. Supported only in Linux.")))}v.isMDXComponent=!0}}]);