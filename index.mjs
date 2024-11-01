// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-beta@v0.3.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function m(t,r){var m;return s(t)||s(r)||r<=0?NaN:(m=n(r)*e(r/2,.5),i(r/(r+i(t,2)),(1+r)/2)/m)}function d(t){var m,d;return s(t)||t<=0?r(NaN):(d=n(t)*e(t/2,.5),m=(1+t)/2,function(e){if(s(e))return NaN;return i(t/(t+i(e,2)),m)/d})}t(m,"factory",d);export{m as default,d as factory};
//# sourceMappingURL=index.mjs.map
