let num = 1.2345;
let fixedNum = num.toFixed(2);
console.log(fixedNum + 1); // Output: "1.231" (string concatenation happens)

const score = 400;
console.log(score); // 400

const balance = new Number(100);
console.log(balance); //output [Number: 100]

const min_value = Number.MIN_VALUE;
console.log("=================MIN", min_value); //5e-324

const max_value = Number.MAX_VALUE;
console.log("=================MAX", max_value); //1.7976931348623157e+308

console.log("@@@@@@@@@@@@@@@@@@@@@", Number);
console.log("@@@@@@@@@@@@@@@@@@@@@", Math.SQRT1);
//type Math in console then it will give us more property and also NUmber
