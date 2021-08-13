const fibonacci = (n) => {
  var n1 = 0,
    n2 = 1,
    n3,
    i;
  console.log(n1, n2);
  for (i = 2; i < n; i++) {
    n3 = n1 + n2;
    console.log(" " + n3);
    n1 = n2;
    n2 = n3;
  }
};

fibonacci(9);
