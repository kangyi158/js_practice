function count_same_elements(collection) {
  //在这里写入代码
  let counters = [];
  for (let element of collection) {
    let [key, count] = element.split('-');
    let existedCounter = findObj(key, counters);
    count = getCount(count);
    if (existedCounter) {
      existedCounter.count += count;
    } else {
      counters.push({ key: key, count: count });
    }
  }
  return counters;
}

function findObj(key, counters) {
  for (let counter of counters) {
    if (counter.key === key) {
      return counter;
    }
  }
}
//如果有数字返回数字，否则返回1
function getCount(count) {
  if (count) {
    return parseInt(count);
  }
  return 1;
}
module.exports = count_same_elements;
