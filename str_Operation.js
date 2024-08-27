//* The split method in JavaScript is used to divide a string into an array of substrings based on a specified delimiter.
//Case 1: Splitting by Space
const str4 = "The quick brown fox jumps over the lazy dog.";
const words = str4.split(" "); // Split the string into an array of words
console.log(words[3]); // Access the 4th word (index 3)

//* str.split(' '): Here, the space ' ' is used as the delimiter. This means the string is split wherever there is a space.

//* Resulting Array: The resulting array will be: ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.'].
//words[3]: Accessing index 3 in this array gives "fox", which is the 4th word.

//Case 2: Splitting by Empty String
const str5 = "The quick brown fox jumps over the lazy dog.";
const chars = str5.split(""); // Split the string into an array of characters
console.log(chars[8]); // Access the 9th character (index 8)

//* str.split(''): Here, the empty string '' is used as the delimiter. This means the string str into an array where each element is a single character
//* Resulting Array: The resulting array will be: ['T', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k', ' ', 'b', 'r', 'o', 'w', 'n', ' ', 'f', 'o', 'x', ' ', ...].
//chars[8]: Accessing index 8 in this array gives "k", which is the 9th character

//! split(' ') uses a space as the delimiter, resulting in an array of words.
//! split('') uses an empty string as the delimiter, resulting in an array of individual characters.

//str.split(' '):
//* What it does: Splits the string wherever there is a space.
//* Result: You get an array where each word is a separate item.
//* Example: 'The quick brown fox'.split(' ') gives ['The', 'quick', 'brown', 'fox'].

//str.split(''):
//* What it does: Splits the string between every single character.
//* Result: You get an array where each character is a separate item.
//* Example: 'hello'.split('') gives ['h', 'e', 'l', 'l', 'o'].

//str.split():
//* What it does: Without specifying anything, it does not split the string.
//* Result: You get an array with the original string as the only item.
//* Example: 'hello world'.split() gives ['hello world'].

// Limit Parameter:

// Syntax: str.split(delimiter, limit)
// What it does: Limits the number of splits to the number specified by limit.
// Example: 'a b c d e'.split(' ', 3) results in ['a', 'b', 'c'].
// Explanation: It splits the string into a maximum of 3 parts.

//!EXAMPLE
// Let's break down the string 'a,b; c.d' using the regex [,. ;]:

// Initial String: 'a,b; c.d'

// Splitting at Comma (,) and Semicolon (;):

// 'a,b; c.d' becomes ['a', 'b; c.d']
// Splitting at Space ( ):

// 'b; c.d' becomes ['b', 'c.d']
// Splitting at Period (.):

// 'c.d' becomes ['c', 'd']
// Final Array: ['a', 'b', 'c', 'd']

// Why Not Remove the Characters:
// The characters in the regex [,. ;] are not removed from the string; rather, they are used as boundaries to split the string. This is why you need to include them in the regex even if they are present in the string.

let firstStr = "Hello Developer";
let secondStr = firstStr.slice(0, 9);
console.log("============>", secondStr);

let thirdStr = firstStr.concat(secondStr);
console.log("===============>", thirdStr); //*output Hello DeveloperHello Dev

// let thirdStr = firstStr.concat(` & ${secondStr}  `); //*output Hello Developer & Hello Dev
// console.log(thirdStr); //better readablity
