'use strict';
var number_map_to_word_over_26 = function (collection) {

    var a = 'a';
    var code = a.charCodeAt();
    var arr = [];
    for (var i = 0; i < collection.length; i++) {
        var zheng = parseInt(collection[i] / 27);
        var yu = collection[i] % 27;
        if (zheng == 0 && yu != 0) {
            arr.push(String.fromCharCode(collection[i] - 1 + code));
        }
        else if (yu == 26) {
            arr.push(String.fromCharCode(zheng + code) + "" + String.fromCharCode(code));//进一位
        }
        else {
            arr.push(String.fromCharCode(zheng - 1 + code) + "" + String.fromCharCode(yu + code));
        }
    }
    return arr;
};

module.exports = number_map_to_word_over_26;
