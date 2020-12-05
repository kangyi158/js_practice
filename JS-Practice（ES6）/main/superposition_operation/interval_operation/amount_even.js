'use strict';

function amount_even(collection) {
  //在这里写入代码
  var sum = 0;
  collection = collection.filter(x => {
    if (x % 2 == 0) {
      return true;
    }
  })
  sum = collection.reduce(function (a, b) {
    return a + b;
  })
  return sum;
}

module.exports = amount_even;
