'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var a = 'a';
  var code = a.charCodeAt();

  var sum = collection.reduce(function (a, b) {
    return a + b;
  })
  var e = sum / collection.length;

  return String.fromCharCode(e + code);

  ;
}

module.exports = average_to_letter;

