// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let result, max = 0, freq = {};
  for(const char of str) {
    freq[char] = freq[char]++ || 1;
  }

  for (const key in freq) {
    if (freq[key] > max) {
      max = freq[key];
      result = key;
    }
  }
  return result;
}

module.exports = maxChar;
