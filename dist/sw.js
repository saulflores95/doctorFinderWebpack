var __wpo = {"assets":{"main":["/manifest.json","/22388c7479309b00426a2f1a23973734.png","/app.90e83d.js","/vendor.bf1ca8.js","/styles.90e83d.css","/"],"additional":[],"optional":[]},"externals":[],"hashesMap":{"e530600316418c8f2814e8633fdc2d4ea36af7ee":"/manifest.json","6635df38f887006f0a4b7f1e31d0048d3ebceb30":"/22388c7479309b00426a2f1a23973734.png","369e4528d80f609598ecb8b35437ca7418bc0b69":"/app.90e83d.js","77e13cc1e1eeddeed1c7ac89b6a7e7c8412808e2":"/vendor.bf1ca8.js","4b6dd4cf5fc1b6fb6d640cc65687be2052dfb860":"/styles.90e83d.css","29285a5a06576f6a4643a1979309b0830923bc3e":"/"},"strategy":"changed","responseStrategy":"cache-first","version":"3/1/2017, 1:01:22 PM","name":"webpack-offline","pluginVersion":"4.6.1","relativePaths":false};

!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};return e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1)}([function(n,e){},function(n,e,t){"use strict";function r(n,e){function t(){if(!R.additional.length)return Promise.resolve();s&&console.log("[SW]:","Caching additional");var n=void 0;return n="changed"===S?f("additional"):r("additional"),n.catch(function(n){console.error("[SW]:","Cache section `additional` failed to load")})}function r(e){var t=R[e];return caches.open(E).then(function(e){return O(e,t,{bust:n.version,request:n.prefetchRequest})}).then(function(){u("Cached assets: "+e,t)}).catch(function(n){throw console.error(n),n})}function f(e){return h().then(function(t){if(!t)return r(e);var o=t[0],i=t[1],a=t[2],c=a.hashmap,s=a.version;if(!a.hashmap||s===n.version)return r(e);var f=Object.keys(c).map(function(n){return c[n]}),l=i.map(function(n){var e=new URL(n.url);return e.search="",e.toString()}),h=R[e],d=[],v=h.filter(function(n){return l.indexOf(n)===-1||f.indexOf(n)===-1});Object.keys(U).forEach(function(n){var e=U[n];if(h.indexOf(e)!==-1&&v.indexOf(e)===-1&&d.indexOf(e)===-1){var t=c[n];t&&l.indexOf(t)!==-1?d.push([t,e]):v.push(e)}}),u("Changed assets: "+e,v),u("Moved assets: "+e,d);var p=Promise.all(d.map(function(n){return o.match(n[0]).then(function(e){return[n[1],e]})}));return caches.open(E).then(function(e){var t=p.then(function(n){return Promise.all(n.map(function(n){return e.put(n[0],n[1])}))});return Promise.all([t,O(e,v,{bust:n.version,request:n.prefetchRequest})])})})}function l(){return caches.keys().then(function(n){var e=n.map(function(n){if(0===n.indexOf(q)&&0!==n.indexOf(E))return console.log("[SW]:","Delete cache:",n),caches.delete(n)});return Promise.all(e)})}function h(){return caches.keys().then(function(n){for(var e=n.length,t=void 0;e--&&(t=n[e],0!==t.indexOf(q)););if(t){var r=void 0;return caches.open(t).then(function(n){return r=n,n.match(new URL(j,location).toString())}).then(function(n){if(n)return Promise.all([r,r.keys(),n.json()])})}})}function d(){return caches.open(E).then(function(e){var t=new Response(JSON.stringify({version:n.version,hashmap:U}));return e.put(new URL(j,location).toString(),t)})}function v(n,e,t){return o(t,E).then(function(r){if(r)return s&&console.log("[SW]:","URL ["+t+"]("+e+") from cache"),r;var o=fetch(n.request).then(function(n){return n.ok?(s&&console.log("[SW]:","URL ["+e+"] from network"),t===e&&!function(){var t=n.clone();caches.open(E).then(function(n){return n.put(e,t)}).then(function(){console.log("[SW]:","Cache asset: "+e)})}(),n):(s&&console.log("[SW]:","URL ["+e+"] wrong response: ["+n.status+"] "+n.type),n)});return o})}function p(n,e,t){return fetch(n.request).then(function(n){if(n.ok)return s&&console.log("[SW]:","URL ["+e+"] from network"),n;throw new Error("response is not ok")}).catch(function(){return s&&console.log("[SW]:","URL ["+e+"] from cache if possible"),o(t,E)})}function g(n){return n.catch(function(){}).then(function(n){return n&&n.ok?n:(s&&console.log("[SW]:","Loading navigation fallback ["+C+"] from cache"),o(C,E))})}function m(){Object.keys(R).forEach(function(n){R[n]=R[n].map(function(n){var e=new URL(n,location);return b.indexOf(n)===-1?e.search="":e.hash="",e.toString()})}),Object.keys(W).forEach(function(n){W[n]=W[n].map(function(n){var e=new URL(n,location);return b.indexOf(n)===-1?e.search="":e.hash="",e.toString()})}),U=Object.keys(U).reduce(function(n,e){var t=new URL(U[e],location);return t.search="",n[e]=t.toString(),n},{}),b=b.map(function(n){var e=new URL(n,location);return e.hash="",e.toString()})}function O(n,e,t){var r=t.allowLoaders!==!1,o=t&&t.bust,a=t.request||{credentials:"omit",mode:"cors"};return Promise.all(e.map(function(n){return o&&(n=i(n,o)),fetch(n,a)})).then(function(o){if(o.some(function(n){return!n.ok}))return Promise.reject(new Error("Wrong response status"));var i=[],a=o.map(function(t,o){return r&&i.push(x(e[o],t)),n.put(e[o],t)});return i.length?!function(){var r=c(t);r.allowLoaders=!1;var o=a;a=Promise.all(i).then(function(t){var i=[].concat.apply([],t);return e.length&&(o=o.concat(O(n,i,r))),Promise.all(o)})}():a=Promise.all(a),a})}function x(n,e){var t=Object.keys(W).map(function(t){var r=W[t];if(r.indexOf(n)!==-1&&k[t])return k[t](e.clone())}).filter(function(n){return!!n});return Promise.all(t).then(function(n){return[].concat.apply([],n)})}function w(n){var e=n.url,t=new URL(e),r=void 0;r="navigate"===n.mode?"navigate":t.origin===location.origin?"same-origin":"cross-origin";for(var o=0;o<y.length;o++){var i=y[o];if(i&&(!i.requestTypes||i.requestTypes.indexOf(r)!==-1)){var a=void 0;if(a="function"==typeof i.match?i.match(t,n):e.replace(i.match,i.to),a&&a!==e)return a}}}var k=e.loaders,y=e.cacheMaps,S=n.strategy,L=n.responseStrategy,R=n.assets,W=n.loaders||{},U=n.hashesMap,b=n.externals,q=n.name,P=n.version,E=q+":"+P,j="__offline_webpack__data";m();var _=[].concat(R.main,R.additional,R.optional),C=n.navigateFallbackURL;self.addEventListener("install",function(n){console.log("[SW]:","Install event");var e=void 0;e="changed"===S?f("main"):r("main"),n.waitUntil(e)}),self.addEventListener("activate",function(n){console.log("[SW]:","Activate event");var e=t();e=e.then(d),e=e.then(l),e=e.then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),n.waitUntil(e)}),self.addEventListener("fetch",function(n){var e=n.request.url,t=new URL(e),r=void 0;b.indexOf(e)!==-1?r=e:(t.search="",r=t.toString());var o="GET"===n.request.method,i=_.indexOf(r)!==-1,c=r;if(!i){var u=w(n.request);u&&(c=u,i=!0)}if(!i&&o&&C&&a(n.request))return void n.respondWith(g(fetch(n.request)));if(!i||!o)return void(t.origin!==location.origin&&navigator.userAgent.indexOf("Firefox/44.")!==-1&&n.respondWith(fetch(n.request)));var s=void 0;s="network-first"===L?p(n,r,c):v(n,r,c),C&&a(n.request)&&(s=g(s)),n.respondWith(s)}),self.addEventListener("message",function(n){var e=n.data;if(e)switch(e.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}})}function o(n,e){return caches.match(n,{cacheName:e}).catch(function(){})}function i(n,e){var t=n.indexOf("?")!==-1;return n+(t?"&":"?")+"__uncache="+encodeURIComponent(e)}function a(n){return"navigate"===n.mode||n.headers.get("Upgrade-Insecure-Requests")||(n.headers.get("Accept")||"").indexOf("text/html")!==-1}function c(n){return Object.keys(n).reduce(function(e,t){return e[t]=n[t],e},{})}function u(n,e){console.groupCollapsed("[SW]:",n),e.forEach(function(n){console.log("Asset:",n)}),console.groupEnd()}if("undefined"==typeof s)var s=!1;r(__wpo,{loaders:{},cacheMaps:[]}),n.exports=t(0)}]);