function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
      
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = function(string) {
  let results = {};

  for (let i = 0; i < string.length; i++) {
    // A string representing the character at the specified index
    let char = string.charAt(i);    
    
    if (string[i] !== " ") {
      if (results[char]) {
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }    
  }
  return results;
}

console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));

// assertArraysEqual to compare the 4 letters and their expected positions
assertArraysEqual(letterPositions("hello").e, [1]);