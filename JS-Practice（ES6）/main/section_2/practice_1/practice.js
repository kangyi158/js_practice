function count_same_elements(collection) {
  //在这里写入代码

  let mySet = new Set();
  collection.forEach(element => mySet.add(element));
  let answer = [];
  mySet.forEach(element => {
    answer.push({
      key: element,
      count: 0
    });
  });
  for (let i = 0; i < answer.length; i++) {
    let count = 0;
    collection.forEach(element => {
      if (element === answer[i].key) {
        count += 1;
      }
    });
    answer[i].count = count;
  }
  return answer;
}

module.exports = count_same_elements;
