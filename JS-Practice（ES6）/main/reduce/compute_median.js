'use strict';

function compute_median(collection) {
  //在这里写入代码
  var re;
  collection.sort(function (a, b) {
    return a - b;
  })
  var len = collection.length;
  if (len % 2 == 0) {   //数组长度为偶数
    re = (collection[len / 2 - 1] + collection[len / 2]) / 2;
  } else {    //数组长度为奇数
    re = collection[parseInt(len / 2)];
    console.log(len / 2);

  }
  return re;
}

module.exports = compute_median;


