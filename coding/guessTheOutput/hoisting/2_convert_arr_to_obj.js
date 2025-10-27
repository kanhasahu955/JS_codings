const arr = ["a", "b", "c"];
let obj = arr.reduce(
  (acc, val, i) => ({
    ...acc,
    [i]: val,
  }),
  {}
);

console.log(obj)