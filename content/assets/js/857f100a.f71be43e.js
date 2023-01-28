"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,d=p["".concat(s,".").concat(m)]||p[m]||k[m]||o;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:r,l[1]=u;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={},l="RocketMQ Streams Quick Start",u={unversionedId:"streams/32RocketMQ Streams Quick Start",id:"streams/32RocketMQ Streams Quick Start",title:"RocketMQ Streams Quick Start",description:"Run in the RocketMQ Streams project",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07-streams/32RocketMQ Streams Quick Start.md",sourceDirName:"07-streams",slug:"/streams/32RocketMQ Streams Quick Start",permalink:"/docs/4.x/streams/32RocketMQ Streams Quick Start",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/07-streams/32RocketMQ Streams Quick Start.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ Streams Core Concept",permalink:"/docs/4.x/streams/31RocketMQ Streams Concept"},next:{title:"RocketMQ MQTT Overview",permalink:"/docs/4.x/iot/33RocketMQMQTTOverview"}},s={},i=[{value:"Run in the RocketMQ Streams project",id:"run-in-the-rocketmq-streams-project",level:2},{value:"RocketMQ Streams is applied as a dependency in SDK form",id:"rocketmq-streams-is-applied-as-a-dependency-in-sdk-form",level:2},{value:"Prepare the environment",id:"prepare-the-environment",level:3},{value:"Build RocketMQ Streams",id:"build-rocketmq-streams",level:3},{value:"Add pom dependency",id:"add-pom-dependency",level:3},{value:"Write stream computing program",id:"write-stream-computing-program",level:3},{value:"Write data to the RocketMQ sourceTopic and observe the results",id:"write-data-to-the-rocketmq-sourcetopic-and-observe-the-results",level:3}],c={toc:i};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rocketmq-streams-quick-start"},"RocketMQ Streams Quick Start"),(0,r.kt)("h2",{id:"run-in-the-rocketmq-streams-project"},"Run in the RocketMQ Streams project"),(0,r.kt)("p",null,"Refer to the RocketMQ Streams project rocketmq-streams-examples module for programs that can be run directly. Steps to run the example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start RocketMQ 5.0 or above locally."),(0,r.kt)("li",{parentName:"ul"},"Use mqAdmin to create the data source topic in the example."),(0,r.kt)("li",{parentName:"ul"},"Start the example."),(0,r.kt)("li",{parentName:"ul"},"Write appropriate data to the source topic of RocketMQ (as determined by the example).")),(0,r.kt)("h2",{id:"rocketmq-streams-is-applied-as-a-dependency-in-sdk-form"},"RocketMQ Streams is applied as a dependency in SDK form"),(0,r.kt)("h3",{id:"prepare-the-environment"},"Prepare the environment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"64bit JDK 1.8+"),(0,r.kt)("li",{parentName:"ul"},"Maven 3.2+"),(0,r.kt)("li",{parentName:"ul"},"Start RocketMQ locally\uff0c",(0,r.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quick-start/"},"Startup documentation"))),(0,r.kt)("h3",{id:"build-rocketmq-streams"},"Build RocketMQ Streams"),(0,r.kt)("h3",{id:"add-pom-dependency"},"Add pom dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"}," <dependencies>\n    <dependency>\n        <groupId>org.apache.rocketmq</groupId>\n        <artifactId>rocketmq-streams</artifactId>\n            \x3c!-- Modify as needed --\x3e\n        <version>1.1.0</version>\n    </dependency>\n</dependencies>\n")),(0,r.kt)("h3",{id:"write-stream-computing-program"},"Write stream computing program"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class WordCount {\n    public static void main(String[] args) {\n        StreamBuilder builder = new StreamBuilder("wordCount");\n\n        builder.source("sourceTopic", total -> {\n                    String value = new String(total, StandardCharsets.UTF_8);\n                    return new Pair<>(null, value);\n                })\n                .flatMap((ValueMapperAction<String, List<String>>) value -> {\n                    String[] splits = value.toLowerCase().split("\\\\W+");\n                    return Arrays.asList(splits);\n                })\n                .keyBy(value -> value)\n                .count()\n                .toRStream()\n                .print();\n\n        TopologyBuilder topologyBuilder = builder.build();\n\n        Properties properties = new Properties();\n        properties.put(MixAll.NAMESRV_ADDR_PROPERTY, "127.0.0.1:9876");\n\n        RocketMQStream rocketMQStream = new RocketMQStream(topologyBuilder, properties);\n\n        final CountDownLatch latch = new CountDownLatch(1);\n\n        Runtime.getRuntime().addShutdownHook(new Thread("wordcount-shutdown-hook") {\n            @Override\n            public void run() {\n                rocketMQStream.stop();\n                latch.countDown();\n            }\n        });\n\n        try {\n            rocketMQStream.start();\n            latch.await();\n        } catch (final Throwable e) {\n            System.exit(1);\n        }\n        System.exit(0);\n    }\n}\n')),(0,r.kt)("h3",{id:"write-data-to-the-rocketmq-sourcetopic-and-observe-the-results"},"Write data to the RocketMQ sourceTopic and observe the results"),(0,r.kt)("p",null,"If the data written to the sourceTopic is as follows: each line of data is sent as a message;"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'"To be, or not to be,--that is the question:--",\n"Whether \'tis nobler in the mind to suffer",\n"The slings and arrows of outrageous fortune",\n"Or to take arms against a sea of troubles,",\n"And by opposing end them?--To die,--to sleep,--",\n"No more; and by a sleep to say we end",\n"The heartache, and the thousand natural shocks",\n"That flesh is heir to,--\'tis a consummation",\n')),(0,r.kt)("p",null,"Count the frequency of words, and the calculation results are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"(key=to, value=1)\n(key=be, value=1)\n(key=or, value=1)\n(key=not, value=1)\n(key=to, value=2)\n(key=be, value=2)\n(key=that, value=1)\n(key=is, value=1)\n(key=the, value=1)\n(key=whether, value=1)\n(key=tis, value=1)\n(key=nobler, value=1)\n(key=mind, value=1)\n(key=against, value=1)\n(key=troubles, value=1)\n(key=slings, value=1)\n(key=die, value=1)\n(key=natural, value=1)\n(key=flesh, value=1)\n(key=sea, value=1)\n(key=fortune, value=1)\n(key=shocks, value=1)\n(key=consummation, value=1)\n(key=to, value=3)\n(key=to, value=4)\n(key=to, value=5)\n(key=say, value=1)\n(key=end, value=1)\n(key=end, value=2)\n(key=to, value=6)\n(key=to, value=7)\n(key=to, value=8)\n(key=or, value=2)\n(key=them, value=1)\n(key=take, value=1)\n(key=arms, value=1)\n(key=of, value=1)\n(key=and, value=1)\n(key=of, value=2)\n(key=and, value=2)\n(key=by, value=1)\n(key=sleep, value=1)\n(key=and, value=3)\n(key=by, value=2)\n(key=sleep, value=2)\n(key=and, value=4)\n(key=that, value=2)\n(key=arrows, value=1)\n(key=heir, value=1)\n(key=question, value=1)\n(key=is, value=2)\n(key=the, value=2)\n(key=suffer, value=1)\n(key=a, value=1)\n(key=the, value=3)\n(key=no, value=1)\n(key=a, value=2)\n(key=opposing, value=1)\n(key=the, value=4)\n(key=the, value=5)\n(key=a, value=3)\n(key=in, value=1)\n(key=more, value=1)\n(key=heartache, value=1)\n(key=outrageous, value=1)\n(key=we, value=1)\n(key=thousand, value=1)\n(key=tis, value=2)\n")))}p.isMDXComponent=!0}}]);