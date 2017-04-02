define(["require","exports","./ResolverBase","../extends"],function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n["default"],a=function(e){function t(t,r,n){void 0===r&&(r=!1),void 0===n&&(n=!1);var u=e.call(this,t,r,n)||this;return u._disposableObjectName="Lazy",u._isValueCreated=!1,u}return u(t,e),Object.defineProperty(t.prototype,"isValueCreated",{get:function(){return!!this._isValueCreated},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),t.prototype.equals=function(e){return this==e},t.prototype.valueEquals=function(e){return this.equals(e)||this.value===e.value},t.create=function(e,r,n){return void 0===r&&(r=!1),void 0===n&&(n=!1),new t(e,r,n)},t}(r.ResolverBase);t.Lazy=a;var i=function(e){function t(t,r){void 0===r&&(r=!1);var n=e.call(this,t,r,!0)||this;return n._disposableObjectName="ResettableLazy",n}return u(t,e),t.create=function(e,r){return void 0===r&&(r=!1),new t(e,r)},t}(a);t.ResettableLazy=i,t["default"]=a});
//# sourceMappingURL=Lazy.js.map