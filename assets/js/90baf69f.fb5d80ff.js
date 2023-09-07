"use strict";(self.webpackChunkarchive_view=self.webpackChunkarchive_view||[]).push([[2669],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),v=a,h=c["".concat(s,".").concat(v)]||c[v]||m[v]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=v;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},80695:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={},i="2.1.1 Installing the Conversion Server on Linux",l={unversionedId:"Installation Manual/Installing_AV/2.1Installing_AV_Conversion_Server/2.1.1Installing_Conversion_SL/2.1.1Installing_Conversion_SL",id:"version-11.7.0.1/Installation Manual/Installing_AV/2.1Installing_AV_Conversion_Server/2.1.1Installing_Conversion_SL/2.1.1Installing_Conversion_SL",title:"2.1.1 Installing the Conversion Server on Linux",description:"Do the following to install the Conversion Server on Linux:",source:"@site/versioned_docs/version-11.7.0.1/Installation Manual/2.Installing_AV/2.1Installing_AV_Conversion_Server/2.1.1Installing_Conversion_SL/2.1.1Installing_Conversion_SL.md",sourceDirName:"Installation Manual/2.Installing_AV/2.1Installing_AV_Conversion_Server/2.1.1Installing_Conversion_SL",slug:"/Installation Manual/Installing_AV/2.1Installing_AV_Conversion_Server/2.1.1Installing_Conversion_SL/",permalink:"/docusaurus/docs/11.7.0.1/Installation Manual/Installing_AV/2.1Installing_AV_Conversion_Server/2.1.1Installing_Conversion_SL/",draft:!1,tags:[],version:"11.7.0.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2.1 Installing the Archive Viewer Conversion Server",permalink:"/docusaurus/docs/11.7.0.1/Installation Manual/Installing_AV/2.1Installing_AV_Conversion_Server/"},next:{title:"2.1.2 Installing the Conversion Server on Windows platform",permalink:"/docusaurus/docs/11.7.0.1/Installation Manual/Installing_AV/2.1Installing_AV_Conversion_Server/2.1.2Installing_Conversion_SWP/"}},s={},p=[],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"211-installing-the-conversion-server-on-linux"},"2.1.1 Installing the Conversion Server on Linux"),(0,a.kt)("p",null,"Do the following to install the Conversion Server on Linux:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1"),". Copy the software on Linux server."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2"),". Navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"\u2026/installation/linux folder")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3"),". Navigate to the Linux folder."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4"),". ",(0,a.kt)("strong",{parentName:"p"},"Run the command")," ",(0,a.kt)("inlineCode",{parentName:"p"},"python3 appInstall.py.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You should use the appropriate python version if there\nare multiple python3 variants, that is, ",(0,a.kt)("strong",{parentName:"p"},"python3.9"),"\n",(0,a.kt)("strong",{parentName:"p"},"queryserverInstall.py."))),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"appInstall.py")," script validates for the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Validates if the user has sudo access or not.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If a user has the sudo access, the ",(0,a.kt)("strong",{parentName:"p"},"appInstall.py")," script\ninstalls the missing libraries and configures the nginx\nand gunicorn services.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Validates the platform used.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Checks the system-dependent libraries and lists the missing\nlibraries.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Checks the pip libraries."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5"),". When prompted, type the directory where the application should\nbe installed and press Enter."),(0,a.kt)("p",null,"If you press Enter without providing the directory, system uses\nthe default location"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/home/user/IBM/InfoSphere/Optim/archiveviewer")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"6.")," Type ",(0,a.kt)("strong",{parentName:"p"},"Yes")," if you have procured the SSL certification for the\nserver, otherwise, type ",(0,a.kt)("strong",{parentName:"p"},"No")," and press Enter."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you choose ",(0,a.kt)("strong",{parentName:"p"},"No"),", then do the following to create the SSL\ncertification for your server:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Enter the 2-letter country code, for example, IN for India,and press Enter."),(0,a.kt)("li",{parentName:"ul"},"Enter the state or province name and press Enter."),(0,a.kt)("li",{parentName:"ul"},"Enter the locality name and press Enter."),(0,a.kt)("li",{parentName:"ul"},"Enter the organization name and press Enter.")),(0,a.kt)("p",{parentName:"li"},"This creates the self-signed certificate and configures the\ngunicorn and nginx services automatically.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you choose ",(0,a.kt)("strong",{parentName:"p"},"Yes"),", then do the following:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type the SSL certification file directory along with the file name and press Enter."),(0,a.kt)("li",{parentName:"ul"},"Type the SSL certification private key file directory along the file name and press Enter.")))),(0,a.kt)("p",null,"This configures the gunicorn and nginx services and This\ncompletes the Conversion Server installation on a Linux platform."))}m.isMDXComponent=!0}}]);