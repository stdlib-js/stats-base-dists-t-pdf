// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,v,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var E=String.fromCharCode,N=isNaN,U=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,c,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(e=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,N(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!N(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=x.exec(r);t;)(e=r.slice(i,x.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=x.lastIndex,t=x.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R,M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Z=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"",z=M&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Z.call(r);n=r[q],a=q,e=null!=(i=r)&&X.call(i,a);try{r[q]=void 0}catch(e){return Z.call(r)}return t=Z.call(r),e?r[q]=n:delete r[q],t}:function(r){return Z.call(r)},B="function"==typeof Uint32Array,D="function"==typeof Uint32Array?Uint32Array:null,J="function"==typeof Uint32Array?Uint32Array:void 0;R=function(){var r,e,n;if("function"!=typeof D)return!1;try{e=new D(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(B&&n instanceof Uint32Array||"[object Uint32Array]"===z(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K,Q=R,rr="function"==typeof Float64Array,er="function"==typeof Float64Array?Float64Array:null,nr="function"==typeof Float64Array?Float64Array:void 0;K=function(){var r,e,n;if("function"!=typeof er)return!1;try{e=new er([1,3.14,-3.14,NaN]),n=e,r=(rr&&n instanceof Float64Array||"[object Float64Array]"===z(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var tr,ir=K,ar="function"==typeof Uint8Array,or="function"==typeof Uint8Array?Uint8Array:null,ur="function"==typeof Uint8Array?Uint8Array:void 0;tr=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,256,257]),n=e,r=(ar&&n instanceof Uint8Array||"[object Uint8Array]"===z(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr,cr=tr,sr="function"==typeof Uint16Array,lr="function"==typeof Uint16Array?Uint16Array:null,pr="function"==typeof Uint16Array?Uint16Array:void 0;fr=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(sr&&n instanceof Uint16Array||"[object Uint16Array]"===z(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr,gr={uint16:fr,uint8:cr};(yr=new gr.uint16(1))[0]=4660;var dr=52===new gr.uint8(yr.buffer)[0],vr=!0===dr?1:0,hr=new ir(1),wr=new Q(hr.buffer);function br(r){return hr[0]=r,wr[vr]}var mr=!0===dr?1:0,Ar=new ir(1),_r=new Q(Ar.buffer);function Er(r,e){return Ar[0]=r,_r[mr]=e>>>0,Ar[0]}var Nr=Number.POSITIVE_INFINITY,Ur=Number.NEGATIVE_INFINITY,Ir=1023,Sr=.6931471803691238,xr=1.9082149292705877e-10,kr=Math.sqrt;function Fr(r){return Math.abs(r)}var jr=Math.floor,Tr=Math.ceil;function Or(r){return r<0?Tr(r):jr(r)}function Vr(r){return r===Nr||r===Ur}var $r,Gr,Hr=2147483647;!0===dr?($r=1,Gr=0):($r=0,Gr=1);var Wr,Cr,Lr={HIGH:$r,LOW:Gr},Pr=new ir(1),Rr=new Q(Pr.buffer),Mr=Lr.HIGH,Zr=Lr.LOW;function Xr(r,e,n,t){return Pr[0]=r,e[t]=Rr[Mr],e[t+n]=Rr[Zr],e}function Yr(r){return Xr(r,[0,0],1,0)}L(Yr,"assign",Xr),!0===dr?(Wr=1,Cr=0):(Wr=0,Cr=1);var qr={HIGH:Wr,LOW:Cr},zr=new ir(1),Br=new Q(zr.buffer),Dr=qr.HIGH,Jr=qr.LOW;function Kr(r,e){return Br[Dr]=r,Br[Jr]=e,zr[0]}var Qr=[0,0];function re(r,e){var n,t;return Yr.assign(r,Qr,1,0),n=Qr[0],n&=Hr,t=br(e),Kr(n|=t&=2147483648,Qr[1])}function ee(r,e,n,t){return P(r)||Vr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Fr(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return ee(r,[0,0],1,0)}),"assign",ee);var ne=[0,0],te=[0,0];function ie(r,e){var n,t;return 0===e||0===r||P(r)||Vr(r)?r:(ee(r,ne,1,0),e+=ne[1],e+=function(r){var e=br(r);return(e=(2146435072&e)>>>20)-Ir|0}(r=ne[0]),e<-1074?re(0,r):e>1023?r<0?Ur:Nr:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Yr.assign(r,te,1,0),n=te[0],n&=2148532223,t*Kr(n|=e+Ir<<20,te[1])))}var ae=1.4426950408889634,oe=1/(1<<28);function ue(r){var e;return P(r)||r===Nr?r:r===Ur?0:r>709.782712893384?Nr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<oe?1+r:function(r,e,n){var t,i,a,o;return ie(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=Or(r<0?ae*r-.5:ae*r+.5)),1.9082149292705877e-10*e,e)}function fe(r){return jr(r)===r}function ce(r){return fe(r/2)}function se(r){return ce(r>0?r-1:r+1)}var le=!0===dr?0:1,pe=new ir(1),ye=new Q(pe.buffer);function ge(r,e){return pe[0]=r,ye[le]=e>>>0,pe[0]}function de(r){return 0|r}var ve=1048576,he=[1,1.5],we=[0,.5849624872207642],be=[0,1.350039202129749e-8],me=1048575,Ae=1048576,_e=1083179008,Ee=1e300,Ne=1e-300,Ue=[0,0],Ie=[0,0];function Se(r,e){var n,t,i,a,o,u,f,c,s,l,p,y,g,d;if(P(r)||P(e))return NaN;if(Yr.assign(e,Ue,1,0),o=Ue[0],0===Ue[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return kr(r);if(-.5===e)return 1/kr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Vr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Fr(r)<1==(e===Nr)?0:Nr}(r,e)}if(Yr.assign(r,Ue,1,0),a=Ue[0],0===Ue[1]){if(0===a)return function(r,e){return e===Ur?Nr:e===Nr?0:e>0?se(e)?r:0:se(e)?re(Nr,r):Nr}(r,e);if(1===r)return 1;if(-1===r&&se(e))return-1;if(Vr(r))return r===Ur?Se(-0,-e):e<0?0:Nr}if(r<0&&!1===fe(e))return(r-r)/(r-r);if(i=Fr(r),n=a&Hr|0,t=o&Hr|0,f=o>>>31|0,u=(u=a>>>31|0)&&se(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(br(r)&Hr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*Ee*Ee:u*Ne*Ne;if(n>1072693248)return 0===f?u*Ee*Ee:u*Ne*Ne;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=ge(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Ie,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,d,v,h,w,b,m,A,_,E;return m=0,n<ve&&(m-=53,n=br(e*=9007199254740992)),m+=(n>>20)-Ir|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=ve),o=ge(i=(w=(e=Er(e,n))-(c=he[_]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=Er(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=ge(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=ge(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+be[_])-((g=ge(g=(p=.9617967009544373*l)+y+(s=we[_])+(v=m),0))-v-s-p),r[0]=g,r[1]=d,r}(Ie,i,n);if(y=(l=(e-(c=ge(e,0)))*p[0]+e*p[1])+(s=c*p[0]),Yr.assign(y,Ue,1,0),g=de(Ue[0]),d=de(Ue[1]),g>=_e){if(0!=(g-_e|d))return u*Ee*Ee;if(l+8008566259537294e-32>y-s)return u*Ee*Ee}else if((g&Hr)>=1083231232){if(0!=(g-3230714880|d))return u*Ne*Ne;if(l<=y-s)return u*Ne*Ne}return y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&Hr|0)>>20)-Ir|0,c=0,s>1071644672&&(i=Er(0,((c=r+(Ae>>l+1)>>>0)&~(me>>(l=((c&Hr)>>20)-Ir|0)))>>>0),c=(c&me|Ae)>>20-l>>>0,r<0&&(c=-c),e-=i),r=de(r=br(f=1-((f=(a=.6931471824645996*(i=ge(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?ie(f,c):Er(f,r)}(g,s,l),u*y}var xe=2220446049250313e-31;function ke(r){var e,n;return 0===r?1/0:((r<0?-r:r)<=1?(e=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(e=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),e/n)}var Fe=10.900511;function je(r,e){var n,t,i,a,o,u,f;return P(r)||P(e)||r<0||e<0?NaN:1===e?1/r:1===r?1/e:(f=r+e)<xe?(o=f/r,o/=e):f===r&&e<xe?1/e:f===e&&r<xe?1/r:(r<e&&(u=e,e=r,r=u),t=r+Fe-.5,i=e+Fe-.5,a=f+Fe-.5,o=ke(r)*(ke(e)/ke(f)),Fr(e*(n=r-.5-e))<100*a&&r>100?o*=ue(n*function(r){var e,n,t,i,a,o,u,f,c,s;if(r<-1||P(r))return NaN;if(-1===r)return Ur;if(r===Nr)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,n=1)}return 0!==s&&(t<9007199254740992?(a=(s=((n=br(c=1+r))>>20)-Ir)>0?1-(c-r):r-(c-1),a/=c):(s=((n=br(c=r))>>20)-Ir,a=0),(n&=1048575)<434334?c=Er(c,1072693248|n):(s+=1,c=Er(c,1071644672|n),n=1048576-n>>2),i=c-1),e=.5*i*i,0===n?0===i?s*Sr+(a+=s*xr):s*Sr-((f=e*(1-.6666666666666666*i))-(s*xr+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(e-o*(e+f)):s*Sr-(e-(o*(e+f)+(s*xr+a))-i))}(-e/a)):o*=Se(t/a,n),o*=Se(a>1e10?t/a*(i/a):t*i/(a*a),e),o*=kr(2.718281828459045/i))}function Te(r,e){var n;return P(r)||P(e)||e<=0?NaN:(n=kr(e)*je(e/2,.5),Se(e/(e+Se(r,2)),(1+e)/2)/n)}return L(Te,"factory",(function(r){var e,n,t;return P(r)||r<=0?(t=NaN,function(){return t}):(n=kr(r)*je(r/2,.5),e=(1+r)/2,function(t){return P(t)?NaN:Se(r/(r+Se(t,2)),e)/n})})),Te},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=e();
//# sourceMappingURL=browser.js.map
