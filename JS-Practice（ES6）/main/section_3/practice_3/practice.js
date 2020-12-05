function create_updated_collection(collectionA, objectB) {
  //在这里写入代码

  let elements = [];
  let t;
  t = 0;
  let j = 1;
  for (let i = 0; i < collectionA.length; i++) {
    if (collectionA[i] == collectionA[i + 1]) {
      j++;
      continue;
    }
    else {
      elements[t] = {
        key: collectionA[i],
        count: j
      }
      t++;
      j = 1;
    }
  }
  for (let i = 0; i < objectB.value.length; i++) {
    for (let k = 0; k < elements.length; k++) {
      if (objectB.value[i] == elements[k].key) {
        elements[k].count = elements[k].count - parseInt(elements[k].count / 3);
      }
    }
  }
  return elements;
}

module.exports = create_updated_collection;
