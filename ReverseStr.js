//Reverse string using at method by accessing negative index
let myStr = "Hello";
let reversedStr = "";

for (let i = 1; i <= myStr.length; i++) {
  //reversedStr = reversedStr = myStr.at(-i);
  reversedStr += myStr.at(-i);
}
console.log(reversedStr); // Output: "olleH"
