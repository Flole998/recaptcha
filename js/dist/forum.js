/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={648:(t,e,r)=>{var n=r(288).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",p=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),c=new k(n||[]);return i(a,"_invoke",{value:S(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d={};function v(){}function m(){}function y(){}var g={};f(g,u,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(P([])));x&&x!==r&&a.call(x,u)&&(g=x);var w=y.prototype=v.prototype=Object.create(g);function L(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,c,u){var s=l(t[o],t,i);if("throw"!==s.type){var p=s.arg,f=p.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){p.value=t,c(p)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function S(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:I}}function I(){return{value:void 0,done:!0}}return m.prototype=y,i(w,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=f(y,p,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,p,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},L(_.prototype),f(_.prototype,s,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new _(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(w),f(w,p,"Generator"),f(w,u,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),u=a.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},288:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},357:(t,e,r)=>{var n=r(648)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n);const t=flarum.core.compat["forum/app"];var e=r.n(t);const o=flarum.core.compat["forum/components/DiscussionComposer"];var a=r.n(o);const i=flarum.core.compat["forum/components/ReplyComposer"];var c=r.n(i);const u=flarum.core.compat["common/extend"],s=flarum.core.compat["common/app"];var p=r.n(s),f=function(){function t(t,e,r){void 0===r&&(r=null),this.settings=t,this.callback=e,this.errorCallback=r||function(t){p().alerts.show(t)},this.widgetId=null,this.type=this.settings["fof-recaptcha.type"]}var e=t.prototype;return e.render=function(t){var e=this;this.widgetId=grecaptcha.render(t,{sitekey:this.settings["fof-recaptcha.credentials.site"],theme:Number(this.settings.theme_dark_mode)?"dark":"light",type:this.type,size:"invisible"===this.settings["fof-recaptcha.type"]?"invisible":"normal",callback:this.callback,"error-callback":function(){var t={type:"error",content:p().translator.trans("fof-recaptcha.forum.error")};e.errorCallback(t)}})},e.getResponse=function(){return grecaptcha.getResponse(this.widgetId)},e.execute=function(){return grecaptcha.execute(this.widgetId)},e.reset=function(){return grecaptcha.reset(this.widgetId)},e.isInvisible=function(){return"invisible"===this.type},t}();function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function l(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var d=r(357),v=r.n(d);const y=flarum.core.compat["common/Component"];var g=r.n(y);const b=function(){function t(t){return function(e){return new Promise((function(r,n){var o=document.createElement(t),a="body",i="src";switch(o.onload=function(){r(e)},o.onerror=function(){n(e)},t){case"script":o.async=!0;break;case"link":o.type="text/css",o.rel="stylesheet",i="href",a="head"}o[i]=e,document[a].appendChild(o)}))}}return{css:t("link"),js:t("script"),img:t("img")}}();var x=function(){var t,e=(t=v().mark((function t(){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!p().recaptchaLoaded){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,b.js("https://www.recaptcha.net/recaptcha/api.js?hl="+p().translator.getLocale()+"&render=explicit");case 4:p().recaptchaLoaded=!0;case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){l(a,n,o,i,c,"next",t)}function c(t){l(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}(),w=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,h(e,r);var o=n.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e)},o.view=function(){return m("div",{className:"Form-group"},m("div",{className:"g-recaptcha"}))},o.oncreate=function(e){var r=this;if(t.prototype.oncreate.call(this,e),x().then((function(){var t=setInterval((function(){window.recaptcha&&(clearInterval(t),r.attrs.state.render(e.dom.querySelector(".g-recaptcha")))}),250)})),"invisible"===this.attrs.state.type){var n=e.dom.querySelector("iframe");n&&(n.tabIndex=-1)}},n}(g());function L(t){(0,u.extend)(t.prototype,"oninit",(function(){var t=this;e().forum.attribute("postWithoutCaptcha")||(this.recaptcha=new f(e().forum.data.attributes,(function(){t.recaptcha.isInvisible()&&t.onsubmit("recaptchaSecondStep")})))})),(0,u.extend)(t.prototype,"data",(function(t){e().forum.attribute("postWithoutCaptcha")||(t["g-recaptcha-response"]=this.recaptcha.getResponse())})),(0,u.extend)(t.prototype,"headerItems",(function(t){e().forum.attribute("postWithoutCaptcha")||t.add("recaptcha",w.component({state:this.recaptcha}),-5)})),(0,u.extend)(t.prototype,"loaded",(function(){e().forum.attribute("postWithoutCaptcha")||this.recaptcha.reset()})),(0,u.override)(t.prototype,"onsubmit",(function(t,r){return!e().forum.attribute("postWithoutCaptcha")&&this.recaptcha.isInvisible()&&"recaptchaSecondStep"!==r?(this.loading=!0,void this.recaptcha.execute()):t()}))}const _=flarum.core.compat["forum/components/ForgotPasswordModal"];var S=r.n(_);const j=flarum.core.compat["forum/components/LogInModal"];var E=r.n(j);const O=flarum.core.compat["forum/components/SignUpModal"];var k=r.n(O),P=function(t){var r=t.modal,n=t.type,o=t.dataMethod,a=function(){return!!e().forum.attribute("fof-recaptcha."+n)};(0,u.extend)(r.prototype,"oninit",(function(){var t=this;a()&&(this.recaptcha=new f(e().forum.data.attributes,(function(){if(t.recaptcha.isInvisible()){var e=new Event("submit");e.isRecaptchaSecondStep=!0,t.onsubmit(e)}}),(function(e){t.loaded(),t.alertAttrs=e})))})),(0,u.extend)(r.prototype,o,(function(t){a()&&(t["g-recaptcha-response"]=this.recaptcha.getResponse())})),(0,u.extend)(r.prototype,"fields",(function(t){a()&&t.add("recaptcha",m(w,{state:this.recaptcha}),-5)})),(0,u.extend)(r.prototype,"onerror",(function(){a()&&this.recaptcha.reset()})),(0,u.override)(r.prototype,"onsubmit",(function(t,e){return a()&&this.recaptcha.isInvisible()&&!e.isRecaptchaSecondStep?(e.preventDefault(),this.loading=!0,void this.recaptcha.execute()):t(e)}))};e().initializers.add("fof/recaptcha",(function(){e().recaptchaLoaded=!1,L(a()),L(c()),P({modal:S(),type:"forgot",dataMethod:"requestParams"}),P({modal:E(),type:"signin",dataMethod:"loginParams"}),P({modal:k(),type:"signup",dataMethod:"submitData"})}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map