const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
const countLetters = function(string) {

  // first declare variable with empty object
  let results = {};

  for (let letter of string) {            // looping the string with for..of loops
    if (letter !== " ") {
      if (results[letter]) {               // each letter(key) of string put in results
        results[letter] += 1;              // increament the letter with adding 1
      } else {
        results[letter] = 1;               // else keep letter = 1
      }
    }
  } 
  return results;                        // value store in results
};

console.log(countLetters("LHL"));
// print { L: 2, H: 1 }

console.log(countLetters("lighthouse in the house"));
// print { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }