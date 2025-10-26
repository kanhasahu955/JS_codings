const arr = [5, 1, 9, 2, 5, 1];
// function secondLargestSmallest(arr) {
//   const unique = [...new Set(arr)];
//   const max = Math.max(...unique);
//   const min = Math.min(...unique);

//   unique.splice(unique.indexOf(min), 1);
//   unique.splice(unique.indexOf(max), 1);

//   const secondMax = Math.max(...unique);
//   const secondMin = Math.min(...unique);

//   console.log({ secondSmallest: secondMin, secondLargest: secondMax });
// }

// function secondLargestSmallest(arr) {
//     const unique = [...new Set(arr)].sort((a,b)=>a-b)
//     const secondLargest = unique[1]
//     const secondSmallest = unique.at([unique.length - 2])

//   console.log({ secondSmallest, secondLargest });

// }

function secondLargestSmallest(arr) {
  let min = Infinity;
  let secondMin = Infinity;

  let max = Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num !== max) {
      secondMax = num;
    }

    if (num < min) {
      secondMin = min;
      min = num;
    } else if (num < secondMin && num !== min) {
      secondMin = num;
    }
  }

  console.log({ secondMax, secondMin });
}

secondLargestSmallest(arr);
