(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{OXgS:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),c=u("pMnS"),a=u("a18t"),i=u("fECr"),o=u("ZYCi"),r=u("Ip0R"),b=u("1haT"),p=u("fp1T"),s=u("mrSG"),f=u("AGyb"),d=function(){function l(l,n){this._route=l,this._mainService=n}return l.prototype.ngOnInit=function(){this.getCityName(),this.getCityData()},l.prototype.getCityName=function(){this.cityName=this._route.snapshot.params.city},l.prototype.getCityData=function(){var l=this;this._mainService.getCityData().subscribe(function(n){l.cityData=n[l.cityName],l.cityData=Object.keys(l.cityData.districtData).map(function(n){return s.a({city:n},l.cityData.districtData[n])}),l.cityData=l.cityData.sort(function(l,n){return n.confirmed-l.confirmed}),l.total={confirmed:l.cityData.map(function(l){return Number(l.confirmed)}).reduce(function(l,n){return l+n}),active:l.cityData.map(function(l){return Number(l.active)}).reduce(function(l,n){return l+n}),deaths:l.cityData.map(function(l){return Number(l.deaths)}).reduce(function(l,n){return l+n}),recovered:l.cityData.map(function(l){return Number(l.recovered)}).reduce(function(l,n){return l+n})}})},l}(),h=t.nb({encapsulation:0,styles:[[""]],data:{}});function m(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"th",[["style","font-weight: 400;"]],null,null,null,null,null)),(l()(),t.Bb(2,null,["",""])),(l()(),t.pb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Bb(4,null,["",""])),(l()(),t.pb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Bb(6,null,["",""])),(l()(),t.pb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Bb(8,null,["",""])),(l()(),t.pb(9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Bb(10,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.city),l(n,4,0,n.context.$implicit.confirmed),l(n,6,0,n.context.$implicit.active),l(n,8,0,n.context.$implicit.recovered),l(n,10,0,n.context.$implicit.deaths)})}function y(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,1,"app-header",[],null,null,null,a.b,a.a)),t.ob(1,114688,null,0,i.a,[],null,null),(l()(),t.pb(2,0,null,null,35,"div",[["class","wrapper container"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,3,"a",[["class","btn btn-light"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.xb(l,4).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.ob(4,671744,null,0,o.m,[o.k,o.a,r.g],{routerLink:[0,"routerLink"]},null),t.yb(5,1),(l()(),t.Bb(-1,null,["Back"])),(l()(),t.pb(7,0,null,null,30,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,0,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,27,"div",[["class","col-lg-6"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,26,"table",[["class","table table-hover"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,11,"thead",[],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.pb(13,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["CITY / DISTRICT"])),(l()(),t.pb(15,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["TOTAL"])),(l()(),t.pb(17,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["ACTIVE"])),(l()(),t.pb(19,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["CURED"])),(l()(),t.pb(21,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["DIED"])),(l()(),t.pb(23,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,m)),t.ob(25,278528,null,0,r.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(26,0,null,null,10,"tfoot",[],null,null,null,null,null)),(l()(),t.pb(27,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["TOTAL"])),(l()(),t.pb(29,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Bb(30,null,["",""])),(l()(),t.pb(31,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Bb(32,null,["",""])),(l()(),t.pb(33,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Bb(34,null,["",""])),(l()(),t.pb(35,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Bb(36,null,["",""])),(l()(),t.pb(37,0,null,null,0,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),t.pb(38,0,null,null,1,"app-footer",[],null,null,null,b.b,b.a)),t.ob(39,114688,null,0,p.a,[],null,null)],function(l,n){var u=n.component;l(n,1,0);var t=l(n,5,0,"/");l(n,4,0,t),l(n,25,0,u.cityData),l(n,39,0)},function(l,n){var u=n.component;l(n,3,0,t.xb(n,4).target,t.xb(n,4).href),l(n,30,0,null==u.total?null:u.total.confirmed),l(n,32,0,null==u.total?null:u.total.active),l(n,34,0,null==u.total?null:u.total.recovered),l(n,36,0,null==u.total?null:u.total.deaths)})}function v(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,1,"app-detail",[],null,null,null,y,h)),t.ob(1,114688,null,0,d,[o.a,f.a],null,null)],function(l,n){l(n,1,0)},null)}var D=t.lb("app-detail",d,v,{},{},[]),w=u("gIcY"),g=function(){return function(){}}(),B=u("PCNd");u.d(n,"DetailModuleNgFactory",function(){return C});var C=t.mb(e,[],function(l){return t.vb([t.wb(512,t.j,t.Z,[[8,[c.a,D]],[3,t.j],t.x]),t.wb(4608,r.k,r.j,[t.u,[2,r.q]]),t.wb(4608,w.c,w.c,[]),t.wb(1073742336,r.b,r.b,[]),t.wb(1073742336,o.n,o.n,[[2,o.s],[2,o.k]]),t.wb(1073742336,g,g,[]),t.wb(1073742336,w.b,w.b,[]),t.wb(1073742336,w.a,w.a,[]),t.wb(1073742336,B.a,B.a,[]),t.wb(1073742336,e,e,[]),t.wb(1024,o.i,function(){return[[{path:"",component:d}]]},[])])})}}]);