"use strict";(self.webpackChunkarchive_view=self.webpackChunkarchive_view||[]).push([[6708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=p(n),m=r,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[f]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},l="2.1.2 Offline installation",o={unversionedId:"Installation Manual/Installing_AV/2.1Installing_AV_Conversion_Server/2.1.2Offline_Installation/2.1.2Offline_Installation",id:"version-11.7.0.3/Installation Manual/Installing_AV/2.1Installing_AV_Conversion_Server/2.1.2Offline_Installation/2.1.2Offline_Installation",title:"2.1.2 Offline installation",description:"To install the application on a machine without internet access please follow the below prerequisite steps:",source:"@site/versioned_docs/version-11.7.0.3/Installation Manual/2.Installing_AV/2.1Installing_AV_Conversion_Server/2.1.2Offline_Installation/2.1.2Offline_Installation.md",sourceDirName:"Installation Manual/2.Installing_AV/2.1Installing_AV_Conversion_Server/2.1.2Offline_Installation",slug:"/Installation Manual/Installing_AV/2.1Installing_AV_Conversion_Server/2.1.2Offline_Installation/",permalink:"/docusaurus/docs/Installation Manual/Installing_AV/2.1Installing_AV_Conversion_Server/2.1.2Offline_Installation/",draft:!1,tags:[],version:"11.7.0.3",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2.1.1 Online installation",permalink:"/docusaurus/docs/Installation Manual/Installing_AV/2.1Installing_AV_Conversion_Server/2.1.1Online_Installation/"},next:{title:"2.2 Post-installation Steps",permalink:"/docusaurus/docs/Installation Manual/Installing_AV/2.2Post-installation_Steps/"}},s={},p=[],c={toc:p},f="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"212-offline-installation"},"2.1.2 Offline installation"),(0,r.kt)("p",null,"To install the application on a machine without internet access please follow the below prerequisite steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the Python pip libraries-related files in a machine that has internet access using the below command:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"pip3.9 download --no-cache-dir -r folder_path/requirements.txt -d path_to_store_library_files")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you want to install a specific Python pip library run the below command: ",(0,r.kt)("strong",{parentName:"p"},"pip3.9 download --no-cache-dir python_library==version -d path_to_store_library_files"))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"folder_path")," \u2013 location where requirements.txt is present"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"requirements.txt")," - This file contains the list of pip libraries needed for the application (provide complete file path). The file(requirements.txt) can be found within the installation directory."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"path_to_store_library_files")," - The path where all of the libraries will be downloaded.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy the downloaded folder to the server without internet access along with requirements.txt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can install the libraries in the server with the following command:\n",(0,r.kt)("strong",{parentName:"p"},"pip3.9 install --no-index --no-cache-dir --find-links=/copied/file/download -r requirements.txt")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"/copied/file/download")," - The location of the folder from where you copied the libraries"),(0,r.kt)("p",{parentName:"li"},"Follow the ",(0,r.kt)("strong",{parentName:"p"},"Online installation")," after installing system libraries and Python pip libraries.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"URL to access Archive Viewer Application"),(0,r.kt)("p",{parentName:"li"},"Swagger: ",(0,r.kt)("strong",{parentName:"p"},"https://hostname:3051/docs")),(0,r.kt)("p",{parentName:"li"},"User Interface: ",(0,r.kt)("strong",{parentName:"p"},"https://hostname:3050")))))}u.isMDXComponent=!0}}]);