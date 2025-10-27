console.log(1);
const promise = new Promise((resolve) => {
  console.log(2); // sync in nature bcz its not return then
  resolve();
  console.log(3); // sync in nature bcz its not return then
});

console.log(4);
promise
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
console.log(7);
setTimeout(() => {
  console.log(8);
}, 10);
setTimeout(() => {
  console.log(9);
}, 0);

// 1 2 3 4 7 5 6 9 8 <----- output

// topics to learn
/*
 GLOBAL EXECUTION CONTEXT
 EVENT LOOP
 MICRO TASK QUEUE
 CALLBACK QUEUE
*/

// promise/fetch are stores in microtask queue
// setTimeout is a WEPAPI
// microstack run first then callback queqe in global execution context