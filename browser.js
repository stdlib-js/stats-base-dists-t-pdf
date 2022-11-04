// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,b=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",w=p&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return v.call(r);t=r[d],u=d,n=null!=(o=r)&&b.call(o,u);try{r[d]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[d]=t:delete r[d],e}:function(r){return v.call(r)},s="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,_="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(s&&t instanceof Uint32Array||"[object Uint32Array]"===w(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m,h=y,N="function"==typeof Float64Array,U="function"==typeof Float64Array?Float64Array:null,g="function"==typeof Float64Array?Float64Array:void 0;m=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U([1,3.14,-3.14,NaN]),t=n,r=(N&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var j,I=m,O="function"==typeof Uint8Array,S="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;j=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,256,257]),t=n,r=(O&&t instanceof Uint8Array||"[object Uint8Array]"===w(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=j,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,P="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),t=n,r=(H&&t instanceof Uint16Array||"[object Uint16Array]"===w(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L,M={uint16:F,uint8:T};(L=new M.uint16(1))[0]=4660;var V=52===new M.uint8(L.buffer)[0],W=!0===V?1:0,x=new I(1),k=new h(x.buffer);function Y(r){return x[0]=r,k[W]}var q=!0===V?1:0,C=new I(1),z=new h(C.buffer);function B(r,n){return C[0]=r,z[q]=n>>>0,C[0]}var D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY,K=1023,Q=.6931471803691238,R=1.9082149292705877e-10,X=Math.sqrt;function Z(r){return Math.abs(r)}var $,rr,nr=Math.floor,tr=Math.ceil;function er(r){return r<0?tr(r):nr(r)}function or(r){return r===D||r===J}!0===V?($=1,rr=0):($=0,rr=1);var ur,ir,fr={HIGH:$,LOW:rr},ar=new I(1),cr=new h(ar.buffer),lr=fr.HIGH,yr=fr.LOW;function pr(r,n){return ar[0]=n,r[0]=cr[lr],r[1]=cr[yr],r}function vr(r,n){return 1===arguments.length?pr([0,0],r):pr(r,n)}!0===V?(ur=1,ir=0):(ur=0,ir=1);var br={HIGH:ur,LOW:ir},dr=new I(1),wr=new h(dr.buffer),sr=br.HIGH,Ar=br.LOW;function _r(r,n){return wr[sr]=r,wr[Ar]=n,dr[0]}var mr=[0,0];function hr(r,n){var t,e;return vr(mr,r),t=mr[0],t&=2147483647,e=Y(n),_r(t|=e&=2147483648,mr[1])}function Nr(r,n,t,e){return l(r)||or(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Z(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Nr(r,[0,0],1,0)}),"assign",Nr);var Ur=[0,0],gr=[0,0];function jr(r,n){var t,e;return 0===n||0===r||l(r)||or(r)?r:(Nr(r,Ur,1,0),n+=Ur[1],n+=function(r){var n=Y(r);return(n=(2146435072&n)>>>20)-K|0}(r=Ur[0]),n<-1074?hr(0,r):n>1023?r<0?J:D:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,vr(gr,r),t=gr[0],t&=2148532223,e*_r(t|=n+K<<20,gr[1])))}var Ir=1.4426950408889634,Or=1/(1<<28);function Sr(r){var n;return l(r)||r===D?r:r===J?0:r>709.782712893384?D:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Or?1+r:function(r,n,t){var e,o,u,i;return jr(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=er(r<0?Ir*r-.5:Ir*r+.5)),1.9082149292705877e-10*n,n)}function Er(r){return nr(r)===r}function Fr(r){return Er(r/2)}function Tr(r){return Fr(r>0?r-1:r+1)}var Hr=!0===V?0:1,Gr=new I(1),Pr=new h(Gr.buffer);function Lr(r,n){return Gr[0]=r,Pr[Hr]=n>>>0,Gr[0]}function Mr(r){return 0|r}var Vr=1048576,Wr=[1,1.5],xr=[0,.5849624872207642],kr=[0,1.350039202129749e-8],Yr=2147483647,qr=1048575,Cr=1048576,zr=2147483647,Br=1083179008,Dr=1e300,Jr=1e-300,Kr=[0,0],Qr=[0,0];function Rr(r,n){var t,e,o,u,i,f,a,c,y,p,v,b,d,w;if(l(r)||l(n))return NaN;if(vr(Kr,n),i=Kr[0],0===Kr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return X(r);if(-.5===n)return 1/X(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(or(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Z(r)<1==(n===D)?0:D}(r,n)}if(vr(Kr,r),u=Kr[0],0===Kr[1]){if(0===u)return function(r,n){return n===J?D:n===D?0:n>0?Tr(n)?r:0:Tr(n)?hr(D,r):D}(r,n);if(1===r)return 1;if(-1===r&&Tr(n))return-1;if(or(r))return r===J?Rr(-0,-n):n<0?0:D}if(r<0&&!1===Er(n))return(r-r)/(r-r);if(o=Z(r),t=u&zr|0,e=i&zr|0,a=i>>>31|0,f=(f=u>>>31|0)&&Tr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Y(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Dr*Dr:f*Jr*Jr;if(t>1072693248)return 0===a?f*Dr*Dr:f*Jr*Jr;v=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Lr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Qr,o)}else v=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,b,d,w,s,A,_,m,h,N,U;return m=0,t<Vr&&(m-=53,t=Y(n*=9007199254740992)),m+=(t>>20)-K|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,m+=1,t-=Vr),i=Lr(o=(A=(n=B(n,t))-(c=Wr[N]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=B(0,e+=N<<18),s=(u=o*o)*u*(0===(U=u)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=Lr(a=3+(u=i*i)+(s+=(f=_*(A-i*a-i*(n-(a-c))))*(i+o)),0),d=(v=-7.028461650952758e-9*(y=Lr(y=(A=i*a)+(_=f*a+(s-(a-3-u))*o),0))+.9617966939259756*(_-(y-A))+kr[N])-((b=Lr(b=(p=.9617967009544373*y)+v+(l=xr[N])+(w=m),0))-w-l-p),r[0]=b,r[1]=d,r}(Qr,o,t);if(p=(n-(c=Lr(n,0)))*v[0]+n*v[1],y=c*v[0],vr(Kr,b=p+y),d=Mr(Kr[0]),w=Mr(Kr[1]),d>=Br){if(0!=(d-Br|w))return f*Dr*Dr;if(p+8008566259537294e-32>b-y)return f*Dr*Dr}else if((d&zr)>=1083231232){if(0!=(d-3230714880|w))return f*Jr*Jr;if(p<=b-y)return f*Jr*Jr}return b=function(r,n,t){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&Yr|0)>>20)-K|0,c=0,l>1071644672&&(o=B(0,((c=r+(Cr>>y+1)>>>0)&~(qr>>(y=((c&Yr)>>20)-K|0)))>>>0),c=(c&qr|Cr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=Mr(r=Y(a=1-((a=(u=.6931471824645996*(o=Lr(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?jr(a,c):B(a,r)}(d,y,p),f*b}var Xr=2220446049250313e-31;function Zr(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)}var $r=10.900511;function rn(r,n){var t,e,o,u,i,f,a;return l(r)||l(n)||r<0||n<0?NaN:1===n?1/r:1===r?1/n:(a=r+n)<Xr?(i=a/r,i/=n):a===r&&n<Xr?1/n:a===n&&r<Xr?1/r:(r<n&&(f=n,n=r,r=f),e=r+$r-.5,o=n+$r-.5,u=a+$r-.5,i=Zr(r)*(Zr(n)/Zr(a)),Z(n*(t=r-.5-n))<100*u&&r>100?i*=Sr(t*function(r){var n,t,e,o,u,i,f,a,c,y;if(r<-1||l(r))return NaN;if(-1===r)return J;if(r===D)return r;if(0===r)return r;if(y=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,o=r,t=1)}return 0!==y&&(e<9007199254740992?(u=(y=((t=Y(c=1+r))>>20)-K)>0?1-(c-r):r-(c-1),u/=c):(y=((t=Y(c=r))>>20)-K,u=0),(t&=1048575)<434334?c=B(c,1072693248|t):(y+=1,c=B(c,1071644672|t),t=1048576-t>>2),o=c-1),n=.5*o*o,0===t?0===o?y*Q+(u+=y*R):y*Q-((a=n*(1-.6666666666666666*o))-(y*R+u)-o):(a=(f=(i=o/(2+o))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===y?o-(n-i*(n+a)):y*Q-(n-(i*(n+a)+(y*R+u))-o))}(-n/u)):i*=Rr(e/u,t),i*=Rr(u>1e10?e/u*(o/u):e*o/(u*u),n),i*=X(2.718281828459045/o))}function nn(r,n){var t;return l(r)||l(n)||n<=0?NaN:(t=X(n)*rn(n/2,.5),Rr(n/(n+Rr(r,2)),(1+n)/2)/t)}return c(nn,"factory",(function(r){var n,t,e;return l(r)||r<=0?(e=NaN,function(){return e}):(t=X(r)*rn(r/2,.5),n=(1+r)/2,function(e){return l(e)?NaN:Rr(r/(r+Rr(e,2)),n)/t})})),nn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=n();
//# sourceMappingURL=browser.js.map
