let original_Value = 3;
console.log(`originalValue:${original_Value}`);
let inc_Original_ValBy_Postfix = original_Value++;
console.log(
  `original_Value:${original_Value}, inc_Original_ValBy_Postfix:${inc_Original_ValBy_Postfix}`
);

//If we use postfix, with operator after operand (for example, x++),
//the increment operator increments and returns the value before incrementing.

let a = 3;
console.log(`a:${a}`);
let b = ++a;
console.log(`a:${a}, a:${b}`);
//console.table([a,b]);
//If we use prefix, with operator before operand (for example, ++x),
//he increment operator increments and returns the value after incrementing.
