const isPrime = (num) => {
  // O of N
  if (num <= 1) return false;
  var i;
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const mainFunc = () => {
  console.log(isPrime(4));
};

mainFunc();

module.exports = isPrime;
