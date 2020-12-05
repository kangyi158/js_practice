'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var arr = collection.split("->");
  arr.sort(function (a, b) {
    return a - b;
  })
  if (arr.length % 2 == 0) {
    var len = arr.length;
    console.log(len);
    var re = (Number(arr[len / 2 - 1]) + Number(arr[len / 2])) / 2;
    return re;
  } else {
    return Number(arr[arr.length / 2]);
  }
}

module.exports = compute_chain_median;
