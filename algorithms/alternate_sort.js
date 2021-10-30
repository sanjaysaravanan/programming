const alternate_sort_sorted_input = (arr) => {
  var res_arr = [];
  var length = arr.length;
  for (var i = 0; i < length / 2; i++) {
    res_arr.push(arr[length - i - 1]);
    if (i !== length - i - 1) res_arr.push(arr[i]);
  }
  return res_arr;
};

console.log(alternate_sort_sorted_input([1, 2, 3, 4, 5, 6, 7]));
