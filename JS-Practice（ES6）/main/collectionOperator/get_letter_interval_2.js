'use strict';

function get_letter_interval_2(number_a, number_b) {
  var min = number_a, max = number_b, flag = 0;
  if (number_a > number_b) {
    flag = 1;
    min = number_b;
    max = number_a;
  }
  var a = 'a';
  var code = a.charCodeAt();
  var arr = [];
  for (var i = min; i <= max; i++) {
    var zheng = parseInt(i / 27);
    var yu = i % 27;
    if (zheng == 0 && yu != 0) {
      arr.push(String.fromCharCode(i - 1 + code));
    }
    else if (yu == 26) {
      arr.push(String.fromCharCode(zheng + code) + "" + String.fromCharCode(code));//进一位
    }
    else {
      arr.push(String.fromCharCode(zheng - 1 + code) + "" + String.fromCharCode(yu + code));
    }
  }
  if (flag == 1) {
    arr = arr.reverse();
  }
  return arr;
}

module.exports = get_letter_interval_2;
