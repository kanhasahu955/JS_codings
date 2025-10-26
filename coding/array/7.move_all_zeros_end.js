const arr = [1, 2, 4, 0, 0, 1, 2, 14, 0, 1, 5, 0];

// function moveZerosLast(arr) {
//   let result = [];
//   for (let i of arr) {
//     if (i !== 0) result.push(i);
//   }

//   while (result.length < arr.length) {
//     result.push(0);
//   }

//   console.log(result);
// }

// function moveZerosLast(arr) {
//   let count = 0;
//   for (let num = 0; num < arr.length; num++) {
//     if (arr[num] !== 0) {
//       arr[count++] = arr[num];
//     }
//   }

//   while (count < arr.length) {
//     arr[count++] = 0;
//   }

//   console.log(arr);
// }

function moveZerosLast(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }

  console.log(arr);
}

moveZerosLast(arr);
