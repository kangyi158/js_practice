'use strict';

function double_to_one(collection) {
  //在这里写入代码
  var arr = collection.flat(Infinity);
  var set = new Set(arr);
  return [...set];

}

module.exports = double_to_one;
