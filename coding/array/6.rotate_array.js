// function rotateArray(arr, k) {
//   k = k % arr.length;
//   for (let i = 0; i < k; i++) {

//     // left rotation
//     // arr.push(arr.shift());

//     // right rotation
//     arr.unshift(arr.pop());
//   }

//   console.log(arr)
// }

// function rotateArray(arr, k) {
//   k = k % arr.length;

//   // left rotate
//   //   let rotated = arr.slice(k).concat(arr.slice(0, k));

//   // right rotate
//   //   let rotated = arr.slice(-k).concat(arr.slice(0, -k));

//   // left rotate
//   //   let spliced = arr.splice(0, k);
//   //   let rotated = arr.concat(spliced);

//   // right rotate
//   //   let spliced = arr.splice(-k);
//   //   let rotated = spliced.concat(arr);

//   console.log(rotated);
// }

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  //   return arr;
}
// console.log(reverse([1, 2, 3, 4, 5, 6], 3, 5));

function rotateArray(arr, k) {
  k = k % arr.length;

  //   left rotate
  // reverse(arr, 0, k - 1);
  // reverse(arr, k, arr.length - 1);
  // reverse(arr, 0, arr.length - 1);

  //   right rotate
  // reverse(arr, arr.length - k, arr.length - 1);
  // reverse(arr, 0, arr.length - k - 1);
  // reverse(arr, 0, arr.length - 1);

  console.log(arr);
}
rotateArray([1, 2, 3, 4, 5, 6], 2);
