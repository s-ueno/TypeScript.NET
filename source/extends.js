(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Used by TypeScript to extend classes before ES6.
     *
     * Usage:
     * ```
     * import __extendsImport from "../../extends";
     * //noinspection JSUnusedLocalSymbols
     * const __extends = __extendsImport;
     * ```
     * @param d
     * @param b
     */
    function default_1(d, b) {
        for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p];
        function __() { this.constructor = d; }
        //noinspection CommaExpressionJS
        d.prototype = b === null
            ? Object.create(b)
            : (__.prototype = b.prototype, new __());
    }
    exports.default = default_1;
});
//# sourceMappingURL=extends.js.map