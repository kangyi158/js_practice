function create_updated_collection(collectionA, objectB) {
  //在这里写入代码

  var array = [];
  var k = 0;
  var count = 0;
  for (var i = 0; i < collectionA.length; i++) {
    if (collectionA[i].length == 1) {
      if (collectionA[i] == collectionA[i + 1]) {
        count++;
      }
      else {
        array[k] = {
          key: collectionA[i - 1],
          count: count + 1
        }
        k++;
        count = 0;
      }
    }
    else {
      var [a, x, n] = collectionA[i];
      array[k] = {
        key: a,
        count: Number(n)
      }
      k++;
      count = 0;
    }
  }
  for (let i = 0; i < objectB.value.length; i++) {
    for (let k = 0; k < array.length; k++) {
      if (objectB.value[i] == array[k].key) {
        array[k].count = array[k].count - parseInt(array[k].count / 3);
      }
    }
  }
  return array;
}

module.exports = create_updated_collection;
