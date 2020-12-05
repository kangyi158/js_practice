'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码

  if (collection_a.length != collection_b.length) {
    return false;
  } else {
    for (var i = 0; i < collection_a.length; i++) {
      var flag = 0;
      if (collection_b.indexOf(collection_a[i]) == -1) {
        flag = 1;
      }
    }
    if (flag == 0) {
      return true;
    }
  }
}

module.exports = compare_collections;


