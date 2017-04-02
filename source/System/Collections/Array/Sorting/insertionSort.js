(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../Exceptions/ArgumentNullException"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArgumentNullException_1 = require("../../../Exceptions/ArgumentNullException");
    /**
     * https://en.wikipedia.org/wiki/Insertion_sort
     * @param target
     * @returns {T[]}
     */
    function insertionSort(target) {
        if (!target)
            throw new ArgumentNullException_1.ArgumentNullException("target");
        var len = target.length;
        for (var i = 1; i < len; i++) {
            var j = i, j1 = void 0;
            while (j > 0 && target[(j1 = j - 1)] > target[j]) {
                var swap = target[j];
                target[j] = target[j1];
                target[j1] = swap;
                j--;
            }
        }
        return target;
    }
    exports.insertionSort = insertionSort;
});
//# sourceMappingURL=insertionSort.js.map