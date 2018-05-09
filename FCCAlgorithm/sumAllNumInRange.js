// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.

/*jshint esversion: 6 */
function sumAll(arr) {
  // sort with less to greater
  const sortedArr = arr.sort((a, b) => a - b);
  const newArr = [];
  console.log(sortedArr);
  // push every value in range starting with less to greater to new array
  for (var i = sortedArr[0]; i <= sortedArr[1]; i++) {
    console.log(i);
    newArr.push(i);
  }
  // sum all numbers in array with reduce
  console.log(newArr);
  let range = newArr.reduce((a, b) => a + b);
  return range;
}

sumAll([5, 10]);
console.log(sumAll([5, 10]));
