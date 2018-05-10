// Given an array of numbers, add up all the numbers and return the total

function sumArr(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const numArr = [2, 4, 6];
sumArr(numArr);
console.log(sumArr(numArr));
