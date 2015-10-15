/*
 * @author electricessence / https://github.com/electricessence/
 * Original: http://linqjs.codeplex.com/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
var __extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)};define(["require","exports","../../Compare","../../Types","../../Functions","./DictionaryAbstractBase","../Enumeration/EnumeratorBase"],function(e,t,r,n,o,i,u){function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function s(e){return null===e?"null":void 0===e?"undefined":typeof e.toString===n["default"].FUNCTION?e.toString():Object.prototype.toString.call(e)}var l=function(){function e(e,t,r,n){this.key=e,this.value=t,this.prev=r,this.next=n}return e}(),c=function(){function e(e,t){this.first=e,this.last=t}return e.prototype.addLast=function(e){var t=this;null!=t.last?(t.last.next=e,e.prev=t.last,t.last=e):t.first=t.last=e},e.prototype.replace=function(e,t){var r=this;null!=e.prev?(e.prev.next=t,t.prev=e.prev):r.first=t,null!=e.next?(e.next.prev=t,t.next=e.next):r.last=t},e.prototype.remove=function(e){var t=this;null!=e.prev?e.prev.next=e.next:t.first=e.next,null!=e.next?e.next.prev=e.prev:t.last=e.prev},e.prototype.clear=function(){for(var e=this;e.last;)e.remove(e.last)},e.prototype.forEach=function(e){for(var t=this,r=t.first;r;)e(r),r=r.next},e}(),p=function(e){function t(t){void 0===t&&(t=o["default"].Identity),e.call(this),this.compareSelector=t,this._count=0,this._entries=new c,this._buckets={}}return __extends(t,e),t.prototype.setKV=function(e,t,n){var o,i=this,u=i._buckets,c=i._entries,p=i.compareSelector,f=p(e),v=s(f);if(a(u,v)){for(var y=r.areEqual,h=u[v],d=0;d<h.length;d++){var _=h[d];if(p(_.key)===f){if(!n)throw new Error("Key already exists.");var b=!y(_.value,t);return b&&(void 0===t?(c.remove(_),h.splice(d,1),h.length||delete u[v],--i._count):(o=new l(e,t),c.replace(_,o),h[d]=o),i._onValueUpdate(e,t,_.value)),b}}h.push(o=o||new l(e,t))}else{if(void 0===t){if(n)return!1;throw new Error("Cannot add 'undefined' value.")}u[v]=[o=new l(e,t)]}return++i._count,c.addLast(o),i._onValueUpdate(e,t,void 0),!0},t.prototype.addByKeyValue=function(e,t){this.setKV(e,t,!1)},t.prototype.getValue=function(e){var t=this._buckets,r=this.compareSelector,n=r(e),o=s(n);if(!a(t,o))return void 0;for(var i=t[o],u=0;u<i.length;u++){var l=i[u];if(r(l.key)===n)return l.value}return void 0},t.prototype.setValue=function(e,t){return this.setKV(e,t,!0)},t.prototype.containsKey=function(e){var t=this,r=t._buckets,n=t.compareSelector,o=n(e),i=s(o);if(!a(r,i))return!1;for(var u=r[i],l=0,c=u.length;c>l;l++)if(n(u[l].key)===o)return!0;return!1},t.prototype.clear=function(){var t=this,r=t._buckets,n=e.prototype.clear.call(this);t._count=0;for(var o in r)r.hasOwnProperty(o)&&delete r[o];return t._entries.clear(),n},Object.defineProperty(t.prototype,"count",{get:function(){return this._count},enumerable:!0,configurable:!0}),t.prototype.getEnumerator=function(){var e,t=this;return new u["default"](function(){e=t._entries.first},function(t){if(null!=e){var r={key:e.key,value:e.value};return e=e.next,t.yieldReturn(r)}return t.yieldBreak()})},Object.defineProperty(t.prototype,"keys",{get:function(){var e=this,t=[];return e._entries.forEach(function(e){return t.push(e.key)}),t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"values",{get:function(){var e=this,t=[];return e._entries.forEach(function(e){return t.push(e.value)}),t},enumerable:!0,configurable:!0}),t}(i["default"]);Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=p});
//# sourceMappingURL=Dictionary.js.map