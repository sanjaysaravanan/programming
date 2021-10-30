// Without using an extra array to manipulate things
var arr = [1, 2, 3, 4, 5];
var n = arr.length;

for (var i = 0; i < Math.floor(n / 2); i++) {
  var temp = arr[i];
  arr[i] = arr[n - i - 1];
  arr[n - i - 1] = temp;
}

console.log(arr);
