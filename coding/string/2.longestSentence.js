function longestWord(word) {
  return word
    .split(" ")
    .reduce((acc, val) => (acc.length > val.length ? acc : val));
}

console.log(longestWord("i love javascript"));
