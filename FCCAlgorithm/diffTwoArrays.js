// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

/*jshint esversion: 6 */

function diffArray(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  console.log(newArr);
  let diffArr = [];
  for (let j = 0; j <= newArr.length + 1; j++) {
    console.log(newArr);
    console.log(newArr.length);
    for (let i = 1; i < newArr.length; i++) {
      let temp = newArr[0];
      if (temp === newArr[i]) {
        newArr.splice(0, 1);
        console.log(newArr);
        console.log(newArr.length);
        newArr.splice(i - 1, 1);
        console.log(newArr);
        console.log(newArr.length);
      }
    }
  }
  return newArr;
}

//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);

testArr = [1];
testArr.splice(0, 1);
console.log(testArr);
