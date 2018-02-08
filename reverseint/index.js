// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // if (n < 10 && n > -10) { return n }
  //
  // let temp = n < 0 ? -n : n;
  // let arr = [];
  // while (temp >= 1) {
  //   arr.push(temp % 10);
  //   temp = Math.floor(temp/10);
  // }
  //
  // while (arr[arr.length - 1] === 0) {
  //   arr.pop();
  // }
  //
  // let result = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   result += (arr[i] * Math.pow(10, arr.length-1-i));
  // }
  //
  // return n < 0 ? -result : result;
  if (n < 10 && n > -10) { return n }
  let temp = n < 0 ? -n : n;
  let arr = n.toString().split("");
  temp = parseInt(arr.reverse().join(""));
  return n < 0 ? -temp : temp;
}

module.exports = reverseInt;
