"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[458],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,l(l({ref:e},u),{},{components:n})):r.createElement(g,l({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1074:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},p=void 0,s={unversionedId:"configuration/input-plugins/Elasticsearch",id:"configuration/input-plugins/Elasticsearch",title:"Elasticsearch",description:"Input plugin : Elasticsearch [Static]",source:"@site/docs/configuration/input-plugins/Elasticsearch.md",sourceDirName:"configuration/input-plugins",slug:"/configuration/input-plugins/Elasticsearch",permalink:"/docs/configuration/input-plugins/Elasticsearch",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/dev/docs/configuration/input-plugins/Elasticsearch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Alluxio",permalink:"/docs/configuration/input-plugins/Alluxio"},next:{title:"FakeStream",permalink:"/docs/configuration/input-plugins/FakeStream"}},u=[{value:"Input plugin : Elasticsearch Static",id:"input-plugin--elasticsearch-static",children:[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[{value:"hosts array",id:"hosts-array",children:[],level:5},{value:"index string",id:"index-string",children:[],level:5},{value:"es.* string",id:"es-string",children:[],level:5}],level:3},{value:"Tips",id:"tips",children:[{value:"common options string",id:"common-options-string",children:[],level:5}],level:3},{value:"Examples",id:"examples",children:[],level:3}],level:2}],c={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"input-plugin--elasticsearch-static"},"Input plugin : Elasticsearch ","[Static]"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,i.kt)("li",{parentName:"ul"},"Homepage: ",(0,i.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,i.kt)("li",{parentName:"ul"},"Version: 1.3.2")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"\u4ece Elasticsearch \u4e2d\u8bfb\u53d6\u6570\u636e"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#hosts-array"},"hosts")),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#index-string"},"index")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#es-string"},"es")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#common-options-string"},"common-options")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h5",{id:"hosts-array"},"hosts ","[array]"),(0,i.kt)("p",null,"ElasticSearch \u96c6\u7fa4\u5730\u5740\uff0c\u683c\u5f0f\u4e3ahost:port\uff0c\u5141\u8bb8\u6307\u5b9a\u591a\u4e2ahost\u3002\u5982 ","[",'"host1:9200", "host2:9200"]\u3002'),(0,i.kt)("h5",{id:"index-string"},"index ","[string]"),(0,i.kt)("p",null,"ElasticSearch index\u540d\u79f0\uff0c\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," \u6a21\u7cca\u5339\u914d"),(0,i.kt)("h5",{id:"es-string"},"es.* ","[string]"),(0,i.kt)("p",null,"\u7528\u6237\u8fd8\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u975e\u5fc5\u987b\u53c2\u6570\uff0c\u8be6\u7ec6\u7684\u53c2\u6570\u5217\u8868\u89c1",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/hadoop/current/configuration.html#cfg-mapping"},"Elasticsearch\u652f\u6301\u7684\u53c2\u6570"),"."),(0,i.kt)("p",null,"\u5982\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"es.read.metadata")," \u7684\u65b9\u5f0f\u662f: ",(0,i.kt)("inlineCode",{parentName:"p"},"es.read.metadata = true"),"\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u8fd9\u4e9b\u975e\u5fc5\u987b\u53c2\u6570\uff0c\u5b83\u4eec\u5c06\u4f7f\u7528\u5b98\u65b9\u6587\u6863\u7ed9\u51fa\u7684\u9ed8\u8ba4\u503c\u3002"),(0,i.kt)("h3",{id:"tips"},"Tips"),(0,i.kt)("p",null,"\u5728\u4f7f\u7528 ElasticSearch\u63d2\u4ef6\u65f6,\u53ef\u4ee5\u914d\u7f6e\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"es.input.max.docs.per.partition"),"\uff0c\u7528\u4ee5\u6700\u5927\u5316 seatunnel \u8bfb\u53d6 es \u7684\u6548\u7387\uff0c\u8be5\u53c2\u6570\u7528\u4e8e\u51b3\u5b9a\u4efb\u52a1\u7684\u5206\u533a\u4e2a\u6570\uff1a"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5206\u533a\u6570 = \u603b\u6570\u636e\u6761\u6570 / es.input.max.docs.per.partition")),(0,i.kt)("p",null,"\u901a\u8fc7\u589e\u5927\u4efb\u52a1\u5206\u533a\u6570\u4ee5\u652f\u6301\u66f4\u9ad8\u7684\u5e76\u53d1\u80fd\u529b\uff0c\u6839\u636e\u5b9e\u8df5\u4f18\u5316\u8fd9\u4e2a\u53c2\u6570\u7684\u8bbe\u7f6e\uff0c\u8bfb\u53d6ElasticSearch\u7684\u6548\u7387\u53ef\u4ee5\u63d0\u53473-10\u500d\u3002"),(0,i.kt)("p",null,"\u5982\u4e0a\u6240\u8ff0 ",(0,i.kt)("inlineCode",{parentName:"p"},"es.input.max.docs.per.partition"),"\uff0c\u652f\u6301\u7528\u6237\u81ea\u884c\u6839\u636e\u5b9e\u9645\u7684\u6570\u636e\u91cf\u8fdb\u884c\u8c03\u6574\uff0c\u5426\u5219\u5206\u533a\u6570\u4e3a ElasticSearch \u7d22\u5f15 Shard \u7684\u4e2a\u6570\u3002"),(0,i.kt)("h5",{id:"common-options-string"},"common options ","[string]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Input")," \u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167 ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/v1/configuration/input-plugin"},"Input Plugin")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'elasticsearch {\n    hosts = ["localhost:9200"]\n    index = "seatunnel-20190424"\n    result_table_name = "my_dataset"\n  }\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'elasticsearch {\n    hosts = ["localhost:9200"]\n    index = "seatunnel-*"\n    es.read.field.include = "name, age"\n    resulttable_name = "my_dataset"\n  }\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5339\u914d\u6240\u6709\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel-")," \u5f00\u5934\u7684\u7d22\u5f15\uff0c \u5e76\u4e14\u4ec5\u4ec5\u8bfb\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," \u4e24\u4e2a\u5b57\u6bb5\u3002")))}d.isMDXComponent=!0}}]);