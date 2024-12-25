"use strict";var s=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var c=s(function(z,m){
var q=require('@stdlib/math-base-assert-is-nan/dist');function N(n,r,v){var t,u,a,e,i;if(n<=0)return NaN;if(n===1||v===0)return q(r[0])?NaN:0;for(v<0?a=(1-n)*v:a=0,u=r[a],t=u,i=1;i<n;i++){if(a+=v,e=r[a],q(e))return e;e<u?u=e:e>t&&(t=e)}return t-u}m.exports=N
});var d=s(function(A,p){
var l=require('@stdlib/math-base-assert-is-nan/dist');function R(n,r,v,t){var u,a,e,i,f;if(n<=0)return NaN;if(n===1||v===0)return l(r[t])?NaN:0;for(e=t,a=r[e],u=a,f=1;f<n;f++){if(e+=v,i=r[e],l(i))return i;i<a?a=i:i>u&&(u=i)}return u-a}p.exports=R
});var y=s(function(B,x){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=c(),E=d();_(g,"ndarray",E);x.exports=g
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=y(),o,j=b(O(__dirname,"./native.js"));h(j)?o=k:o=j;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
