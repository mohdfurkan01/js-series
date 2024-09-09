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

// Convert details to a 2D array format (rows and columns)
let crushDetailsArray = [
  ["Crush Name", "Age"],
  [gfDetails.name.firstCrushName, gfDetails.age.pallaviAge],
  [gfDetails.name.seconsCrushName, gfDetails.age.KhalessiAge],
  [gfDetails.name.thirdCrushName, gfDetails.age.rashmikaAge],
  [gfDetails.name.fourthCrushName, gfDetails.age.salinAge],
];

// Print the array in rows and columns
for (let i = 0; i < crushDetailsArray.length; i++) {
  console.log(crushDetailsArray[i].join(" | "));
}

//node package executer
//npx react-native init myproject
