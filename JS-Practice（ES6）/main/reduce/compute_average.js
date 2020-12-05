'use strict';

function compute_average(collection) {
  //在这里写入代码
  var num = collection.reduce(function (a, b) {
    return a + b;
  })
  return num / collection.length;
}

module.exports = compute_average;

