(wx["webpackJsonp"]=wx["webpackJsonp"]||[]).push([[22],{120:function(e,t,c){e.exports={like:"like-module__like___3bE7P",infoItem:"like-module__infoItem___1_GrD"}},335:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c(8),r=c.n(a),i=c(13),s=c(6),u=c(5),o=c(3),j=c(1),l=c(26),b=c(79),p=c(11),O=c(22),f=c(23),m=c.n(f),x=c(10),d=c(120),h=c.n(d),v=c(0),g=x["c"].appId,k=x["c"].appKey,_=x["c"].serverURLs;m.a.init({appId:g,appKey:k,serverURLs:_});var w=20,y=function(){var e=Object(u["useState"])([]),t=Object(s["a"])(e,2),c=t[0],n=t[1],a=Object(u["useState"])(0),f=Object(s["a"])(a,2),x=f[0],d=f[1],g=Object(u["useState"])(0),k=Object(s["a"])(g,2),_=(k[0],k[1]),y=Object(u["useState"])(!0),I=Object(s["a"])(y,2),A=I[0],L=I[1];Object(u["useEffect"])((function(){N()}),[]),Object(o["useReachBottom"])((function(){A&&d(x+1)}));var N=function(){var e=Object(i["a"])(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(O["c"])();case 2:t=e.sent,a=t.nickName,m.a.Query.doCloudQuery("select count(*), * from Like where nickName = '".concat(a,"' limit ").concat(x*w,",").concat(w," order by createdAt desc")).then((function(e){var t=e.results,a=e.count;n(c.concat(t.map((function(e){var t=e.attributes;return t.createdAt=e.createdAt,t})))),_(a),a<=(x+1)*w&&L(!1)})).catch();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(e){return Object(v["jsx"])(v["Fragment"],{children:Object(v["jsxs"])(j["j"],{className:h.a.infoItem,children:[Object(v["jsx"])(p["a"],{name:"icontime-circle",style:{marginRight:2}}),Object(v["jsx"])(j["i"],{children:Object(O["b"])(e.createdAt)})]})})};return Object(v["jsxs"])(j["j"],{className:h.a.like,children:[c.length>0?c.map((function(e){return Object(v["jsx"])(b["a"],{cover:e.cover,title:e.title,slug:e.slug,excerpt:e.excerpt,infoList:R(e)},e.slug)})):null,A?Object(v["jsx"])(l["a"],{text:"\u6b63\u5728\u52a0\u8f7d...",icon:"jingyu"}):Object(v["jsx"])(l["a"],{text:"\u672c\u6765\u65e0\u4e00\u7269\uff0c\u4f55\u5904\u60f9\u5c18\u57c3 ~"})]})},I=y,A={navigationBarTitleText:"\u559c\u6b22\u6587\u7ae0"};Page(Object(n["createPageConfig"])(I,"pages/like/like",{root:{cn:[]}},A||{}))}},[[335,0,1,2,3]]]);