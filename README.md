# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @interactivejavascript/lotide`

**Require it:**

`const _ = require('@interactivejavascript/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: 
  * An array with only one element should still yield that one element as its head.
  * An empty array should yield undefined as its head.
* `function2(tail)`: 
  * If words length start from 1 index gives tail of array.
  * If words length 0 or 1 return the words array with if statement (words.length < 2).
* `function3(middle)`: 
  * For arrays with one or two elements, there is no middle. Return an empty array.
  * For arrays with one or two elements, there is no middle. Return an empty array.
  * For arrays with an even number of elements, an array containing the two elements in the middle should be returned.
* `function4(assertEqual)`:
  * Compare to primitive datatype.
* `function5(eqArray)`: 
  * compare two arrays for a perfect match.
* `function6(assertArraysEqual)`: 
  * Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.