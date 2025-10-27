const count = (() => {
  let counter = 0;
  function innerFunc() {
    return ++counter;
  }

  innerFunc.reset = () => {
    counter  = 0;
    return counter;
  };

  return innerFunc;
})();

console.log(count())
console.log(count())
console.log(count())
console.log(count())
console.log(count())
console.log(count.reset())
console.log(count())
console.log(count())
