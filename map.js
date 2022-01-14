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

const map = function(array, callback) {
  let results = [];
  
  for (let item of array) {
    // console.log("item BEFORE: "+ item);    // + or , both are same for console.log
    // console.log("item AFTER: ", callback(item));
    // console.log("---");
    results.push(callback(item));
  }
  return results;
}

// const words = ["ground", "control", "to", "major", "tom"];
// console.log(map(words, (word) => { return word[0]; }));

assertArraysEqual(map(["ground", "control", "to"], word => word[0]), ["g", "c", "t"]);
assertArraysEqual(map(["major", "hello", "tom"], word => word[0]), ["m", "h", "t"]);