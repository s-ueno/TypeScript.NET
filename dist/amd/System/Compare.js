/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","./Types"],function(e,r,t){"use strict";function u(e,r,t){return void 0===t&&(t=!0),e===r||!t&&e==r||l(e)&&l(r)}function n(e,r,n){return void 0===n&&(n=!0),u(e,r,n)?0:e&&t["default"].hasMember(e,f)?e.compareTo(r):r&&t["default"].hasMember(r,f)?-r.compareTo(e):e>r||n&&(0===e&&0==r||null===e&&r===i)?1:r>e||n&&(0===r&&0==e||null===r&&e===i)?-1:NaN}function a(e,r,n,l){if(void 0===n&&(n=!0),void 0===l&&(l=0),u(e,r,!0))return!0;if(null===e||e===i||null==r||r===i)return n?t["default"].isObject(e)?!Object.keys(e).length:t["default"].isObject(r)?!Object.keys(r).length:!(null!==e&&e!==i||null!=r&&r!==i):!1;if(t["default"].isObject(e)&&t["default"].isObject(r)){var f=Object.keys(e),o=Object.keys(r),c=f.length;if(c!=o.length)return!1;f.sort(),o.sort();for(var s=0;c>s;s++){var d=f[s];if(d!==o[s]||!u(e[d],r[d],!0))return!1}if(l>0)for(var v=0,b=f;v<b.length;v++){var d=b[v];if(!a(e[d],r[d],n,l-1))return!1}return!0}return!1}var l=t["default"].isTrueNaN,i=void 0;r.areEqual=u;var f="compareTo";r.compare=n,r.areEquivalent=a});
//# sourceMappingURL=Compare.js.map
