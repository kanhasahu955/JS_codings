const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [4, 5, 6, 7, 8, 9];

// function intersectionArray(arr1, arr2) {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (j = 0; j < arr2.length; j++) {
//       if (arr1[i] == arr2[j] && !result?.includes(arr1[i])) {
//         result.push(arr1[i]);
//       }
//     }
//   }
//   console.log(result);
// }

function intersectionArray(arr1, arr2) {
  let result = [];
  let set1 = new Set(arr1);
  for (let num of arr2) {
    if (set1?.has(num)) {
      result.push(num);
      set1.delete(num);
    }
  }

  console.log(result);
}

intersectionArray(arr1, arr2);
