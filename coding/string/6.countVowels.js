function countVowels(str) {
  let vowels = "AEIOUaeiou";
  return [...str].filter((char) => vowels.includes(char)).length;
}

console.log(countVowels("ashok"));
