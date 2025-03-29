"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=s(function(A,c){
var d=require('@stdlib/math-base-assert-is-nan/dist');function l(e,r,i,o){var t,n,u,a,v;if(e<=0)return NaN;if(e===1||i===0)return d(r[o])?NaN:0;for(u=o,n=r[u],t=n,v=1;v<e;v++){if(u+=i,a=r[u],d(a))return a;a<n?n=a:a>t&&(t=a)}return t-n}c.exports=l
});var p=s(function(B,m){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=q();function E(e,r,i){return _(e,r,i,R(e,i))}m.exports=E
});var x=s(function(C,g){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),O=q();N(y,"ndarray",O);g.exports=y
});var b=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=x(),f,j=h(b(__dirname,"./native.js"));k(j)?f=w:f=j;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
