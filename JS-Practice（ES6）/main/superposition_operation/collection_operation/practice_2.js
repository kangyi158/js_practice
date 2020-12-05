'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码

  var arr = [];
  collection.forEach(x => {
    if (x % 2 != 0) {
      arr.push(3 * x + 2);
    }
  });
  return arr;
}

module.exports = hybrid_operation_to_uneven;

