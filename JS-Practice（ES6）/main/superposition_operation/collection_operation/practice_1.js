'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var sum = 0;
  collection.forEach(x => sum += 3 * x + 2);
  return sum;

}

module.exports = hybrid_operation;

