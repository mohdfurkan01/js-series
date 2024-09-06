console.time("Timer");

let sum = 0;
for (let i = 0; i < 1000; i++) {
  sum += i;
}

console.timeEnd("Timer");
