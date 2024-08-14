function isPalindrome(str) {
  const reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}

console.log(isPalindrome("racecar")); //true
console.log(isPalindrome("hello")); //false
