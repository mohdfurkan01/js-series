// *A JavaScript object is a variable that can store multiple values in key-value pairs
//* An object is a JavaScript data type, just as a number or a string is also a data type. As a data type, an object can be contained in a variable.

let actor = {
  name: "Baigan",
  country: "India",
  state: "UP",
  city: "Bareilly",
  crush: "Sai Pallavi :) || Rashmika Mandana", // Key: crush, Value: "Rashmika Mandana"
  profession: "Not decided :)",

  kuchkaamkrBhai: function () {
    console.log("ye method h aur iska nam kuchkaamkrBhai ");
  },
};
//* it's preferable to break down objects into multiple lines for better readability.
//* the key-value pairs of an object are referred to as properties

console.log("object ka console h", actor);

actor.profession = "kuch aur maan lo";

delete actor.city;
//console.log(" Check karo ke `city` property delete hui ya nahi", actor);

//* Checking if a Property Exists:
//* Sometimes, you might want to check if a certain property exists in your object:

if ("crush" in actor) {
  console.log("Crush mil gayi!");
} else {
  console.log("Single hi marega bhai tu!");
}

for (let key in actor) {
  console.log(key, ":", actor[key]);
}
