'use strict';

function choose_even(collection) {
  //在这里写入代码
  return collection.filter(x => x % 2 == 0);
}

module.exports = choose_even;
