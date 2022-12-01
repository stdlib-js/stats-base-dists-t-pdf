// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,o=t.__lookupGetter__,a=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(o.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,f.get),v&&i&&i.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var v=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;var b="function"==typeof Symbol?Symbol.toStringTag:"";var s=y&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,i;if(null==r)return v.call(r);t=r[b],i=b,n=null!=(u=r)&&p.call(u,i);try{r[b]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[b]=t:delete r[b],e}:function(r){return v.call(r)},w="function"==typeof Uint32Array;var A="function"==typeof Uint32Array?Uint32Array:null;var _,m="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(w&&t instanceof Uint32Array||"[object Uint32Array]"===s(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var d=_,N="function"==typeof Float64Array;var U="function"==typeof Float64Array?Float64Array:null;var g,h="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U([1,3.14,-3.14,NaN]),t=n,r=(N&&t instanceof Float64Array||"[object Float64Array]"===s(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var j=g,I="function"==typeof Uint8Array;var O="function"==typeof Uint8Array?Uint8Array:null;var S,E="function"==typeof Uint8Array?Uint8Array:void 0;S=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,256,257]),t=n,r=(I&&t instanceof Uint8Array||"[object Uint8Array]"===s(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F=S,H="function"==typeof Uint16Array;var T="function"==typeof Uint16Array?Uint16Array:null;var G,P="function"==typeof Uint16Array?Uint16Array:void 0;G=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,65536,65537]),t=n,r=(H&&t instanceof Uint16Array||"[object Uint16Array]"===s(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L,M={uint16:G,uint8:F};(L=new M.uint16(1))[0]=4660;var V=52===new M.uint8(L.buffer)[0],W=!0===V?1:0,k=new j(1),x=new d(k.buffer);function Y(r){return k[0]=r,x[W]}var q=!0===V?1:0,C=new j(1),z=new d(C.buffer);function B(r,n){return C[0]=r,z[q]=n>>>0,C[0]}var D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY;var K=.6931471803691238,Q=1.9082149292705877e-10;var R=Math.sqrt;function X(r){return Math.abs(r)}var Z=Math.floor,$=Math.ceil;function rr(r){return r<0?$(r):Z(r)}function nr(r){return r===D||r===J}var tr,er;!0===V?(tr=1,er=0):(tr=0,er=1);var ur,ir,or={HIGH:tr,LOW:er},ar=new j(1),fr=new d(ar.buffer),cr=or.HIGH,lr=or.LOW;function yr(r,n,t,e){return ar[0]=r,n[e]=fr[cr],n[e+t]=fr[lr],n}function vr(r){return yr(r,[0,0],1,0)}c(vr,"assign",yr),!0===V?(ur=1,ir=0):(ur=0,ir=1);var pr={HIGH:ur,LOW:ir},br=new j(1),sr=new d(br.buffer),wr=pr.HIGH,Ar=pr.LOW;function _r(r,n){return sr[wr]=r,sr[Ar]=n,br[0]}var mr=[0,0];function dr(r,n){var t,e;return vr.assign(r,mr,1,0),t=mr[0],t&=2147483647,e=Y(n),_r(t|=e&=2147483648,mr[1])}function Nr(r,n,t,e){return l(r)||nr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&X(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Nr(r,[0,0],1,0)}),"assign",Nr);var Ur=[0,0],gr=[0,0];function hr(r,n){var t,e;return 0===n||0===r||l(r)||nr(r)?r:(Nr(r,Ur,1,0),n+=Ur[1],n+=function(r){var n=Y(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Ur[0]),n<-1074?dr(0,r):n>1023?r<0?J:D:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,vr.assign(r,gr,1,0),t=gr[0],t&=2148532223,e*_r(t|=n+1023<<20,gr[1])))}function jr(r){var n;return l(r)||r===D?r:r===J?0:r>709.782712893384?D:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,i,o;return hr(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=rr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Ir(r){return Z(r)===r}function Or(r){return Ir(r/2)}function Sr(r){return Or(r>0?r-1:r+1)}var Er=!0===V?0:1,Fr=new j(1),Hr=new d(Fr.buffer);function Tr(r,n){return Fr[0]=r,Hr[Er]=n>>>0,Fr[0]}function Gr(r){return 0|r}var Pr=[1,1.5],Lr=[0,.5849624872207642],Mr=[0,1.350039202129749e-8];var Vr=1e300,Wr=1e-300,kr=[0,0],xr=[0,0];function Yr(r,n){var t,e,u,i,o,a,f,c,y,v,p,b,s,w;if(l(r)||l(n))return NaN;if(vr.assign(n,kr,1,0),o=kr[0],0===kr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return R(r);if(-.5===n)return 1/R(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(nr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:X(r)<1==(n===D)?0:D}(r,n)}if(vr.assign(r,kr,1,0),i=kr[0],0===kr[1]){if(0===i)return function(r,n){return n===J?D:n===D?0:n>0?Sr(n)?r:0:Sr(n)?dr(D,r):D}(r,n);if(1===r)return 1;if(-1===r&&Sr(n))return-1;if(nr(r))return r===J?Yr(-0,-n):n<0?0:D}if(r<0&&!1===Ir(n))return(r-r)/(r-r);if(u=X(r),t=2147483647&i|0,e=2147483647&o|0,f=o>>>31|0,a=(a=i>>>31|0)&&Sr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Y(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?a*Vr*Vr:a*Wr*Wr;if(t>1072693248)return 0===f?a*Vr*Vr:a*Wr*Wr;p=function(r,n){var t,e,u,i,o,a;return t=(o=1.9259629911266175e-8*(u=n-1)-u*u*(0===(a=u)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=Tr(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r}(xr,u)}else p=function(r,n,t){var e,u,i,o,a,f,c,l,y,v,p,b,s,w,A,_,m,d,N,U,g;return d=0,t<1048576&&(d-=53,t=Y(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(N=1048575&t|0),N<=235662?U=0:N<767610?U=1:(U=0,d+=1,t-=1048576),o=Tr(u=(_=(n=B(n,t))-(c=Pr[U]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),f=B(0,e+=U<<18),A=(i=u*u)*i*(0===(g=i)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),f=Tr(f=3+(i=o*o)+(A+=(a=m*(_-o*f-o*(n-(f-c))))*(o+u)),0),s=(p=-7.028461650952758e-9*(y=Tr(y=(_=o*f)+(m=a*f+(A-(f-3-i))*u),0))+.9617966939259756*(m-(y-_))+Mr[U])-((b=Tr(b=(v=.9617967009544373*y)+p+(l=Lr[U])+(w=d),0))-w-l-v),r[0]=b,r[1]=s,r}(xr,u,t);if(b=(v=(n-(c=Tr(n,0)))*p[0]+n*p[1])+(y=c*p[0]),vr.assign(b,kr,1,0),s=Gr(kr[0]),w=Gr(kr[1]),s>=1083179008){if(0!=(s-1083179008|w))return a*Vr*Vr;if(v+8008566259537294e-32>b-y)return a*Vr*Vr}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|w))return a*Wr*Wr;if(v<=b-y)return a*Wr*Wr}return b=function(r,n,t){var e,u,i,o,a,f,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=i=B(0,e)),r=Gr(r=Y(c=1-((c=(o=.6931471824645996*(i=Tr(i=t+n,0)))+(a=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((f=a-(c-o))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?hr(c,l):B(c,r)}(s,y,v),a*b}function qr(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)}var Cr=10.900511;function zr(r,n){var t,e,u,i,o,a,f;return l(r)||l(n)||r<0||n<0?NaN:1===n?1/r:1===r?1/n:(f=r+n)<2220446049250313e-31?(o=f/r,o/=n):f===r&&n<2220446049250313e-31?1/n:f===n&&r<2220446049250313e-31?1/r:(r<n&&(a=n,n=r,r=a),e=r+Cr-.5,u=n+Cr-.5,i=f+Cr-.5,o=qr(r)*(qr(n)/qr(f)),X(n*(t=r-.5-n))<100*i&&r>100?o*=jr(t*function(r){var n,t,e,u,i,o,a,f,c,y;if(r<-1||l(r))return NaN;if(-1===r)return J;if(r===D)return r;if(0===r)return r;if(y=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,u=r,t=1)}return 0!==y&&(e<9007199254740992?(i=(y=((t=Y(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),i/=c):(y=((t=Y(c=r))>>20)-1023,i=0),(t&=1048575)<434334?c=B(c,1072693248|t):(y+=1,c=B(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?y*K+(i+=y*Q):y*K-((f=n*(1-.6666666666666666*u))-(y*Q+i)-u):(f=(a=(o=u/(2+u))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(a),0===y?u-(n-o*(n+f)):y*K-(n-(o*(n+f)+(y*Q+i))-u))}(-n/i)):o*=Yr(e/i,t),o*=Yr(i>1e10?e/i*(u/i):e*u/(i*i),n),o*=R(2.718281828459045/u))}function Br(r,n){var t;return l(r)||l(n)||n<=0?NaN:(t=R(n)*zr(n/2,.5),Yr(n/(n+Yr(r,2)),(1+n)/2)/t)}function Dr(r){var n,t,e;return l(r)||r<=0?(e=NaN,function(){return e}):(t=R(r)*zr(r/2,.5),n=(1+r)/2,function(e){if(l(e))return NaN;return Yr(r/(r+Yr(e,2)),n)/t})}c(Br,"factory",Dr);export{Br as default,Dr as factory};
//# sourceMappingURL=mod.js.map
