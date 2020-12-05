'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var arr = [];
  var temp = number;
  if (number * 10 % 2 == 0) {

    while (temp > 0) {
      arr.push(Number(temp.toFixed(1)));
      temp -= interval;

    }
    // arr.push(Number(temp.toFixed(1)));

  } else {
    while (temp >= 0) {
      arr.push(Number(temp.toFixed(1)));
      temp -= interval;

    }
    arr.push(Number(temp.toFixed(1)));
  }
  return arr;
}

module.exports = spilt_to_zero;
