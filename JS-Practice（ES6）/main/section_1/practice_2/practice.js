function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.filter(x => collection_b[0].indexOf(x) != -1);
}

module.exports = collect_same_elements;
