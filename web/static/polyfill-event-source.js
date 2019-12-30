/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */
!function(a){"use strict";function b(){this.bitsNeeded=0,this.codePoint=0}function c(a){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=F,this.onload=F,this.onerror=F,this.onreadystatechange=F,this._contentType="",this._xhr=a,this._sendTimeout=0,this._abort=F}function d(a){return a.replace(/[A-Z]/g,function(a){return String.fromCharCode(a.charCodeAt(0)+32)})}function e(a){for(var b=Object.create(null),c=a.split("\r\n"),e=0;e<c.length;e+=1){var f=c[e],g=f.split(": "),h=g.shift(),i=g.join(": ");b[d(h)]=i}this._map=b}function f(){}function g(a){this._headers=a}function h(){}function i(){this._listeners=Object.create(null)}function j(a){q(function(){throw a},0)}function k(a){this.type=a,this.target=void 0,this.defaultPrevented=!1}function l(a,b){k.call(this,a),this.data=b.data,this.lastEventId=b.lastEventId}function m(a,b){k.call(this,a),this.status=b.status,this.statusText=b.statusText,this.headers=b.headers}function n(a,b){i.call(this),b=b||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,p(this,a,b)}function o(){return void 0!=s&&"withCredentials"in s.prototype||void 0==t?new s:new t}function p(a,b,d){b=String(b);var e=Boolean(d.withCredentials),g=T(1e3),i=S(d.heartbeatTimeout,45e3),n="",p=g,s=!1,t=d.headers||{},u=d.Transport,v=V&&void 0==u?void 0:new c(void 0!=u?new u:o()),w=null!=u&&"string"!=typeof u?new u:void 0==v?new h:new f,x=void 0,y=0,z=G,A="",B="",C="",D="",E=L,F=0,Q=0,R=function(b,c,d,e){if(z===H)if(200===b&&void 0!=d&&P.test(d)){z=I,s=!0,p=g,a.readyState=I;var f=new m("open",{status:b,statusText:c,headers:e});a.dispatchEvent(f),U(a,a.onopen,f)}else{var h="";200!==b?(c&&(c=c.replace(/\s+/g," ")),h="EventSource's response has a status "+b+" "+c+" that is not 200. Aborting the connection."):h="EventSource's response has a Content-Type specifying an unsupported type: "+(void 0==d?"-":d.replace(/\s+/g," "))+". Aborting the connection.",Y();var f=new m("error",{status:b,statusText:c,headers:e});a.dispatchEvent(f),U(a,a.onerror,f),f.defaultPrevented||j(new Error(h))}},W=function(b){if(z===I){for(var c=-1,d=0;d<b.length;d+=1){var e=b.charCodeAt(d);(e==="\n".charCodeAt(0)||e==="\r".charCodeAt(0))&&(c=d)}var f=(-1!==c?D:"")+b.slice(0,c+1);D=(-1===c?D:"")+b.slice(c+1),""!==f&&(s=!0);for(var h=0;h<f.length;h+=1){var e=f.charCodeAt(h);if(E===K&&e==="\n".charCodeAt(0))E=L;else if(E===K&&(E=L),e==="\r".charCodeAt(0)||e==="\n".charCodeAt(0)){if(E!==L){E===M&&(Q=h+1);var j=f.slice(F,Q-1),k=f.slice(Q+(h>Q&&f.charCodeAt(Q)===" ".charCodeAt(0)?1:0),h);"data"===j?(A+="\n",A+=k):"id"===j?B=k:"event"===j?C=k:"retry"===j?(g=S(k,g),p=g):"heartbeatTimeout"===j&&(i=S(k,i),0!==y&&(r(y),y=q(function(){Z()},i)))}if(E===L){if(""!==A){n=B,""===C&&(C="message");var m=new l(C,{data:A.slice(1),lastEventId:B});if(a.dispatchEvent(m),"message"===C&&U(a,a.onmessage,m),z===J)return}A="",C=""}E=e==="\r".charCodeAt(0)?K:L}else E===L&&(F=h,E=M),E===M?e===":".charCodeAt(0)&&(Q=h+1,E=N):E===N&&(E=O)}}},X=function(b){if(z===I||z===H){z=G,0!==y&&(r(y),y=0),y=q(function(){Z()},p),p=T(Math.min(16*g,2*p)),a.readyState=H;var c=new k("error");a.dispatchEvent(c),U(a,a.onerror,c),null!=b&&(c.defaultPrevented||j(b))}},Y=function(){z=J,void 0!=x&&(x.abort(),x=void 0),0!==y&&(r(y),y=0),a.readyState=J},Z=function(){if(y=0,z!==G)return void(s||void 0==x?(s=!1,y=q(function(){Z()},i)):(X(new Error("No activity within "+i+" milliseconds. Reconnecting.")),x.abort(),x=void 0));s=!1,y=q(function(){Z()},i),z=H,A="",C="",B=n,D="",F=0,Q=0,E=L;var c=b;"data:"!==b.slice(0,5)&&"blob:"!==b.slice(0,5)&&""!==n&&(c+=(-1===b.indexOf("?")?"?":"&")+"lastEventId="+encodeURIComponent(n));var d=a.withCredentials,e={};e.Accept="text/event-stream";var f=a.headers;if(void 0!=f)for(var g in f)Object.prototype.hasOwnProperty.call(f,g)&&(e[g]=f[g]);try{x=w.open(v,R,W,X,c,d,e)}catch(h){throw Y(),h}};a.url=b,a.readyState=H,a.withCredentials=e,a.headers=t,a._close=Y,Z()}var q=a.setTimeout,r=a.clearTimeout,s=a.XMLHttpRequest,t=a.XDomainRequest,u=a.ActiveXObject,v=a.EventSource,w=a.document,x=a.Promise,y=a.fetch,z=a.Response,A=a.TextDecoder,B=a.TextEncoder,C=a.AbortController;if(null==s&&(s=function(){return new u("Microsoft.XMLHTTP")}),void 0==Object.create&&(Object.create=function(a){function b(){}return b.prototype=a,new b}),void 0==C){var D=y;y=function(a,b){var c=b.signal;return D(a,{headers:b.headers,credentials:b.credentials,cache:b.cache}).then(function(a){var b=a.body.getReader();return c._reader=b,c._aborted&&c._reader.cancel(),{status:a.status,statusText:a.statusText,headers:a.headers,body:{getReader:function(){return b}}}})},C=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){null!=this.signal._reader&&this.signal._reader.cancel(),this.signal._aborted=!0}}}b.prototype.decode=function(a){function b(a,b,c){if(1===c)return a>=128>>b&&2047>=a<<b;if(2===c)return a>=2048>>b&&55295>=a<<b||a>=57344>>b&&65535>=a<<b;if(3===c)return a>=65536>>b&&1114111>=a<<b;throw new Error}function c(a,b){if(6===a)return b>>6>15?3:b>31?2:1;if(12===a)return b>15?3:2;if(18===a)return 3;throw new Error}for(var d=65533,e="",f=this.bitsNeeded,g=this.codePoint,h=0;h<a.length;h+=1){var i=a[h];0!==f&&(128>i||i>191||!b(g<<6|63&i,f-6,c(f,g)))&&(f=0,g=d,e+=String.fromCharCode(g)),0===f?(i>=0&&127>=i?(f=0,g=i):i>=192&&223>=i?(f=6,g=31&i):i>=224&&239>=i?(f=12,g=15&i):i>=240&&247>=i?(f=18,g=7&i):(f=0,g=d),0===f||b(g,f,c(f,g))||(f=0,g=d)):(f-=6,g=g<<6|63&i),0===f&&(65535>=g?e+=String.fromCharCode(g):(e+=String.fromCharCode(55296+(g-65535-1>>10)),e+=String.fromCharCode(56320+(g-65535-1&1023))))}return this.bitsNeeded=f,this.codePoint=g,e};var E=function(){try{return"test"===(new A).decode((new B).encode("test"),{stream:!0})}catch(a){}return!1};void 0!=A&&void 0!=B&&E()||(A=b);var F=function(){};c.prototype.open=function(a,b){this._abort(!0);var c=this,d=this._xhr,e=1,f=0;this._abort=function(a){0!==c._sendTimeout&&(r(c._sendTimeout),c._sendTimeout=0),(1===e||2===e||3===e)&&(e=4,d.onload=F,d.onerror=F,d.onabort=F,d.onprogress=F,d.onreadystatechange=F,d.abort(),0!==f&&(r(f),f=0),a||(c.readyState=4,c.onabort(null),c.onreadystatechange())),e=0};var g=function(){if(1===e){var a=0,b="",f=void 0;if("contentType"in d)a=200,b="OK",f=d.contentType;else try{a=d.status,b=d.statusText,f=d.getResponseHeader("Content-Type")}catch(g){a=0,b="",f=void 0}0!==a&&(e=2,c.readyState=2,c.status=a,c.statusText=b,c._contentType=f,c.onreadystatechange())}},h=function(){if(g(),2===e||3===e){e=3;var a="";try{a=d.responseText}catch(b){}c.readyState=3,c.responseText=a,c.onprogress()}},i=function(a,b){if((null==b||null==b.preventDefault)&&(b={preventDefault:F}),h(),1===e||2===e||3===e){if(e=4,0!==f&&(r(f),f=0),c.readyState=4,"load"===a)c.onload(b);else if("error"===a)c.onerror(b);else{if("abort"!==a)throw new TypeError;c.onabort(b)}c.onreadystatechange()}},j=function(a){void 0!=d&&(4===d.readyState?"onload"in d&&"onerror"in d&&"onabort"in d||i(""===d.responseText?"error":"load",a):3===d.readyState?h():2===d.readyState&&g())},k=function(){f=q(function(){k()},500),3===d.readyState&&h()};"onload"in d&&(d.onload=function(a){i("load",a)}),"onerror"in d&&(d.onerror=function(a){i("error",a)}),"onabort"in d&&(d.onabort=function(a){i("abort",a)}),"sendAsBinary"in s.prototype||"mozAnon"in s.prototype||"onprogress"in d&&(d.onprogress=h),d.onreadystatechange=function(a){j(a)},("contentType"in d||!("ontimeout"in s.prototype))&&(b+=(-1===b.indexOf("?")?"?":"&")+"padding=true"),d.open(a,b,!0),"readyState"in d&&(f=q(function(){k()},0))},c.prototype.abort=function(){this._abort(!1)},c.prototype.getResponseHeader=function(a){return this._contentType},c.prototype.setRequestHeader=function(a,b){var c=this._xhr;"setRequestHeader"in c&&c.setRequestHeader(a,b)},c.prototype.getAllResponseHeaders=function(){return void 0!=this._xhr.getAllResponseHeaders?this._xhr.getAllResponseHeaders():""},c.prototype.send=function(){if(!("ontimeout"in s.prototype)&&void 0!=w&&void 0!=w.readyState&&"complete"!==w.readyState){var a=this;return void(a._sendTimeout=q(function(){a._sendTimeout=0,a.send()},4))}var b=this._xhr;"withCredentials"in b&&(b.withCredentials=this.withCredentials);try{b.send(void 0)}catch(c){throw c}},e.prototype.get=function(a){return this._map[d(a)]},null!=s&&null==s.HEADERS_RECEIVED&&(s.HEADERS_RECEIVED=2),f.prototype.open=function(a,b,c,d,f,g,h){a.open("GET",f);var i=0;a.onprogress=function(){var b=a.responseText,d=b.slice(i);i+=d.length,c(d)},a.onerror=function(a){a.preventDefault(),d(new Error("NetworkError"))},a.onload=function(){d(null)},a.onabort=function(){d(null)},a.onreadystatechange=function(){if(a.readyState===s.HEADERS_RECEIVED){var c=a.status,d=a.statusText,f=a.getResponseHeader("Content-Type"),g=a.getAllResponseHeaders();b(c,d,f,new e(g))}},a.withCredentials=g;for(var j in h)Object.prototype.hasOwnProperty.call(h,j)&&a.setRequestHeader(j,h[j]);return a.send(),a},g.prototype.get=function(a){return this._headers.get(a)},h.prototype.open=function(a,b,c,d,e,f,h){var i=null,j=new C,k=j.signal,l=new A;return y(e,{headers:h,credentials:f?"include":"same-origin",signal:k,cache:"no-store"}).then(function(a){return i=a.body.getReader(),b(a.status,a.statusText,a.headers.get("Content-Type"),new g(a.headers)),new x(function(a,b){var d=function(){i.read().then(function(b){if(b.done)a(void 0);else{var e=l.decode(b.value,{stream:!0});c(e),d()}})["catch"](function(a){b(a)})};d()})})["catch"](function(a){return"AbortError"===a.name?void 0:a}).then(function(a){d(a)}),{abort:function(){null!=i&&i.cancel(),j.abort()}}},i.prototype.dispatchEvent=function(a){a.target=this;var b=this._listeners[a.type];if(void 0!=b)for(var c=b.length,d=0;c>d;d+=1){var e=b[d];try{"function"==typeof e.handleEvent?e.handleEvent(a):e.call(this,a)}catch(f){j(f)}}},i.prototype.addEventListener=function(a,b){a=String(a);var c=this._listeners,d=c[a];void 0==d&&(d=[],c[a]=d);for(var e=!1,f=0;f<d.length;f+=1)d[f]===b&&(e=!0);e||d.push(b)},i.prototype.removeEventListener=function(a,b){a=String(a);var c=this._listeners,d=c[a];if(void 0!=d){for(var e=[],f=0;f<d.length;f+=1)d[f]!==b&&e.push(d[f]);0===e.length?delete c[a]:c[a]=e}},k.prototype.preventDefault=function(){this.defaultPrevented=!0},l.prototype=Object.create(k.prototype),m.prototype=Object.create(k.prototype);var G=-1,H=0,I=1,J=2,K=-1,L=0,M=1,N=2,O=3,P=/^text\/event\-stream;?(\s*charset\=utf\-8)?$/i,Q=1e3,R=18e6,S=function(a,b){var c=null==a?b:parseInt(a,10);return c!==c&&(c=b),T(c)},T=function(a){return Math.min(Math.max(a,Q),R)},U=function(a,b,c){try{"function"==typeof b&&b.call(a,c)}catch(d){j(d)}},V=void 0!=y&&void 0!=z&&"body"in z.prototype;n.prototype=Object.create(i.prototype),n.prototype.CONNECTING=H,n.prototype.OPEN=I,n.prototype.CLOSED=J,n.prototype.close=function(){this._close()},n.CONNECTING=H,n.OPEN=I,n.CLOSED=J,n.prototype.withCredentials=void 0;var W=v;void 0==s||void 0!=v&&"withCredentials"in v.prototype||(W=n),function(b){if("object"==typeof module&&"object"==typeof module.exports){var c=b(exports);void 0!==c&&(module.exports=c)}else"function"==typeof define&&define.amd?define(["exports"],b):b(a)}(function(a){a.EventSourcePolyfill=n,a.NativeEventSource=v,a.EventSource=W})}("undefined"!=typeof window?window:"undefined"!=typeof self?self:this);
