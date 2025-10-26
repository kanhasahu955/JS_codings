const arr = [1, 2, 3, 4, 5, 6];
// function insertElement(arr, pos, element) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i < pos) {
//       newArr[i] = arr[i];
//     } else if (i === pos) {
//       newArr[i] = element;
//     } else {
//       newArr[i] = arr[i - 1];
//     }
//   }
//   return newArr;
// }

function insertElement(arr, pos, element) {
  arr.splice(pos, 0, element);
  return arr;
}

console.log(insertElement(arr, 2, 3));
