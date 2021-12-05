// Sorting in descending order
const sortAsc = (arr) => {
  let j, temp;
  for (var i = 1; i < arr.length; i++) {
    temp = arr[i];
    j = i - 1;
    while (j >= 0 && temp <= arr[j]) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
};

const arr = [5, 4, 3, 2, 1];
console.log(sortAsc(arr));
