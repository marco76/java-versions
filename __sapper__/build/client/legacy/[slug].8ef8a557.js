import{v as t,_ as n,a as e,b as r,c as s,i as a,d as c,S as o,s as i,e as u,f,t as l,q as h,g as p,h as m,j as v,k as d,l as y,m as x,n as b,o as g,r as j,w as R,p as k}from"./client.3adc474c.js";import{_ as w}from"./asyncToGenerator.5229e80b.js";function D(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=e(t);if(n){var c=e(this).constructor;s=Reflect.construct(a,arguments,c)}else s=a.apply(this,arguments);return r(this,s)}}function E(t){var n,e,r,s,a,c,o=t[0].title+"",i=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=u(),r=f("h1"),s=l(o),a=u(),c=f("div"),this.h()},l:function(t){h('[data-svelte="svelte-1uty71u"]',document.head).forEach(p),e=m(t),r=v(t,"H1",{});var n=d(r);s=y(n,o),n.forEach(p),a=m(t),c=v(t,"DIV",{class:!0}),d(c).forEach(p),this.h()},h:function(){x(c,"class","content svelte-emm3f3")},m:function(t,n){b(t,e,n),b(t,r,n),g(r,s),b(t,a,n),b(t,c,n),c.innerHTML=i},p:function(t,e){var r=j(e,1)[0];1&r&&n!==(n=t[0].title)&&(document.title=n),1&r&&o!==(o=t[0].title+"")&&R(s,o),1&r&&i!==(i=t[0].html+"")&&(c.innerHTML=i)},i:k,o:k,d:function(t){t&&p(e),t&&p(r),t&&p(a),t&&p(c)}}}function H(t){return T.apply(this,arguments)}function T(){return(T=w(t.mark((function n(e){var r,s,a;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,this.fetch("blog/".concat(r.slug,".json"));case 3:return s=t.sent,t.next=6,s.json();case 6:if(a=t.sent,200!==s.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(s.status,a.message);case 12:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}function L(t,n,e){var r=n.post;return t.$$set=function(t){"post"in t&&e(0,r=t.post)},[r]}var M=function(t){n(r,o);var e=D(r);function r(t){var n;return s(this,r),n=e.call(this),a(c(n),t,L,E,i,{post:0}),n}return r}();export default M;export{H as preload};