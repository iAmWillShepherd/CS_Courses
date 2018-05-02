// Given an unordered array
const myUnorderArray = [3, 2, 5, 1, 4];

// Find the smallest number in the array
function findSmallest(arr) {
  // store the smallest value
  var smallest = arr[0];
  // store the index of the smallest value
  var smallest_idx = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      console.log(smallest);
    }
  }
  console.log(smallest);
  return smallest;
}

// Sort the array
function selectionSort(arr) {
  var sortedArray = [];
  var singleArray = [];
  var len = arr.length - 1;
  for (var i = 0; i < len; i++) {
    // find the smallest element in the array
    smallest = findSmallest(arr);
    smallest_idx = arr.indexOf(smallest);
    console.log(smallest);
    // add it to the new array
    sortedArray.push(smallest);
    arr.splice(smallest_idx, 1);
    console.log(arr);
    console.log(sortedArray);
    console.log(arr.length);

    if (arr.length <= 1) {
      singleArray = arr[0];
      sortedArray.push(singleArray);
    }
  }
  return sortedArray;
}

console.log(selectionSort(myUnorderArray));

// findSmallest
// 1st - smallest=3 smallest_idx=0 --> skip
// 2nd - smallest=3 smallest_inx=0 --> 1 < 3 - yes
// 3rd - smallest=1 smallest_idx=1 --> 2 < 1 - no skip
// 4th - smallest=1 smallext_idx=1 --> 8 < 1 - no skip

// findSmallest = 1
// push into sortedArray = [1]
// splice smallest_idx
