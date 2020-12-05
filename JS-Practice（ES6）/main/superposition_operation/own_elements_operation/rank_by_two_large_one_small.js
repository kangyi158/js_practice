'use strict';
function rank_by_two_large_one_small(collection) {
  //这里写代码。。。
  var arr = collection.sort(function (a, b) { return a - b });
  for (let i = 0; i < arr.length; i = i + 3) {
    if (i + 1 == arr.length || i + 2 == arr.length)
      break;
    else {
      let t = arr[i + 2];
      arr[i + 2] = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = t;
    }

  }
  return arr;
}
module.exports = rank_by_two_large_one_small;
