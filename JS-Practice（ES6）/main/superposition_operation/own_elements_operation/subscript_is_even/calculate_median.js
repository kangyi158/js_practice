'use strict';
var calculate_median = function (collection) {
    //选出第偶数个的元素
    collection = collection.filter(function (value, index) {
        if (index > 0 && index % 2 == 0) {
            return true;
        }
    })
    return compute_median(collection);


};
module.exports = calculate_median;
//计算中位数
function compute_median(collection) {
    //在这里写入代码
    var re;
    collection.sort(function (a, b) {
        return a - b;
    })
    var len = collection.length;
    if (len % 2 == 0) {   //数组长度为偶数
        re = (collection[len / 2 - 1] + collection[len / 2]) / 2;
    } else {    //数组长度为奇数
        re = collection[parseInt(len / 2)];
        console.log(len / 2);

    }
    return re;
}