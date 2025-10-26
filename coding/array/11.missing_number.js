const arr = [1, 2, 3, 5, 6];

// function missingNumber(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (!arr.includes(i)) {
//       console.log(i);
//     }
//   }
// }

function missingNumber(arr) {
  let n = arr.length;
  const totalSum = n * (n + 1) / 2;
  const sum = arr.reduce((acc, val) => acc + val, 0);
  const result = totalSum - sum;
  console.log(result);
}

missingNumber(arr);
