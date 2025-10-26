const arr = [3, 5, 7, 9, 0, 2, 1, -1];
// const max = Math.max(...arr);
// const min = Math.min(...arr);

// const sort = arr.sort((a, b) => a - b);
// console.log({max:sort[arr.length-1],min:arr[0]})
// console.log({max,min})

function findMinMax(arr) {
  if (arr.length === 0) return null;
  let min = arr[0];
  let max = arr[0];

  for (let i of arr) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  return { min, max };
}

console.log(findMinMax(arr));
