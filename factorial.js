const testFactorial = (num) => {
  if (num <= 1) return 1;
  return testFactorial(num - 1) * num;
};



const sumOf = (n) => {
  if(n <= 1)
    return 1
  return n + sumOf(n-1);
}

console.log(sumOf(5));

module.exports = testFactorial;
