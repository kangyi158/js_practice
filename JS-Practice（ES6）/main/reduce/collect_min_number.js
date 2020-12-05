'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var a = collection.reduce(function (x, y) {
    return x < y ? x : y;
  })
  return a;
}

module.exports = collect_min_number;

