'use strict';
var even_group_calculate_average = function (collection) {
    var result = [];
    var arr = collection.filter(function (val, index) {
        if (index % 2 == 1 && val % 2 == 0) return val;
    });
    arr.sort(function (a, b) { return a - b });
    if (arr.length == 0) {
        result = [0];
    }
    else {
        for (let j = 0; j < 3; j++) {
            let n = 0, k = 0;
            for (let i of arr) {
                if (i.toString().length == j + 1) {
                    n = n + i;
                    k++;
                }
            }
            if (n != 0) result[result.length] = n / k;
        }

    }
    return result;

};
module.exports = even_group_calculate_average;
