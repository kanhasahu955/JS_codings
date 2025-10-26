const arr = [1, 2, 3, 4, 1, 2, 3];
let withoutDuplicate = [];

// return removed duplicate element
// function removeDuplicate(arr) {
//   for (let i of arr) {
//     if (!withoutDuplicate.includes(i)) {
//       withoutDuplicate.push(i);
//     }
//   }
//   console.log(withoutDuplicate);
//   console.log([...new Set(arr)]);
// }

// return duplicate elements
// function removeDuplicate(arr) {
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }

//   console.log(arr.splice(0, i + 1));
// }

// function removeDuplicate(arr) {
//   console.log(arr.filter((item, index) => arr.indexOf(item) == index));
// }

function removeDuplicate(arr) {
  const seen = {};
  console.log(
    arr.filter((item) => {
      if (seen[item]) return false;
      seen[item] = true;
      return true;
    })
  );
}
removeDuplicate(arr);
