function countPosNegZero(arr) {
  let pos = 0,
    neg = 0,
    zero = 0;

  for (let i of arr) {
    if (i > 0) {
      pos++;
    } else if (i < 0) {
      neg++;
    } else {
      zero++;
    }
  }
  return { pos, neg, zero };
}

console.log(countPosNegZero([1,2,3,4,0,-1,-2,-3]));
