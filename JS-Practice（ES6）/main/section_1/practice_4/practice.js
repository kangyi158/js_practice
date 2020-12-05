function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var arr = collection_a.filter(x => object_b.value.indexOf(x.key) != -1);
  var arr2 = [];
  arr.forEach(x => {
    arr2.push(x.key);
  })
  return arr2;
}

module.exports = collect_same_elements;
