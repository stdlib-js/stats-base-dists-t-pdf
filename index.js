// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(u.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,s=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",d=p&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return v.call(r);t=r[b],i=b,n=null!=(o=r)&&s.call(o,i);try{r[b]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[b]=t:delete r[b],e}:function(r){return v.call(r)},w="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,_="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(w&&t instanceof Uint32Array||"[object Uint32Array]"===d(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m,g=y,h="function"==typeof Float64Array,N="function"==typeof Float64Array?Float64Array:null,U="function"==typeof Float64Array?Float64Array:void 0;m=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N([1,3.14,-3.14,NaN]),t=n,r=(h&&t instanceof Float64Array||"[object Float64Array]"===d(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var j,I=m,O="function"==typeof Uint8Array,S="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;j=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,256,257]),t=n,r=(O&&t instanceof Uint8Array||"[object Uint8Array]"===d(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=j,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,P="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),t=n,r=(H&&t instanceof Uint16Array||"[object Uint16Array]"===d(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L,M={uint16:F,uint8:T};(L=new M.uint16(1))[0]=4660;var V=52===new M.uint8(L.buffer)[0],W=!0===V?1:0,x=new I(1),k=new g(x.buffer);function Y(r){return x[0]=r,k[W]}var q=!0===V?1:0,C=new I(1),z=new g(C.buffer);function B(r,n){return C[0]=r,z[q]=n>>>0,C[0]}var D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY,K=1023,Q=.6931471803691238,R=1.9082149292705877e-10,X=Math.sqrt;function Z(r){return Math.abs(r)}var $=Math.floor,rr=Math.ceil;function nr(r){return r<0?rr(r):$(r)}function tr(r){return r===D||r===J}var er,or,ir=2147483647;!0===V?(er=1,or=0):(er=0,or=1);var ur,fr,ar={HIGH:er,LOW:or},cr=new I(1),lr=new g(cr.buffer),yr=ar.HIGH,pr=ar.LOW;function vr(r,n,t,e){return cr[0]=r,n[e]=lr[yr],n[e+t]=lr[pr],n}function sr(r){return vr(r,[0,0],1,0)}c(sr,"assign",vr),!0===V?(ur=1,fr=0):(ur=0,fr=1);var br={HIGH:ur,LOW:fr},dr=new I(1),wr=new g(dr.buffer),Ar=br.HIGH,_r=br.LOW;function mr(r,n){return wr[Ar]=r,wr[_r]=n,dr[0]}var gr=[0,0];function hr(r,n){var t,e;return sr.assign(r,gr,1,0),t=gr[0],t&=ir,e=Y(n),mr(t|=e&=2147483648,gr[1])}function Nr(r,n,t,e){return l(r)||tr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Z(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Nr(r,[0,0],1,0)}),"assign",Nr);var Ur=[0,0],jr=[0,0];function Ir(r,n){var t,e;return 0===n||0===r||l(r)||tr(r)?r:(Nr(r,Ur,1,0),n+=Ur[1],n+=function(r){var n=Y(r);return(n=(2146435072&n)>>>20)-K|0}(r=Ur[0]),n<-1074?hr(0,r):n>1023?r<0?J:D:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,sr.assign(r,jr,1,0),t=jr[0],t&=2148532223,e*mr(t|=n+K<<20,jr[1])))}var Or=1.4426950408889634,Sr=1/(1<<28);function Er(r){var n;return l(r)||r===D?r:r===J?0:r>709.782712893384?D:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Sr?1+r:function(r,n,t){var e,o,i,u;return Ir(1-(n-(e=r-n)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=nr(r<0?Or*r-.5:Or*r+.5)),1.9082149292705877e-10*n,n)}function Fr(r){return $(r)===r}function Tr(r){return Fr(r/2)}function Hr(r){return Tr(r>0?r-1:r+1)}var Gr=!0===V?0:1,Pr=new I(1),Lr=new g(Pr.buffer);function Mr(r,n){return Pr[0]=r,Lr[Gr]=n>>>0,Pr[0]}function Vr(r){return 0|r}var Wr=1048576,xr=[1,1.5],kr=[0,.5849624872207642],Yr=[0,1.350039202129749e-8],qr=1048575,Cr=1048576,zr=1083179008,Br=1e300,Dr=1e-300,Jr=[0,0],Kr=[0,0];function Qr(r,n){var t,e,o,i,u,f,a,c,y,p,v,s,b,d;if(l(r)||l(n))return NaN;if(sr.assign(n,Jr,1,0),u=Jr[0],0===Jr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return X(r);if(-.5===n)return 1/X(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(tr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Z(r)<1==(n===D)?0:D}(r,n)}if(sr.assign(r,Jr,1,0),i=Jr[0],0===Jr[1]){if(0===i)return function(r,n){return n===J?D:n===D?0:n>0?Hr(n)?r:0:Hr(n)?hr(D,r):D}(r,n);if(1===r)return 1;if(-1===r&&Hr(n))return-1;if(tr(r))return r===J?Qr(-0,-n):n<0?0:D}if(r<0&&!1===Fr(n))return(r-r)/(r-r);if(o=Z(r),t=i&ir|0,e=u&ir|0,a=u>>>31|0,f=(f=i>>>31|0)&&Hr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Y(r)&ir)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Br*Br:f*Dr*Dr;if(t>1072693248)return 0===a?f*Br*Br:f*Dr*Dr;v=function(r,n){var t,e,o,i,u,f;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Mr(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(Kr,o)}else v=function(r,n,t){var e,o,i,u,f,a,c,l,y,p,v,s,b,d,w,A,_,m,g,h,N;return m=0,t<Wr&&(m-=53,t=Y(n*=9007199254740992)),m+=(t>>20)-K|0,t=1072693248|(g=1048575&t|0),g<=235662?h=0:g<767610?h=1:(h=0,m+=1,t-=Wr),u=Mr(o=(A=(n=B(n,t))-(c=xr[h]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=B(0,e+=h<<18),w=(i=o*o)*i*(0===(N=i)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),a=Mr(a=3+(i=u*u)+(w+=(f=_*(A-u*a-u*(n-(a-c))))*(u+o)),0),b=(v=-7.028461650952758e-9*(y=Mr(y=(A=u*a)+(_=f*a+(w-(a-3-i))*o),0))+.9617966939259756*(_-(y-A))+Yr[h])-((s=Mr(s=(p=.9617967009544373*y)+v+(l=kr[h])+(d=m),0))-d-l-p),r[0]=s,r[1]=b,r}(Kr,o,t);if(s=(p=(n-(c=Mr(n,0)))*v[0]+n*v[1])+(y=c*v[0]),sr.assign(s,Jr,1,0),b=Vr(Jr[0]),d=Vr(Jr[1]),b>=zr){if(0!=(b-zr|d))return f*Br*Br;if(p+8008566259537294e-32>s-y)return f*Br*Br}else if((b&ir)>=1083231232){if(0!=(b-3230714880|d))return f*Dr*Dr;if(p<=s-y)return f*Dr*Dr}return s=function(r,n,t){var e,o,i,u,f,a,c,l,y,p;return y=((l=r&ir|0)>>20)-K|0,c=0,l>1071644672&&(o=B(0,((c=r+(Cr>>y+1)>>>0)&~(qr>>(y=((c&ir)>>20)-K|0)))>>>0),c=(c&qr|Cr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=Vr(r=Y(a=1-((a=(i=.6931471824645996*(o=Mr(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Ir(a,c):B(a,r)}(b,y,p),f*s}var Rr=2220446049250313e-31;function Xr(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)}var Zr=10.900511;function $r(r,n){var t,e,o,i,u,f,a;return l(r)||l(n)||r<0||n<0?NaN:1===n?1/r:1===r?1/n:(a=r+n)<Rr?(u=a/r,u/=n):a===r&&n<Rr?1/n:a===n&&r<Rr?1/r:(r<n&&(f=n,n=r,r=f),e=r+Zr-.5,o=n+Zr-.5,i=a+Zr-.5,u=Xr(r)*(Xr(n)/Xr(a)),Z(n*(t=r-.5-n))<100*i&&r>100?u*=Er(t*function(r){var n,t,e,o,i,u,f,a,c,y;if(r<-1||l(r))return NaN;if(-1===r)return J;if(r===D)return r;if(0===r)return r;if(y=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,o=r,t=1)}return 0!==y&&(e<9007199254740992?(i=(y=((t=Y(c=1+r))>>20)-K)>0?1-(c-r):r-(c-1),i/=c):(y=((t=Y(c=r))>>20)-K,i=0),(t&=1048575)<434334?c=B(c,1072693248|t):(y+=1,c=B(c,1071644672|t),t=1048576-t>>2),o=c-1),n=.5*o*o,0===t?0===o?y*Q+(i+=y*R):y*Q-((a=n*(1-.6666666666666666*o))-(y*R+i)-o):(a=(f=(u=o/(2+o))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===y?o-(n-u*(n+a)):y*Q-(n-(u*(n+a)+(y*R+i))-o))}(-n/i)):u*=Qr(e/i,t),u*=Qr(i>1e10?e/i*(o/i):e*o/(i*i),n),u*=X(2.718281828459045/o))}function rn(r,n){var t;return l(r)||l(n)||n<=0?NaN:(t=X(n)*$r(n/2,.5),Qr(n/(n+Qr(r,2)),(1+n)/2)/t)}return c(rn,"factory",(function(r){var n,t,e;return l(r)||r<=0?(e=NaN,function(){return e}):(t=X(r)*$r(r/2,.5),n=(1+r)/2,function(e){return l(e)?NaN:Qr(r/(r+Qr(e,2)),n)/t})})),rn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=n();
//# sourceMappingURL=index.js.map
