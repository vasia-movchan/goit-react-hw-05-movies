"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[862],{7862:function(t,n,r){r.r(n),r.d(n,{default:function(){return l}});var e,a=r(5861),u=r(885),c=r(7757),i=r.n(c),s=r(2791),o=r(501),p=r(6871),f=r(1933),h=r(168),v=r(6444).ZP.div(e||(e=(0,h.Z)(["\n  max-width: 1140px;\n  padding: 0 16px;\n"]))),d=r(184),l=function(){var t=(0,s.useState)([]),n=(0,u.Z)(t,2),r=n[0],e=n[1],c=(0,s.useState)(!1),h=(0,u.Z)(c,2),l=h[0],x=h[1],m=(0,s.useState)(null),w=(0,u.Z)(m,2),y=w[0],g=w[1];(0,s.useEffect)((function(){var t=function(){var t=(0,a.Z)(i().mark((function t(){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(!0),t.next=4,(0,f.Df)();case 4:n=t.sent,r=n.results,e(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),g(t.t0);case 12:return t.prev=12,x(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]);var k=(0,p.TH)();console.log(k);var Z=r.map((function(t){var n=t.id,r=t.title;return(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{state:{from:k},to:"/movies/".concat(n),children:r})},n)}));return(0,d.jsxs)(v,{children:[(0,d.jsx)("h2",{children:"Trending today"}),(0,d.jsx)("ul",{children:Z}),l&&(0,d.jsx)("p",{children:"...Loading"}),y&&(0,d.jsx)("p",{children:"...Movies load failed"})]})}},1933:function(t,n,r){r.d(n,{Df:function(){return s},XT:function(){return d},tx:function(){return x},uz:function(){return p},zv:function(){return h}});var e=r(5861),a=r(7757),u=r.n(a),c=r(4569),i=r.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"a4fc55630f18a734e904fff92448a44f"}});function s(){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(u().mark((function t(){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/trending/movie/day");case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(n,"/credits"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/search/movie",{params:{query:n}});case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("/movie/".concat(n,"/reviews"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=862.91461f8a.chunk.js.map