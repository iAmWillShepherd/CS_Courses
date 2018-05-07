// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr, ...args) {
  // Remove all the values
  console.log(arr);
  console.log(args);

  const seekArr = arr.filter(
    // filter arr array for ->
    // any element not present in args array since indexOf -1 mean element not found
    element => args.indexOf(element) < 0
  );
  return seekArr;
}

const d = destroyer([1, 2, 3, 1, 2, 3], 2, 3);

console.log(d);
