'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
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
    arr.push(String.fromCharCode(i - 1 + code));
  }
  if (flag == 1) {
    arr = arr.reverse();
  }
  return arr;
}

module.exports = get_letter_interval;
