// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  const sortedArray = arr.sort(function(a, b) {
    if (a < b) {
      return -1;
    } else {
      return 1;
    }
  });
  const numIndex = sortedArray.indexOf(num);
  // return num;
  return numIndex;
}

getIndexToIns([40, 60], 50);
console.log(getIndexToIns([60, 40], 50));
