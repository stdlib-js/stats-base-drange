// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";function n(r,n,t){var a,i,s,f,d;if(r<=0)return NaN;if(1===r||0===t)return e(n[0])?NaN:0;for(a=i=n[s=t<0?(1-r)*t:0],d=1;d<r;d++){if(f=n[s+=t],e(f))return f;f<i?i=f:f>a&&(a=f)}return a-i}function t(r,n,t,a){var i,s,f,d,u;if(r<=0)return NaN;if(1===r||0===t)return e(n[a])?NaN:0;for(i=s=n[f=a],u=1;u<r;u++){if(d=n[f+=t],e(d))return d;d<s?s=d:d>i&&(i=d)}return i-s}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
