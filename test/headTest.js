// const assertEqual = require('../assertEqual');
// Chai is an assertion library. It gives us assertion functions so that we no longer have to use our assertEqual and other assertion functions that we implemented previously. Chai assertion functions are deliberately designed to play nice with testing frameworks like Mocha.

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "", ""]), "Hello");
// assertEqual(head([1]), 1);
// assertEqual(head([]), undefined);


const assert = require("chai").assert;
const head = require("../head");

describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); 
  });

  it("returns 'undefined' for []", () => {
    assert.strictEqual(head([]), undefined); 
  });

});