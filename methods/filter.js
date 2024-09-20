const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 4);
console.log(newNums);

let forMap = myNums.map((item) => {
  console.log(`for item val: ${item}`);
  return item + 2;
});
console.log(forMap);
