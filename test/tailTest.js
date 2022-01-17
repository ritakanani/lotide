const assertEqual = require('../assertEqual');
const tail = require("../tail");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// ALERT : Our assertEqual function is too simple to compare array values. JavaScript doesn't allow the use of === or == to compare two arrays. assertEqual is for primitive data type.
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!