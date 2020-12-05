'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var arr = [], flag = 0;
  var min = number_a, max = number_b;
  if (number_a > number_b) {
    min = number_b;
    max = number_a;
    flag = 1;
  }
  for (var i = min; i <= max; i++) {
    if (i % 2 == 0) {
      arr.push(i);
    }
  }
  if (flag == 1) {
    return arr.reverse();
  } else {
    return arr;
  }
}

module.exports = get_integer_interval_2;
