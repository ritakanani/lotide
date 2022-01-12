// //     TEST/ASSERTION FUNCTIONS      // //
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

// //       ACTUAL FUNCTION     // //

function middle(array) { 
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    return [array[(array.length - 1) / 2]];       // output array[1] if length is 3
  } else if (array.length % 2 === 0) {            
    return [array[(array.length - 2) / 2], array[array.length / 2]];
  }
}

// middle([1]); // => []
// middle([1, 2]); // => []
// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArraysEqual(eqArrays(middle([1]), []), true);
assertArraysEqual(eqArrays(middle([1, 2]), []), true);
assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
