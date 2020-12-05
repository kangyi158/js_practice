'use strict';

function grouping_count(collection) {
  //在这里写入代码
  var obj = {};
  collection.forEach((item, index) => {
    obj[item] = obj[item] >= 1 ? obj[item] + 1 : 1;
  })
  return obj;
}

module.exports = grouping_count;
