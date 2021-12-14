// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  const numer = parseInt(userInput[0]);

  let res = Number.POSITIVE_INFINITY;

  for (var j = 0; j <= numer; j++) {
    let fact = 0,
      factNum = "";
    const numArr = j.toString().split("").map(Number);
    for (var i = 0; i < numArr.length; i++) {
      fact += factorial(numArr[i]);
      factNum += numArr[i];
      if (fact === numer) {
        const temp = parseInt(factNum);
        fact = 0;
        if (res > temp) res = temp;
      }
    }
  }
  if (res !== Number.POSITIVE_INFINITY) console.log(res);
  else console.log(-1);

  //end-here
});

const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};
