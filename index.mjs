// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-beta@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";var a=s,m=e,d=r,o=n;var l=i,p=s,j=e,h=r,c=n;var f=function(t,s){var e;return a(t)||a(s)||s<=0?NaN:(e=d(s)*m(s/2,.5),o(s/(s+o(t,2)),(1+s)/2)/e)},b=function(t){var s,e;return p(t)||t<=0?l(NaN):(e=h(t)*j(t/2,.5),s=(1+t)/2,function(r){if(p(r))return NaN;return c(t/(t+c(r,2)),s)/e})};t(f,"factory",b);var u=f;export{u as default,b as factory};
//# sourceMappingURL=index.mjs.map
