'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var arr = collection.filter(x => {
    return x % 2 == 0;
  })
  return arr;
}

module.exports = collect_all_even;
