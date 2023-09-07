"use strict";(self.webpackChunkarchive_view=self.webpackChunkarchive_view||[]).push([[3715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),l=p(r),k=a,u=l["".concat(c,".").concat(k)]||l[k]||m[k]||i;return r?n.createElement(u,s(s({ref:t},h),{},{components:r})):n.createElement(u,s({ref:t},h))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[l]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},88179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={},s="4.1 Accessing the Archive Viewer API",o={unversionedId:"Installation Manual/Archive_Viewer_API/4.1Accessing_AV_API/4.1Accessing_AV_API",id:"version-11.7.0.3/Installation Manual/Archive_Viewer_API/4.1Accessing_AV_API/4.1Accessing_AV_API",title:"4.1 Accessing the Archive Viewer API",description:"Do the following to access the Archive Viewer API:",source:"@site/versioned_docs/version-11.7.0.3/Installation Manual/4.Archive_Viewer_API/4.1Accessing_AV_API/4.1Accessing_AV_API.md",sourceDirName:"Installation Manual/4.Archive_Viewer_API/4.1Accessing_AV_API",slug:"/Installation Manual/Archive_Viewer_API/4.1Accessing_AV_API/",permalink:"/docusaurus/docs/Installation Manual/Archive_Viewer_API/4.1Accessing_AV_API/",draft:!1,tags:[],version:"11.7.0.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"4. Archive Viewer API",permalink:"/docusaurus/docs/Installation Manual/Archive_Viewer_API/"},next:{title:"User and Configuration Manual",permalink:"/docusaurus/docs/User Manual/"}},c={},p=[],h={toc:p},l="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(l,(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"41-accessing-the-archive-viewer-api"},"4.1 Accessing the Archive Viewer API"),(0,a.kt)("p",null,"Do the following to access the Archive Viewer API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Navigate to the ",(0,a.kt)("strong",{parentName:"p"},"Swagger Page"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Login")," API section, Expand ",(0,a.kt)("strong",{parentName:"p"},"POST/login")," and Click ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Try it out")),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type Username and Password and click ",(0,a.kt)("strong",{parentName:"p"},"Execute"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Archive-viewer-api",src:r(51381).Z,width:"1823",height:"681"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"An access token is generated if the entered username and password are correct.")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Api-server-response",src:r(90493).Z,width:"1811",height:"433"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"An error code is displayed if the entered username and password are incorrect.")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Api-server-error-code",src:r(31346).Z,width:"1818",height:"401"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Copy"))," the access token.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Authorize")," on the swagger page top-right corner.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Paste the copied access token in the ",(0,a.kt)("strong",{parentName:"p"},"Value")," field and Click\n",(0,a.kt)("strong",{parentName:"p"},"Authorize."),"\n",(0,a.kt)("img",{alt:"Available-authorizaton",src:r(41688).Z,width:"328",height:"106"})),(0,a.kt)("p",{parentName:"li"},"Now, you can access the Archive Viewer API"))))}m.isMDXComponent=!0},90493:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/4.1API-serever-response-67fe0b85894d3d91bea0fc3da24a57c0.png"},31346:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/4.1API-server-errorCode-5a5aa0bd259c0401f93f001e90f63e26.png"},51381:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/4.1Archive-viewer-api-860db214c2a5f03b6405a29b5d72266d.png"},41688:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);