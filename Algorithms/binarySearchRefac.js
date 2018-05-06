// REFACTORED CODE
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binSearch(arr, element) {
  let low = 0;
  let high = arr.length - 1;

  while (true) {
    let mid = midpoint(low, high);
    let currentElement = arr[mid];

    if (currentElement === element) {
      return mid;
    }

    if (currentElement < element) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

function midpoint(low, high) {
  return Math.trunc((low + high) / 2);
}
/////////////////////////////////////////////////////////////
// RECURSIVE CODE
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function exists(arr, el) {
  const curr = arr[0];

  // base case
  if (curr === el) {
    return true;
  }

  // need to know where to start or end new array
  const midPoint = Math.trunc((arr.length - 1) / 2);
  // reduce array to correct half
  const newArr =
    curr < el ? arr.slice(midPoint, arr.length) : arr.slice(0, midPoint);

  // if we have an empty newArray we know
  // el doesnt exist
  // recurse
  return newArr.length <= 0 ? false : exists(newArr, el);
}

const doesExist = exists(arr, 7);
doesExist;

/////////////////////////////////////////////////////////////
// PSEUDO CODE
// fn exists(arr: array, el: number) =>
//   // base case
//   if (x == array[0]) => true

//   half <- x < el ? right : left

//   // recurse
//   _ => half.length <= 0 false: exist(half, el)
