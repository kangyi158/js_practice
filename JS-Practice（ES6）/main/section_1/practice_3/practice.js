function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  return collection_a.filter(x => object_b.value.indexOf(x) != -1);

}

module.exports = collect_same_elements;
