// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
/*jshint esversion: 6 */
function destroyer(arr, ...args) {
  // Remove all the values
  console.log(arr);
  console.log(args);

  const seekArr = arr.filter(
    // filter arr array for ->
    // any element not present in args array since indexOf -1 mean element not found
    element => args.indexOf(element) === -1
  );
  return seekArr;
}

const d = destroyer([1, 2, 3, 1, 2, 3], 2, 3);

console.log(d);

// simplifying by returning filtered array using includes to check if eleemnt is NOT in args array
function dest(arr, ...args) {
  return arr.filter(element => !args.includes(element));
}

const des = dest([1, 2, 3, 1, 2, 3], 2, 3);
console.log(des);
