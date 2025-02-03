// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import{ndarray as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-read-dataview@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-memory@esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-base-arrays2ptrs@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-base-strided2object@v0.0.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-wasm-memory@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-module-wrapper@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-base64-to-uint8array@esm/index.mjs";var p=a("AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEYA2AAAGAGf3x/f39/AGAIf3x/f39/f38AAg8BA2VudgZtZW1vcnkCAAADBAMAAQIHTAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAdjX2RheHB5AAEPY19kYXhweV9uZGFycmF5AAIKlAEDAwABCy8AIAAgASACIANBASAAayIAIANsQQAgA0EATBsgBCAFIAAgBWxBACAFQQBMGxACC14BAn8CQCAAQQBMIAFEAAAAAAAAAABhcg0AA0AgACAIRg0BIAUgB0EDdGoiCSABIAIgBEEDdGorAwCiIAkrAwCgOQMAIAhBAWohCCAGIAdqIQcgAyAEaiEEDAALAAsL");function h(t){if(!(this instanceof h))return new h(t);if(!d(t))throw new TypeError(m("invalid argument. Must provide a WebAssembly memory instance. Value: `%s`.",t));return o.call(this,p,t,{env:{memory:t}}),this}function l(){return this instanceof l?(h.call(this,new i({initial:0})),this):new l}s(h,o),t(h.prototype,"main",(function(t,s,e,r,i,A){return this._instance.exports.c_daxpy(t,s,e,r,i,A),i})),t(h.prototype,"ndarray",(function(t,s,e,r,i,A,n,d){return this._instance.exports.c_daxpy_ndarray(t,s,e,r,i,A,n,d),A})),s(l,h),t(l.prototype,"main",(function(t,s,r,i,A,n){return this.ndarray(t,s,r,i,e(t,i),A,n,e(t,n))})),t(l.prototype,"ndarray",(function(t,s,e,i,d,o,m,a){var p,l,f;return l=(p=A(this,[n(t,e,i,d),n(t,o,m,a)]))[0],f=p[1],h.prototype.ndarray.call(this,t,s,l.ptr,l.stride,l.offset,f.ptr,f.stride,f.offset),f.copy&&r(t,this.view,f.stride*f.BYTES_PER_ELEMENT,f.ptr,o,m,a,!0),o}));var f=new l;f.initializeSync(),t(f,"Module",h);export{h as Module,f as default};
//# sourceMappingURL=index.mjs.map
