function isPalindrome(str) {
  const reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}

console.log(isPalindrome("racecar")); //true
console.log(isPalindrome("hello")); //false

//! To check how many vowels are there

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(
  "For vowels count====>",
  countVowels("batana kitne vowels hain isme") //11 vowels are present
);
