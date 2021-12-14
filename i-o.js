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

// EOF
inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  // console.log("On Close Interface");
  // console.log(userInput);

  // // List destructuring
  // const [firstName, lastName] = userName;
  // console.log("Name is in next line");
  // console.log(firstName, lastName);
  // // const name1 = userInput[0];
  // // const name2 = userInput[1];

  // Strings  ----> split, slice, parseInt, parseFloat
  // Array ---> map, forEach, join

  // toFixed(num) ---> num decimal will be fixed

  // const num = 12 / 5;
  // console.log(parseInt("12").toFixed(2));
  // console.log(num.toFixed(2));
  // Join
  // const arr = [1, 2, 3, 4, 5];
  // console.log(arr);
  // // Output ---> 1 2 3 4 5, 1,2,3,4,5
  // console.log(arr.join(",@$", "ashdfkjahsjkdgh"));

  // Map
  const arr = [10, 20, 30, 40, 50];

  // // Normal For loop
  // for (var i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  // }

  // ForEach
  // arr.forEach((x, y) => {
  //   console.log(x);
  //   console.log(y);
  // });

  // Map
  // const minus2Arr = arr.map((x) => x - 2);
  // const sqArr = arr.map((x) => x * x);
  // console.log(minus2Arr);
  // console.log(sqArr);

  // const arr1 = [1, 2, 34];

  // arr1.push(100);
  // console.log(arr1);

  // // // String is immutable where array is mutable( Changing its contents )
  // // const str = "Sanjay";

  // // const input = "12345"; // length 5
  // // const inputArr = [1,2,3,4,5];
  // let resultStr = "";
  // for (var i = 1; i <= 5; i++) {
  //   resultStr += i * 9 + " "; // resultStr = resultStr + i * 9 + " ";
  //   // resultStr = resultStr + i * 9 + " ";
  // }

  // // const arr2 = new Array(5);
  // // console.log(arr);
  // // for(var i=0; i<)

  // // str[1] = "23";
  // console.log(resultStr);

  const str2 = "1 2 3 4 5"; // ---> [1, 2, 3, 4, 5];
  const numsStr = str2.split(" ");
  console.log(numsStr);

  const nums = numsStr.map(Number); // --> Number(1, 0) --> 1 // parseint(1, 0) return  1 but parseInt(2, 1) NaN
  console.log(nums);
  // map((numStr) => parseInt(numStr));
  // console.log(numsStr);
  // const a

  console.log([...Array(5).values()]);

  //end-here
});
