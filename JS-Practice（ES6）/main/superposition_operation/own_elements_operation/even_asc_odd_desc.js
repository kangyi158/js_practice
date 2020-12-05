'use strict';
var even_asc_odd_desc = function (collection) {
    var arr1 = collection.filter(function (val) {
        if (val % 2 == 1) return val;
    });
    var arr2 = collection.filter(function (val) {
        if (val % 2 == 0) return val;
    });
    return [...arr2.sort(function (a, b) { return a - b }), ...arr1.sort(function (a, b) { return b - a })]
};

module.exports = even_asc_odd_desc;
