const array = [10, 5, 2, 3, 11, 8, 1];

function quicksort(arr) {
  // base case
  if (arr.length < 2) {
    console.log(arr);
    return arr;
  } else {
    // recursive case
    let pivot = arr.slice(0, 1); // take arr[0] as pivot
    console.log(pivot);
    let less = [];
    let more = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        less.push(arr[i]);
        console.log(less);
      } else {
        more.push(arr[i]);
        console.log(more);
      }
    }
    let sorted = []; // new array to perform concat
    return sorted.concat(quicksort(less), pivot, quicksort(more));
  }
}

console.log(quicksort(array));
