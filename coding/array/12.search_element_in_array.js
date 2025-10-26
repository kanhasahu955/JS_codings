const arr = [1, 2, 3, 4, 5];
// function search(arr, x) {
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i] === x){
//             return i
//         }
//     }
//     return -1
// }

function search(arr, x) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }

  return map.hasOwnProperty(x) ? map[x] : -1;
}

console.log(search(arr, 5));
