let gfDetails = {
  name: {
    firstCrushName: "Sai Pallavi",
    seconsCrushName: "Emilia Clarke | Khalessi",
    thirdCrushName: "Rashmika Mandana",
    fourthCrushName: "Selena Gomez",
  },
  age: {
    pallaviAge: 23,
    KhalessiAge: 24,
    rashmikaAge: 25,
    salinAge: 26,
  },
  myMethod() {
    console.log("All are accepted");
  },
};
console.log(gfDetails.name.firstCrushName);
console.log(gfDetails.name);
gfDetails.myMethod();

//? IIFE
(function () {
  console.log("Normal function IIFE");
})();

//Arrow IIFE
(() => {
  console.log("arrow finction IIFE");
})();

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
console.log(result1); //15
console.log(result2); //12
