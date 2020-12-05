'use strict';
var single_element = function (collection) {
    var arr = collection.filter(function (val, index) {
        if (index % 2 == 1) return val;
    });
    var result = [];
    for (let i of arr) {
        let b = arr.filter(function (val) {
            return val == i;
        })
        if (b.length == 1)
            result[result.length] = i;
    }
    return result;
};
module.exports = single_element;
