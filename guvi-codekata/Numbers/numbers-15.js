// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  const num = parseInt(userInput[0]);
  const gapNum = 3;
  var j = 0;
  var resArr = [1],
    sum = 1;
  for (var i = 1; i <= num; i++) {
    if (j - gapNum === 0) {
      resArr.push(sum);
      j = 0;
      sum = 1;
    }
    sum *= i;
    j += 1;
  }
  if (j - gapNum === 0) resArr.push(sum);
  console.log(resArr.join(" "));
  //end-here
});
