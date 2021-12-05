const sampleArr = ["madam", "name", "abbbba", "racecar", "non-palidrome"];

const isPalindrome = (value) => {
  const n = value.length;
  for (var i = 0; i <= parseInt(n / 2); i++) {
    if (value[i] !== value[n - 1 - i]) return false;
  }
  return true;
};

const resultArr = [];
for (var j = 0; j < sampleArr.length; j++) {
  if (isPalindrome(sampleArr[j])) resultArr.push(sampleArr[j]);
}

console.log(resultArr);
