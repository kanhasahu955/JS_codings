function maxConsecutiveOnes(nums) {
  let maxCount = 0;
  let count = 0;

  for (let i of nums) {
    if (i === 1) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      count = 0;
    }
  }

  return maxCount;
}
console.log(maxConsecutiveOnes([1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 0]));
