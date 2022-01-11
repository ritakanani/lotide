const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(words) {
  let tail = [];

  // if words length 0 or 1 return the words array with if statement (words.length < 2)
  if (words.length < 2) {
    return words;
  }

  // if words length start from 1 index gives tail of array
  for (let i = 1; i < words.length; i++) {
    tail.push(words[i]);
  }
  return tail;
};
 

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!