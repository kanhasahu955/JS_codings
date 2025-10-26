// function isSorted(arr) {
//   const asc = arr.every((val, i) => i === 0 || arr[i - i] <= val);
//   const desc = arr.every((val, i) => i === 0 || arr[i - 1] >= val);

//   if (asc) console.log(`${arr} is sorted in ascending order`);
//   else if (desc) console.log(`${arr} is sorted in descending order`);
//   else console.log(`${arr} is not sorted`);
// }

function isSorted(arr) {
  let asc = true;
  let desc = true;

  for (let i of arr) {
    if (arr[i] < arr[i - 1]) asc = false;
    if (arr[i] > arr[i - 1]) desc = false;
  }

  if (asc) console.log(`${arr} is sorted in ascending order`);
  else if (desc) console.log(`${arr} is sorted in descending order`);
  else console.log(`${arr} is not sorted`);
}

isSorted([1, 2, 3, 4]);
isSorted([5, 4, 3, 2, 1]);
isSorted([5, 4, 1, 2, 3]);
