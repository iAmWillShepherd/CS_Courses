// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

/*jshint esversion: 6 */

function diffArray(arr1, arr2) {
  let Arr1 = arr1.filter(e => !arr2.includes(e));
  let Arr2 = arr2.filter(e => !arr1.includes(e));
  console.log(Arr1, Arr2);
  let newArr = Arr1.concat(Arr2);
  return newArr;
}

console.log(
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);

// testArr = [1];
// testArr.splice(0, 1);
// console.log(testArr);
