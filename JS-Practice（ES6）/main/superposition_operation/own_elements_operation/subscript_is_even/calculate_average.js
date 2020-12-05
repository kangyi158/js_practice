'use strict';
var calculate_average = function (collection) {
    var sum = 0;
    var num = 0;
    collection.forEach(function (value, index) {
        if (index > 0 && index % 2 == 0) {
            sum += value;
            num++;
        }
    })
    return sum / num;
};
module.exports = calculate_average;
