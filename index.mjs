// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";function s(r,e,s,n){var i,d,a,m,o;if(r<=0)return NaN;if(1===r||0===s)return t(e[n])?NaN:0;for(i=d=e[a=n],o=1;o<r;o++){if(m=e[a+=s],t(m))return m;m<d?d=m:m>i&&(i=m)}return i-d}function n(r,t,n){return s(r,t,n,e(r,n))}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
