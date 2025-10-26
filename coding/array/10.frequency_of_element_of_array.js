const arr = [1, 2, 3, 1, 2, 4, 5, 6, 1, 5, 7, 9, 0];

// function frequencyOfArray(arr) {
//   let map = new Map();
//   arr.forEach((item) => {
//     map.set(item, (map.get(item) || 0) + 1);
//   });

//   console.log(Object.fromEntries(map));
// }

// function frequencyOfArray(arr) {
//   const freq = arr.reduce((acc, item) => {
//     acc[item] = (acc[item] || 0) + 1;
//     return acc;
//   }, {});

//   console.log(freq);
// }

function frequencyOfArray(arr) {
  const freq = {};

  arr.forEach((item) => {
    freq[item] = (freq[item] || 0) + 1;
  });

  console.log(freq)
}

frequencyOfArray(arr);
