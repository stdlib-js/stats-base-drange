// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;function f(e){return e!=e}function c(e,r,t){var n,o,i,a,u;if(e<=0)return NaN;if(1===e||0===t)return f(r[0])?NaN:0;for(n=o=r[i=t<0?(1-e)*t:0],u=1;u<e;u++){if(f(a=r[i+=t]))return a;a<o?o=a:a>n&&(n=a)}return n-o}return e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&a&&a.call(e,r,t.set),e},e(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n){var o,i,a,u,l;if(e<=0)return NaN;if(1===e||0===t)return f(r[n])?NaN:0;for(o=i=r[a=n],l=1;l<e;l++){if(f(u=r[a+=t]))return u;u<i?i=u:u>o&&(o=u)}return o-i}}),c},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).drange=r();
//# sourceMappingURL=index.js.map
