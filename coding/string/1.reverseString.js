// function reverseString(str) {
//   let i = str.length - 1;
//   let reversed = "";
//   while (i >= 0) {
//     reversed += str[i];
//     i--;
//   }
//   return reversed;
// }

// function reverseString(str) {
//   if (str === "") return "";
//   return reverseString(str.substr(1)) + str[0];
// }


function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("ashok"));

// anagram - palindrome
