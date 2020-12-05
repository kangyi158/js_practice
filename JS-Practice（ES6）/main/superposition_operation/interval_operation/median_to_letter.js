'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var num = compute_median(collection);
  var re = numberto_word_over_26(num);
  return re;
}

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
function numberto_word_over_26(num) {

  var a = 'a';
  var code = a.charCodeAt();
  var arr = [];

  var zheng = parseInt(num / 27);
  var yu = num % 27;
  if (zheng == 0 && yu != 0) {
    arr.push(String.fromCharCode(num - 1 + code));
  }
  else if (yu == 26) {
    arr.push(String.fromCharCode(zheng + code) + "" + String.fromCharCode(code));//进一位
  }
  else {
    arr.push(String.fromCharCode(zheng - 1 + code) + "" + String.fromCharCode(yu + 1 + code));
  }

  return arr[0];
};
module.exports = median_to_letter;
