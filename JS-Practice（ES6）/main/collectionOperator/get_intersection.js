'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var set1 = new Set(collection_b);
  var set2 = new Set(collection_a);
  var set = new Set([...set1].filter(x => (set2).has(x)))
  set = [...set];
  return set;
}
module.exports = get_intersection;
