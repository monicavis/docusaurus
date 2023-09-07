"use strict";(self.webpackChunkarchive_view=self.webpackChunkarchive_view||[]).push([[247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},99583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o="2.2 Installing the Archive Viewer Query Server",s={unversionedId:"Installation Manual/Installing_AV/2.2_Installing_AV_Query_Server/2.2_Installing_AV_Query_Server",id:"version-11.7.0.1/Installation Manual/Installing_AV/2.2_Installing_AV_Query_Server/2.2_Installing_AV_Query_Server",title:"2.2 Installing the Archive Viewer Query Server",description:"Prerequisite :Before you install the Query Server, you must ensure",source:"@site/versioned_docs/version-11.7.0.1/Installation Manual/2.Installing_AV/2.2_Installing_AV_Query_Server/2.2_Installing_AV_Query_Server.md",sourceDirName:"Installation Manual/2.Installing_AV/2.2_Installing_AV_Query_Server",slug:"/Installation Manual/Installing_AV/2.2_Installing_AV_Query_Server/",permalink:"/docusaurus/docs/11.7.0.1/Installation Manual/Installing_AV/2.2_Installing_AV_Query_Server/",draft:!1,tags:[],version:"11.7.0.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2.1.2 Installing the Conversion Server on Windows platform",permalink:"/docusaurus/docs/11.7.0.1/Installation Manual/Installing_AV/2.1Installing_AV_Conversion_Server/2.1.2Installing_Conversion_SWP/"},next:{title:"2.3 Installing the Archive Viewer Reporting Server",permalink:"/docusaurus/docs/11.7.0.1/Installation Manual/Installing_AV/2.3Installing_AV_Reporting_Server/"}},l={},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"22-installing-the-archive-viewer-query-server"},"2.2 Installing the Archive Viewer Query Server"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prerequisite :"),"Before you install the Query Server, you must ensure\nthat the hardware and software requirements are met."),(0,a.kt)("p",null,"\ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"/docusaurus/docs/11.7.0.1/Installation%20Manual/Introduction_OAV/1.3Requirements_AV_Query_Server/"},"See Section 1.3 Hardware and Software Requirements for Archive Viewer Query Server for more details.")),(0,a.kt)("p",null,"Query Server is used to create a table for the Parquet files that are\ncreated by the Conversion Server. This helps users to connect via\nODBC/JDBC and query the data by using SQL."),(0,a.kt)("p",null,"Do the following to install the Archive Viewer Query Server:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the software in a ",(0,a.kt)("strong",{parentName:"p"},"Linux")," platform.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"\u2026/installation/linux folder"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Run the command")," python3 ",(0,a.kt)("inlineCode",{parentName:"p"},"queryserverInstall.py")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You should use the appropriate python version if there\nare multiple python3 variants, that is, ",(0,a.kt)("strong",{parentName:"p"},"python3.9\nqueryserverInstall.py."))),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"queryserverInstall.py")," script validates for the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Validates if the user has sudo access or not."),(0,a.kt)("li",{parentName:"ul"},"Validates the platform used.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If a user has the sudo access, the ",(0,a.kt)("strong",{parentName:"p"},"queryserverInstall.py"),"\nscript installs the missing libraries.")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When prompted, type ",(0,a.kt)("strong",{parentName:"p"},"Yes")," to install Query Server and press Enter.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Type the directory where the query server should be installed and press Enter."))),(0,a.kt)("p",null,"This downloads the query server installer package from Website\nextracts the files and installs the Query Server."),(0,a.kt)("p",null,"You should have a shared path between Archive Viewer\nConversion Server and Archive Viewer Query Server when these\nservers are installed on different platforms."),(0,a.kt)("p",null,"You can secure the query server by adding LDAP authentication,\nthat is, by copying the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"hive-site.xml"))," file to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"$SPARK_HOME/conf")," folder"),(0,a.kt)("p",null,"Here is an ",(0,a.kt)("strong",{parentName:"p"},"Example")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"hive-site.xml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    <configuration>\n        <property>\n                <name>hive.server2.authentication</name>\n                <value>LDAP</value>\n            <description>\n            Expects one of [nosasl, none, ldap, kerberos, pam,\n            custom].\n            Client authentication types.\n                NONE: no authentication check\n                LDAP: LDAP/AD based authentication\n                KERBEROS: Kerberos/GSSAPI authentication\n                CUSTOM: Custom authentication provider\n                (Use with property\n                hive.server2.custom.authentication.class)\n                PAM: Pluggable authentication module\n                NOSASL: Raw transport\n            </description>\n        </property>\n        <property>\n                <name>hive.server2.authentication.ldap.url</name>\n                <value>ldap://hostname:port</value>\n            <description>\n            LDAP connection URL(s),\n            this value could contain URLs to mutiple LDAP servers\n            2.2 Installing the Archive Viewer Query Server\n            Installation and Configuration Guide 49\n            instances for HA, each LDAP URL is separated by a\n            SPACE character. URLs are used in the order specified\n            until a connection is successful.\n            </description>\n        </property>\n        <property>\n                <name>hive.server2.authentication.ldap.baseDN</name>\n                <value>ou=users,ou=system</value>\n            <description>LDAP base DN</description>\n            </property>\n            <property>\n            <name>hive.server2.authentication.ldap.groupDNPattern</\n            name>\n            <value>uid=%s,ou=users,ou=system</value>\n            <description> COLON-separated list of patterns to use to\n            find DNs for group entities in this directory. Use %s where\n            the actual group name is to be substituted for. For\n            example:\n            CN=%s,CN=Groups,DC=subdomain,DC=domain,DC=com.\n            </description>\n        </property>\n    </configuration>\n")),(0,a.kt)("p",null,"For more information, see the Data Access section at the\nfollowing site:"),(0,a.kt)("p",null,"\ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cloudera.com/HDPDocuments/HDP2/HDP-2.6.1/bk_data-access/content/ch02s05s02.html"},"https://docs.cloudera.com/HDPDocuments/HDP2/HDP-2.6.1/bk_data-access/content/ch02s05s02.html")),(0,a.kt)("p",null,"After copying the ",(0,a.kt)("inlineCode",{parentName:"p"},"hive-site.xml")," file, navigate to the the directory\nwhere the application is installed and edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"properties.json")," file\nby changing ",(0,a.kt)("inlineCode",{parentName:"p"},"auth_machanism")," from ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"PLAIN"))," to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"LDAP"))," under query server"))}m.isMDXComponent=!0}}]);