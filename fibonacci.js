const fibs = (num) => {
  let list = [];

  if (num === 1) {
    list.push(0)
    return 0;
  };

  if (num === 2) {
    list.push(1)
    return 1;
  };

  let fibNum = fibs(num - 1) + fibs(num - 2);
  list.push(fibNum);
  return list;
}

console.log(fibs(8));
