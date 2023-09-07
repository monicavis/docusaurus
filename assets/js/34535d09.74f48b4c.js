"use strict";(self.webpackChunkarchive_view=self.webpackChunkarchive_view||[]).push([[3929],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),g=a,f=c["".concat(s,".").concat(g)]||c[g]||d[g]||i;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},23734:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const i={},o="3.4 Configuring Query Server",l={unversionedId:"Installation Manual/Onboarding_Process/3.4Configuring_Query_Server/3.4Configuring_Query_Server",id:"version-11.7.0.3/Installation Manual/Onboarding_Process/3.4Configuring_Query_Server/3.4Configuring_Query_Server",title:"3.4 Configuring Query Server",description:"You will be navigated to the Query server tab only if all the details",source:"@site/versioned_docs/version-11.7.0.3/Installation Manual/3.Onboarding_Process/3.4Configuring_Query_Server/3.4Configuring_Query_Server.md",sourceDirName:"Installation Manual/3.Onboarding_Process/3.4Configuring_Query_Server",slug:"/Installation Manual/Onboarding_Process/3.4Configuring_Query_Server/",permalink:"/docusaurus/docs/Installation Manual/Onboarding_Process/3.4Configuring_Query_Server/",draft:!1,tags:[],version:"11.7.0.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3.3 Configuring Conversion Server",permalink:"/docusaurus/docs/Installation Manual/Onboarding_Process/3.3Configuring_Conversion_Server/"},next:{title:"3.5 Configuring Reports",permalink:"/docusaurus/docs/Installation Manual/Onboarding_Process/3.5Configuring_Reports/"}},s={},u=[],p={toc:u},c="wrapper";function d(e){let{components:r,...i}=e;return(0,a.kt)(c,(0,n.Z)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"34-configuring-query-server"},"3.4 Configuring Query Server"),(0,a.kt)("p",null,"You will be navigated to the ",(0,a.kt)("strong",{parentName:"p"},"Query server")," tab only if all the details\nprovided to configure Conversion Server are valid."),(0,a.kt)("p",null,"Do the following steps to configure Query Server:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Query server",src:t(693).Z,width:"1366",height:"848"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type the Query Server name in the ",(0,a.kt)("strong",{parentName:"p"},"Query server name")," field.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type the destination directory, where the generated CSV and Parquet files exist, in the ",(0,a.kt)("strong",{parentName:"p"},"Destination location")," path.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The destination directory should be shared with the server where the Query Server has been deployed. If the Query Server is in the same server, then the user initiating the Query Server should have access to the files.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type the Query Server port number in the ",(0,a.kt)("strong",{parentName:"p"},"Query server port")," field.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type the username and password in the ",(0,a.kt)("strong",{parentName:"p"},"Username")," and ",(0,a.kt)("strong",{parentName:"p"},"Password")," fields, respectively.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Add server")," to add the query server details.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Providing Query server details is optional and can be skipped by clicking on the ",(0,a.kt)("strong",{parentName:"p"},"Skip for Now")))))}d.isMDXComponent=!0},693:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/3.4QueryServer-ff612685a8fb18bf22d0da0486963e39.png"}}]);