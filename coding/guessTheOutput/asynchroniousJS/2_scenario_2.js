new Promise((resolve, reject) => {
  resolve(1);
  resolve(2);//not take
  resolve(3);//not take
  resolve(4);//not take
  reject("error");//not take
})
  .then((val) => console.log(val)) // comes here the return from resolve
  .catch((err) => console.log(error));

// 1 <----- output
// after once promise resolved  avoid the rest execution
// promise when settled [ resolved/rejected ] then any call[ resolve/reject ] after that after the first are not counted
