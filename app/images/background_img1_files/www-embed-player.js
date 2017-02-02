(function(){var h,n=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function t(a,b){for(var c=a.split("."),d=b||n,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function aa(){}
function ba(a){a.Aa=void 0;a.getInstance=function(){return a.Aa?a.Aa:a.Aa=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function da(a){return"array"==ca(a)}
function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function u(a){return"string"==typeof a}
function fa(a){return"number"==typeof a}
function ga(a){return"function"==ca(a)}
function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ia(a){return a[ja]||(a[ja]=++ka)}
var ja="closure_uid_"+(1E9*Math.random()>>>0),ka=0;function la(a,b,c){return a.call.apply(a.bind,arguments)}
function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?la:ma;return v.apply(null,arguments)}
function na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function oa(a,b){for(var c in b)a[c]=b[c]}
var pa=Date.now||function(){return+new Date};
function w(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.cd=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function qa(a,b,c){this.i=c;this.g=a;this.w=b;this.f=0;this.b=null}
qa.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function ra(a,b){a.w(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function sa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,sa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
w(sa,Error);sa.prototype.name="CustomError";var ta;function ua(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function va(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function xa(a){var b=ya,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function za(){var a=Aa,b;for(b in a)return!1;return!0}
function Ba(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ca(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Da="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ea(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Da.length;f++)c=Da[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ga=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function Ha(a){a=p(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return Ga("0",Math.max(0,2-b))+a}
function Ia(a,b){return a<b?-1:a>b?1:0}
function Ja(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
function Ka(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function La(a){var b=u(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var Ma=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",Ma,void 0);var Na=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};q("yt.msgs_",Na,void 0);function Oa(a){Pa(Ma,arguments)}
function x(a,b){return a in Ma?Ma[a]:b}
function y(a,b){ga(a)&&(a=Qa(a));return window.setTimeout(a,b)}
function Ra(a){window.clearTimeout(a)}
function Qa(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Sa(b)}}:a}
function Sa(a,b){var c=t("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=x("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),Oa("ERRORS",c))}
function Pa(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var Ta=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},Ua="Microsoft Internet Explorer"==navigator.appName;function Va(a,b,c){a&&(a.dataset?a.dataset[Wa(b)]=c:a.setAttribute("data-"+b,c))}
function Xa(a,b){return a?a.dataset?a.dataset[Wa(b)]:a.getAttribute("data-"+b):null}
function Ya(a,b){a&&(a.dataset?delete a.dataset[Wa(b)]:a.removeAttribute("data-"+b))}
var Za={};function Wa(a){return Za[a]||(Za[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function z(){this.S=this.S;this.H=this.H}
z.prototype.S=!1;z.prototype.C=function(){return this.S};
z.prototype.dispose=function(){this.S||(this.S=!0,this.G())};
function $a(a,b){a.S?p(void 0)?b.call(void 0):b():(a.H||(a.H=[]),a.H.push(p(void 0)?v(b,void 0):b))}
z.prototype.G=function(){if(this.H)for(;this.H.length;)this.H.shift()()};
function ab(a){a&&"function"==typeof a.dispose&&a.dispose()}
function bb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ea(d)?bb.apply(null,d):ab(d)}}
;var cb;a:{var db=n.navigator;if(db){var eb=db.userAgent;if(eb){cb=eb;break a}}cb=""}function B(a){return-1!=cb.indexOf(a)}
;var fb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=u(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},hb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},ib=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function jb(a,b){var c;a:{c=a.length;for(var d=u(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:u(a)?a.charAt(c):a[c]}
function kb(a,b){return 0<=fb(a,b)}
function lb(a,b){var c=fb(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function mb(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function nb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ob(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ea(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function pb(a,b,c,d){return Array.prototype.splice.apply(a,qb(arguments,1))}
function qb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function rb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(da(d))for(var e=0;e<d.length;e+=8192)for(var f=rb.apply(null,qb(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;function sb(){this.f=this.b=null}
var ub=new qa(function(){return new tb},function(a){a.reset()},100);
sb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function tb(){this.next=this.scope=this.b=null}
tb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
tb.prototype.reset=function(){this.next=this.scope=this.b=null};function vb(a,b){isNaN(b)&&(b=void 0);var c=t("yt.scheduler.instance.addJob");return c?c(a,1,b):void 0===b?(a(),NaN):y(a,b||0)}
;function wb(){this.b="";this.f=xb}
wb.prototype.za=!0;wb.prototype.ya=function(){return this.b};
function yb(a){if(a instanceof wb&&a.constructor===wb&&a.f===xb)return a.b;ca(a);return"type_error:SafeUrl"}
var zb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Ab(a){if(a instanceof wb)return a;a=a.za?a.ya():String(a);zb.test(a)||(a="about:invalid#zClosurez");return Bb(a)}
var xb={};function Bb(a){var b=new wb;b.b=a;return b}
Bb("about:blank");function Cb(){this.b="";this.f=Db}
Cb.prototype.za=!0;Cb.prototype.ya=function(){return this.b};
var Db={};function Eb(){return B("Safari")&&!(Fb()||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))}
function Fb(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
;function Gb(a){n.setTimeout(function(){throw a;},0)}
var Hb;
function Ib(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.Oa;c.Oa=null;a()}};
return function(a){d.next={Oa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function Jb(){this.b="";this.f=Kb}
Jb.prototype.za=!0;Jb.prototype.ya=function(){return this.b};
function Lb(a){if(a instanceof Jb&&a.constructor===Jb&&a.f===Kb)return a.b;ca(a);return"type_error:SafeHtml"}
var Kb={};function Mb(a){var b=new Jb;b.b=a;return b}
Mb("<!DOCTYPE html>");Mb("");Mb("<br>");function Nb(a,b){Ob||Pb();Qb||(Ob(),Qb=!0);var c=Rb,d=ub.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Ob;function Pb(){if(-1!=String(n.Promise).indexOf("[native code]")){var a=n.Promise.resolve(void 0);Ob=function(){a.then(Sb)}}else Ob=function(){var a=Sb;
!ga(n.setImmediate)||n.Window&&n.Window.prototype&&!B("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(Hb||(Hb=Ib()),Hb(a)):n.setImmediate(a)}}
var Qb=!1,Rb=new sb;function Sb(){for(var a;a=Rb.remove();){try{a.b.call(a.scope)}catch(b){Gb(b)}ra(ub,a)}Qb=!1}
;function Tb(a,b){var c;c=b instanceof wb?b:Ab(b);a.href=yb(c)}
function Ub(a,b){a.rel="stylesheet";var c;b instanceof Cb&&b.constructor===Cb&&b.f===Db?c=b.b:(ca(b),c="type_error:TrustedResourceUrl");a.href=c}
;function D(a){z.call(this);this.w=1;this.g=[];this.i=0;this.b=[];this.f={};this.A=!!a}
w(D,z);h=D.prototype;h.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.w;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.w=e+3;d.push(e);return e};
function Vb(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.U(d),b.apply(void 0,arguments))},a)}
function Wb(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=jb(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.U(b)}}
h.U=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.g.push(a),this.b[a+1]=aa):(c&&lb(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
h.M=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Xb(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.g.length&&0==this.i)for(;c=this.g.pop();)this.U(c)}}return 0!=e}return!1};
function Xb(a,b,c){Nb(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.f[a];b&&(C(b,this.U,this),delete this.f[a])}else this.b.length=0,this.f={}};
h.fa=function(a){if(a){var b=this.f[a];return b?b.length:0}a=0;for(b in this.f)a+=this.fa(b);return a};
h.G=function(){D.B.G.call(this);this.clear();this.g.length=0};var Yb=t("yt.pubsub.instance_")||new D;D.prototype.subscribe=D.prototype.subscribe;D.prototype.unsubscribeByKey=D.prototype.U;D.prototype.publish=D.prototype.M;D.prototype.clear=D.prototype.clear;q("yt.pubsub.instance_",Yb,void 0);var Zb=t("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",Zb,void 0);var $b=t("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",$b,void 0);var ac=t("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",ac,void 0);
var bc=t("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",bc,void 0);function cc(a,b,c){var d=dc();if(d){var e=d.subscribe(a,function(){if(!bc||bc!=e){var d=arguments,g;g=function(){Zb[e]&&b.apply(c||window,d)};
try{ac[a]?g():y(g,0)}catch(k){Sa(k)}}},c);
Zb[e]=!0;$b[a]||($b[a]=[]);$b[a].push(e);return e}return 0}
function ec(a){var b=dc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete Zb[a]}))}
function E(a,b){var c=dc();return c?c.publish.apply(c,arguments):!1}
function fc(a,b){ac[a]=!0;var c=dc();c&&c.publish.apply(c,arguments);ac[a]=!1}
function gc(a){$b[a]&&(a=$b[a],C(a,function(a){Zb[a]&&delete Zb[a]}),a.length=0)}
function hc(a){var b=dc();if(b)if(b.clear(a),a)gc(a);else for(var c in $b)gc(c)}
function dc(){return t("yt.pubsub.instance_")}
;function ic(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(jc,""),c=c.replace(kc,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else lc(a,b)}
function lc(a,b){var c=mc(a),d=document.getElementById(c),e=d&&Xa(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=cc(c,b),g=""+ia(b);nc[g]=e}f||(d=oc(a,c,function(){Xa(d,"loaded")||(Va(d,"loaded","true"),E(c),y(na(hc,c),0))}))}}
function oc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function pc(a,b){if(a&&b){var c=""+ia(b);(c=nc[c])&&ec(c)}}
function mc(a){var b=document.createElement("a");Tb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ja(a)}
var jc=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,kc=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,nc={};var qc=null;function rc(){var a=x("BG_I",null),b=x("BG_IU",null),c=x("BG_P",void 0);b?ic(b,function(){qc=new botguard.bg(c)}):a&&(eval(a),qc=new botguard.bg(c))}
function sc(){return null!=qc}
function tc(){return qc?qc.invoke():null}
;var uc=[],vc=!1;function wc(){function a(){vc=!0;"google_ad_status"in window?Oa("DCLKSTAT",1):Oa("DCLKSTAT",2)}
ic("//static.doubleclick.net/instream/ad_status.js",a);uc.push(vb(function(){vc||"google_ad_status"in window||(pc("//static.doubleclick.net/instream/ad_status.js",a),Oa("DCLKSTAT",3))},5E3))}
function xc(){return parseInt(x("DCLKSTAT",0),10)}
;function yc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);
if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function zc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;r=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],k=e[3],l=e[4],m,r,c=0;80>c;c++)40>c?20>c?(m=k^d&(f^k),r=1518500249):(m=d^f^k,r=1859775393):60>c?(m=d&f|k&(d|f),r=2400959708):(m=d^f^k,r=3395469782),m=((a<<5|a>>>27)&4294967295)+m+l+r+b[c]&4294967295,l=k,k=f,f=(d<<30|d>>>2)&4294967295,d=a,a=m;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+k&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,r+=64;for(;d<c;)if(f[m++]=a[d++],r++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,r+=64}
function d(){var a=[],d=8*r;56>m?c(k,56-m):c(k,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],k=[128],l=1;64>l;++l)k[l]=0;var m,r;a();return{reset:a,update:c,digest:d,Nb:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Ac=window,Bc=document,Cc=Ac.location;function Dc(){}
var Ec=/\[native code\]/;function F(a,b,c){return a[b]=a[b]||c}
function Fc(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Gc(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Hc(){var a;if((a=Object.create)&&Ec.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Ic=F(Ac,"gapi",{});function Jc(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function Kc(a){a=String(a);if(Jc(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Lc(a){return eval("("+a+")")}
function Mc(a){var b=[];Nc(new Oc,a,b);return b.join("")}
function Oc(){}
function Nc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(da(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Nc(a,e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Pc(d,c),c.push(":"),Nc(a,e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Pc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Qc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Rc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Pc(a,b){b.push('"',a.replace(Rc,function(a){var b=Qc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Qc[a]=b);return b}),'"')}
;function Sc(a,b){this.width=a;this.height=b}
h=Sc.prototype;h.Lb=function(){return this.width*this.height};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!this.Lb()};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Tc(a){this.b=a||{cookie:""}}
var Uc=/\s*;\s*/;h=Tc.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(pa()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
h.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Uc),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
h.isEmpty=function(){return!this.b.cookie};
h.fa=function(){return this.b.cookie?(this.b.cookie||"").split(Uc).length:0};
h.clear=function(){for(var a=(this.b.cookie||"").split(Uc),b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Vc=new Tc("undefined"==typeof document?null:document);Vc.f=3950;function Wc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function Xc(a){Xc[" "](a);return a}
Xc[" "]=aa;function Yc(a,b){var c=Zc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function $c(){}
;function ad(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in bd||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
ad.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ad.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ad.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var bd={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function cd(a,b,c){this.b=a;this.g=b;this.f=c}
var dd=1;function ed(a){var b={};void 0!==a.b?b.trackingParams=a.b:(b.veType=a.g,null!=a.f&&(b.veCounter=a.f));return b}
;var fd=null;"undefined"!=typeof XMLHttpRequest?fd=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(fd=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function gd(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function hd(a){this.b=a}
hd.prototype.set=function(a,b){p(b)?this.b.set(a,Mc(b)):this.b.remove(a)};
hd.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return Kc(b)}catch(c){throw"Storage: Invalid value was encountered";}};
hd.prototype.remove=function(a){this.b.remove(a)};function id(a){return x("EXPERIMENT_FLAGS",{})[a]}
;function jd(){return{apiaryHost:x("APIARY_HOST",void 0),Jb:x("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:x("GAPI_HINT_OVERRIDE"),gapiHintParams:x("GAPI_HINT_PARAMS",void 0),innertubeApiKey:x("INNERTUBE_API_KEY",void 0),innertubeApiVersion:x("INNERTUBE_API_VERSION",void 0),cc:x("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:x("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ec:x("INNERTUBE_CONTEXT_HL",void 0),dc:x("INNERTUBE_CONTEXT_GL",void 0),Qc:x("XHR_APIARY_HOST",void 0)}}
function ld(a){a={client:{hl:a.ec,gl:a.dc,clientName:a.cc,clientVersion:a.innertubeContextClientVersion}};x("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:x("DELEGATED_SESSION_ID")});return a}
;var G;G=F(Ac,"___jsl",Hc());F(G,"I",0);F(G,"hel",10);function md(){var a=Cc.href,b;if(G.dpo)b=G.h;else{b=G.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function nd(a){var b=F(G,"PQ",[]);G.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function od(a){return F(F(G,"H",Hc()),a,Hc())}
;function pd(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;function qd(a){this.b=a}
w(qd,hd);function rd(a){this.data=a}
function sd(a){return!p(a)||a instanceof rd?a:new rd(a)}
qd.prototype.set=function(a,b){qd.B.set.call(this,a,sd(b))};
qd.prototype.f=function(a){a=qd.B.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
qd.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};var td=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ud(a){return a.match(td)}
function vd(a){return a?decodeURI(a):a}
function wd(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function xd(a,b,c){if(da(b))for(var d=0;d<b.length;d++)xd(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function yd(a,b,c){for(c=c||0;c<b.length;c+=2)xd(b[c],b[c+1],a);return a}
function zd(a,b){for(var c in b)xd(c,b[c],a);return a}
function Ad(a){a=zd([],a);a[0]="";return a.join("")}
function Bd(a,b){return wd(2==arguments.length?yd([a],arguments[1],0):yd([a],arguments,1))}
;function Cd(a,b,c){var d=[],e=[];if(1==(da(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),Dd(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=Dd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Dd(a){var b=zc();b.update(a);return b.Nb().toLowerCase()}
;var Ed=F(G,"perf",Hc());F(Ed,"g",Hc());var Fd=F(Ed,"i",Hc());F(Ed,"r",[]);Hc();Hc();function Gd(a,b,c){b&&0<b.length&&(b=Hd(b),c&&0<c.length&&(b+="___"+Hd(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=F(Fd,"_p",Hc()),F(b,c,Hc())[a]=(new Date).getTime(),b=Ed.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Hd(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;function Id(a){if(a.classList)return a.classList;a=a.className;return u(a)&&a.match(/\S+/g)||[]}
function I(a,b){return a.classList?a.classList.contains(b):kb(Id(a),b)}
function J(a,b){a.classList?a.classList.add(b):I(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Jd(a,b){if(a.classList)C(b,function(b){J(a,b)});
else{var c={};C(Id(a),function(a){c[a]=!0});
C(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function Kd(a,b){a.classList?a.classList.remove(b):I(a,b)&&(a.className=gb(Id(a),function(a){return a!=b}).join(" "))}
function Ld(a,b){a.classList?C(b,function(b){Kd(a,b)}):a.className=gb(Id(a),function(a){return!kb(b,a)}).join(" ")}
function Md(a,b,c){c?J(a,b):Kd(a,b)}
function Nd(a,b,c){I(a,b)&&(Kd(a,b),J(a,c))}
function Od(a,b){var c=!I(a,b);Md(a,b,c)}
;function Pd(a){this.b=a}
w(Pd,qd);Pd.prototype.set=function(a,b,c){if(b=sd(b)){if(c){if(c<pa()){Pd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=pa()}Pd.B.set.call(this,a,b)};
Pd.prototype.f=function(a,b){var c=Pd.B.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<pa()||!!d&&d>pa()}if(d)Pd.prototype.remove.call(this,a);else return c}};function Qd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?da(b[f])?ob(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Rd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Qd(d[1]||""),e;for(e in b)d[e]=b[e];return wd(zd([a],d))+c}
;var Sd=Hc(),Td=[];function Ud(a){throw Error("Bad hint"+(a?": "+a:""));}
Td.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?G[b]=F(G,b,[]).concat(c):F(G,b,c)}if(b=a.u)a=F(G,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Vd=/^(\/[a-zA-Z0-9_\-]+)+$/,Wd=[/\/amp\//,/\/amp$/,/^\/amp$/],Xd=/^[a-zA-Z0-9\-_\.,!]+$/,Yd=/^gapi\.loaded_[0-9]+$/,Zd=/^[a-zA-Z0-9,._-]+$/;function $d(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Sd[f],k=null;g?k=g(e,b,c,d):Ud("no hint processor for: "+f);k||Ud("failed to generate load url");b=k;c=b.match(ae);(d=b.match(be))&&1===d.length&&ce.test(b)&&c&&1===c.length||Ud("failed sanity: "+a);return k}
function de(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=ee(a);Yd.test(c)||Ud("invalid_callback");b=fe(b);d=d&&d.length?fe(d):null;return[encodeURIComponent(a.Cc).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Ma?"/am="+e(a.Ma):"",a.lb?"/rs="+e(a.lb):"",a.xb?"/t="+e(a.xb):"","/cb=",e(c)].join("")}
function ee(a){"/"!==a.charAt(0)&&Ud("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Ud("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&g&&k&&(a[g]=a[g]||k)}b="/"+c.join("/");Vd.test(b)||Ud("invalid_prefix");c=0;for(d=Wd.length;c<d;++c)Wd[c].test(b)&&Ud("invalid_prefix");c=ge(a,
"k",!0);d=ge(a,"am");e=ge(a,"rs");a=ge(a,"t");return{Cc:b,version:c,Ma:d,lb:e,xb:a}}
function fe(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Zd.test(e)&&b.push(e)}return b.join(",")}
function ge(a,b,c){a=a[b];!a&&c&&Ud("missing: "+b);if(a){if(Xd.test(a))return a;Ud("invalid: "+b)}return null}
var ce=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,be=/\/cb=/g,ae=/\/\//g;function he(){var a=md();if(!a)throw Error("Bad hint");return a}
Sd.m=function(a,b,c,d){(a=a[0])||Ud("missing_hint");return"https://apis.google.com"+de(a,b,c,d)};
var ie=decodeURI("%73cript"),je=/^[-+_0-9\/A-Za-z]+={0,2}$/;function ke(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Fc.call(b,e)&&c.push(e)}return c}
function le(){var a=G.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(je)?a:G.nonce=null;var b=F(G,"us",[]);if(!b||!b.length)return G.nonce=null;for(var c=Bc.getElementsByTagName(ie),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.getAttribute("nonce")||"")||null)){for(var g=0,k=b.length;g<k&&b[g]!==f.src;++g);if(g!==k&&a&&a===String(a)&&a.match(je))return G.nonce=a}}return null}
function me(a){if("loading"!=Bc.readyState)ne(a);else{var b=le(),c="";null!==b&&(c=' nonce="'+b+'"');Bc.write("<"+ie+' src="'+encodeURI(a)+'"'+c+"></"+ie+">")}}
function ne(a){var b=Bc.createElement(ie);b.setAttribute("src",a);a=le();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Bc.getElementsByTagName(ie)[0])?a.parentNode.insertBefore(b,a):(Bc.head||Bc.body||Bc.documentElement).appendChild(b)}
function oe(a,b){var c=b&&b._c;if(c)for(var d=0;d<Td.length;d++){var e=Td[d][0],f=Td[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function pe(a,b,c){qe(function(){var c;c=b===md()?F(Ic,"_",Hc()):Hc();c=F(od(b),"_",c);a(c)},c)}
function re(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);oe(a,c);var d=a?a.split(":"):[],e=c.h||he(),f=F(G,"ah",Hc());if(f["::"]&&d.length){for(var g=[],k=null;k=d.shift();){var l=k.split("."),l=f[k]||f[l[1]&&"ns:"+l[0]||""]||e,m=g.length&&g[g.length-1]||null,r=m;m&&m.hint==l||(r={hint:l,features:[]},g.push(r));r.features.push(k)}var M=g.length;if(1<M){var V=c.callback;V&&(c.callback=function(){0==--M&&V()})}for(;d=g.shift();)se(d.features,c,d.hint)}else se(d||[],c,e)}
function se(a,b,c){function d(a,b){if(M)return 0;Ac.clearTimeout(r);V.push.apply(V,A);var d=((Ic||{}).config||{}).update;d?d(f):f&&F(G,"cu",[]).push(f);if(b){Gd("me0",a,H);try{pe(b,c,m)}finally{Gd("me1",a,H)}}return 1}
a=Gc(a)||[];var e=b.callback,f=b.config,g=b.timeout,k=b.ontimeout,l=b.onerror,m=void 0;"function"==typeof l&&(m=l);var r=null,M=!1;if(g&&!k||!g&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var l=F(od(c),"r",[]).sort(),V=F(od(c),"L",[]).sort(),H=[].concat(l);0<g&&(r=Ac.setTimeout(function(){M=!0;k()},g));
var A=ke(a,V);if(A.length){var A=ke(a,l),wa=F(G,"CP",[]),Y=wa.length;wa[Y]=function(a){function b(){var a=wa[Y+1];a&&a()}
function c(b){wa[Y]=null;d(A,a)&&nd(function(){e&&e();b()})}
if(!a)return 0;Gd("ml1",A,H);0<Y&&wa[Y-1]?wa[Y]=function(){c(b)}:c(b)};
if(A.length){var kd="loaded_"+G.I++;Ic[kd]=function(a){wa[Y](a);Ic[kd]=null};
a=$d(c,A,"gapi."+kd,l);l.push.apply(l,A);Gd("ml0",A,H);b.sync||Ac.___gapisync?me(a):ne(a)}else wa[Y](Dc)}else d(A)&&e&&e()}
function qe(a,b){if(G.hee&&0<G.hel)try{return a()}catch(c){b&&b(c),G.hel--,re("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Ic.load=function(a,b){return qe(function(){return re(a,b)})};var te="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function ue(){}
ue.prototype.next=function(){throw te;};
ue.prototype.ea=function(){return this};
function ve(a){if(a instanceof ue)return a;if("function"==typeof a.ea)return a.ea(!1);if(ea(a)){var b=0,c=new ue;c.next=function(){for(;;){if(b>=a.length)throw te;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function we(a,b){if(ea(a))try{C(a,b,void 0)}catch(c){if(c!==te)throw c;}else{a=ve(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==te)throw c;}}}
function xe(a){if(ea(a))return nb(a);a=ve(a);var b=[];we(a,function(a){b.push(a)});
return b}
;function K(a,b){this.l=p(a)?a:0;this.o=p(b)?b:0}
K.prototype.equals=function(a){return a instanceof K&&(this==a?!0:this&&a?this.l==a.l&&this.o==a.o:!1)};
function ye(a,b){return new K(a.l-b.l,a.o-b.o)}
K.prototype.ceil=function(){this.l=Math.ceil(this.l);this.o=Math.ceil(this.o);return this};
K.prototype.floor=function(){this.l=Math.floor(this.l);this.o=Math.floor(this.o);return this};
K.prototype.round=function(){this.l=Math.round(this.l);this.o=Math.round(this.o);return this};var ze=B("Opera"),L=B("Trident")||B("MSIE"),Ae=B("Edge"),Be=Ae||L,Ce=B("Gecko")&&!(-1!=cb.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),De=-1!=cb.toLowerCase().indexOf("webkit")&&!B("Edge"),Ee=B("Macintosh"),Fe=B("Windows"),Ge=B("Android"),He=pd(),Ie=B("iPad"),Je=B("iPod");function Ke(){var a=n.document;return a?a.documentMode:void 0}
var Le;a:{var Me="",Ne=function(){var a=cb;if(Ce)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ae)return/Edge\/([\d\.]+)/.exec(a);if(L)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(De)return/WebKit\/(\S+)/.exec(a);if(ze)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ne&&(Me=Ne?Ne[1]:"");if(L){var Oe=Ke();if(null!=Oe&&Oe>parseFloat(Me)){Le=String(Oe);break a}}Le=Me}var Pe=Le,Zc={};
function Qe(a){return Yc(a,function(){for(var b=0,c=Fa(String(Pe)).split("."),d=Fa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=Ia(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||Ia(0==g[2].length,0==k[2].length)||Ia(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})}
var Re;var Se=n.document;Re=Se&&L?Ke()||("CSS1Compat"==Se.compatMode?parseInt(Pe,10):5):void 0;var Te=!Ce&&!L||L&&9<=Number(Re)||Ce&&Qe("1.9.1"),Ue=L&&!Qe("9");function Ve(a){We();var b=new Cb;b.b=a;return b}
var We=aa;function Xe(a){this.b=a}
w(Xe,Pd);function Ye(){}
w(Ye,$c);Ye.prototype.fa=function(){var a=0;we(this.ea(!0),function(){a++});
return a};
Ye.prototype.clear=function(){var a=xe(this.ea(!0)),b=this;C(a,function(a){b.remove(a)})};var Ze=B("Firefox"),$e=pd()||B("iPod"),af=B("iPad"),bf=B("Android")&&!(Fb()||B("Firefox")||B("Opera")||B("Silk")),cf=Fb(),df=Eb()&&!(pd()||B("iPad")||B("iPod"));function ef(a){return a?new ff(gf(a)):ta||(ta=new ff)}
function N(a){return u(a)?document.getElementById(a):a}
function hf(a){var b=document;return u(a)?b.getElementById(a):a}
function jf(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):kf("*",a,b)}
function O(a,b){var c=b||document,d=null;c.getElementsByClassName?d=c.getElementsByClassName(a)[0]:c.querySelectorAll&&c.querySelector?d=c.querySelector("."+a):d=kf("*",a,b)[0];return d||null}
function kf(a,b,c){var d=document;c=c||d;a=a&&"*"!=a?String(a).toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(a||b))return c.querySelectorAll(a+(b?"."+b:""));if(b&&c.getElementsByClassName){c=c.getElementsByClassName(b);if(a){for(var d={},e=0,f=0,g;g=c[f];f++)a==g.nodeName&&(d[e++]=g);d.length=e;return d}return c}c=c.getElementsByTagName(a||"*");if(b){d={};for(f=e=0;g=c[f];f++)a=g.className,"function"==typeof a.split&&kb(a.split(/\s+/),b)&&(d[e++]=g);d.length=e;return d}return c}
function lf(a,b){ua(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:mf.hasOwnProperty(d)?a.setAttribute(mf[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var mf={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function nf(a){a=a.document;a=of(a)?a.documentElement:a.body;return new Sc(a.clientWidth,a.clientHeight)}
function pf(a){var b=qf(a);a=rf(a);return L&&Qe("10")&&a.pageYOffset!=b.scrollTop?new K(b.scrollLeft,b.scrollTop):new K(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function qf(a){return a.scrollingElement?a.scrollingElement:!De&&of(a)?a.documentElement:a.body||a.documentElement}
function rf(a){return a.parentWindow||a.defaultView}
function of(a){return"CSS1Compat"==a.compatMode}
function sf(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function tf(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function uf(a){return Te&&void 0!=a.children?a.children:gb(a.childNodes,function(a){return 1==a.nodeType})}
function vf(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function wf(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function xf(a){return ha(a)&&1==a.nodeType}
function yf(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function gf(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function zf(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else sf(a),a.appendChild(gf(a).createTextNode(String(b)))}
function Af(a,b){var c=[];return Bf(a,b,c,!0)?c[0]:void 0}
function Bf(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Bf(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Cf={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Df={IMG:" ",BR:"\n"};function Ef(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Ff(a)||Gf(a)):Ff(a)&&Gf(a))&&L){var c;!ga(a.getBoundingClientRect)||L&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Ff(a){return L&&!Qe("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Gf(a){a=a.tabIndex;return fa(a)&&0<=a&&32768>a}
function Hf(a){if(Ue&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];If(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Ue||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function If(a,b,c){if(!(a.nodeName in Cf))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Df)b.push(Df[a.nodeName]);else for(a=a.firstChild;a;)If(a,b,c),a=a.nextSibling}
function Jf(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Kf(a,function(a){return(!e||a.nodeName==e)&&(!c||u(a.className)&&kb(a.className.split(/\s+/),c))},!0,d)}
function P(a,b){return Jf(a,null,b,void 0)}
function Kf(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function ff(a){this.b=a||n.document||document}
h=ff.prototype;h.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
h.createElement=function(a){return this.b.createElement(String(a))};
h.appendChild=function(a,b){a.appendChild(b)};
h.isElement=xf;h.contains=yf;function Lf(a,b){this.b=0;this.D=void 0;this.i=this.f=this.g=null;this.w=this.A=!1;if(a!=aa)try{var c=this;a.call(b,function(a){Mf(c,2,a)},function(a){Mf(c,3,a)})}catch(d){Mf(this,3,d)}}
function Nf(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
Nf.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var Of=new qa(function(){return new Nf},function(a){a.reset()},100);
function Pf(a,b,c){var d=Of.get();d.g=a;d.f=b;d.context=c;return d}
function Qf(a){if(a instanceof Lf)return a;var b=new Lf(aa);Mf(b,2,a);return b}
function Rf(a){return new Lf(function(b,c){c(a)})}
Lf.prototype.then=function(a,b,c){return Sf(this,ga(a)?a:null,ga(b)?b:null,c)};
Wc(Lf);Lf.prototype.cancel=function(a){0==this.b&&Nb(function(){var b=new Tf(a);Uf(this,b)},this)};
function Uf(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Uf(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Vf(c),Wf(c,e,3,b)))}a.g=null}else Mf(a,3,b)}
function Xf(a,b){a.f||2!=a.b&&3!=a.b||Yf(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Sf(a,b,c,d){var e=Pf(null,null,null);e.b=new Lf(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Tf?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Xf(a,e);return e.b}
Lf.prototype.H=function(a){this.b=0;Mf(this,2,a)};
Lf.prototype.K=function(a){this.b=0;Mf(this,3,a)};
function Mf(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.H,g=a.K;if(e instanceof Lf)Xf(e,Pf(f||aa,g||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(m){k=!1}else k=!1;if(k)e.then(f,g,a),d=!0;else{if(ha(e))try{var l=e.then;if(ga(l)){Zf(e,l,f,g,a);d=!0;break a}}catch(m){g.call(a,m);d=!0;break a}d=!1}}}d||(a.D=c,a.b=b,a.g=null,Yf(a),3!=b||c instanceof Tf||$f(a,c))}}
function Zf(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function g(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Yf(a){a.A||(a.A=!0,Nb(a.F,a))}
function Vf(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
Lf.prototype.F=function(){for(var a;a=Vf(this);)Wf(this,a,this.b,this.D);this.A=!1};
function Wf(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.w;a=a.g)a.w=!1;if(b.b)b.b.g=null,ag(b,c,d);else try{b.i?b.g.call(b.context):ag(b,c,d)}catch(e){bg.call(null,e)}ra(Of,b)}
function ag(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function $f(a,b){a.w=!0;Nb(function(){a.w&&bg.call(null,b)})}
var bg=Gb;function Tf(a){sa.call(this,a)}
w(Tf,sa);Tf.prototype.name="cancel";function cg(a){this.b=a}
w(cg,Ye);h=cg.prototype;h.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.b.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.b.removeItem(a)};
h.fa=function(){return this.b.length};
h.ea=function(a){var b=0,c=this.b,d=new ue;d.next=function(){if(b>=c.length)throw te;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){this.b.clear()};
h.key=function(a){return this.b.key(a)};function dg(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
w(dg,cg);function eg(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
w(eg,cg);function fg(a){var b=a.__yt_uid_key;b||(b=gg(),a.__yt_uid_key=b);return b}
var gg=t("yt.dom.getNextId_");if(!gg){gg=function(){return++hg};
q("yt.dom.getNextId_",gg,void 0);var hg=0}function ig(a,b){a=N(a);b=N(b);return!!Kf(a,function(a){return a===b},!0,void 0)}
function jg(a,b){var c=kf(a,null,b);return c.length?c[0]:null}
function kg(){var a=document,b;ib(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function lg(){Md(document.body,"hide-players",!1);C(jf("preserve-players"),function(a){Kd(a,"preserve-players")})}
;function mg(a){this.b=a||jd();ng||(ng=og(this.b))}
var ng=null;function og(a){return(new Lf(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=ga(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||Ea(d,{_c:{jsl:{h:x("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||x("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],g=f.split("?",2);e=Qd(1<g.length?g[1]:g[0])}else e={};var k=e.gapi_jsh;k&&Ea(d,{_c:{jsl:{h:k}}})}re("client",d)}catch(l){Sa(l)}})).then(function(){})}
mg.prototype.i=function(){var a=t("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Jb;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",x("SESSION_INDEX"));t("gapi.client.setApiKey")(this.b.innertubeApiKey)};
mg.prototype.f=function(){return{context:ld(this.b)}};
mg.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=y(function(){e||(e=!0,c.$&&c.$())},c.timeout));
pg(this,a,b,function(a){if(!e)if(e=!0,d&&Ra(d),a)c.O&&c.O(a);else if(c.onError)c.onError()})};
function pg(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":x("VISITOR_DATA")},method:"POST",body:Mc(c)},f=v(a.i,a);ng.then(function(){f();t("gapi.client.request")(e).execute(d||aa)})}
;var ya=t("yt.events.listeners_")||{};q("yt.events.listeners_",ya,void 0);var qg=t("yt.events.counter_")||{count:0};q("yt.events.counter_",qg,void 0);function rg(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return xa(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function Q(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=rg(a,b,c,d);if(e)return e;var e=++qg.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new ad(d);if(!Kf(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new ad(b);
b.currentTarget=a;return c.call(a,b)};
g=Qa(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);ya[e]=[a,b,c,g,d];return e}
function sg(a,b,c){return tg(a,b,function(a){return I(a,c)})}
function tg(a,b,c){var d=a||document;return Q(d,"click",function(a){var e=Kf(a.target,function(a){return a===d||c(a)},!0);
e&&e!==d&&!e.disabled&&(a.currentTarget=e,b.call(e,a))})}
function ug(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in ya){var b=ya[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete ya[a]}}))}
function vg(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function wg(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
;var xg={log_event:"events",log_interaction:"interactions"},yg={},zg={},Ag=0,Aa=t("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",Aa,void 0);function Bg(a,b){Aa[a.endpoint]=Aa[a.endpoint]||[];var c=Aa[a.endpoint];c.push(a.ib);zg[a.endpoint]=b;c.length>=(Number(id("web_logging_max_batch")||0)||20)?Cg():Dg()}
function Cg(){Ra(Ag);if(!za()){for(var a in Aa){var b=yg[a];if(!b){b=zg[a];if(!b)continue;b=new b;yg[a]=b}var c=b.f();c.requestTimeMs=Math.round(Ta());c[xg[a]]=Aa[a];b.g(a,c,{});delete Aa[a]}za()||Dg()}}
function Dg(){Ra(Ag);Ag=y(Cg,x("LOGGING_BATCH_TIMEOUT",1E4))}
;function Eg(a,b,c,d,e,f,g){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Qa(b)(l)}
var l=fd&&fd();if(!("open"in l))return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);f="POST"==c;if(e=Fg(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(f=!1);f&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
function Fg(a,b){b=b||{};var c;c||(c=window.location.href);var d=ud(a)[1]||null,e=vd(ud(a)[3]||null);d&&e?(d=c,c=ud(a),d=ud(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?vd(ud(c)[3]||null)==e&&(Number(ud(c)[4]||null)||null)==(Number(ud(a)[4]||null)||null):!0;for(var f in Gg){if((e=d=x(Gg[f]))&&!(e=c)){var e=f,g=x("CORS_HEADER_WHITELIST")||{},k=vd(ud(a)[3]||null);e=k?(g=g[k])?kb(g,e):!1:!0}e&&(b[f]=d)}return b}
function Hg(a,b){b.method="POST";b.J||(b.J={});Ig(a,b)}
function Jg(a,b){var c=x("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.ed&&(!vd(ud(a)[3]||null)||b.withCredentials||vd(ud(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.J&&b.J[c])}
function Ig(a,b){var c=b.format||"JSON";b.ac&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=x("XSRF_FIELD_NAME",void 0),e=x("XSRF_TOKEN",void 0),f=b.Da;f&&(f[d]&&delete f[d],a=Rd(a,f||{}));var g=b.postBody||"",f=b.J;Jg(a,b)&&(f||(f={}),f[d]=e);f&&u(g)&&(d=Qd(g),Ea(d,f),g=b.jb&&"JSON"==b.jb?JSON.stringify(d):Ad(d));var k=!1,l,m=Eg(a,function(a){if(!k){k=!0;l&&Ra(l);var d=gd(a),e=null;if(d||400<=a.status&&500>a.status)e=
Kg(c,a,b.dd);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||n;d?b.O&&b.O.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Ba&&b.Ba.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.$&&0<b.timeout&&(l=y(function(){k||(k=!0,m.abort(),Ra(l),b.$.call(b.context||n,m))},b.timeout))}
function Kg(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Lc(a));break;case "XML":if(b=(b=b.responseXML)?Lg(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=Mg(a)})}c&&Ng(d);
return d}
function Ng(a){if(ha(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=Mb(a[b]);a[c]=d}else Ng(a[b])}}
function Lg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Mg(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Gg={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};function Og(){if(!Pg&&!Qg||!window.JSON)return null;var a;try{a=Pg.get("yt-player-two-stage-token")}catch(b){}if(!u(a))try{a=Qg.get("yt-player-two-stage-token")}catch(b){}if(!u(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var Qg,Rg=new dg;Qg=Rg.isAvailable()?new Xe(Rg):null;var Pg,Sg=new eg;Pg=Sg.isAvailable()?new Xe(Sg):null;function Tg(){this.b=jd()}
Tg.prototype.f=function(){return{context:ld(this.b)}};
Tg.prototype.g=function(a,b,c){b={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":x("VISITOR_DATA")},J:b,jb:"JSON",$:c.$,O:c.O,onError:c.onError,timeout:c.timeout,withCredentials:!0};a:{c=[];var d=yc(String(n.location.href)),e=n.__OVERRIDE_SID;null==e&&(e=(new Tc(document)).get("SID"));if(e&&(d=(e=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==d&&(d=(new Tc(document)).get(e?"SAPISID":"APISID")),d)){var e=e?"SAPISIDHASH":"APISIDHASH",f=String(n.location.href);
c=f&&d&&e?[e,Cd(yc(f),d,c||null)].join(" "):null;break a}c=null}c&&(b.headers.Authorization=c,b.headers["X-Goog-AuthUser"]=x("SESSION_INDEX",0));Hg("//"+this.b.Qc+("/youtubei/"+this.b.innertubeApiVersion+"/"+a)+"?alt=json&key="+this.b.innertubeApiKey,b)};function Ug(){if(null==t("_lact",window)){var a=parseInt(x("LACT"),10),a=isFinite(a)?pa()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Vg();Q(document,"keydown",Vg);Q(document,"keyup",Vg);Q(document,"mousedown",Vg);Q(document,"mouseup",Vg);cc("page-mouse",Vg);cc("page-scroll",Vg);cc("page-resize",Vg)}}
function Vg(){null==t("_lact",window)&&(Ug(),t("_lact",window));var a=pa();q("_lact",a,window);E("USER_ACTIVE")}
function Wg(){var a=t("_lact",window);return null==a?-1:Math.max(pa()-a,0)}
;var Xg={},Yg=0;function Zg(a,b,c,d){var e={};e.eventTimeMs=Math.round(d||Ta());e[a]=b;id("web_gel_lact")&&(e.context={lastActivityMs:Wg()});Bg({endpoint:"log_event",ib:e},c)}
;function $g(a,b,c){ah(bh(),{attachChild:{csn:a,parentVisualElement:ed(b),visualElements:[ed(c)]}},void 0)}
function ch(a,b){var c=bh(),d=hb(b,function(a){return ed(a)});
ah(c,{visibilityUpdate:{csn:a,visualElements:d}})}
function ah(a,b,c){b.eventTimeMs=Math.round(Ta());b.lactMs=Wg();c&&(b.clientData=dh(c));Bg({endpoint:"log_interaction",ib:b},a)}
function dh(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=hb(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function bh(){return id("enable_youtubei_innertube")?Tg:mg}
;function eh(){var a=x("ROOT_VE_TYPE",void 0);return a?new cd(void 0,a,void 0):null}
function fh(){var a=x("client-screen-nonce",void 0);a||(a=x("EVENT_ID",void 0));return a}
;var gh=pa().toString();function hh(a){var b,c;b=void 0===b?{}:b;c=void 0===c?"":c;var d=window.location;a=wd(zd([a],b))+c;a=a instanceof wb?a:Ab(a);d.href=yb(a)}
function ih(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=x("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){var d=a,e=x("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=vd(ud(window.location.href)[3]||null);f&&e.push(f);f=vd(ud(d)[3]||null);if(kb(e,f)||!f&&0==d.lastIndexOf("/",0))if(id("autoescape_tempdata_url")&&(e=document.createElement("a"),Tb(e,d),d=e.href),d){var f=ud(d),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
fh();d="ST-"+Ja(d).toString(36);e=b?Ad(b):"";Vc.set(""+d,e,5,"/","youtube.com");b&&(b=b.itct||b.ved,d=t("yt.logging.screen.storeParentElement"),b&&d&&d(new cd(b)))}}}if(c)return!1;(window.ytspf||{}).enabled?spf.navigate(a):hh(a);return!0}
;function jh(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Ca(kh);this.assets=a.assets||{};this.attrs=a.attrs||Ca(lh);this.params=a.params||Ca(mh);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var kh={enablejsapi:1},lh={},mh={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function nh(a){a instanceof jh||(a=new jh(a));return a}
function oh(a){var b=new jh,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"object"==ca(d)?b[c]=Ca(d):b[c]=d}return b}
;function ph(){this.g=this.f=this.b=0;this.i="";var a=t("window.navigator.plugins"),b=t("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var g,k,l,m;if(Ua)try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(r){g=null}else l=document.body,m=document.createElement("object"),m.setAttribute("type","application/x-shockwave-flash"),g=l.appendChild(m);if(g&&"GetVariable"in g)try{k=g.GetVariable("$version")}catch(r){k=""}l&&m&&l.removeChild(m);(g=k||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
ba(ph);function qh(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;function rh(){z.call(this);this.b=new D;$a(this,na(ab,this.b))}
w(rh,z);rh.prototype.subscribe=function(a,b,c){return this.C()?0:this.b.subscribe(a,b,c)};
rh.prototype.U=function(a){return this.C()?!1:this.b.U(a)};
rh.prototype.i=function(a,b){this.C()||this.b.M.apply(this.b,arguments)};function sh(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
h=sh.prototype;h.getHeight=function(){return this.bottom-this.top};
h.contains=function(a){return this&&a?a instanceof sh?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.l>=this.left&&a.l<=this.right&&a.o>=this.top&&a.o<=this.bottom:!1};
h.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
h.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
h.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function th(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
th.prototype.contains=function(a){return a instanceof K?a.l>=this.left&&a.l<=this.left+this.width&&a.o>=this.top&&a.o<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
th.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
th.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
th.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function uh(a,b,c){if(u(b))(b=vh(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=vh(c,d);f&&(c.style[f]=e)}}
var wh={};function vh(a,b){var c=wh[b];if(!c){var d=Ka(b),c=d;void 0===a.style[d]&&(d=(De?"Webkit":Ce?"Moz":L?"ms":ze?"O":null)+La(d),void 0!==a.style[d]&&(c=d));wh[b]=c}return c}
function xh(a,b){var c=gf(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function yh(a,b){return xh(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function zh(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}L&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Ah(a){if(L&&!(8<=Number(Re)))return a.offsetParent;var b=gf(a),c=yh(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=yh(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Bh(a){for(var b=new sh(0,Infinity,Infinity,0),c=ef(a),d=c.b.body,e=c.b.documentElement,f=qf(c.b);a=Ah(a);)if(!(L&&0==a.clientWidth||De&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=yh(a,"overflow")){var g=Ch(a),k=new K(a.clientLeft,a.clientTop);g.l+=k.l;g.o+=k.o;b.top=Math.max(b.top,g.o);b.right=Math.min(b.right,g.l+a.clientWidth);b.bottom=Math.min(b.bottom,g.o+a.clientHeight);b.left=Math.max(b.left,g.l)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
nf(rf(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Ch(a){var b=gf(a),c=new K(0,0),d;d=b?gf(b):document;d=!L||9<=Number(Re)||of(ef(d).b)?d.documentElement:d.body;if(a==d)return c;a=zh(a);b=pf(ef(b).b);c.l=a.left+b.l;c.o=a.top+b.o;return c}
function Dh(a){a=zh(a);return new K(a.left,a.top)}
function Eh(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Fh(a){var b=Gh;if("none"!=yh(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Gh(a){var b=a.offsetWidth,c=a.offsetHeight,d=De&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new Sc(b,c):(a=zh(a),new Sc(a.right-a.left,a.bottom-a.top))}
function Hh(a){var b=Ch(a);a=Fh(a);return new th(b.l,b.o,a.width,a.height)}
function Ih(a){return"rtl"==yh(a,"direction")}
function Jh(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Kh(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Jh(a,c):0}
var Lh={thin:2,medium:4,thick:6};function Mh(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Lh?Lh[c]:Jh(a,c)}
;function Nh(a,b,c,d){z.call(this);this.g=b||null;this.D="*";this.i=c||null;this.b=null;this.channel=d||null;this.K=!!a;this.F=v(this.N,this);window.addEventListener("message",this.F)}
w(Nh,z);Nh.prototype.N=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.g&&a.source!=this.g)&&u(a.data)){var b;try{b=Kc(a.data)}catch(c){return}if(!(null==b||this.K&&(this.b&&this.b!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.i=this.D=a.origin:Sa(Error("MessageEvent origin is null"),"WARNING");this.g=a.source;this.b=b.id;this.f&&(this.f(),this.f=null);break;case "command":this.w&&(this.A&&!kb(this.A,b.func)||this.w(b.func,b.args))}}};
Nh.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.b&&(a.id=this.b);this.channel&&(a.channel=this.channel);try{var d=Mc(a);c.postMessage(d,this.D)}catch(e){Sa(e,"WARNING")}}};
Nh.prototype.G=function(){window.removeEventListener("message",this.F);Nh.B.G.call(this)};function Oh(a,b,c){Nh.call(this,a,b,c||x("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.A=this.f=this.w=null}
w(Oh,Nh);function Ph(){var a=kg();return a?a:null}
;function Qh(a){if(window.spf){var b=a.match(Rh);spf.style.load(a,b?b[1]:"",void 0)}else Sh(a)}
function Sh(a){var b=Th(a),c=document.getElementById(b),d=c&&Xa(c,"loaded");d||c&&!d||(c=Uh(a,b,function(){Xa(c,"loaded")||(Va(c,"loaded","true"),E(b),y(na(hc,b),0))}))}
function Uh(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ve(a);Ub(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Th(a){var b=document.createElement("a");Tb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ja(a)}
var Rh=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var Vh={},Wh=0;function Xh(a,b){a&&(x("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Eg(a,b):Yh(a,b))}
function Yh(a,b){var c=new Image,d=""+Wh++;Vh[d]=c;c.onload=c.onerror=function(){b&&Vh[d]&&b();delete Vh[d]};
c.src=a}
;function Zh(){var a=Ca($h);return new Lf(function(b,c){a.O=function(a){gd(a)?b(a):c(new ai("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new ai("Unknown request error","net.unknown"))};
a.$=function(){c(new ai("Request timed out","net.timeout"))};
Ig("//googleads.g.doubleclick.net/pagead/id",a)})}
function ai(a,b){sa.call(this,a+", errorCode="+b);this.errorCode=b}
w(ai,sa);ai.prototype.name="PromiseAjaxError";var bi;var ci=cb,ci=ci.toLowerCase();if(-1!=ci.indexOf("android")){var di=ci.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(di)bi=Number(di[1]);else{var ei={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},fi=[],gi=0,hi;for(hi in ei)fi[gi++]=hi;var ii=ci.match("("+fi.join("|")+")");bi=ii?ei[ii[0]]:0}}else bi=void 0;var ji=cb,ki=ji.match(/\((BB10|PlayBook|BlackBerry);/);!ki||2>ki.length||ji.match(/Version\/(\d+\.\d+)/);cb.match(/Mozilla\/[\d\.]+ \(Mobile;.* rv:([\d\.]+)\) Gecko\/[\d\.]+ Firefox\/[\d\.]+/);var li;var mi=cb,ni=mi.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!ni||2>ni.length)li=void 0;else{var oi=mi.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);li=oi&&6==oi.length?Number(oi[5].replace("_",".")):0}0<=li&&0<=cb.search("Safari")&&cb.search("Version");var pi=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],qi=['audio/mp4; codecs="mp4a.40.2"'];L&&Qe("9");!De||Qe("528");Ce&&Qe("1.9b")||L&&Qe("8")||ze&&Qe("9.5")||De&&Qe("528");Ce&&!Qe("8")||L&&Qe("9");function ri(a){z.call(this);this.b=[];this.f=a||this}
w(ri,z);function si(a,b,c,d){d=Qa(v(d,a.f));d={target:b,name:c,va:d};b.addEventListener(c,d.va,void 0);a.b.push(d)}
function ti(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.va)}}
ri.prototype.G=function(){ti(this);ri.B.G.call(this)};function R(a,b){this.version=a;this.args=b}
function ui(a){if(!a.qb){var b={};a.call(b);a.qb=b.version}return a.qb}
function vi(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=ui(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function S(a,b){this.topic=a;this.b=b}
S.prototype.toString=function(){return this.topic};var wi=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function xi(a){R.call(this,1,arguments)}
w(xi,R);var yi=new S("timing-sent",xi);var zi=t("yt.pubsub2.instance_")||new D;D.prototype.subscribe=D.prototype.subscribe;D.prototype.unsubscribeByKey=D.prototype.U;D.prototype.publish=D.prototype.M;D.prototype.clear=D.prototype.clear;q("yt.pubsub2.instance_",zi,void 0);var Ai=t("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",Ai,void 0);var Bi=t("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",Bi,void 0);var Ci=t("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",Ci,void 0);q("yt.pubsub2.skipSubKey_",null,void 0);
function T(a,b){var c=Di();c&&c.publish.call(c,a.toString(),a,b)}
function Ei(a,b,c){var d=Di();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var f=function(){if(Ai[e])try{if(g&&a instanceof S&&a!=d)try{g=vi(a.b,g)}catch(l){throw l.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+l.message,l;}b.call(c||window,g)}catch(l){Sa(l)}};
Ci[a.toString()]?t("yt.scheduler.instance")?vb(f,void 0):y(f,0):f()}});
Ai[e]=!0;Bi[a.toString()]||(Bi[a.toString()]=[]);Bi[a.toString()].push(e);return e}
function Fi(a){var b=Di();b&&(fa(a)&&(a=[a]),C(a,function(a){b.unsubscribeByKey(a);delete Ai[a]}))}
function Di(){return t("yt.pubsub2.instance_")}
;function Gi(a,b,c){z.call(this);this.b=a;this.i=b||0;this.f=c;this.g=v(this.Pb,this)}
w(Gi,z);h=Gi.prototype;h.ga=0;h.G=function(){Gi.B.G.call(this);this.stop();delete this.b;delete this.f};
h.start=function(a){this.stop();var b=this.g;a=p(a)?a:this.i;if(!ga(b))if(b&&"function"==typeof b.handleEvent)b=v(b.handleEvent,b);else throw Error("Invalid listener argument");this.ga=2147483647<Number(a)?-1:n.setTimeout(b,a||0)};
h.stop=function(){this.isActive()&&n.clearTimeout(this.ga);this.ga=0};
h.isActive=function(){return 0!=this.ga};
h.Pb=function(){this.ga=0;this.b&&this.b.call(this.f)};var Hi={vc:!0},Ii={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId"},Ji="ap c cver ei yt_fss yt_li".split(" "),Ki=["isMonetized","prerollAllowed","isRedSubscriber","isVisible"],Li=v(wi.clearResourceTimings||wi.webkitClearResourceTimings||wi.mozClearResourceTimings||wi.msClearResourceTimings||wi.oClearResourceTimings||aa,wi);
function Mi(a,b){if(!b&&"_"!=a[0]){var c=a;wi.mark&&(0==c.lastIndexOf("mark_",0)||(c="mark_"+c),wi.mark(c))}var c=Ni(),d=b||Ta();c[a]&&(c["_"+a]=c["_"+a]||[c[a]],c["_"+a].push(d));c[a]=d;(Oi()["tick_"+a]=b)||Ta();id("csi_on_gel")?(c=Pi(),"_start"==a?Zg("latencyActionBaselined",{clientActionNonce:c},Tg,b):Zg("latencyActionTicked",{tickName:a,clientActionNonce:c},Tg,b),c=!0):c=!1;if(c=!c)c=!t("yt.timing.pingSent_");if(c&&(d=x("TIMING_ACTION",void 0),c=Ni(),t("yt.timing.ready_")&&d&&c._start&&Qi())){var d=
!0,e=x("TIMING_WAIT",[]);if(e.length)for(var f=0,g=e.length;f<g;++f)if(!(e[f]in c)){d=!1;break}d&&Ri()}}
function Si(){var a=Ti().info.yt_lt="hot_bg";Oi().info_yt_lt=a;if(id("csi_on_gel"))if("yt_lt"in Ii){var b={},c=Ii.yt_lt;kb(Ki,c)&&(a=!!a);b[c]=a;a=Pi();b.clientActionNonce=a;Zg("latencyActionInfo",b,Tg)}else"yt_lt"in Ji||Sa(Error("Unknown label yt_lt logged with GEL CSI."))}
function Qi(){var a=Ni();if(a.aft)return a.aft;for(var b=x("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Ri(){if(!id("csi_on_gel")){var a=Ni(),b=Ti().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&da(a[d])){var e=d.slice(1);if(e in Hi){var f=hb(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=t("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))Ui(f,e),Vi(),Li(),Wi(!1,void 0),Oa("PREVIOUS_ACTION",x("TIMING_ACTION")),Oa("TIMING_ACTION","")}else{var g=x("CSI_SERVICE_NAME","youtube"),f={v:2,s:g,action:x("TIMING_ACTION",void 0)},k=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var l=window.location.protocol+t("ytplayer.config.assets.js");(l=wi.getEntriesByName?wi.getEntriesByName(l)[0]:null)?b.h5jse=Math.round(b.h5jse-l.responseEnd):delete b.h5jse}a.aft=
Qi();Xi()&&"youtube"==g&&(Si(),g=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=Ta();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=t("ytdebug.logTiming"))&&a(f,b);Ui(f,e,void 0);T(yi,new xi(b.aft+(k||0)))}}}
function Ui(a,b,c){if(id("debug_csi_data")){var d=t("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||Xh(a,void 0)}catch(f){Xh(a,void 0)}else Xh(a);Wi(!0,c)}
function Pi(){var a=Ti().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=pa();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(gh)for(c=1,d=0;d<gh.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^gh.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");Ti().nonce=a}return a}
function Ni(){return Ti().tick}
function Oi(){var a=Ti();"gel"in a||(a.gel={});return a.gel}
function Ti(){return t("ytcsi.data_")||Vi()}
function Vi(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function Wi(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Xi(){var a=Ni(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Ti().info.yt_pvis}
;new Gi(Yi,1E3);function Yi(){Mi("vptl",0);Mi("vpl",0)}
;var Zi={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function $i(a,b){z.call(this);this.A=this.w=a;this.ca=b;this.F=!1;this.f={};this.ka=this.ba=null;this.da=new D;$a(this,na(ab,this.da));this.i={};this.K=this.la=this.g=this.ua=this.b=null;this.ha=!1;this.N=this.D=this.V=this.W=null;this.ma={};this.Hb=["onReady"];this.ia=new ri(this);$a(this,na(ab,this.ia));this.sa=null;this.Ka=NaN;this.ja={};aj(this);this.R("onDetailedError",v(this.sc,this));this.R("onTabOrderChange",v(this.Mb,this));this.R("onTabAnnounce",v(this.La,this));this.R("WATCH_LATER_VIDEO_ADDED",
v(this.tc,this));this.R("WATCH_LATER_VIDEO_REMOVED",v(this.uc,this));Ze||(this.R("onMouseWheelCapture",v(this.pc,this)),this.R("onMouseWheelRelease",v(this.qc,this)));this.R("onAdAnnounce",v(this.La,this));this.T=new ri(this);$a(this,na(ab,this.T));this.ta=!1;this.ra=null}
w($i,z);var bj=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];h=$i.prototype;h.Ea=function(a,b){this.C()||(cj(this,a),dj(this,b),this.F&&ej(this))};
function cj(a,b){a.ua=b;a.b=oh(b);a.g=a.b.attrs.id||a.g;"video-player"==a.g&&(a.g=a.ca,a.b.attrs.id=a.ca);a.A.id==a.g&&(a.g+="-player",a.b.attrs.id=a.g);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.ca;a.la||(a.la=fj(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.A.style.width=Eh(Number(c)||c,!0));if(c=a.b.attrs.height)a.A.style.height=Eh(Number(c)||c,!0)}
h.Tb=function(){return this.ua};
function ej(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function gj(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=qh(ph.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function hj(a,b){if((!b||(5!=(Zi[b.errorCode]||5)?0:-1!=bj.indexOf(b.errorCode)))&&gj(a)){var c=ij(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=nh(c));d.args.autoplay=1;d.args.html5_unavailable="1";cj(a,d);dj(a,"flash")}}
function dj(a,b){if(!a.C()){if(!b){var c;if(!(c=!a.b.html5&&gj(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==bi)d=!0;else{a:{var e=c;c=t("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?pi:qi,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=jj(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?gj(a)?"flash":"unsupported":"html5"}("flash"==b?a.Oc:a.Pc).call(a)}}
function jj(a){var b=!0,c=ij(a);c&&a.b&&(a=a.b,b=Xa(c,"version")==a.assets.js);return b&&!!t("yt.player.Application.create")}
h.Pc=function(){if(!this.ha){var a=jj(this);a&&"html5"==kj(this)?(this.K="html5",this.F||this.aa()):(lj(this),this.K="html5",a&&this.V?(this.w.appendChild(this.V),this.aa()):(this.b.loaded=!0,this.W=v(function(){var a=this.w,c=oh(this.b);t("yt.player.Application.create")(a,c);this.aa()},this),this.ha=!0,a?this.W():(ic(this.b.assets.js,this.W),Qh(this.b.assets.css))))}};
h.Oc=function(){var a=oh(this.b);if(!this.D){var b=ij(this);b&&(this.D=document.createElement("SPAN"),this.D.tabIndex=0,si(this.ia,this.D,"focus",this.eb),this.N=document.createElement("SPAN"),this.N.tabIndex=0,si(this.ia,this.N,"focus",this.eb),b.parentNode&&b.parentNode.insertBefore(this.D,b),b.parentNode&&b.parentNode.insertBefore(this.N,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==kj(this))this.K="flash",this.F||this.aa();else{lj(this);
this.K="flash";this.b.loaded=!0;var b=ph.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!qh(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.w;if(c){var b=u(b)?hf(b):b,d=Ca(a.attrs);d.tabindex=0;var e=Ca(a.params);e.flashvars=Ad(a.args);if(Ua){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=
document.createElement("object"),f;for(f in d)a.setAttribute(f,d[f]);for(var g in e)f=document.createElement("param"),f.setAttribute("name",g),f.setAttribute("value",e[g]),a.appendChild(f)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var k in d)a.setAttribute(k,d[k]);for(var l in e)a.setAttribute(l,e[l])}g=document.createElement("div");g.appendChild(a);b.innerHTML=g.innerHTML}this.aa()}};
h.eb=function(){ij(this).focus()};
function ij(a){var b=N(a.g);!b&&a.A&&a.A.querySelector&&(b=a.A.querySelector("#"+a.g));return b}
h.aa=function(){if(!this.C()){var a=ij(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.ha=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))hj(this);else{aj(this);this.F=!0;a=ij(this);a.addEventListener&&(this.ba=mj(this,a,"addEventListener"));a.removeEventListener&&(this.ka=mj(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=mj(this,a,d))}for(var e in this.i)this.ba(e,
this.i[e]);ej(this);this.la&&this.la(this.f);this.da.M("onReady",this.f)}else this.Ka=y(v(this.aa,this),50)}};
function mj(a,b,c){var d=b[c];return function(){try{return a.sa=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.sa=e,Sa(e,"WARNING"))}}}
function aj(a){a.F=!1;if(a.ka)for(var b in a.i)a.ka(b,a.i[b]);for(var c in a.ja)Ra(parseInt(c,10));a.ja={};a.ba=null;a.ka=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=v(a.R,a);a.f.removeEventListener=v(a.Ec,a);a.f.destroy=v(a.dispose,a);a.f.getLastError=v(a.Ub,a);a.f.getPlayerType=v(a.Vb,a);a.f.getCurrentVideoConfig=v(a.Tb,a);a.f.loadNewVideoConfig=v(a.Ea,a);a.f.isReady=v(a.Rc,a)}
h.Rc=function(){return this.F};
h.R=function(a,b){if(!this.C()){var c=fj(this,b);if(c){if(!kb(this.Hb,a)&&!this.i[a]){var d=nj(this,a);this.ba&&this.ba(a,d)}this.da.subscribe(a,c);"onReady"==a&&this.F&&y(na(c,this.f),0)}}};
h.Ec=function(a,b){if(!this.C()){var c=fj(this,b);c&&Wb(this.da,a,c)}};
function fj(a,b){var c=b;if("string"==typeof b){if(a.ma[b])return a.ma[b];c=function(){var a=t(b);a&&a.apply(n,arguments)};
a.ma[b]=c}return c?c:null}
function nj(a,b){var c="ytPlayer"+b+a.ca;a.i[b]=c;n[c]=function(c){var d=y(function(){if(!a.C()){a.da.M(b,c);var e=a.ja,g=String(d);g in e&&delete e[g]}},0);
Ba(a.ja,String(d))};
return c}
h.Mb=function(a){a=a?wf:vf;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.D||b==this.N||(b.focus(),b!=document.activeElement));)b=a(b)};
h.La=function(a){E("a11y-announce",a)};
h.sc=function(a){hj(this,a)};
h.tc=function(a){E("WATCH_LATER_VIDEO_ADDED",a)};
h.uc=function(a){E("WATCH_LATER_VIDEO_REMOVED",a)};
h.pc=function(){this.ta||(cf?(this.ra=pf(document),si(this.T,window,"scroll",this.Ac),si(this.T,this.w,"touchmove",this.yc)):(si(this.T,this.w,"mousewheel",this.hb),si(this.T,this.w,"wheel",this.hb)),this.ta=!0)};
h.qc=function(){ti(this.T);this.ta=!1};
h.hb=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
h.Ac=function(){window.scrollTo(this.ra.l,this.ra.o)};
h.yc=function(a){a.preventDefault()};
h.Vb=function(){return this.K||kj(this)};
h.Ub=function(){return this.sa};
function kj(a){return(a=ij(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function lj(a){Mi("dcp");a.cancel();aj(a);a.K=null;a.b&&(a.b.loaded=!1);var b=ij(a);"html5"==kj(a)?a.V=b:b&&b.destroy&&b.destroy();sf(a.w);ti(a.ia);a.D=null;a.N=null}
h.cancel=function(){this.W&&pc(this.b.assets.js,this.W);Ra(this.Ka);this.ha=!1};
h.G=function(){lj(this);if(this.V&&this.b)try{this.V.destroy()}catch(b){Sa(b)}this.ma=null;for(var a in this.i)n[this.i[a]]=null;this.ua=this.b=this.f=null;delete this.w;delete this.A;$i.B.G.call(this)};var oj={},pj="player_uid_"+(1E9*Math.random()>>>0);function qj(a,b){a=u(a)?hf(a):a;b=nh(b);var c=pj+"_"+ia(a),d=oj[c];if(d)return d.Ea(b),d.f;d=new $i(a,c);oj[c]=d;E("player-added",d.f);$a(d,na(rj,d));y(function(){d.Ea(b)},0);
return d.f}
function rj(a){oj[a.ca]=null}
function sj(a){a=N(a);if(!a)return null;var b=pj+"_"+ia(a),c=oj[b];c||(c=new $i(a,b),oj[b]=c);return c.f}
;var tj=t("yt.abuse.botguardInitialized")||sc;q("yt.abuse.botguardInitialized",tj,void 0);var uj=t("yt.abuse.invokeBotguard")||tc;q("yt.abuse.invokeBotguard",uj,void 0);var vj=t("yt.abuse.dclkstatus.checkDclkStatus")||xc;q("yt.abuse.dclkstatus.checkDclkStatus",vj,void 0);var wj=t("yt.player.exports.navigate")||ih;q("yt.player.exports.navigate",wj,void 0);var xj=t("yt.player.embed")||qj;q("yt.player.embed",xj,void 0);var yj=t("yt.player.getPlayerByElement")||sj;q("yt.player.getPlayerByElement",yj,void 0);
var zj=t("yt.util.activity.init")||Ug;q("yt.util.activity.init",zj,void 0);var Aj=t("yt.util.activity.getTimeSinceActive")||Wg;q("yt.util.activity.getTimeSinceActive",Aj,void 0);var Bj=t("yt.util.activity.setTimestamp")||Vg;q("yt.util.activity.setTimestamp",Bj,void 0);function Cj(a,b,c){fa(a)?(this.date=Dj(a,b||0,c||1),Ej(this,c||1)):ha(a)?(this.date=Dj(a.getFullYear(),a.getMonth(),a.getDate()),Ej(this,a.getDate())):(this.date=new Date(pa()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Ej(this,a))}
function Dj(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
h=Cj.prototype;h.getFullYear=function(){return this.date.getFullYear()};
h.getMonth=function(){return this.date.getMonth()};
h.getDate=function(){return this.date.getDate()};
h.getTime=function(){return this.date.getTime()};
function Fj(a){a=a.date.getTimezoneOffset();if(0==a)a="Z";else{var b=Math.abs(a)/60,c=Math.floor(b),b=60*(b-c);a=(0<a?"-":"+")+Ha(c)+":"+Ha(b)}return a}
h.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
h.pa=function(a,b){return[this.getFullYear(),Ha(this.getMonth()+1),Ha(this.getDate())].join(a?"-":"")+(b?Fj(this):"")};
h.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
h.toString=function(){return this.pa()};
function Ej(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
h.valueOf=function(){return this.date.valueOf()};
function Gj(a,b,c,d,e,f,g){this.date=fa(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():pa())}
w(Gj,Cj);Gj.prototype.pa=function(a,b){var c=Cj.prototype.pa.call(this,a);return a?c+" "+Ha(this.date.getHours())+":"+Ha(this.date.getMinutes())+":"+Ha(this.date.getSeconds())+(b?Fj(this):""):c+"T"+Ha(this.date.getHours())+Ha(this.date.getMinutes())+Ha(this.date.getSeconds())+(b?Fj(this):"")};
Gj.prototype.equals=function(a){return this.getTime()==a.getTime()};
Gj.prototype.toString=function(){return this.pa()};function Hj(a){R.call(this,1,arguments);this.b=a}
w(Hj,R);function Ij(a){R.call(this,1,arguments);this.b=a}
w(Ij,R);function Jj(a,b,c){R.call(this,3,arguments);this.g=a;this.f=b;this.b=null!=c?!!c:null}
w(Jj,R);function Kj(a,b,c,d,e){R.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
w(Kj,R);function Lj(a,b,c){R.call(this,1,arguments);this.b=a;this.subscriptionId=b}
w(Lj,R);function Mj(a,b,c,d,e,f,g){R.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.w=d||null;this.i=e||null;this.g=f||null;this.source=g||null}
w(Mj,R);
var Nj=new S("subscription-batch-subscribe",Hj),Oj=new S("subscription-batch-unsubscribe",Hj),Pj=new S("subscription-subscribe",Kj),Qj=new S("subscription-subscribe-loading",Ij),Rj=new S("subscription-subscribe-loaded",Ij),Sj=new S("subscription-subscribe-success",Lj),Tj=new S("subscription-subscribe-external",Kj),Uj=new S("subscription-unsubscribe",Mj),Vj=new S("subscription-unsubscirbe-loading",Ij),Wj=new S("subscription-unsubscribe-loaded",Ij),Xj=new S("subscription-unsubscribe-success",Ij),Yj=
new S("subscription-external-unsubscribe",Mj),Zj=new S("subscription-enable-ypc",Ij),ak=new S("subscription-disable-ypc",Ij),bk=new S("subscription-prefs",Jj),ck=new S("subscription-prefs-success",Jj),dk=new S("subscription-prefs-failure",Jj);function ek(a,b){(a=N(a))&&a.style&&(a.style.display=b?"":"none",Md(a,"hid",!b))}
function fk(a){return(a=N(a))?"none"!=a.style.display&&!I(a,"hid"):!1}
function gk(a){C(arguments,function(a){!ea(a)||a instanceof Element?ek(a,!0):C(a,function(a){gk(a)})})}
function hk(a){C(arguments,function(a){!ea(a)||a instanceof Element?ek(a,!1):C(a,function(a){hk(a)})})}
;function ik(a,b,c,d,e,f,g){var k,l;if(k=c.offsetParent){var m="HTML"==k.tagName||"BODY"==k.tagName;m&&"static"==yh(k,"position")||(l=Ch(k),m||(m=(m=Ih(k))&&Ce?-k.scrollLeft:!m||Be&&Qe("8")||"visible"==yh(k,"overflowX")?k.scrollLeft:k.scrollWidth-k.clientWidth-k.scrollLeft,l=ye(l,new K(m,k.scrollTop))))}k=l||new K;l=Hh(a);if(m=Bh(a)){var r=new th(m.left,m.top,m.right-m.left,m.bottom-m.top),m=Math.max(l.left,r.left),M=Math.min(l.left+l.width,r.left+r.width);if(m<=M){var V=Math.max(l.top,r.top),r=Math.min(l.top+
l.height,r.top+r.height);V<=r&&(l.left=m,l.top=V,l.width=M-m,l.height=r-V)}}m=ef(a);V=ef(c);if(m.b!=V.b){var M=m.b.body,H;var V=rf(V.b),r=new K(0,0),A;A=(A=gf(M))?rf(A):window;b:{try{Xc(A.parent);H=!0;break b}catch(kd){}H=!1}if(H){H=M;do{var wa=A==V?Ch(H):Dh(H);r.l+=wa.l;r.o+=wa.o}while(A&&A!=V&&A!=A.parent&&(H=A.frameElement)&&(A=A.parent))}H=ye(r,Ch(M));!L||9<=Number(Re)||of(m.b)||(H=ye(H,pf(m.b)));l.left+=H.l;l.top+=H.o}a=jk(a,b);b=l.left;a&4?b+=l.width:a&2&&(b+=l.width/2);b=new K(b,l.top+(a&1?
l.height:0));b=ye(b,k);e&&(b.l+=(a&4?-1:1)*e.l,b.o+=(a&1?-1:1)*e.o);var Y;g&&(Y=Bh(c))&&(Y.top-=k.o,Y.right-=k.l,Y.bottom-=k.o,Y.left-=k.l);return kk(b,c,d,f,Y,g,void 0)}
function kk(a,b,c,d,e,f,g){a=new K(a.l,a.o);var k=jk(b,c);c=Fh(b);g=g?new Sc(g.width,g.height):new Sc(c.width,c.height);a=new K(a.l,a.o);g=new Sc(g.width,g.height);var l=0;if(d||0!=k)k&4?a.l-=g.width+(d?d.right:0):k&2?a.l-=g.width/2:d&&(a.l+=d.left),k&1?a.o-=g.height+(d?d.bottom:0):d&&(a.o+=d.top);if(f){if(e){d=a;k=g;l=0;65==(f&65)&&(d.l<e.left||d.l>=e.right)&&(f&=-2);132==(f&132)&&(d.o<e.top||d.o>=e.bottom)&&(f&=-5);d.l<e.left&&f&1&&(d.l=e.left,l|=1);if(f&16){var m=d.l;d.l<e.left&&(d.l=e.left,l|=
4);d.l+k.width>e.right&&(k.width=Math.min(e.right-d.l,m+k.width-e.left),k.width=Math.max(k.width,0),l|=4)}d.l+k.width>e.right&&f&1&&(d.l=Math.max(e.right-k.width,e.left),l|=1);f&2&&(l|=(d.l<e.left?16:0)|(d.l+k.width>e.right?32:0));d.o<e.top&&f&4&&(d.o=e.top,l|=2);f&32&&(m=d.o,d.o<e.top&&(d.o=e.top,l|=8),d.o+k.height>e.bottom&&(k.height=Math.min(e.bottom-d.o,m+k.height-e.top),k.height=Math.max(k.height,0),l|=8));d.o+k.height>e.bottom&&f&4&&(d.o=Math.max(e.bottom-k.height,e.top),l|=2);f&8&&(l|=(d.o<
e.top?64:0)|(d.o+k.height>e.bottom?128:0));e=l}else e=256;l=e}f=new th(0,0,0,0);f.left=a.l;f.top=a.o;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;g=new K(f.left,f.top);g instanceof K?(a=g.l,g=g.o):(a=g,g=void 0);b.style.left=Eh(a,!1);b.style.top=Eh(g,!1);g=new Sc(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=of(ef(gf(b)).b),!L||Qe("10")||g&&Qe("8")?(b=b.style,Ce?b.MozBoxSizing="border-box":De?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,
0)+"px",b.height=Math.max(c.height,0)+"px"):(a=b.style,g?(L?(g=Kh(b,"paddingLeft"),f=Kh(b,"paddingRight"),d=Kh(b,"paddingTop"),k=Kh(b,"paddingBottom"),g=new sh(d,f,k,g)):(g=xh(b,"paddingLeft"),f=xh(b,"paddingRight"),d=xh(b,"paddingTop"),k=xh(b,"paddingBottom"),g=new sh(parseFloat(d),parseFloat(f),parseFloat(k),parseFloat(g))),!L||9<=Number(Re)?(f=xh(b,"borderLeftWidth"),d=xh(b,"borderRightWidth"),k=xh(b,"borderTopWidth"),b=xh(b,"borderBottomWidth"),b=new sh(parseFloat(k),parseFloat(d),parseFloat(b),
parseFloat(f))):(f=Mh(b,"borderLeft"),d=Mh(b,"borderRight"),k=Mh(b,"borderTop"),b=Mh(b,"borderBottom"),b=new sh(k,d,b,f)),a.pixelWidth=c.width-b.left-g.left-g.right-b.right,a.pixelHeight=c.height-b.top-g.top-g.bottom-b.bottom):(a.pixelWidth=c.width,a.pixelHeight=c.height)));return e}
function jk(a,b){return(b&8&&Ih(a)?b^4:b)&-9}
;var lk={},mk="ontouchstart"in document;function nk(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return Kf(c,function(a){return I(a,b)},!0,d)}
function ok(a){var b="mouseover"==a.type&&"mouseenter"in lk||"mouseout"==a.type&&"mouseleave"in lk,c=a.type in lk||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=lk[b],d;for(d in c.f){var e=nk(b,d,a.target);e&&!Kf(a.relatedTarget,function(a){return a==e},!0)&&c.M(d,e,b,a)}}if(b=lk[a.type])for(d in b.f)(e=nk(a.type,d,a.target))&&b.M(d,e,a.type,a)}}
Q(document,"blur",ok,!0);Q(document,"change",ok,!0);Q(document,"click",ok);Q(document,"focus",ok,!0);Q(document,"mouseover",ok);Q(document,"mouseout",ok);Q(document,"mousedown",ok);Q(document,"keydown",ok);Q(document,"keyup",ok);Q(document,"keypress",ok);Q(document,"cut",ok);Q(document,"paste",ok);mk&&(Q(document,"touchstart",ok),Q(document,"touchend",ok),Q(document,"touchcancel",ok));function pk(a){this.w=a;this.D={};this.H=[];this.F=[]}
h=pk.prototype;h.L=function(a){return P(a,U(this))};
function U(a,b){return"yt-uix"+(a.w?"-"+a.w:"")+(b?"-"+b:"")}
h.unregister=function(){ec(this.H);this.H.length=0;Fi(this.F);this.F.length=0};
h.init=aa;h.dispose=aa;function qk(a,b,c){a.H.push(cc(b,c,a))}
function rk(a,b,c){a.F.push(Ei(b,c,a))}
function W(a,b,c,d){d=U(a,d);var e=v(c,a);b in lk||(lk[b]=new D);lk[b].subscribe(d,e);a.D[c]=e}
function X(a,b,c,d){if(b in lk){var e=lk[b];Wb(e,U(a,d),a.D[c]);0>=e.fa()&&(e.dispose(),delete lk[b])}delete a.D[c]}
h.Z=function(a,b,c){var d=this.j(a,b);if(d&&(d=t(d))){var e=qb(arguments,2);pb(e,0,0,a);d.apply(null,e)}};
h.j=function(a,b){return Xa(a,b)};
function sk(a,b){Va(a,"tooltip-text",b)}
;function tk(){pk.call(this,"button");this.b=null;this.g=[];this.f={}}
w(tk,pk);ba(tk);h=tk.prototype;h.register=function(){W(this,"click",this.rb);W(this,"keydown",this.Wa);W(this,"keypress",this.Xa);qk(this,"page-scroll",this.Yb)};
h.unregister=function(){X(this,"click",this.rb);X(this,"keydown",this.Wa);X(this,"keypress",this.Xa);uk(this);this.f={};tk.B.unregister.call(this)};
h.rb=function(a){a&&!a.disabled&&(vk(this,a),this.click(a))};
h.Wa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=wk(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=Af(b,d);if(e){e=e.tagName.toLowerCase();var f;"ul"==e?f=this.kc:"table"==e&&(f=this.jc);f&&xk(this,a,b,c,v(f,this))}}};
h.Yb=function(){var a=this.f,b=0,c;for(c in a)b++;if(0!=b)for(var d in a){b=a[d];c=P(b.activeButtonNode||b.parentNode,U(this));if(void 0==c||void 0==b)break;yk(this,c,b,!0)}};
function xk(a,b,c,d,e){var f=fk(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=zk(a,c)){if(p(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;"a"==b.tagName.toLowerCase()?hh(b.href):wg(b)}else g&&Ak(a,b);else f?27==d.keyCode?(zk(a,c),Ak(a,b)):e(b,c,d):(a=I(b,U(a,"reverse"))?38:40,d.keyCode==a&&(wg(b),d.preventDefault()))}
h.Xa=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=wk(this,a),fk(a)&&c.preventDefault())};
function zk(a,b){var c=U(a,"menu-item-highlight"),d=O(c,b);d&&Kd(d,c);return d}
function Bk(a,b,c){J(c,U(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=U(a,"item-id-"+ia(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
h.jc=function(a,b,c){var d=zk(this,b);if(d){var e=jg("table",b);b=kf("td",null,e);d=Ck(d,b,kf("td",null,jg("tr",e)).length,c);-1!=d&&(Bk(this,a,b[d]),c.preventDefault())}};
h.kc=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=zk(this,b);d&&(b=gb(kf("li",null,b),fk),Bk(this,a,b[Ck(d,b,1,c)]),c.preventDefault())}};
function Ck(a,b,c,d){var e=b.length;a=fb(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Dk(a,b){var c=b.iframeMask;c||(c=document.createElement("iframe"),c.src='javascript:""',c.className=U(a,"menu-mask"),hk(c),b.iframeMask=c);return c}
function yk(a,b,c,d){var e=P(b,U(a,"group")),f=!!a.j(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,g=8,k=Hh(b);if(I(b,U(a,"reverse"))){f=8;g=9;k=k.top+"px";try{c.style.maxHeight=k}catch(r){}}I(b,"flip")&&(I(b,U(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.j(b,"button-has-sibling-menu")?l=Ah(e):a.j(b,"button-menu-root-container")&&(l=Ek(a,b));L&&!Qe("8")&&(l=null);var m;l&&(m=Hh(l),m=new sh(-m.top,m.left,m.top,-m.left));l=new K(0,1);I(b,U(a,"center-menu"))&&(l.l-=Math.round((Fh(c).width-Fh(b).width)/
2));d&&(l.o+=pf(document).o);if(a=Dk(a,b))b=Fh(c),a.style.width=b.width+"px",a.style.height=b.height+"px",ik(e,f,a,g,l,m,197),d&&uh(a,"position","fixed");ik(e,f,c,g,l,m,197)}
function Ek(a,b){if(a.j(b,"button-menu-root-container")){var c=a.j(b,"button-menu-root-container");return P(b,c)}return document.body}
h.tb=function(a){if(a){var b=wk(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.j(a,"button-has-sibling-menu")?c=a.parentNode:c=Ek(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Dk(this,a);d&&c.appendChild(d);(c=!!this.j(a,"button-menu-fixed"))&&(this.f[fg(a).toString()]=b);yk(this,a,b,c);fc("yt-uix-button-menu-before-show",a,b);gk(b);d&&gk(d);
this.Z(a,"button-menu-action",!0);J(a,U(this,"active"));b=v(this.sb,this,a,!1);d=v(this.sb,this,a,!0);c=v(this.Nc,this,a,void 0);this.b&&wk(this,this.b)==wk(this,a)||uk(this);E("yt-uix-button-menu-show",a);ug(this.g);this.g=[Q(document,"click",d),Q(document,"contextmenu",b),Q(window,"resize",c)];this.b=a}}};
function Ak(a,b){if(b){var c=wk(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");hk(c);a.Z(b,"button-menu-action",!1);var d=Dk(a,b),e=fg(c).toString();delete a.f[e];y(function(){d&&d.parentNode&&(hk(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=P(b,U(a,"group")),f=[U(a,"active")];
e&&f.push(U(a,"group-active"));Ld(b,f);E("yt-uix-button-menu-hide",b);ug(a.g);a.g.length=0}}
h.Nc=function(a,b){var c=wk(this,a);if(c){b&&(b instanceof Jb?c.innerHTML=Lb(b):zf(c,b));var d=!!this.j(a,"button-menu-fixed");yk(this,a,c,d)}};
h.sb=function(a,b,c){c=vg(c);var d=P(c,U(this));if(d){var d=wk(this,d),e=wk(this,a);if(d==e)return}var d=P(c,U(this,"menu")),e=d==wk(this,a),f=I(c,U(this,"menu-item")),g=I(c,U(this,"menu-close"));if(!d||e&&(f||g))Ak(this,a),d&&b&&this.j(a,"button-menu-indicate-selected")&&((a=O(U(this,"content"),a))&&zf(a,Hf(c)),Fk(this,d,c))};
function Fk(a,b,c){var d=U(a,"menu-item-selected");C(jf(d,b),function(a){Kd(a,d)});
J(c.parentNode,d)}
function wk(a,b){if(!b.widgetMenu){var c=a.j(b,"button-menu-id"),c=c&&N(c),d=U(a,"menu");c?Jd(c,[d,U(a,"menu-external")]):c=O(d,b);b.widgetMenu=c}return b.widgetMenu}
h.isToggled=function(a){return I(a,U(this,"toggled"))};
function vk(a,b){if(a.j(b,"button-toggle")){var c=P(b,U(a,"group")),d=U(a,"toggled"),e=I(b,d);if(c&&a.j(c,"button-toggle-group")){var f=a.j(c,"button-toggle-group");C(jf(U(a),c),function(a){a!=b||"optional"==f&&e?(Kd(a,d),a.removeAttribute("aria-pressed")):(J(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),Od(b,d)}}
h.click=function(a){if(wk(this,a)){var b=wk(this,a);if(b){var c=P(b.activeButtonNode||b.parentNode,U(this));c&&c!=a?(Ak(this,c),y(v(this.tb,this,a),1)):fk(b)?Ak(this,a):this.tb(a)}a.focus()}this.Z(a,"button-action")};
function uk(a){a.b&&Ak(a,a.b)}
;function Gk(a){pk.call(this,a);this.g=null}
w(Gk,pk);h=Gk.prototype;h.L=function(a){var b=pk.prototype.L.call(this,a);return b?b:a};
h.register=function(){qk(this,"yt-uix-kbd-nav-move-out-done",this.P)};
h.dispose=function(){Gk.B.dispose.call(this);Hk(this)};
h.j=function(a,b){var c=Gk.B.j.call(this,a,b);return c?c:(c=Gk.B.j.call(this,a,"card-config"))&&(c=t(c))&&c[b]?c[b]:null};
h.show=function(a){var b=this.L(a);if(b){J(b,U(this,"active"));var c=Ik(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Jk(this,a,c);var d=U(this,"card-visible"),e=this.j(a,"card-delegate-show")&&this.j(b,"card-action");this.Z(b,"card-action",a);this.g=a;hk(c);y(v(function(){e||(gk(c),E("yt-uix-card-show",b,a,c));Kk(c);J(c,d);E("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Ik(a,b,c){var d=c||b,e=U(a,"card");c=Lk(a,d);var f=N(U(a,"card")+fg(d));if(f)return a=O(U(a,"card-body"),f),yf(a,c)||(tf(c),a.appendChild(c)),f;f=document.createElement("div");f.id=U(a,"card")+fg(d);f.className=e;(d=a.j(d,"card-class"))&&Jd(f,d.split(/\s+/));d=document.createElement("div");d.className=U(a,"card-border");b=a.j(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=U(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;tf(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Jk(a,b,c){var d=a.j(b,"orientation")||"horizontal",e=O(U(a,"anchor"),b)||b,f=a.j(b,"position"),g=!!a.j(b,"force-position"),k=a.j(b,"position-fixed"),d="horizontal"==d,l="bottomright"==f||"bottomleft"==f,m="topright"==f||"bottomright"==f,r,M;m&&l?(M=13,r=8):m&&!l?(M=12,r=9):!m&&l?(M=9,r=12):(M=8,r=13);var V=Ih(document.body),f=Ih(b);V!=f&&(M^=4);var H;d?(f=b.offsetHeight/2-12,H=new K(-12,b.offsetHeight+6)):(f=b.offsetWidth/2-6,H=new K(b.offsetWidth+6,-12));var A=Fh(c),f=Math.min(f,(d?A.height:
A.width)-24-6);6>f&&(f=6,d?H.o+=12-b.offsetHeight/2:H.l+=12-b.offsetWidth/2);A=null;g||(A=10);b=U(a,"card-flip");a=U(a,"card-reverse");Md(c,b,m);Md(c,a,l);A=ik(e,M,c,r,H,null,A);!g&&A&&(A&48&&(m=!m,M^=4,r^=4),A&192&&(l=!l,M^=1,r^=1),Md(c,b,m),Md(c,a,l),ik(e,M,c,r,H));k&&(e=parseInt(c.style.top,10),g=pf(document).o,uh(c,"position","fixed"),uh(c,"top",e-g+"px"));V&&(c.style.right="",e=Hh(c),e.left=e.left||parseInt(c.style.left,10),g=nf(window),c.style.left="",c.style.right=g.width-e.left-e.width+"px");
e=O("yt-uix-card-body-arrow",c);g=O("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!V&&m||V&&!m?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=O("yt-uix-card-arrow",c);m=O("yt-uix-card-arrow-background",c);l&&m&&(c="right"==d?Fh(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",m.style.marginLeft=-f+"px",m.style.marginTop=f+"px")}
h.P=function(a){if(a=this.L(a)){var b=N(U(this,"card")+fg(a));b&&(Kd(a,U(this,"active")),Kd(b,U(this,"card-visible")),hk(b),this.g=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(tf(b.cardMask),b.cardMask=null))}};
function Hk(a){a.g&&a.P(a.g)}
h.Mc=function(a,b){var c=this.L(a);if(c){if(b){var d=Lk(this,c);if(!d)return;b instanceof Jb?d.innerHTML=Lb(b):zf(d,b)}I(c,U(this,"active"))&&(c=Ik(this,a,c),Jk(this,a,c),gk(c),Kk(c))}};
h.isActive=function(a){return(a=this.L(a))?I(a,U(this,"active")):!1};
function Lk(a,b){var c=b.cardContentNode;if(!c){var d=U(a,"content"),e=U(a,"card-content");(c=(c=a.j(b,"card-id"))?N(c):O(d,b))||(c=document.createElement("div"));var f=c;Kd(f,d);J(f,e);b.cardContentNode=c}return c}
function Kk(a){var b=a.cardMask;b||(b=document.createElement("iframe"),b.src='javascript:""',Jd(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;var Mk=!L&&!Eb();function Nk(a,b){return Mk&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function Ok(){pk.call(this,"kbd-nav")}
var Pk;w(Ok,pk);ba(Ok);h=Ok.prototype;h.register=function(){W(this,"keydown",this.Ua);qk(this,"yt-uix-kbd-nav-move-in",this.bb);qk(this,"yt-uix-kbd-nav-move-in-to",this.lc);qk(this,"yt-uix-kbd-move-next",this.cb);qk(this,"yt-uix-kbd-nav-move-to",this.na)};
h.unregister=function(){X(this,"keydown",this.Ua);ug(Pk)};
h.Ua=function(a,b,c){var d=c.keyCode;if(a=P(a,U(this)))switch(d){case 13:case 32:this.bb(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Nk(a,"kbdNavMoveOut");!c;){c=P(a.parentElement,U(this));if(!c)break a;c=Nk(c,"kbdNavMoveOut")}c=N(c);this.na(c);E("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&I(a,U(this,"list")))switch(d){case 40:this.cb(b,a);break;case 38:d=document.activeElement==a,a=Qk(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),Rk(this,a[b]))}c.preventDefault()}};
h.bb=function(a){var b=Nk(a,"kbdNavMoveIn"),b=N(b);Sk(this,a,b);this.na(b)};
h.lc=function(a){var b;a:{var c=document;try{b=c&&c.activeElement;break a}catch(d){}b=null}Sk(this,b,a);this.na(a)};
h.na=function(a){if(a)if(Ef(a))a.focus();else{var b=Af(a,function(a){return xf(a)?Ef(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Sk(a,b,c){b&&c&&(J(c,U(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Mk&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))}
h.cb=function(a,b){var c=document.activeElement==b,d=Qk(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Rk(this,d[c]))};
function Rk(a,b){if(b){var c=Jf(b,"LI");c&&(J(c,U(a,"highlight")),Pk=Q(b,"blur",v(function(a){Kd(a,U(this,"highlight"));ug(Pk)},a,c)))}}
function Qk(a){if("UL"!=a.tagName.toUpperCase())return[];a=gb(uf(a),function(a){return"LI"==a.tagName.toUpperCase()});
return gb(hb(a,function(a){return fk(a)?Af(a,function(a){return xf(a)?Ef(a):!1}):!1}),function(a){return!!a})}
;function Tk(){pk.call(this,"menu");this.f=this.b=null;this.g={};this.A={};this.i=null}
w(Tk,pk);ba(Tk);function Uk(a){var b=Tk.getInstance();if(I(a,U(b)))return a;var c=b.L(a);return c?c:P(a,U(b,"content"))==b.b?b.f:null}
h=Tk.prototype;h.register=function(){W(this,"click",this.Ta);W(this,"mouseenter",this.Wb);qk(this,"page-scroll",this.Zb);qk(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.L(a);Vk(this,a)});
this.i=new D};
h.unregister=function(){X(this,"click",this.Ta);this.f=this.b=null;ug(rb(va(this.g)));this.g={};ua(this.A,function(a){tf(a)},this);
this.A={};ab(this.i);this.i=null;Tk.B.unregister.call(this)};
h.Ta=function(a,b,c){a&&(b=Wk(this,a),!b.disabled&&ig(c.target,b)&&Xk(this,a))};
h.Wb=function(a,b,c){a&&I(a,U(this,"hover"))&&ig(c.target,Wk(this,a))&&Xk(this,a,!0)};
h.Zb=function(){this.b&&this.f&&Yk(this,this.f,this.b)};
function Yk(a,b,c){var d=Zk(a,b);if(d){var e=Fh(c),f;if(e instanceof Sc)f=e.height,e=e.width;else throw Error("missing height argument");d.style.width=Eh(e,!0);d.style.height=Eh(f,!0)}c==a.b&&(e=9,f=8,I(b,U(a,"reversed"))&&(e^=1,f^=1),I(b,U(a,"flipped"))&&(e^=4,f^=4),a=new K(0,1),d&&ik(b,e,d,f,a,null,197),ik(b,e,c,f,a,null,197))}
function Xk(a,b,c){$k(a,b)&&!c?Vk(a,b):(al(a,b),!a.b||ig(b,a.b)?a.ub(b):Vb(a.i,v(a.ub,a,b)))}
h.ub=function(a){if(a){var b=bl(this,a);if(b){fc("yt-uix-menu-before-show",a,b);this.b?ig(a,this.b)||Vk(this,this.f):(this.f=a,this.b=b,I(a,U(this,"sibling-content"))||(tf(b),document.body.appendChild(b)),b.style.minWidth=Wk(this,a).offsetWidth-2+"px");var c=Zk(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);Kd(b,U(this,"content-hidden"));Yk(this,a,b);Jd(Wk(this,a),[U(this,"trigger-selected"),"yt-uix-button-toggled"]);E("yt-uix-menu-show",a);cl(b);dl(this,a);E("yt-uix-kbd-nav-move-in-to",
b);var d=v(this.Sc,this,a),e=v(this.hc,this,a),c=ia(a).toString();this.g[c]=[Q(b,"click",e),Q(document,"click",d)];I(a,U(this,"indicate-selected"))&&(d=v(this.ic,this,a),this.g[c].push(Q(b,"click",d)));I(a,U(this,"hover"))&&(a=v(this.Xb,this,a),this.g[c].push(Q(document,"mousemove",a)))}}};
h.Xb=function(a,b){var c=vg(b);c&&(ig(c,Wk(this,a))||el(this,c)||fl(this,a))};
h.Sc=function(a,b){var c=vg(b);if(c){if(el(this,c)){var d=P(c,U(this,"content")),e=Jf(c,"LI");e&&d&&yf(d,e)&&fc("yt-uix-menu-item-clicked",c);c=P(c,U(this,"close-on-select"));if(!c)return;d=Uk(c)}Vk(this,d||a)}};
function al(a,b){if(b){var c=P(b,U(a,"content"));c&&C(jf(U(a),c),function(a){!ig(a,b)&&$k(this,a)&&fl(this,a)},a)}}
function Vk(a,b){if(b){var c=[];c.push(b);var d=bl(a,b);d&&(d=jf(U(a),d),d=nb(d),c=c.concat(d),C(c,function(a){$k(this,a)&&fl(this,a)},a))}}
function fl(a,b){if(b){var c=bl(a,b);Ld(Wk(a,b),[U(a,"trigger-selected"),"yt-uix-button-toggled"]);J(c,U(a,"content-hidden"));var d=bl(a,b);d&&lf(d,{"aria-expanded":"false"});(d=Zk(a,b))&&d.parentNode&&tf(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.i&&a.i.M("ROOT_MENU_REMOVED"));E("yt-uix-menu-hide",b);c=ia(b).toString();ug(a.g[c]);delete a.g[c]}}
h.hc=function(a,b){var c=vg(b);c&&gl(this,a,c)};
h.ic=function(a,b){var c=vg(b);if(c){var d=Wk(this,a);if(d&&(c=Jf(c,"LI")))if(c=Hf(c).trim(),d.hasChildNodes()){var e=tk.getInstance();(d=O(U(e,"content"),d))&&zf(d,c)}else zf(d,c)}};
function dl(a,b){var c=bl(a,b);if(c){C(c.children,function(a){"LI"==a.tagName&&lf(a,{role:"menuitem"})});
lf(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+ia(c),c.id=d);(c=Wk(a,b))&&lf(c,{"aria-controls":d})}}
function gl(a,b,c){var d=bl(a,b);d&&I(b,U(a,"checked"))&&(a=Jf(c,"LI"))&&(a=O("yt-ui-menu-item-checked-hid",a))&&(C(jf("yt-ui-menu-item-checked",d),function(a){Nd(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Nd(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function $k(a,b){var c=bl(a,b);return c?!I(c,U(a,"content-hidden")):!1}
function cl(a){C(kf("UL",null,a),function(a){a.tabIndex=0;var b=Ok.getInstance();Jd(a,[U(b),U(b,"list")])})}
function bl(a,b){var c=Xa(b,"menu-content-id");return c&&(c=N(c))?(Jd(c,[U(a,"content"),U(a,"content-external")]),c):b==a.f?a.b:O(U(a,"content"),b)}
function Zk(a,b){var c=ia(b).toString(),d=a.A[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[U(a,"mask")];C(Id(b),function(a){e.push(a+"-mask")});
Jd(d,e);a.A[c]=d}return d||null}
function Wk(a,b){return O(U(a,"trigger"),b)}
function el(a,b){return ig(b,a.b)||ig(b,a.f)}
;function hl(){Gk.call(this,"clickcard");this.b={};this.f={}}
w(hl,Gk);ba(hl);h=hl.prototype;h.register=function(){hl.B.register.call(this);W(this,"click",this.Qa,"target");W(this,"click",this.Pa,"close")};
h.unregister=function(){hl.B.unregister.call(this);X(this,"click",this.Qa,"target");X(this,"click",this.Pa,"close");for(var a in this.b)ug(this.b[a]);this.b={};for(a in this.f)ug(this.f[a]);this.f={}};
h.Qa=function(a,b,c){c.preventDefault();b=Jf(c.target,"button");b&&b.disabled||(a=(b=this.j(a,"card-target"))?hf(b):a,b=this.L(a),this.j(b,"disabled")||(I(b,U(this,"active"))?(this.P(a),Kd(b,U(this,"active"))):(this.show(a),J(b,U(this,"active")))))};
h.show=function(a){hl.B.show.call(this,a);var b=this.L(a),c=ia(a).toString();if(!Xa(b,"click-outside-persists")){if(this.b[c])return;var b=Q(document,"click",v(this.Ra,this,a)),d=Q(window,"blur",v(this.Ra,this,a));this.b[c]=[b,d]}a=Q(window,"resize",v(this.Mc,this,a,void 0));this.f[c]=a};
h.P=function(a){hl.B.P.call(this,a);a=ia(a).toString();var b=this.b[a];b&&(ug(b),this.b[a]=null);if(b=this.f[a])ug(b),delete this.f[a]};
h.Ra=function(a,b){var c="yt-uix"+(this.w?"-"+this.w:"")+"-card",d=null;b.target&&(d=P(b.target,c)||P(Uk(b.target),c));(d=d||P(document.activeElement,c)||P(Uk(document.activeElement),c))||this.P(a)};
h.Pa=function(a){(a=P(a,U(this,"card")))&&(a=a.cardTargetNode)&&this.P(a)};function il(){Gk.call(this,"hovercard")}
w(il,Gk);ba(il);h=il.prototype;h.register=function(){W(this,"mouseenter",this.Ya,"target");W(this,"mouseleave",this.$a,"target");W(this,"mouseenter",this.Za,"card");W(this,"mouseleave",this.ab,"card")};
h.unregister=function(){X(this,"mouseenter",this.Ya,"target");X(this,"mouseleave",this.$a,"target");X(this,"mouseenter",this.Za,"card");X(this,"mouseleave",this.ab,"card")};
h.Ya=function(a){if(jl!=a){jl&&(this.P(jl),jl=null);var b=v(this.show,this,a),c=parseInt(this.j(a,"delay-show"),10),b=y(b,-1<c?c:200);Va(a,"card-timer",b.toString());jl=a;a.alt&&(Va(a,"card-alt",a.alt),a.alt="");a.title&&(Va(a,"card-title",a.title),a.title="")}};
h.$a=function(a){var b=parseInt(this.j(a,"card-timer"),10);Ra(b);this.L(a).isCardHidable=!0;b=parseInt(this.j(a,"delay-hide"),10);b=-1<b?b:200;y(v(this.$b,this,a),b);if(b=this.j(a,"card-alt"))a.alt=b;if(b=this.j(a,"card-title"))a.title=b};
h.$b=function(a){this.L(a).isCardHidable&&(this.P(a),jl=null)};
h.Za=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
h.ab=function(a){a&&this.P(a.cardTargetNode)};
var jl=null;function kl(a,b,c,d,e,f){this.b=a;this.D=null;this.g=O("yt-dialog-fg",this.b)||this.b;if(a=O("yt-dialog-title",this.g)){var g="yt-dialog-title-"+ia(this.g);a.setAttribute("id",g);this.g.setAttribute("aria-labelledby",g)}this.g.setAttribute("tabindex","-1");this.K=O("yt-dialog-focus-trap",this.b);this.N=!1;this.i=new D;this.F=[];this.F.push(sg(this.b,v(this.mc,this),"yt-dialog-dismiss"));this.F.push(Q(this.K,"focus",v(this.Sb,this),!0));ll(this);this.S=b;this.V=c;this.T=d;this.H=e;this.W=f;this.A=
this.w=null}
var ml={LOADING:"loading",Vc:"content",bd:"working"};function nl(a,b){a.C()||a.i.subscribe("post-all",b)}
function ll(a){a=O("yt-dialog-fg-content",a.b);var b=[];ua(ml,function(a){b.push("yt-dialog-show-"+a)});
Ld(a,b);J(a,"yt-dialog-show-content")}
h=kl.prototype;
h.show=function(){if(!this.C()){this.D=document.activeElement;if(!this.T){this.f||(this.f=N("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a;var b=window,c=b.document;a=0;if(c){a=c.body;var d=c.documentElement;if(d&&a)if(b=nf(b).height,of(c)&&d.scrollHeight)a=d.scrollHeight!=b?d.scrollHeight:d.offsetHeight;else{var c=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(c=a.scrollHeight,e=
a.offsetHeight);a=c>b?c>e?c:e:c<e?c:e}else a=0}this.f.style.height=a+"px";gk(this.f)}this.Va();a=ol(this);pl(a);this.w=Q(document,"keydown",v(this.gc,this));a=this.b;d=cc("player-added",this.Va,this);Va(a,"player-ready-pubsub-key",d);this.V&&(this.A=Q(document,"click",v(this.Bc,this)));gk(this.b);this.g.setAttribute("tabindex","0");ql(this);this.H||J(document.body,"yt-dialog-active");uk(tk.getInstance());Hk(hl.getInstance());Hk(il.getInstance());E("yt-ui-dialog-show-complete",this)}};
function rl(){return ib(jf("yt-dialog"),function(a){return fk(a)})}
h.Va=function(){if(!this.W){var a=this.b;Md(document.body,"hide-players",!0);a&&Md(a,"preserve-players",!0)}};
function ol(a){var b=kf("iframe",null,a.b);C(b,function(a){var b=Xa(a,"onload");b&&(b=t(b))&&Q(a,"load",b);if(b=Xa(a,"src"))a.src=b},a);
return nb(b)}
function pl(a){C(document.getElementsByTagName("iframe"),function(b){-1==fb(a,b)&&J(b,"iframe-hid")})}
function sl(){C(jf("iframe-hid"),function(a){Kd(a,"iframe-hid")})}
h.mc=function(a){a=a.currentTarget;a.disabled||(a=Xa(a,"action")||"",this.dismiss(a))};
h.dismiss=function(a){if(!this.C()){this.i.M("pre-all");this.i.M("pre-"+a);hk(this.b);Hk(hl.getInstance());Hk(il.getInstance());this.g.setAttribute("tabindex","-1");rl()||(hk(this.f),this.H||Kd(document.body,"yt-dialog-active"),lg(),sl());this.w&&(ug(this.w),this.w=null);this.A&&(ug(this.A),this.A=null);var b=this.b;if(b){var c=Xa(b,"player-ready-pubsub-key");c&&(ec(c),Ya(b,"player-ready-pubsub-key"))}this.i.M("post-all");E("yt-ui-dialog-hide-complete",this);"cancel"==a&&E("yt-ui-dialog-cancelled",
this);this.i&&this.i.M("post-"+a);this.D&&this.D.focus()}};
h.setTitle=function(a){zf(O("yt-dialog-title",this.b),a)};
h.gc=function(a){y(v(function(){this.S||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&I(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
h.Bc=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
h.C=function(){return this.N};
h.dispose=function(){fk(this.b)&&this.dismiss("dispose");ug(this.F);this.F.length=0;y(v(function(){this.D=null},this),0);
this.K=this.g=null;this.i.dispose();this.i=null;this.N=!0};
h.Sb=function(a){a.stopPropagation();ql(this)};
function ql(a){y(v(function(){this.g&&this.g.focus()},a),0)}
q("yt.ui.Dialog",kl,void 0);function tl(){pk.call(this,"overlay");this.i=this.f=this.g=this.b=null}
w(tl,pk);ba(tl);h=tl.prototype;h.register=function(){W(this,"click",this.Ca,"target");W(this,"click",this.vb,"close");ul(this)};
h.unregister=function(){tl.B.unregister.call(this);X(this,"click",this.Ca,"target");X(this,"click",this.vb,"close");this.i&&(ec(this.i),this.i=null);this.f&&(ug(this.f),this.f=null)};
h.Ca=function(a){if(!this.b||!fk(this.b.b)){var b=this.L(a);a=vl(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.j(b,"disable-shortcuts")||!1,d=!!this.j(b,"disable-outside-click-dismiss")||!1;this.b=new kl(a,c);this.g=b;var e=O("yt-dialog-fg",a);if(e){var f=this.j(b,"overlay-class")||"",g=this.j(b,"overlay-style")||"default",k=this.j(b,"overlay-shape")||"default",f=f?f.split(" "):[];f.push(U(this,g));f.push(U(this,k));Jd(e,f)}this.b.show();E("yt-uix-kbd-nav-move-to",e||a);ul(this);c||
d||(c=v(function(a){I(a.target,"yt-dialog-base")&&wl(this)},this),this.f=Q(O("yt-dialog-base",a),"click",c));
this.Z(b,"overlay-shown");E("yt-uix-overlay-shown",b)}}};
function ul(a){a.i||(a.i=cc("yt-uix-overlay-hide",xl));a.b&&nl(a.b,function(){var a=tl.getInstance();a.g=null;a.b.dispose();a.b=null})}
function wl(a){if(a.b){var b=a.g;a.b.dismiss("overlayhide");b&&a.Z(b,"overlay-hidden");a.g=null;a.f&&(ug(a.f),a.f=null);a.b=null}}
function vl(a,b){var c;if(a)if(c=O("yt-dialog",a)){var d=N("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=P(b,"yt-dialog"));return c}
function yl(){var a=tl.getInstance();if(a.g)a=O("yt-dialog-fg-content",a.g.overlayContentNode);else a:{if(a=jf("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=P(a[b],"yt-dialog");if(fk(c)){a=a[b];break a}}a=null}return a}
h.vb=function(a){a&&a.disabled||E("yt-uix-overlay-hide")};
function xl(){wl(tl.getInstance())}
h.show=function(a){this.Ca(a)};var zl={},Al=[];function Bl(a){a=P(a,"yt-uix-button-subscription-container");return O("yt-dialog",O("unsubscribe-confirmation-overlay-container",a))}
function Cl(a,b){ug(Al);Al.length=0;zl[b]||(zl[b]=Bl(a));tl.getInstance().show(zl[b]);var c=yl();return new Lf(function(a){Al.push(sg(c,function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function Dl(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Bd(c,"mode",b));c=Bd("/signin?context=popup","next",c);c=Bd(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=cc("LOGGED_IN",function(b){ec(x("LOGGED_IN_PUBSUB_KEY",void 0));Oa("LOGGED_IN",!0);a(b)});
Oa("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",E,void 0);function El(){var a=x("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!x("SESSION_INDEX")&&!x("LOGGED_IN"))}
;function Fl(){pk.call(this,"tooltip");this.b=0;this.f={}}
w(Fl,pk);ba(Fl);h=Fl.prototype;h.register=function(){W(this,"mouseover",this.oa);W(this,"mouseout",this.X);W(this,"focus",this.Sa);W(this,"blur",this.Na);W(this,"click",this.X);W(this,"touchstart",this.pb);W(this,"touchend",this.qa);W(this,"touchcancel",this.qa)};
h.unregister=function(){X(this,"mouseover",this.oa);X(this,"mouseout",this.X);X(this,"focus",this.Sa);X(this,"blur",this.Na);X(this,"click",this.X);X(this,"touchstart",this.pb);X(this,"touchend",this.qa);X(this,"touchcancel",this.qa);this.dispose();Fl.B.unregister.call(this)};
h.dispose=function(){for(var a in this.f)this.X(this.f[a]);this.f={}};
h.oa=function(a){if(!(this.b&&1E3>pa()-this.b)){var b=parseInt(this.j(a,"tooltip-hide-timer"),10);b&&(Ya(a,"tooltip-hide-timer"),Ra(b));var b=v(function(){Gl(this,a);Ya(a,"tooltip-show-timer")},this),c=parseInt(this.j(a,"tooltip-show-delay"),10)||0,b=y(b,c);
Va(a,"tooltip-show-timer",b.toString());a.title&&(sk(a,Hl(this,a)),a.title="");b=ia(a).toString();this.f[b]=a}};
h.X=function(a){var b=parseInt(this.j(a,"tooltip-show-timer"),10);b&&(Ra(b),Ya(a,"tooltip-show-timer"));b=v(function(){if(a){var b=N(Il(this,a));b&&(Jl(b),tf(b),Ya(a,"content-id"));b=N(Il(this,a,"arialabel"));tf(b)}Ya(a,"tooltip-hide-timer")},this);
b=y(b,50);Va(a,"tooltip-hide-timer",b.toString());if(b=this.j(a,"tooltip-text"))a.title=b;b=ia(a).toString();delete this.f[b]};
h.Sa=function(a){this.b=0;this.oa(a)};
h.Na=function(a){this.b=0;this.X(a)};
h.pb=function(a,b,c){c.changedTouches&&(this.b=0,(a=nk(b,U(this),c.changedTouches[0].target))&&this.oa(a))};
h.qa=function(a,b,c){c.changedTouches&&(this.b=pa(),(a=nk(b,U(this),c.changedTouches[0].target))&&this.X(a))};
function Kl(a,b,c){sk(b,c);a=a.j(b,"content-id");(a=N(a))&&zf(a,c)}
function Hl(a,b){return a.j(b,"tooltip-text")||b.title}
function Gl(a,b){if(b){var c=Hl(a,b);if(c){var d=N(Il(a,b));if(!d){d=document.createElement("div");d.id=Il(a,b);d.className=U(a,"tip");var e=document.createElement("div");e.className=U(a,"tip-body");var f=document.createElement("div");f.className=U(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=U(a,"tip-content");var k=Ll(a,b),l=Il(a,b,"content");g.id=l;Va(b,"content-id",l);e.appendChild(g);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);
var m=Hf(b),l=Il(a,b,"arialabel"),f=document.createElement("div");J(f,U(a,"arialabel"));f.id=l;m=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+m:m+" "+c;zf(f,m);b.setAttribute("aria-labelledby",l);l=Ph()||document.body;l.appendChild(f);l.appendChild(d);Kl(a,b,c);(c=parseInt(a.j(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",J(g,U(a,"normal-wrap")));g=I(b,U(a,"reverse"));Ml(a,b,d,e,k,g)||Ml(a,b,d,e,k,!g);var r=U(a,"tip-visible");
y(function(){J(d,r)},0)}}}}
function Ml(a,b,c,d,e,f){Md(c,U(a,"tip-reverse"),f);var g=0;f&&(g=1);var k=Fh(b);f=new K((k.width-10)/2,f?k.height:0);var l=Ch(b);kk(new K(l.l+f.l,l.o+f.o),c,g);f=nf(window);var m;1==c.nodeType?m=Dh(c):(c=c.changedTouches?c.changedTouches[0]:c,m=new K(c.clientX,c.clientY));c=Fh(d);var r=Math.floor(c.width/2),g=!!(f.height<m.o+k.height),k=!!(m.o<k.height),l=!!(m.l<r);f=!!(f.width<m.l+r);m=(c.width+3)/-2- -5;a=a.j(b,"force-tooltip-direction");if("left"==a||l)m=-5;else if("right"==a||f)m=20-c.width-
3;a=Math.floor(m)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||k)}
function Il(a,b,c){a=U(a)+fg(b);c&&(a+="-"+c);return a}
function Ll(a,b){var c=null;Fe&&I(b,U(a,"masked"))&&((c=N("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),gk(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=U(a,"tip-mask")));return c}
function Jl(a){var b=N("yt-uix-tooltip-shared-mask"),c=b&&Kf(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),hk(b),document.body.appendChild(b))}
;function Nl(){pk.call(this,"subscription-button")}
w(Nl,pk);ba(Nl);Nl.prototype.register=function(){W(this,"click",this.Fa);rk(this,Qj,this.gb);rk(this,Rj,this.fb);rk(this,Sj,this.xc);rk(this,Vj,this.gb);rk(this,Wj,this.fb);rk(this,Xj,this.zc);rk(this,Zj,this.oc);rk(this,ak,this.nc)};
Nl.prototype.unregister=function(){X(this,"click",this.Fa);Nl.B.unregister.call(this)};
var Ol={Ga:"hover-enabled",yb:"yt-uix-button-subscribe",zb:"yt-uix-button-subscribed",Tc:"ypc-enabled",Ab:"yt-uix-button-subscription-container",Bb:"yt-subscription-button-disabled-mask-container"},Pl={Uc:"channel-external-id",Cb:"subscriber-count-show-when-subscribed",Db:"subscriber-count-tooltip",Eb:"subscriber-count-title",Wc:"href",Xc:"insecure",Ha:"is-subscribed",Yc:"parent-url",Zc:"clicktracking",Fb:"show-unsub-confirm-dialog",$c:"show-unsub-confirm-time-frame",Gb:"style-type",Ia:"subscribed-timestamp",
Ja:"subscription-id",ad:"target",Ib:"ypc-enabled"};h=Nl.prototype;h.Fa=function(a){var b=this.j(a,"href"),c=this.j(a,"insecure"),d=El(),c=c&&!0;if(b)a=this.j(a,"target")||"_self",window.open(b,a);else if(!c)if(d){var b=this.j(a,"channel-external-id"),d=this.j(a,"clicktracking"),c=Ql(this,a),e=this.j(a,"parent-url");if(this.j(a,"is-subscribed")){var f=this.j(a,"subscription-id"),g=new Mj(b,f,c,a,d,e);Rl(this,a)?Cl(a,b).then(function(){T(Uj,g)}):T(Uj,g)}else T(Pj,new Kj(b,c,d,e))}else Sl(this,a)};
h.gb=function(a){this.Y(a.b,this.nb,!0)};
h.fb=function(a){this.Y(a.b,this.nb,!1)};
h.xc=function(a){this.Y(a.b,this.ob,!0,a.subscriptionId)};
h.zc=function(a){this.Y(a.b,this.ob,!1)};
h.oc=function(a){this.Y(a.b,this.Qb)};
h.nc=function(a){this.Y(a.b,this.Ob)};
h.ob=function(a,b,c){b?(Va(a,Pl.Ha,"true"),c&&Va(a,Pl.Ja,c),this.j(a,Pl.Fb)&&(b=new Gj,Va(a,Pl.Ia,(b.getTime()/1E3).toString()))):(Ya(a,Pl.Ha),Ya(a,Pl.Ia),Ya(a,Pl.Ja));Tl(this,a)};
function Ql(a,b){if(!a.j(b,"ypc-enabled"))return null;var c=a.j(b,"ypc-item-type"),d=a.j(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
h.nb=function(a,b){var c=P(a,Ol.Ab);Md(c,Ol.Bb,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Tl(a,b){var c=a.j(b,Pl.Gb),d=!!a.j(b,"is-subscribed"),c="-"+c,e=Ol.zb+c;Md(b,Ol.yb+c,!d);Md(b,e,d);a.j(b,Pl.Db)&&!a.j(b,Pl.Cb)&&(c=U(Fl.getInstance()),Md(b,c,!d),b.title=d?"":a.j(b,Pl.Eb));d?y(function(){J(b,Ol.Ga)},1E3):Kd(b,Ol.Ga)}
h.Qb=function(a){var b=!!this.j(a,"ypc-item-type"),c=!!this.j(a,"ypc-item-id");!this.j(a,"ypc-enabled")&&b&&c&&(J(a,"ypc-enabled"),Va(a,Pl.Ib,"true"))};
h.Ob=function(a){this.j(a,"ypc-enabled")&&(Kd(a,"ypc-enabled"),Ya(a,"ypc-enabled"))};
function Ul(a,b){return gb(jf(U(a)),function(a){return b==this.j(a,"channel-external-id")},a)}
h.Kb=function(a,b,c){var d=qb(arguments,2);C(a,function(a){b.apply(this,mb(a,d))},this)};
h.Y=function(a,b,c){var d=Ul(this,a);this.Kb.apply(this,mb([d],qb(arguments,1)))};
function Sl(a,b){var c=v(function(a){a.discoverable_subscriptions&&Oa("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.Fa(b)},a);
Dl(c,"subscribe")}
function Rl(a,b){if(!a.j(b,"show-unsub-confirm-dialog"))return!1;var c=a.j(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.j(b,"subscribed-timestamp"),10),(new Gj).getTime()<1E3*(c+600))?!0:!1}
;var Vl=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",Vl,void 0);function Wl(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Xl(a,b,c){u(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Yl(a)}
function Yl(a,b,c){if(ha(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Zl(a,b,c,d){if(ha(a)&&!da(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};u(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function $l(a){var b=a.video_id||a.videoId;if(u(b)){var c=Og()||{},d=Og()||{};p(void 0)?d[b]=void 0:delete d[b];var e=pa()+3E5,f=Qg;if(f&&window.JSON){u(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;var am=null,bm=[];function cm(a){return{externalChannelId:a.externalChannelId,fc:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function dm(a){a&&a.externalChannelId&&em(cm(a))}
function em(a){El()?(T(Pj,new Kj(a.externalChannelId,a.fc?{itemType:"U",itemId:a.externalChannelId}:null)),a=Ad({event:"subscribe",source:a.source}),Xh("/gen_204?"+a,void 0)):fm(a)}
function fm(a){Dl(function(b){b.subscription_ajax&&em(a)},null)}
function gm(a){a=cm(a);T(Uj,new Mj(a.externalChannelId,a.subscriptionId,null));a=Ad({event:"unsubscribe",source:a.source});Xh("/gen_204?"+a,void 0)}
function hm(a){am&&am.channelSubscribed(a.b,a.subscriptionId)}
function im(a){am&&am.channelUnsubscribed(a.b)}
;function jm(a){z.call(this);this.f=a;this.f.subscribe("command",this.kb,this);this.g={};this.i=!1}
w(jm,z);h=jm.prototype;h.start=function(){this.i||this.C()||(this.i=!0,km(this.f,"RECEIVING"))};
h.kb=function(a,b){if(this.i&&!this.C()){var c=b||{};switch(a){case "addEventListener":if(u(c.event)&&(c=c.event,!(c in this.g))){var d=v(this.Gc,this,c);this.g[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":u(c.event)&&lm(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=mm(a,b||{}),c=this.b[a].apply(this.b,c),(c=nm(a,c))&&this.i&&!this.C()&&km(this.f,a,c))}}};
h.Gc=function(a,b){this.i&&!this.C()&&km(this.f,a,this.wa(a,b))};
h.wa=function(a,b){if(null!=b)return{value:b}};
function lm(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
h.G=function(){var a=this.f;a.C()||Wb(a.b,"command",this.kb,this);this.f=null;for(var b in this.g)lm(this,b);jm.B.G.call(this)};new D;function om(a,b,c){rh.call(this);this.f=a;this.g=b;this.w=c}
w(om,rh);function km(a,b,c){if(!a.C()){var d=a.f;d.C()||a.g!=d.b||(a={id:a.w,command:b},c&&(a.data=c),d.b.postMessage(Mc(a),d.g))}}
om.prototype.G=function(){this.g=this.f=null;om.B.G.call(this)};function pm(){var a=this.f=new Oh(!!x("WIDGET_ID_ENFORCE")),b=v(this.Dc,this);a.w=b;a.A=null;this.f.channel="widget";if(a=x("WIDGET_ID"))this.f.b=a;this.i=[];this.A=!1;this.w={}}
h=pm.prototype;h.Dc=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.w[c]||"onReady"==c||(this.addEventListener(c,qm(this,c)),this.w[c]=!0)}else this.wb(a,b)};
h.wb=function(){};
function qm(a,b){return v(function(a){this.sendMessage(b,a)},a)}
h.addEventListener=function(){};
h.Rb=function(){this.A=!0;this.sendMessage("initialDelivery",this.xa());this.sendMessage("onReady");C(this.i,this.mb,this);this.i=[]};
h.xa=function(){return null};
function rm(a,b){a.sendMessage("infoDelivery",b)}
h.mb=function(a){this.A?this.f.sendMessage(a):this.i.push(a)};
h.sendMessage=function(a,b){this.mb({event:a,info:void 0==b?null:b})};
h.dispose=function(){this.f=null};function sm(a,b,c){z.call(this);this.b=a;this.g=c;this.i=Q(window,"message",v(this.w,this));this.f=new om(this,a,b);$a(this,na(ab,this.f))}
w(sm,z);sm.prototype.w=function(a){var b;if(b=!this.C())if(b=a.origin==this.g)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,u(a))){try{a=Kc(a)}catch(d){return}a.command&&(b=this.f,b.C()||b.i("command",a.command,a.data))}};
sm.prototype.G=function(){ug(this.i);this.b=null;sm.B.G.call(this)};function tm(a,b){jm.call(this,b);this.b=a;this.start()}
w(tm,jm);tm.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
tm.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function mm(a,b){switch(a){case "loadVideoById":return b=Yl(b),$l(b),[b];case "cueVideoById":return b=Yl(b),$l(b),[b];case "loadVideoByPlayerVars":return $l(b),[b];case "cueVideoByPlayerVars":return $l(b),[b];case "loadPlaylist":return b=Zl(b),$l(b),[b];case "cuePlaylist":return b=Zl(b),$l(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function nm(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
tm.prototype.wa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return tm.B.wa.call(this,a,b)};
tm.prototype.G=function(){tm.B.G.call(this);delete this.b};function um(a){pm.call(this);this.b=a;this.g=[];this.addEventListener("onReady",v(this.wc,this));this.addEventListener("onVideoProgress",v(this.Kc,this));this.addEventListener("onVolumeChange",v(this.Lc,this));this.addEventListener("onApiChange",v(this.Fc,this));this.addEventListener("onPlaybackQualityChange",v(this.Hc,this));this.addEventListener("onPlaybackRateChange",v(this.Ic,this));this.addEventListener("onStateChange",v(this.Jc,this))}
w(um,pm);h=um.prototype;h.wb=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&Wl(a)){var c;c=b;if(ha(c[0])&&!da(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=Yl.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=Xl.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=Zl.apply(window,c)}c=d}$l(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);Wl(a)&&rm(this,this.xa())}};
h.wc=function(){var a=v(this.Rb,this);this.f.f=a};
h.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
h.xa=function(){if(!this.b)return null;var a=this.b.getApiInterface();lb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var k=this.b[e]();b[f]=k}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=pa()/1E3;return b};
h.Jc=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:pa()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());rm(this,a)};
h.Hc=function(a){rm(this,{playbackQuality:a})};
h.Ic=function(a){rm(this,{playbackRate:a})};
h.Fc=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,k=f.length;g<k;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
h.Lc=function(){rm(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
h.Kc=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:pa()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());rm(this,a)};
h.dispose=function(){um.B.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};var vm=document,Z=window;var wm=!1,xm="";function ym(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(wm=!0,a.description)){xm=ym(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){wm=!0;xm="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],wm=!(!a||!a.enabledPlugin))){xm=ym(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");wm=!0;xm=ym(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");wm=!0;xm="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),wm=!0,xm=ym(b.GetVariable("$version"))}catch(c){}})();
var zm=wm,Am=xm;(function(){var a;return Fe?(a=/Windows NT ([0-9.]+)/,(a=a.exec(cb))?a[1]:"0"):Ee?(a=/10[_.][0-9_.]+/,(a=a.exec(cb))?a[0].replace(/_/g,"."):"10"):Ge?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(cb))?a[1]:""):He||Ie||Je?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(cb))?a[1].replace(/_/g,"."):""):""})();function Bm(a){return(a=a.exec(cb))?a[1]:""}
(function(){if(Ze)return Bm(/Firefox\/([0-9.]+)/);if(L||Ae||ze)return Pe;if(cf)return Bm(/Chrome\/([0-9.]+)/);if(df&&!(pd()||B("iPad")||B("iPod")))return Bm(/Version\/([0-9.]+)/);if($e||af){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(cb);if(a)return a[1]+"."+a[2]}else if(bf)return(a=Bm(/Android\s+([0-9.]+)/))?a:Bm(/Version\/([0-9.]+)/);return""})();(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
n.addEventListener("test",null,b)}catch(c){}return a})();var Cm=(new Date).getTime();function Dm(a){sa.call(this,a.message||a.description||a.name);this.b=a instanceof Tf}
w(Dm,sa);Dm.prototype.name="BiscottiError";function Em(a,b){this.f=a;this.b=b}
Em.prototype.then=function(a,b,c){try{if(p(this.f))return a?Qf(a.call(c,this.f)):Qf(this.f);if(p(this.b)){if(!b)return Rf(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?Rf(this.b):Qf(d)}throw Error("Invalid Result_ state");}catch(e){return Rf(e)}};
Wc(Em);var $h={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Fm=null;function Gm(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return Hm(""),Fm=new Em(""),"";a=JSON.parse(a.substr(4)).id;Hm(a);Fm=new Em(a);Im(18E5,2);return a}
function Jm(a,b){var c=new Dm(b);Hm("");Fm=new Em(void 0,c);0<a&&Im(12E4,a-1);throw c;}
function Im(a,b){y(function(){var a=v(Jm,n,b),a=Zh().then(Gm,a);Sf(a,null,aa,void 0)},a)}
function Hm(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function Km(){}
function Lm(){try{var a;try{var b=t("yt.www.ads.biscotti.getId_"),c;if(b)c=b();else{if(!Fm){var d=v(Jm,n,2);Fm=Zh().then(Gm,d)}c=Fm}a=c}catch(e){a=Rf(e)}a.then(Mm,Km);y(Lm,18E5)}catch(e){Sa(e)}}
function Mm(a){var b;a:{try{b=window.top.location.href}catch(r){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:Cm,flash:Am||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c;try{c=Z.history.length}catch(r){c=0}b.u_his=c;b.u_java=!!Z.navigator&&"unknown"!==typeof Z.navigator.javaEnabled&&!!Z.navigator.javaEnabled&&Z.navigator.javaEnabled();Z.screen&&(b.u_h=Z.screen.height,b.u_w=Z.screen.width,b.u_ah=Z.screen.availHeight,b.u_aw=Z.screen.availWidth,b.u_cd=Z.screen.colorDepth);
Z.navigator&&Z.navigator.plugins&&(b.u_nplug=Z.navigator.plugins.length);Z.navigator&&Z.navigator.mimeTypes&&(b.u_nmime=Z.navigator.mimeTypes.length);b.bid=a;b.ca_type=zm?"flash":"image";if(id("enable_server_side_search_pyv")||id("enable_server_side_mweb_search_pyv")){var d;a=window;try{d=a.screenX;var e=a.screenY}catch(r){}try{var f=a.outerWidth,g=a.outerHeight}catch(r){}try{var k=a.innerWidth,l=a.innerHeight}catch(r){}d=[a.screenLeft,a.screenTop,d,e,a.screen?a.screen.availWidth:void 0,a.screen?
a.screen.availTop:void 0,f,g,k,l];var m;e=window.top||Z;try{m=e.document&&!e.document.body?new Sc(-1,-1):nf(e||window).round()}catch(r){m=new Sc(-12245933,-12245933)}e=0;window.SVGElement&&document.createElementNS&&(e|=1);oa(b,{bc:e,bih:m.height,biw:m.width,brdim:d.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[vm.webkitVisibilityState||vm.mozVisibilityState||vm.visibilityState||""]||0,wgl:!!Z.WebGLRenderingContext})}Hg("/ad_data_204",{ac:!0,J:b})}
;function Nm(){this.b=x("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=Vc.get(""+this.b,void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Om[d]=c.toString())}}}
ba(Nm);var Om=t("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Om,void 0);function Pm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Qm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Rm(a){a=void 0!==Om[a]?Om[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Nm.prototype.get=function(a,b){Qm(a);Pm(a);var c=void 0!==Om[a]?Om[a].toString():null;return null!=c?c:b?b:""};
Nm.prototype.set=function(a,b){Qm(a);Pm(a);if(null==b)throw Error("ExpectedNotNull");Om[a]=b.toString()};
Nm.prototype.remove=function(a){Qm(a);Pm(a);delete Om[a]};
Nm.prototype.clear=function(){Om={}};function Sm(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&Xh(c.data.follow_on_url)}}
;function Tm(a){R.call(this,1,arguments);this.va=a}
w(Tm,R);function Um(a,b){R.call(this,2,arguments);this.f=a;this.b=b}
w(Um,R);function Vm(a,b,c,d){R.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
w(Vm,R);function Wm(a,b){R.call(this,1,arguments);this.f=a;this.b=b||null}
w(Wm,R);function Xm(a){R.call(this,1,arguments)}
w(Xm,R);var Ym=new S("ypc-core-load",Tm),Zm=new S("ypc-guide-sync-success",Um),$m=new S("ypc-purchase-success",Vm),an=new S("ypc-subscription-cancel",Xm),bn=new S("ypc-subscription-cancel-success",Wm),cn=new S("ypc-init-subscription",Xm);var dn=!1,en=[],fn=[];function gn(a){a.b?dn?T(Tj,a):T(Ym,new Tm(function(){T(cn,new Xm(a.b))})):hn(a.f,a.i,a.g,a.source)}
function jn(a){a.b?dn?T(Yj,a):T(Ym,new Tm(function(){T(an,new Xm(a.b))})):kn(a.f,a.subscriptionId,a.i,a.g,a.source)}
function ln(a){mn(nb(a.b))}
function nn(a){on(nb(a.b))}
function pn(a){qn(a.g,a.f,a.b)}
function rn(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&T(Sj,new Lj(b,c,a.b.channelInfo))}
function sn(a){var b=a.b;ua(a.f,function(a,d){T(Sj,new Lj(d,a,b[d]))})}
function tn(a){T(Xj,new Ij(a.f.itemId));a.b&&a.b.length&&(un(a.b,Xj),un(a.b,Zj))}
function hn(a,b,c,d){var e=new Ij(a);T(Qj,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=x("PLAYBACK_ID"))&&(c.plid=d);(d=x("EVENT_ID"))&&(c.ei=d);b&&vn(b,c);Ig("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Da:f,J:c,O:function(b,c){var d=c.response;T(Sj,new Lj(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&E("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Sm(d.actions)},
Ba:function(){T(Rj,e)}})}
function kn(a,b,c,d,e){var f=new Ij(a);T(Vj,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=x("PLAYBACK_ID"))&&(d.plid=a);(a=x("EVENT_ID"))&&(d.ei=a);c&&vn(c,d);Ig("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Da:g,J:d,O:function(a,b){var c=b.response;T(Xj,f);c.actions&&Sm(c.actions)},
Ba:function(){T(Wj,f)}})}
function qn(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Jj(a,b,c);Ig("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",J:d,onError:function(){T(dk,e)},
O:function(){T(ck,e)}})}}
function mn(a){if(a.length){var b=pb(a,0,40);T("subscription-batch-subscribe-loading");un(b,Qj);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");un(b,Rj)};
Ig("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",J:c,O:function(c,f){d();var e=f.response,k=e.id;if(da(k)&&k.length==b.length){var l=e.channel_info_map;C(k,function(a,c){var d=b[c];T(Sj,new Lj(d,a,l[d]))});
a.length?mn(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function on(a){if(a.length){var b=pb(a,0,40);T("subscription-batch-unsubscribe-loading");un(b,Vj);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");un(b,Wj)};
Ig("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",J:c,O:function(){d();un(b,Xj);a.length&&on(a)},
onError:function(){d()}})}}
function un(a,b){C(a,function(a){T(b,new Ij(a))})}
function vn(a,b){var c=Qd(a);oa(b,c)}
;var wn=null,xn=null,yn=null,zn={};function An(a){Zg(a.payload_name,a.payload,id("enable_youtubei_innertube")?Tg:mg,void 0)}
function Bn(a){var b=a.id;a=a.ve_type;var c=dd++;a=new cd(void 0,a,c);zn[b]=a;b=fh();c=eh();b&&c&&$g(b,c,a)}
function Cn(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Oa("client-screen-nonce",b),Oa("ROOT_VE_TYPE",a),a=eh()))for(var c in zn)$g(b,a,zn[c])}
function Dn(a){zn[a.id]=new cd(a.tracking_params)}
function En(a){var b=fh();a=zn[a.id];b&&a&&ah(bh(),{click:{csn:b,visualElement:ed(a)}},void 0)}
function Fn(a){a=a.ids;var b=fh();if(b){for(var c=[],d=0;d<a.length;d++){var e=zn[a[d]];e&&c.push(e)}c.length&&ch(b,c)}}
function Gn(){var a=wn;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;q("yt.setConfig",Oa,void 0);q("yt.setMsg",function(a){Pa(Na,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||x("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||x("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=Yg)){e=a.stacktrace;d=a.columnNumber;var f=t("window.location.href");if(u(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g,k,l=!1;try{g=a.lineNumber||a.line||"Not available"}catch(M){g="Not available",l=!0}try{k=a.fileName||a.filename||a.sourceURL||
n.$googDebugFname||f}catch(M){k="Not available",l=!0}a=!l&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:g,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;g=a.lineNumber.toString();isNaN(g)||isNaN(d)||(g=g+":"+d);if(!(Xg[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={Da:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:g,level:b||"ERROR"},J:{url:x("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};e&&(b.J.stack=e);for(var m in c)b.J["client."+m]=c[m];if(m=x("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var r in m)b.J[r]=m[r];Ig("/error_204",b);Xg[a.message]=!0;Yg++}}},void 0);
q("writeEmbed",function(){var a=x("PLAYER_CONFIG",void 0);"1"!=a.privembed&&Lm();"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=x("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);x("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&$l(a.args);wn=a=qj("player",a);a.addEventListener("onScreenChanged",Cn);a.addEventListener("onLogClientVeCreated",Bn);a.addEventListener("onLogServerVeCreated",Dn);a.addEventListener("onLogToGel",
An);a.addEventListener("onLogVeClicked",En);a.addEventListener("onLogVesShown",Fn);a.addEventListener("onReady",Gn);b=x("POST_MESSAGE_ID","player");x("ENABLE_JS_API")?yn=new um(a):x("ENABLE_POST_API")&&u(b)&&u(c)&&(xn=new sm(window.parent,b,c),yn=new tm(a,xn.f));x("BG_P")&&(x("BG_I")||x("BG_IU"))&&rc();wc();am=a;am.addEventListener("SUBSCRIBE",dm);am.addEventListener("UNSUBSCRIBE",gm);bm.push(Ei(Sj,hm),Ei(Xj,im))},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){Xh(a+"mac_204?action_fcts=1");return!0},void 0);
var Hn=Qa(function(){Mi("ol");dn=!0;fn.push(Ei(Pj,gn),Ei(Uj,jn));dn||fn.push(Ei(Tj,gn),Ei(Yj,jn),Ei(Nj,ln),Ei(Oj,nn),Ei(bk,pn),Ei($m,rn),Ei(bn,tn),Ei(Zm,sn));var a=Nm.getInstance(),b=1<window.devicePixelRatio;if(!!((Rm("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=Rm(c)||0,d=b?d|67108864:d&-67108865;0==d?delete Om[c]:(b=d.toString(16),Om[c]=b.toString());var a=a.b,c=[],e;for(e in Om)c.push(e+"="+escape(Om[e]));Vc.set(""+a,c.join("&"),63072E3,"/","youtube.com")}}),
In=Qa(function(){var a=wn;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();x("PL_ATT")&&(qc=null);for(var a=0,b=uc.length;a<b;a++){var c=uc[a];if(!isNaN(c)){var d=t("yt.scheduler.instance.cancelJob");d?d(c):Ra(c)}}uc.length=0;a=mc("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))hc(a),b.parentNode.removeChild(b);vc=!1;Oa("DCLKSTAT",0);ec(en);en.length=0;Fi(fn);fn.length=0;dn=!1;am&&(am.removeEventListener("SUBSCRIBE",em),am.removeEventListener("UNSUBSCRIBE",gm));am=null;Fi(bm);bm.length=0;
bb(yn,xn);if(a=wn)a.removeEventListener("onScreenChanged",Cn),a.removeEventListener("onLogClientVeCreated",Bn),a.removeEventListener("onLogServerVeCreated",Dn),a.removeEventListener("onLogToGel",An),a.removeEventListener("onLogVeClicked",En),a.removeEventListener("onLogVesShown",Fn),a.removeEventListener("onReady",Gn),a.destroy();zn={}});
window.addEventListener?(window.addEventListener("load",Hn),window.addEventListener("unload",In)):window.attachEvent&&(window.attachEvent("onload",Hn),window.attachEvent("onunload",In));var Jn=Nl.getInstance(),Kn=U(Jn);Kn in Vl||(Jn.register(),qk(Jn,"yt-uix-init-"+Kn,Jn.init),qk(Jn,"yt-uix-dispose-"+Kn,Jn.dispose),Vl[Kn]=Jn);}).call(this);
