'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var m;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] == element) {
      m = i;
    }
  }
  return m;
}

module.exports = calculate_elements_sum;
