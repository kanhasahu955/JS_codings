let arr = [1, 2, 3, 4, 5];
let rev = [];

function reverseArray() {
  for (let i = 0; i < arr.length; i++) {
    rev[i] = arr[arr.length - 1 - i];
  }
  return rev;
}

console.log(reverseArray());

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp; 
    left++;
    right--;
  }
  return arr;
}
console.log(reverseArray(arr));
