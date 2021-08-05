const testFactorial = (num) => {
  if (num <= 1) return 1;
  return testFactorial(num - 1) * num;
};

module.exports = testFactorial;
