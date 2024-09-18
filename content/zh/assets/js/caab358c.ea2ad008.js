"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[8513],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>u});var r=t(96540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function h(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},h=Object.keys(e);for(r=0;r<h.length;r++)t=h[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(e);for(r=0;r<h.length;r++)t=h[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},m=function(e){var a=l(e.components);return r.createElement(c.Provider,{value:a},e.children)},n="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,h=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),n=l(t),d=o,u=n["".concat(c,".").concat(d)]||n[d]||s[d]||h;return t?r.createElement(u,p(p({ref:a},m),{},{components:t})):r.createElement(u,p({ref:a},m))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var h=t.length,p=new Array(h);p[0]=d;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[n]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<h;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85303:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>h,metadata:()=>i,toc:()=>l});var r=t(58168),o=(t(96540),t(15680));const h={title:"Release Notes - Apache RocketMQ Dashboard - Version 2.0.0",categories:["Release_Notes"],tags:["RocketMQ_Dashboard"]},p=void 0,i={permalink:"/zh/release-notes/2024/09/18/release-notes-rocketmq-dashboard-2.0.0",source:"@site/release-notes/2024-09-18-release-notes-rocketmq-dashboard-2.0.0.md",title:"Release Notes - Apache RocketMQ Dashboard - Version 2.0.0",description:"* Source: rocketmq-dashboard-2.0.0-source-release.zip [PGP] [SHA512]",date:"2024-09-18T00:00:00.000Z",formattedDate:"2024\u5e749\u670818\u65e5",tags:[{label:"RocketMQ_Dashboard",permalink:"/zh/release-notes/tags/rocket-mq-dashboard"}],readingTime:3.745,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ Dashboard - Version 2.0.0",categories:["Release_Notes"],tags:["RocketMQ_Dashboard"]},nextItem:{title:"Release Notes - Apache RocketMQ Spring - Version 2.3.1",permalink:"/zh/release-notes/2024/07/19/release-notes-rocketmq-spring-2.3.1"}},c={authorsImageUrls:[]},l=[],m={toc:l},n="wrapper";function s(e){let{components:a,...t}=e;return(0,o.yg)(n,(0,r.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{title:"Download",type:"tip"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"Source: ",(0,o.yg)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/rocketmq/rocketmq-dashboard/2.0.0/rocketmq-dashboard-2.0.0-source-release.zip"},"rocketmq-dashboard-2.0.0-source-release.zip")," [",(0,o.yg)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/rocketmq/rocketmq-dashboard/2.0.0/rocketmq-dashboard-2.0.0-source-release.zip.asc"},"PGP"),"] [",(0,o.yg)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/rocketmq/rocketmq-dashboard/2.0.0/rocketmq-dashboard-2.0.0-source-release.zip.sha512"},"SHA512"),"]\n:::","Apache RocketMQ Dashboard comes from ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-externals"},"apache/rocketmq-externals"),", this is the first release of RocketMQ Dashboard.")),(0,o.yg)("p",{parentName:"admonition"},"Below is a summary of the issues addressed in the version 2.0.0 release of RocketMQ Dashboard. For full documentation of the release, a guide to get started, please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-dashboard"},"Quick Start"),"."),(0,o.yg)("h2",{parentName:"admonition",id:"whats-changed"},"What's Changed"),(0,o.yg)("h3",{parentName:"admonition",id:"rocketmq-5x-support"},"RocketMQ 5.x support"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"[ISSUE #195]"," Support the new metrics of getTransferredTps for rocketmq5.x by @javens0601 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/197"},"https://github.com/apache/rocketmq-dashboard/pull/197")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #179]"," Add topic message type by @guangdashao in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/179"},"https://github.com/apache/rocketmq-dashboard/pull/179")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #198]"," Support dashboard v4-v5 switch And query for v5 topic by @1294566108 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/198"},"https://github.com/apache/rocketmq-dashboard/pull/198")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #204]"," Support FIFO-Type SubGroup Add\u3001Update and Query For V5 by @1294566108 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/204"},"https://github.com/apache/rocketmq-dashboard/pull/204")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #207]"," Proxy Support And ConsumerGroup Enhancement by @1294566108 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/207"},"https://github.com/apache/rocketmq-dashboard/pull/207")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #208]"," Supplement UserGuide for RocketMQ 5.0 by @1294566108 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/208"},"https://github.com/apache/rocketmq-dashboard/pull/208")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #222]"," Fixed the issue that normal messages in version v4 are not showed by @1294566108 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/222"},"https://github.com/apache/rocketmq-dashboard/pull/222")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #223]"," Support Unspecified Topic Add & Update & Query by @1294566108 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/223"},"https://github.com/apache/rocketmq-dashboard/pull/223")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #229]"," Support retryMaxTimes field set for consumer group by @1294566108 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/229"},"https://github.com/apache/rocketmq-dashboard/pull/229")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #231]"," 5.x query message detail throw: Failed to query message by Id: xxx by @guyu0000 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/231"},"https://github.com/apache/rocketmq-dashboard/pull/231"))),(0,o.yg)("h3",{parentName:"admonition",id:"bug-and-improvement"},"Bug and improvement"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"[ISSUE #22]","Optimizing the ops page. by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/23"},"https://github.com/apache/rocketmq-dashboard/pull/23")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #10]"," add react module for dashboard by @RaymondCode in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/12"},"https://github.com/apache/rocketmq-dashboard/pull/12")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #25]","Add filter in consumer list. by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/26"},"https://github.com/apache/rocketmq-dashboard/pull/26")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #33]"," Update README (use new docker image rocketmq-dashboard 1.0.0) by @StyleTang in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/34"},"https://github.com/apache/rocketmq-dashboard/pull/34")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #30]","Added DLQ message management by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/31"},"https://github.com/apache/rocketmq-dashboard/pull/31")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #28]"," add Html router for front-end by @StyleTang in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/29"},"https://github.com/apache/rocketmq-dashboard/pull/29")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #30]","Supports batch resending and batch exporting dlq messages. by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/37"},"https://github.com/apache/rocketmq-dashboard/pull/37")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #38]","update rocketmq version. by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/39"},"https://github.com/apache/rocketmq-dashboard/pull/39")),(0,o.yg)("li",{parentName:"ul"},"Fix typo by @4ops in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/40"},"https://github.com/apache/rocketmq-dashboard/pull/40")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #42]","Fix deleteSubscriptionGroup not remove consumer offset. by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/45"},"https://github.com/apache/rocketmq-dashboard/pull/45")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #43]","Give a tip when no message found with topic + time query. by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/44"},"https://github.com/apache/rocketmq-dashboard/pull/44")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #48]"," Fix query message bug by @zhiliatom in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/49"},"https://github.com/apache/rocketmq-dashboard/pull/49")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #48]"," Fix Normal User login after to tips:no permission by @StyleTang in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/51"},"https://github.com/apache/rocketmq-dashboard/pull/51")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #50]","Modify the suffix of the interface name. by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/52"},"https://github.com/apache/rocketmq-dashboard/pull/52")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #58]"," enable the service to support multiple namesrvs by @cserwen in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/59"},"https://github.com/apache/rocketmq-dashboard/pull/59")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #60]","Update SpringBoot version. by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/61"},"https://github.com/apache/rocketmq-dashboard/pull/61")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #54]","Add filtering function when querying message consumption. by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/56"},"https://github.com/apache/rocketmq-dashboard/pull/56")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #55]","Delete the corresponding DLQ and Retry Topic simultaneously when deleting the consumerGroup. by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/57"},"https://github.com/apache/rocketmq-dashboard/pull/57")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #62]","Uses the YML format instead of the Properties format. by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/63"},"https://github.com/apache/rocketmq-dashboard/pull/63")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #65]"," Configure the dlq message interface path in the authInterceptor by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/65"},"https://github.com/apache/rocketmq-dashboard/pull/65")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #72]","The batchResend and batchExport buttons are disabled when there is no dlq message by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/73"},"https://github.com/apache/rocketmq-dashboard/pull/73")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #68]","Use multithreading for topic data collection in collectTask by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/69"},"https://github.com/apache/rocketmq-dashboard/pull/69")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #70]"," The rocketmq-dashboard supports ACL configuration by @xxd763795151 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/71"},"https://github.com/apache/rocketmq-dashboard/pull/71")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #74]","upgrade rocketmq version to 4.9.3 by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/75"},"https://github.com/apache/rocketmq-dashboard/pull/75")),(0,o.yg)("li",{parentName:"ul"},"Configure the acl interface path in the authInterceptor by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/77"},"https://github.com/apache/rocketmq-dashboard/pull/77")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #58]","Supports adding namesrvAddr cluster management by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/66"},"https://github.com/apache/rocketmq-dashboard/pull/66")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #82]","Filter the system topic (clusterName+REPLY_TOPIC) when dashboard was making topic statistics by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/83"},"https://github.com/apache/rocketmq-dashboard/pull/83")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #119]"," Fix flaky test in TopicControllerTest.java by @yannizhou05 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/120"},"https://github.com/apache/rocketmq-dashboard/pull/120")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #111]"," Update log name by @Oliverwqcwrw in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/112"},"https://github.com/apache/rocketmq-dashboard/pull/112")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #123]","Optimize groupList.query by @zhangjidi2016 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/124"},"https://github.com/apache/rocketmq-dashboard/pull/124")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #149]"," updated lombok version in pom.xml by @Abhijeetmishr in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/151"},"https://github.com/apache/rocketmq-dashboard/pull/151")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #155]"," 5.1.0 rocketmq version update by @Abhijeetmishr in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/155"},"https://github.com/apache/rocketmq-dashboard/pull/155")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #148]"," Throwables.propagate is deprecated for making runtime exception more verbose by @Abhijeetmishr in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/160"},"https://github.com/apache/rocketmq-dashboard/pull/160")),(0,o.yg)("li",{parentName:"ul"},"[ISSUE #232]"," Remove unused imports for the checkstyle. by @guyu0000 in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/232"},"https://github.com/apache/rocketmq-dashboard/pull/232"))),(0,o.yg)("h2",{parentName:"admonition",id:"new-contributors"},"New Contributors"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"@RaymondCode made their first contribution in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/12"},"https://github.com/apache/rocketmq-dashboard/pull/12")),(0,o.yg)("li",{parentName:"ul"},"@4ops made their first contribution in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/40"},"https://github.com/apache/rocketmq-dashboard/pull/40")),(0,o.yg)("li",{parentName:"ul"},"@zhiliatom made their first contribution in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/49"},"https://github.com/apache/rocketmq-dashboard/pull/49")),(0,o.yg)("li",{parentName:"ul"},"@cserwen made their first contribution in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/59"},"https://github.com/apache/rocketmq-dashboard/pull/59")),(0,o.yg)("li",{parentName:"ul"},"@xxd763795151 made their first contribution in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/71"},"https://github.com/apache/rocketmq-dashboard/pull/71")),(0,o.yg)("li",{parentName:"ul"},"@yannizhou05 made their first contribution in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/120"},"https://github.com/apache/rocketmq-dashboard/pull/120")),(0,o.yg)("li",{parentName:"ul"},"@Oliverwqcwrw made their first contribution in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/112"},"https://github.com/apache/rocketmq-dashboard/pull/112")),(0,o.yg)("li",{parentName:"ul"},"@Abhijeetmishr made their first contribution in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/151"},"https://github.com/apache/rocketmq-dashboard/pull/151")),(0,o.yg)("li",{parentName:"ul"},"@javens0601 made their first contribution in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/197"},"https://github.com/apache/rocketmq-dashboard/pull/197")),(0,o.yg)("li",{parentName:"ul"},"@guangdashao made their first contribution in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/179"},"https://github.com/apache/rocketmq-dashboard/pull/179")),(0,o.yg)("li",{parentName:"ul"},"@1294566108 made their first contribution in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/198"},"https://github.com/apache/rocketmq-dashboard/pull/198")),(0,o.yg)("li",{parentName:"ul"},"@guyu0000 made their first contribution in ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/apache/rocketmq-dashboard/pull/231"},"https://github.com/apache/rocketmq-dashboard/pull/231"))),(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("strong",{parentName:"p"},"Full Changelog"),": ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/rocketmq-dashboard/compare/rocketmq-dashboard-1.0.0...rocketmq-dashboard-2.0.0"},"https://github.com/apache/rocketmq-dashboard/compare/rocketmq-dashboard-1.0.0...rocketmq-dashboard-2.0.0"))))}s.isMDXComponent=!0}}]);