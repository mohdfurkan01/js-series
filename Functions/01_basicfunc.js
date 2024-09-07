function showUsersName(username) {
  if (!username) {
    console.log("please enter username ");
    return;
  }
  return `Hey I'm yours adjust accordingly ${username} `;
}

//showUsersName("ahsan");

let result = showUsersName("Ahsan");
console.log(result);

console.log(String.raw`HelloTwitter\nworld`);
console.log(0.1 + 0.2 == 0.3); //false
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true
console.log(typeof typeof 1); //string
console.log(false == "0"); //true
