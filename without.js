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

const without = function (source, itemsToRemove) {
  
  let finalResult = [];

  for (let i = 0; i < source.length; i++) {
    // items in source are not equal to items in itemsToRemove, push in source  
    /* for example const array1 = [1, 2, 3];

    console.log(array1.includes(2)); 
    // expected output: true
    */
    if (!itemsToRemove.includes(source[i])) {
      finalResult.push(source[i]);
    }
  } return finalResult;
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]