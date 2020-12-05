'use strict';
var is_exist_element = function (collection, element) {
    var arr = collection.filter(function (val, index) {
        if (index % 2 == 0) return val;
    });
    return arr.includes(element);
};
module.exports = is_exist_element;
