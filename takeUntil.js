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
// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// //       takeUntill function       // //

// The function will return a "slice of the array with elements taken from the beginning." 
// It should keep going until the callback/predicate returns a truthy value

const takeUntil = function(array, callback) {
  let results = [];
  for (let value of array) {
    // Does your takeUntil function need to loop through the entire array once the callback returns a truthy value? 
    // If not, how can we make it stop?
    if(callback(value)) {
      return results;         
    }
    results.push(value);
  }
  return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

assertArraysEqual([1, 2, 5, 7, 2], results1);