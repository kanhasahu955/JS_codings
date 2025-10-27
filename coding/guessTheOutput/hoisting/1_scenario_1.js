// console.log(y) // reference error y is not defined
// y = 1

// console.log(y) //undefined
// var y = 1

// console.log(y) // reference error
// let y = 1

// y = 3;
// console.log(y) // 3
// var y

// console.log(x) //  Cannot access 'x' before initialization [block scope]
// let x = 1

// var x = 1;
// let x;
// console.log(x)//Identifier 'x' has already been declared


// function hoisting(){
//     console.log("value of local " + a) // undefined
// }

// console.log('value of global ' + a) // 10
// var a = 10
// hoisting()


// function hoisting(){
//     a = 10
// }
// hoisting()
// console.log(a) //10

// function hoisting(){
//    var a = 10
// }
// hoisting()
// console.log(a) // ReferenceError: a is not defined


// function a(){
//     console.log(1) //2
// }
// a()
// function a(){
//     console.log(2) //2
// }
// a()

var test =1
function hoisting(){
    test = 10 
    return
    function test(){

    }
}
hoisting()
console.log(test) //1