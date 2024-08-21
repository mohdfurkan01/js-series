//Reverse string using at method by accessing negative index
let myStr = "Hello";
let reversedStr = "";

for (let i = 1; i <= myStr.length; i++) {
  //reversedStr = reversedStr = myStr.at(-i);
  reversedStr += myStr.at(-i);
}
console.log(reversedStr); // Output: "olleH"

let anotherStr = myStr.charCodeAt(); //"H" has a Unicode value of 72.
console.log(anotherStr);

//1. charAt() Method:
//Syntax: string.charAt(index)
//* What It Does: The charAt() method returns the character at a specific position in a string.
//* Index Range: If you use a negative number or a number that's bigger than the length of the string, it will return an empty string.
let str = "Hello";
console.log(str.charAt(1)); // Output: "e"
console.log(str.charAt(-1)); // Output: ""
console.log(str.charAt(10)); // Output: ""

//2. at() Method:
//Syntax: string.at(index)
//* What It Does: The at() method also returns the character at a specific position in a string, but it has a special feature—it can handle negative numbers.
//* Index Range: This means you can count from the end of the string using negative numbers
let str1 = "Hello";
console.log(str1.at(1)); // Output: "e"
console.log(str1.at(-1)); // Output: "o"  (Last character)
console.log(str1.at(-2)); // Output: "l"
console.log(str1.at(10)); // Output: undefined (Out of bounds)

//TODO=> Key Differences:
//* Negative Indexes: charAt() doesn't support negative indexes, while at() does.
//* Out-of-Bounds Index: charAt() returns an empty string if you go beyond the string's length, but at() returns undefined.
//* Return Value: charAt() always returns a string, even if it's empty. at() can return undefined if the index is out of range.

//* In Summary: If you need to count characters from the end of the string or want more flexibility with errors, use at(). If you just want to get a character at a specific position without any extra features, charAt() works just fine.
