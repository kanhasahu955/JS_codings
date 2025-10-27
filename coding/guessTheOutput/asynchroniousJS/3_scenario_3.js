Promise.resolve(1) //not have a callback like then
  .then(() => 2) // value return 2
  .then(3) // ignore bcz no callback nothinf returns
  .then((val) => console.log(val * 3)) //prev val 2 * 3 returned
  .then(Promise.resolve(4)) // ignore
  .then(console.log); // print 6 as returnd the value prev then

// 6 <---- output

// Promise.resolve(1).then((val)=>console.log(val)) // 1
// Promise.resolve(1).then(()=>2).then((val)=>console.log(val))//2
