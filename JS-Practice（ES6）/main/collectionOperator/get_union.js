'use strict';

function get_union(collection_a, collection_b) {
  var arr = [];
  arr = collection_b.filter(x => collection_a.indexOf(x) == -1);
  arr = collection_a.concat(arr);
  return arr;
}

module.exports = get_union;

