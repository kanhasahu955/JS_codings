// function deleteArray(arr, pos) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i !== pos) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

function deleteArray(arr, pos) {
  arr.splice(pos,1)
  return arr
}

console.log(deleteArray([10,20,30,40],2))
