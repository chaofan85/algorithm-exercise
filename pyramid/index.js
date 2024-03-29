// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let arr = new Array(n*2 - 1);
  arr.fill(" ");

  const mid = Math.floor((n*2-1)/2);

  arr[mid] = "#";

  for(let i = 0; i < n; i++) {
    arr[mid - i] = "#";
    arr[mid + i] = "#";
    console.log(arr.join(""));
  }
}

module.exports = pyramid;
