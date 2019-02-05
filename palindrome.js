function isPalindrome(str) {
  let noSpaces = str.split(" ").join("");
  let mid = Math.round(noSpaces.length / 2);
  let last = noSpaces.length - 1; //last char is length - 1
  let lowerCase = noSpaces.toLowerCase();

  for (let i = 0; i <= mid; i++) {
    if (lowerCase[i] !== lowerCase[last - i])
      return false;
  }

  return true;

}

// Test driver code. These should all log true.
// console.log(isPalindrome('p') === true);
// console.log(isPalindrome('foo') === false);
// console.log(isPalindrome('racecar') === true);
// console.log(isPalindrome('Kayak') === true);
console.log(isPalindrome('a santa at NASA') === true);
// console.log(isPalindrome('live without evil') === false);
// console.log(isPalindrome('just some random words') === false);

