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
