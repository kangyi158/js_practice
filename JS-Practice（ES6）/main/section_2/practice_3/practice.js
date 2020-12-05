function count_same_elements(collection) {
  //在这里写入代码
  var str = [];
  var n = 1;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].length != 1) {
      let s = collection[i]
      str[str.length] = collection[i];
      collection[i] = s[0];
      n++;
    }
  }
  var arr = [];
  var t;
  t = 0;
  let j = 1;
  for (let i = 0; i < collection.length; i++) {

    if (collection[i] == collection[i + 1]) {
      j++;
      continue;
    }
    else {
      arr[t] = {
        name: collection[i],
        summary: j
      }
      j = 1;
      t++;

    }
  }

  for (let i = 0; i < str.length; i++) {
    let c = str[i].split('-');
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].name == c[0]) {
        let w = arr[j].summary
        arr[j].summary = parseInt(c[1]) + w - 1;
      }
    }
  }
  for (let i = 0; i < str.length; i++) {
    let c = str[i].split(':');
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].name == c[0]) {
        let w = arr[j].summary
        arr[j].summary = parseInt(c[1]) + w - 1;
      }
    }
  }
  var kuo = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > 3) {
      kuo[kuo.length] = str[i];
    }
  }
  for (let i = 0; i < kuo.length; i++) {
    let c = kuo[i].split('[');
    let d = c[1].split(']');
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].name == c[0]) {
        let w = arr[j].summary
        arr[j].summary = parseInt(d[0]) + w - 1;
      }

    }
  }

  return arr;
}

module.exports = count_same_elements;
