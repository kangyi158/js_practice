'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var a = 'a';
  var code = a.charCodeAt();
  var arr = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 == 0) {
      arr.push(String.fromCharCode(i + code));
    }
  }
  return arr;
}

module.exports = even_to_letter;
