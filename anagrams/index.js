// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let chars = {};
  for(const charA of stringA) {
    chars[charA] ? chars[charA]++ : chars[charA] = 1;
  }

  for(const charB of stringB) {
    chars[charB] ? chars[charB]-- : chars[charB] = 1;
  }

  for(const char in chars) {
    if (chars[char] !== 0) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
