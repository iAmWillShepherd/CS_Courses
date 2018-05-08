// Shift cipher
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

/*jshint esversion: 6 */
function rot13(str) {
  // LBH QVQ VG!
  const arr = str.split("");
  let arrNum = [];
  let strNum;
  //console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let charCode = arr[i].charCodeAt();
    if (charCode < 65 || charCode > 90) {
      charCode = charCode - 13;
    }
    let convert = charCode - 13;
    //console.log(convert);
    // charCode range is 65-90
    if (convert < 65) {
      convert = 91 - (65 - convert);
    }
    arrNum.push(convert);
  }
  //console.log(arrNum);
  strNum = String.fromCharCode(...arrNum);
  //console.log(strNum)
  return strNum;
}

// Change the inputs below to test
const code = rot13("SERR PBQR PNZC");

console.log(code);

// console.log('S'.charCodeAt());
// console.log(String.fromCharCode(83));

// Advance code solution
function rot13(str) {
  // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L =>
    String.fromCharCode(L.charCodeAt(0) % 26 + 65)
  );
}
