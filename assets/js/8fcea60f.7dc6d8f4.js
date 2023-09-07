"use strict";(self.webpackChunkarchive_view=self.webpackChunkarchive_view||[]).push([[4768],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=n,d=u["".concat(l,".").concat(g)]||u[g]||h[g]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},43355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},i="2.6.2 Converting CSV Files to Parquet",s={unversionedId:"User Manual/UsingArchive_VA/2.6ConvertArchFiles_A_OR/2.6.2Convert_CSV_Parquet/2.6.2Convert_CSV_Parquet",id:"version-11.7.2.0.1/User Manual/UsingArchive_VA/2.6ConvertArchFiles_A_OR/2.6.2Convert_CSV_Parquet/2.6.2Convert_CSV_Parquet",title:"2.6.2 Converting CSV Files to Parquet",description:"You can convert CSV files to Parquet files in two ways.",source:"@site/versioned_docs/version-11.7.2.0.1/User Manual/2.UsingArchive_VA/2.6ConvertArchFiles_A_OR/2.6.2Convert_CSV_Parquet/2.6.2Convert_CSV_Parquet.md",sourceDirName:"User Manual/2.UsingArchive_VA/2.6ConvertArchFiles_A_OR/2.6.2Convert_CSV_Parquet",slug:"/User Manual/UsingArchive_VA/2.6ConvertArchFiles_A_OR/2.6.2Convert_CSV_Parquet/",permalink:"/docusaurus/docs/11.7.2.0.1/User Manual/UsingArchive_VA/2.6ConvertArchFiles_A_OR/2.6.2Convert_CSV_Parquet/",draft:!1,tags:[],version:"11.7.2.0.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2.6.1 Converting Archive Files to CSV",permalink:"/docusaurus/docs/11.7.2.0.1/User Manual/UsingArchive_VA/2.6ConvertArchFiles_A_OR/2.6.1Convert_ArchFiles_CSV/"},next:{title:"2.6.3 Creating an external table",permalink:"/docusaurus/docs/11.7.2.0.1/User Manual/UsingArchive_VA/2.6ConvertArchFiles_A_OR/2.6.3Creating_externalTable/"}},l={},c=[{value:"Converting using the Parquet tab from the Convert Page",id:"converting-using-the-parquet-tab-from-the-convert-page",level:3},{value:"Converting using the Convert to Parquet button from the CSV Request details Page",id:"converting-using-the-convert-to-parquet-button-from-the-csv-request-details-page",level:3}],p={toc:c},u="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"262-converting-csv-files-to-parquet"},"2.6.2 Converting CSV Files to Parquet"),(0,n.kt)("p",null,"You can convert CSV files to Parquet files in two ways."),(0,n.kt)("h3",{id:"converting-using-the-parquet-tab-from-the-convert-page"},"Converting using the Parquet tab from the Convert Page"),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("strong",{parentName:"p"},"Parquet")," tab to convert CSV files only if there are\nany converted CSV files available for Parquet conversion, otherwise,\na warning message appears and all other fields are disabled, as shown\nbelow."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2.6.2Parquet_no_Csv-1",src:r(37581).Z,width:"1366",height:"798"})),(0,n.kt)("p",null,"Do the following to convert CSV files to Parquet files:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Convert")," on the dashboard. The Convert page appears.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Parquet")," tab."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2.6.2Parquet_Tab_Csv-2",src:r(3375).Z,width:"1366",height:"743"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the application name from the ",(0,n.kt)("strong",{parentName:"p"},"Request ID")," drop-down list.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"By default, the ",(0,n.kt)("strong",{parentName:"p"},"External table")," check box is selected. Make sure\nthat the Query Server is running before converting archive files to\nParquet because you will not be able to convert file and create\nexternal tables only when the Query Server is down."),(0,n.kt)("p",{parentName:"li"},"Clear the ",(0,n.kt)("strong",{parentName:"p"},"External table")," check box if you do not want to create\nan external table up on Parquet conversion. The Query Server\nstatus is not required in this case.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"By default, the ",(0,n.kt)("strong",{parentName:"p"},"Differ delete CSV")," check box is selected. This will not delete any CSV files from the destination location, which is related to the selected request."))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clear the ",(0,n.kt)("strong",{parentName:"li"},"Delete CSV")," check box if you do not want to remove the created CSV files from the destination folder, which is related to the selected request.")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"By default, the Include ",(0,n.kt)("strong",{parentName:"p"},"BLOB/CLOB")," check box is selected. This loads the contents of the ",(0,n.kt)("strong",{parentName:"p"},"BLOB/CLOB")," files to the Parquet files.Clear the Include ",(0,n.kt)("strong",{parentName:"p"},"BLOB/CLOB")," check box if you do not want to load the contents of the ",(0,n.kt)("strong",{parentName:"p"},"CLOB or BLOB")," files to the Parquet files.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Convert")," to start the conversion."))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are converting the file or folder for the first time, the\nConversion status dialog box appears with the success\nmessage.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are converting the same set of file or folder for the\nsecond time, the Overwrite dialog box appears."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2.6.2Overwrite_Dailog-3",src:r(59011).Z,width:"665",height:"205"})),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Overwrite")," to start conversion. The Conversion status\ndialog box appears with the success message."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2.6.2Conversion-Status",src:r(37605).Z,width:"491",height:"406"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"OK"),". The Monitor page with the ",(0,n.kt)("strong",{parentName:"li"},"Parquet")," tab selected\nappears.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2.6.2Parquet_Monitor-4",src:r(63033).Z,width:"1366",height:"617"})),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Request ID")," for which you want to view the\nconverted Parquet file. The Parquet request details page appears.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2.6.2Parquet_Req_Details-5",src:r(81024).Z,width:"1366",height:"920"})),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},"Click the View ",(0,n.kt)("img",{alt:"2.6.1view-icon",src:r(85429).Z,width:"22",height:"17"})," icon under the ",(0,n.kt)("strong",{parentName:"li"},"Parquet files")," column of which CSV file you want to view the converted Parquet file. The View parquet file of a particular CSV file dialog box appears.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2.6.2View_Parquet_File-6",src:r(90917).Z,width:"1357",height:"529"})),(0,n.kt)("ol",{start:11},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"OK"),".")),(0,n.kt)("h3",{id:"converting-using-the-convert-to-parquet-button-from-the-csv-request-details-page"},"Converting using the Convert to Parquet button from the CSV Request details Page"),(0,n.kt)("p",null,"Do the following to convert CSV files to Parquet files using the\n",(0,n.kt)("strong",{parentName:"p"},"Convert to Parquet")," button from the CSV Request details page:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Monitor")," on the dashboard. The Monitor page appears.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2.6.1Monitor_csv_tab-5",src:r(63094).Z,width:"1366",height:"649"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Request ID")," for which you want to convert to Parquet format. The CSV Request details page appears.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2.6.1Csv_Request_Details-6",src:r(61573).Z,width:"1366",height:"684"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Convert to parquet"),". The Convert to parquet dialog box appears.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2.6.2Run_Process-7",src:r(86672).Z,width:"1152",height:"378"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Run-process"),". The conversion starts on the Convert page.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are converting the file or folder for the first time, the Conversion status dialog box appears with the success message.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are converting the same set of file or folder for the second time, the Overwrite dialog box appears."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2.6.2Overwrite_Dailog-3",src:r(59011).Z,width:"665",height:"205"})),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Overwrite")," to start conversion. The Conversion status\ndialog box appears with the success message."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2.6.1Converstion-Status-4",src:r(37605).Z,width:"491",height:"406"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"OK"),". The Monitor page with the ",(0,n.kt)("strong",{parentName:"li"},"Parquet")," tab selected\nappears.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2.6.2Parquet_Monitor-4",src:r(63033).Z,width:"1366",height:"617"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("strong",{parentName:"li"},"Request ID")," for which you want to view the converted Parquet file. The Parquet request details page appears.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2.6.2Parquet_Req_Details-5",src:r(81024).Z,width:"1366",height:"920"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Click the View ",(0,n.kt)("img",{alt:"2.6.1view-icon",src:r(85429).Z,width:"22",height:"17"})," icon under the ",(0,n.kt)("strong",{parentName:"li"},"Parquet files")," column of which CSV file you want to view the converted Parquet file. The View parquet file of a particular CSV file dialog box appears.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2.6.2View_Parquet_File-6",src:r(90917).Z,width:"1357",height:"529"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"OK"),".")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For more details on how to view all the process details,\n\ud83d\udc49 ",(0,n.kt)("a",{parentName:"p",href:"/docusaurus/docs/11.7.2.0.1/User%20Manual/UsingArchive_VA/2.7MonitoringProcess_AOR/"},"See Section 2.7 Monitoring the Process"),".")))}h.isMDXComponent=!0},37605:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2.6.1Conversion-Status-4-a0c2a6e6fb8c3ec01d0061afb3fdd0a4.png"},61573:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2.6.1Csv_Request_Details-6-74b42089f79346264e019c2a3cd6bea0.png"},63094:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2.6.1Monitor_csv_tab-5-7d315bb63ead339b3d183a8ffe70bfc5.png"},85429:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAARCAYAAADZsVyDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAFTSURBVDhP1ZS9kYMwEIX3rgCoACI7goiQjA7IIMOJhwgyItyBKwAKwBW4BBrANAAN4Apk3g6a488+B+fgvhmNV8/LQ1qt+BID9AG+x98/52PGb5eiqipqmoZjwzDItm2On/HS+H6/U1EUlOc5m2EAvOB2u1EYhnQ8HklVVdZnwHiLuq7Ffr8XURSJtm1H9Qdo+G+323Hukk1jaVqWJc/7vhen04k1DMTQAHK2zDeNXdcVWZaNMyHSNGUNq8RADE2CXGhTVsbX63WVhBVNy4EY2hTHcfhZyardcBA4tCWKoozRc6aHuDJGGyEBnSDxPI8OhwN1XccjjmPWJOfzmTRNm7fguPIZ2KplWbPDQ02xfQzE08NDGeRc8rTdkIgHhtXN6iuBFgTBpin49eZdLhfeqq7rZJoma7gcgzElSUK+77O25O0rjdrCEOAFqOkr/ttnk+gBNakRcPJRQs4AAAAASUVORK5CYII="},59011:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2.6.2Overwrite_Dialog-3-28487cd639c7d8e2eda907172273054a.png"},63033:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2.6.2Parquet_Monitor-4-f3dc0dd0a5565fa5a76430957fc9f90f.png"},81024:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2.6.2Parquet_Req_Details-5-497951c07659f6e85f7f3755d7737232.png"},3375:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2.6.2Parquet_Tab_Csv-2-37ffcaaf262e4ffc54bd0fbd317063d0.png"},37581:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2.6.2Parquet_no_Csv-1-7e35d8b0e5f7584d470de5e6747376a8.png"},86672:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2.6.2Run_Process-7-7ec53578b25920f6993ffd4295559534.png"},90917:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2.6.2View_Parquet_File-6-aafe9a52d463683a05fb610a4591cfb6.png"}}]);