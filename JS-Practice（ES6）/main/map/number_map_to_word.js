'use strict';
var number_map_to_word = function (collection) {
    var a = 'a';
    var code = a.charCodeAt();
    var arr = [];
    for (var i = 0; i < collection.length; i++) {


        arr.push(String.fromCharCode(collection[i] - 1 + code));


    }
    console.log(arr);
    return arr;
}

module.exports = number_map_to_word;
