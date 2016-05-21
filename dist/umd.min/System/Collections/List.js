/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
var __extends=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)};!function(t){if("object"==typeof module&&"object"==typeof module.exports){var e=t(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define(["require","exports","../Compare","./Array/Utility","./Enumeration/Enumerator","../Types","./Enumeration/ArrayEnumerator","./CollectionBase"],t)}(function(t,e){"use strict";var r=t("../Compare"),o=t("./Array/Utility"),n=t("./Enumeration/Enumerator"),i=t("../Types"),u=t("./Enumeration/ArrayEnumerator"),s=t("./CollectionBase"),c=function(t){function e(e,o){void 0===o&&(o=r.areEqual),t.call(this,null,o);var n=this;Array.isArray(e)?n._source=e.slice():(n._source=[],n._importEntries(e))}return __extends(e,t),e.prototype.getCount=function(){return this._source.length},e.prototype._addInternal=function(t){return this._source.push(t),!0},e.prototype._removeInternal=function(t,e){return void 0===e&&(e=1/0),o.remove(this._source,t,e,this._equalityComparer)},e.prototype._clearInternal=function(){var t=this._source.length;return this._source.length=0,t},e.prototype._importEntries=function(e){if(i.Type.isArrayLike(e)){var r=e.length;if(!r)return 0;var o=this._source,n=o.length;o.length+=r;for(var u=0;r>u;u++)o[u+n]=e[u];return r}return t.prototype._importEntries.call(this,e)},e.prototype.get=function(t){return this._source[t]},e.prototype.set=function(t,e){var o=this._source;return t<o.length&&r.areEqual(e,o[t])?!1:(o[t]=e,this._onModified(),!0)},e.prototype.indexOf=function(t){return o.indexOf(this._source,t,this._equalityComparer)},e.prototype.insert=function(t,e){var r=this._source;t<r.length?this._source.splice(t,0,e):this._source[t]=e,this._onModified()},e.prototype.removeAt=function(t){return o.removeIndex(this._source,t)?(this._onModified(),!0):!1},e.prototype.contains=function(t){return o.contains(this._source,t,this._equalityComparer)},e.prototype.copyTo=function(t,e){return o.copyTo(this._source,t,0,e)},e.prototype.getEnumerator=function(){return new u.ArrayEnumerator(this._source)},e.prototype.forEach=function(t,e){var r=this._source;return n.forEach(e?r.slice():r,t)},e}(s.CollectionBase);e.List=c,Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=c});
//# sourceMappingURL=List.js.map
