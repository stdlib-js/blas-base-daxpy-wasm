"use strict";var y=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var x=y(function(K,h){
var B=require("path").resolve,V=require('@stdlib/fs-read-wasm/dist').sync,g=V(B(__dirname,"..","src","main.wasm"));h.exports=g
});var q=y(function(Q,M){
var j=require('@stdlib/assert-is-wasm-memory/dist'),m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=require('@stdlib/utils-inherit/dist'),w=require('@stdlib/wasm-module-wrapper/dist'),D=require('@stdlib/error-tools-fmtprodmsg/dist'),L=x();function o(e){if(!(this instanceof o))return new o(e);if(!j(e))throw new TypeError(D("invalid argument. Must provide a WebAssembly memory instance. Value: `%s`.",e));return w.call(this,L,e,{env:{memory:e}}),this}z(o,w);m(o.prototype,"main",function(r,s,u,i,a,t){return this._instance.exports.c_daxpy(r,s,u,i,a,t),a});m(o.prototype,"ndarray",function(r,s,u,i,a,t,v,d){return this._instance.exports.c_daxpy_ndarray(r,s,u,i,a,t,v,d),t});M.exports=o
});var W=y(function(U,b){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=require('@stdlib/utils-inherit/dist'),_=require('@stdlib/strided-base-stride2offset/dist'),k=require('@stdlib/strided-base-read-dataview/dist').ndarray,C=require('@stdlib/wasm-memory/dist'),F=require('@stdlib/wasm-base-arrays2ptrs/dist'),E=require('@stdlib/wasm-base-strided2object/dist'),f=q();function p(){return this instanceof p?(f.call(this,new C({initial:0})),this):new p}P(p,f);R(p.prototype,"main",function(r,s,u,i,a,t){return this.ndarray(r,s,u,i,_(r,i),a,t,_(r,t))});R(p.prototype,"ndarray",function(r,s,u,i,a,t,v,d){var l,c,n;return l=F(this,[E(r,u,i,a),E(r,t,v,d)]),c=l[0],n=l[1],f.prototype.ndarray.call(this,r,s,c.ptr,c.stride,c.offset,n.ptr,n.stride,n.offset),n.copy&&k(r,this.view,n.stride*n.BYTES_PER_ELEMENT,n.ptr,t,v,d,!0),t});b.exports=p
});var S=y(function(Z,O){
var G=W(),A=new G;A.initializeSync();O.exports=A
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=S(),I=q();H(T,"Module",I);module.exports=T;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
