"use strict";var precacheConfig=[["./index.html","09a95f031ff175aa9d89ac11baf3f92d"],["./static/js/cffd8a9a.js","99bf02e3cd81ff9588d1d60b306987a0"],["./static/media/0682845c9029.png","0682845c902936d5c234426a5407f6b7"],["./static/media/104d1f047e5c.png","104d1f047e5cc4b1ef2f5cddde1a455a"],["./static/media/12cf0486f093.png","12cf0486f09369a847bba0c366b8cefa"],["./static/media/1f5c4c352d7c.png","1f5c4c352d7c5fd02192ac276745057f"],["./static/media/37eb30a20396.jpg","37eb30a203966e54c74566a8eabf6579"],["./static/media/7c04e8010d27.png","7c04e8010d27cf4ecff49fbf7a9776df"],["./static/media/a1ed0c2651b9.jpg","a1ed0c2651b9492fd15c9ddaf2186dad"],["./static/media/c7a4bdc5880b.jpg","c7a4bdc5880bbd3581099044025ab664"],["./static/media/d703428d1ce8.png","d703428d1ce88c3d885a382bfbf16ae1"],["./static/media/dcb11830bbd6.png","dcb11830bbd630de0c9abe417c9fd0c3"],["./static/media/dea8387a6865.png","dea8387a6865be0f8fdd4b4ebbd9faac"],["./static/media/dfbb6b577f46.png","dfbb6b577f46168ebf4981d877586f5f"],["./static/media/e3054a989c87.png","e3054a989c8764065a958f8d87b0c194"],["./static/media/ff751c7b257a.png","ff751c7b257a979de8ea6e8521e57b75"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});