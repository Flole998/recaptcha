module.exports=function(t){var e={};function r(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/SignUpModal"]},,function(t,e){t.exports=flarum.core.compat.Component},function(t,e,r){"use strict";r.r(e);var a=r(0),n=r(1),o=r.n(n);var c=r(3),i=function(t){var e,r;function a(){return t.apply(this,arguments)||this}r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var n=a.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.data={sitekey:app.data["fof-recaptcha.credentials.site"],type:app.data["fof-recaptcha.type"],theme:app.forum.attribute("darkMode")?"dark":"light"}},n.view=function(){return m("div",{className:"Form-group"},m("div",{className:"g-recaptcha",oncreate:this.createRecaptcha.bind(this)}))},n.createRecaptcha=function(e){t.prototype.oncreate.call(this,e),this.widgetId=grecaptcha.render(e.dom,{sitekey:this.data.sitekey,theme:this.data.theme,type:this.data.type,callback:this.attrs.callback,size:this.attrs.size,"expired-callback":this.attrs.expiredCallback})},n.getResponse=function(){return grecaptcha.getResponse(this.widgetId)},n.execute=function(){return grecaptcha.execute(this.widgetId)},n.reset=function(){return grecaptcha.reset(this.widgetId)},a}(r.n(c).a);app.initializers.add("fof/recaptcha",(function(){var t,e=app.data["fof-recaptcha.type"];Object(a.extend)(o.a.prototype,"submitData",(function(t){t["g-recaptcha-response"]=this.recaptcha&&this.recaptcha.getResponse()})),Object(a.extend)(o.a.prototype,"fields",(function(r){var a="invisible"===e?{type:e,size:"invisible",callback:function(){return t()}}:{};r.add("recaptcha",this.recaptcha=i.component(a),-5)})),Object(a.extend)(o.a.prototype,"onerror",(function(){this.recaptcha&&this.recaptcha.reset()})),"invisible"===e&&Object(a.override)(o.a.prototype,"onsubmit",(function(e,r){r.preventDefault(),t=function(){return e(r)},this.recaptcha&&this.recaptcha.execute()}))}))}]);
//# sourceMappingURL=forum.js.map