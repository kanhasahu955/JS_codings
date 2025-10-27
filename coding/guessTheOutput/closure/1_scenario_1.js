for (var i = 0; i < 5; i++) {
  //   setTimeout(() => {
  //     console.log(i);
  //   }, 0);
  ((i) => console.log(i))(i);
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}


// var is global scope so it cannt create new memory it override hence using var it will give the last value
// if u want to make as new value then use function bcz in function var is act as functional scope and create a new memory
// let is block scope so it create different memory