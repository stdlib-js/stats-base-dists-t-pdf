"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=i(function(R,s){
var u=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-special-beta/dist'),d=require('@stdlib/math-base-special-sqrt/dist'),n=require('@stdlib/math-base-special-pow/dist');function m(e,r){var t;return u(e)||u(r)||r<=0?NaN:(t=d(r)*y(r/2,.5),n(r/(r+n(e,2)),(1+r)/2)/t)}s.exports=m
});var p=i(function(g,f){
var v=require('@stdlib/utils-constant-function/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-beta/dist'),x=require('@stdlib/math-base-special-sqrt/dist'),c=require('@stdlib/math-base-special-pow/dist');function T(e){var r,t;if(q(e)||e<=0)return v(NaN);return t=x(e)*w(e/2,.5),r=(1+e)/2,b;function b(a){return q(a)?NaN:c(e/(e+c(a,2)),r)/t}}f.exports=T
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=o(),F=p();l(N,"factory",F);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
