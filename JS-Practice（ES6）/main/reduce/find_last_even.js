'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var num;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 == 0) {
      num = collection[i];
    }
  }
  return num;
}

module.exports = find_last_even;
