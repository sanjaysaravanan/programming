var arr = [1, 2, 3, 4, 5];
var n = arr.length;
var temp = arr[n - 1];

for (var i = n - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}

arr[0] = temp;

console.log(arr);

// Approach 2
var arr2 = [1, 2, 3, 4, 5];
var p = 0,
  q = arr2.length - 1;

while (p !== q) {
  var _temp = arr2[p];
  arr2[p] = arr2[q];
  arr2[q] = _temp;
  p += 1;
}

console.log(arr2);
