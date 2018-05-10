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

// make function above recursive
function recurseSumArr(arr) {
  // base case
  if (arr.length < 1) {
    return 0;
  } else {
    // total sum is the first number in list + the sum of the rest of the list
    return arr[0] + recurseSumArr(arr.slice(1));
  }
}

recurseSumArr(numArr);
console.log(recurseSumArr(numArr));
