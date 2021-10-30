/* Write a javascript function to find the most freq item of an array */

const arr1 = [1,2,3,4,5,6,6,6,6,6,6];
var freqObj = {};
var setList = [];
var maxFreq=0, mostFreEle;
arr1.forEach(i => {
  if(i in setList) freqObj[i.toString()] += 1;
  else {
    freqObj[i.toString()] = 1;
    setList.push(i);
  }
  if(freqObj[i.toString()]  > maxFreq) {
    maxFreq = freqObj[i.toString()] ;
    mostFreEle = i;
  }
})
console.log(freqObj);
console.log(mostFreEle);
