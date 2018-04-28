mySortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, item) {
  var low = 0;
  var high = arr.length - 1;
  var mid = parseInt((low + high) / 2);
  var guess = arr[mid];
  var output;
  console.log(`high: ${high}, mid: ${mid}, guess: ${guess}`);

  //implement item that is not in array to return 'Item not in Array'

  while (guess !== item) {
    if (guess < item) {
      //console.log(`guess is less than item`);
      low = mid;
      mid = Math.ceil((low + high) / 2);
      guess = arr[mid];
      //console.log(`low: ${low}, mid: ${mid}`);
    } else if (guess > item) {
      //console.log(`guess is greater than item`);
      high = mid;
      mid = Math.floor((low + high) / 2);
      guess = arr[mid];
      //console.log(`mid: ${mid}, high: ${high}`);
    } else {
      return guess;
    }
    //console.log(guess);
  }
  //console.log(`guess is equal to item`);
  output = `Input item: ${item}
Index of item: ${mid}`;
  return output;
}

console.log(binarySearch(mySortedArray, 5));
