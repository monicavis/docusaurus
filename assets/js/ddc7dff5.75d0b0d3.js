"use strict";(self.webpackChunkarchive_view=self.webpackChunkarchive_view||[]).push([[8554],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(t),v=l,f=c["".concat(s,".").concat(v)]||c[v]||d[v]||i;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function f(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=v;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[c]="string"==typeof e?e:l,o[1]=a;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},11172:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=t(87462),l=(t(67294),t(3905));const i={},o="1.4.2 Software Requirements for Archive Viewer Reporting Server",a={unversionedId:"Installation Manual/Introduction_OAV/1.4Requirements_AV_Reporting_Server/1.4.2Software_Requirements_AV_Reporting_Server/1.4.2Software_Requirements_AV_Reporting_Server",id:"version-11.7.2.0.1/Installation Manual/Introduction_OAV/1.4Requirements_AV_Reporting_Server/1.4.2Software_Requirements_AV_Reporting_Server/1.4.2Software_Requirements_AV_Reporting_Server",title:"1.4.2 Software Requirements for Archive Viewer Reporting Server",description:"The Archive Viewer Reporting Server is used to query the data from",source:"@site/versioned_docs/version-11.7.2.0.1/Installation Manual/1.Introduction_OAV/1.4Requirements_AV_Reporting_Server/1.4.2Software_Requirements_AV_Reporting_Server/1.4.2Software_Requirements_AV_Reporting_Server.md",sourceDirName:"Installation Manual/1.Introduction_OAV/1.4Requirements_AV_Reporting_Server/1.4.2Software_Requirements_AV_Reporting_Server",slug:"/Installation Manual/Introduction_OAV/1.4Requirements_AV_Reporting_Server/1.4.2Software_Requirements_AV_Reporting_Server/",permalink:"/docusaurus/docs/11.7.2.0.1/Installation Manual/Introduction_OAV/1.4Requirements_AV_Reporting_Server/1.4.2Software_Requirements_AV_Reporting_Server/",draft:!1,tags:[],version:"11.7.2.0.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1.4.1 Hardware Requirements for Archive Viewer Reporting Server",permalink:"/docusaurus/docs/11.7.2.0.1/Installation Manual/Introduction_OAV/1.4Requirements_AV_Reporting_Server/1.4.1Hardware_Requirements_AV_Reporting_Server/"},next:{title:"2. Installing the Archive Viewer",permalink:"/docusaurus/docs/11.7.2.0.1/Installation Manual/Installing_AV/"}},s={},u=[],p={toc:u},c="wrapper";function d(e){let{components:r,...t}=e;return(0,l.kt)(c,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"142-software-requirements-for-archive-viewer-reporting-server"},"1.4.2 Software Requirements for Archive Viewer Reporting Server"),(0,l.kt)("p",null,"The Archive Viewer Reporting Server is used to query the data from\nParquet files. This is optional and you can install only on the Linux\nplatform.\nYou must install the Reporting Server in a different server or\ndifferent user than that of the Conversion Server. Otherwise, there\nwill be a conflict on the python library of the Conversion and\nReporting servers.\nThe system library of the Reporting Server when it is installed in a\ndifferent server, as follows:"),(0,l.kt)("h3",{id:""}),(0,l.kt)("table",{class:"tableAlign"},(0,l.kt)("tbody",null,(0,l.kt)("tr",{style:{backgroundColor:"#22d3ee"}},(0,l.kt)("th",null,"Library"),(0,l.kt)("th",null,"Repository Name")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"gcc"),(0,l.kt)("td",null,"rhel-7-server-rpms")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"gcc-c++"),(0,l.kt)("td",null,"rhel-7-server-rpms")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"libffi-devel"),(0,l.kt)("td",null,"rhel-7-server-rpms")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"python3-devel"),(0,l.kt)("td",null,"rhel-7-server-optional-rpms")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"python3-pip"),(0,l.kt)("td",null,"rhel-7-server-rpms")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"python3-wheel"),(0,l.kt)("td",null,"rhel-7-server-rpms")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"openssl-devel"),(0,l.kt)("td",null,"rhel-7-server-rpms")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"openldap-devel"),(0,l.kt)("td",null,"rhel-7-server-rpms")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"xz-devel"),(0,l.kt)("td",null,"Rhel-7-server-rpms")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"nginx"),(0,l.kt)("td",null,"epe")))),(0,l.kt)("p",null,"You should install the below listed pip library to query the Parquet\nfile. These libraries are installed before installing the Reporting\nServer as it connects the Reporting Sever to the thrift server."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PyHive==0.6.5"),(0,l.kt)("li",{parentName:"ul"},"sasl==0.3.1"),(0,l.kt)("li",{parentName:"ul"},"thrift-sasl==0.4.3"),(0,l.kt)("li",{parentName:"ul"},"requests==2.28.1"),(0,l.kt)("li",{parentName:"ul"},"sqlalchemy_trino==0.5.0"),(0,l.kt)("li",{parentName:"ul"},"markupsafe==2.0.1"),(0,l.kt)("li",{parentName:"ul"},"Werkzeug==2.0.3",(0,l.kt)("br",{parentName:"li"}),"If the Conversion and Query servers are installed on different servers,\nyou should have a shared network disk between the Conversion and\nQuery servers and then store the Parquet files in the shared network\nlocation.",(0,l.kt)("br",{parentName:"li"}),"If the Archive Viewer Conversion Server is deployed in Windows,\nthen you should add a shared network drive between the Conversion\nand Query servers.")))}d.isMDXComponent=!0}}]);