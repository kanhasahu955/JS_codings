const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [4, 5, 6, 7, 8, 9];

// function unionArray(arr1, arr2) {
//   let combined = arr1.concat(arr2);
//   let result = [];

//   for (let i = 0; i < combined.length; i++) {
//     if (!result?.includes(combined[i])) {
//       result.push(combined[i]);
//     }
//   }

//   console.log(result)
// }

function unionArray(arr1, arr2) {
  let result = [...new Set([...arr1, ...arr2])];

  console.log(result);
}

unionArray(arr1, arr2);
