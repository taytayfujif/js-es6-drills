var expect = require('chai').expect;
var func = require('../exercises.js');

describe('JS fundamental Drills', function() {
  it('#stringCount is a function that takes in a string and returns the amount of letters in the string.', function() {
    var count = func.stringCount('abc');
    expect(count).to.deep.equal(3);
  });
  it('#arrayLength is a function that takes in an array and returns the length of the array. ', function() {
    expect(func.arrayLength([1, 2, 3])).to.deep.equal(3);
  });
  it('#countAll is a function that takes in an array of numbers and returns the sum of all numbers in the array.', function() {
    expect(func.countAll([1, 2, 3])).to.deep.equal(6);
  });
  it('#countStrings is a function that takes in an array of strings and returns an array containing each of the lenghts of the strings.', function() {
    expect(func.countStrings(['a', 'ab', 'abc'])).to.deep.equal([1, 2, 3]);
  });
  it('#countAllStrings is a function that takes in an array of strings and returns the sum of the length of all characters.', function() {
    expect(func.countAllStrings(['a', 'ab', 'abc'])).to.deep.equal(6);
  });
  it('#createZeroFilledArray is a function that takes in a number and returns an array with the length of that number filled with zeroes.', function() {
    expect(func.createZeroFilledArray(2)).to.deep.equal([0, 0]);
  });
  it('#poppedArray is a function that takes in a an array of numbers and returns a new array without the last element of the array.', function() {
    expect(func.poppedArray([1, 2, 3])).to.deep.equal([1, 2]);
  });
  it('#splitString is a function that takes in a string and returns an array with each characater as a value of the array.', function() {
    expect(func.splitString('abc')).to.deep.equal(['a', 'b', 'c']);
  });
  it('#lengthOfLast is a function that takes in an array of strings and returns the length of the last string in the array.', function() {
    expect(func.lengthOfLast(['a', 'ab', 'abc'])).to.deep.equal(3);
  });
  it('#sumBelowTen is a function that takes in an array of numbers and returns the sum of all numbers below 10.', function() {
    expect(func.sumBelowTen([1, 2, 11])).to.deep.equal(3);
  });
  it('#moreThanTenLetters is a function that takes in an array of strings and returns the amount of elements that have greater than 10 letters. ', function() {
    expect(
      func.moreThanTenLetters(['abc', 'ab', 'lollerskatesrofl'])
    ).to.deep.equal(1);
  });
  it('#multiplyAll is a function that takes in an array of numbers and returns the product of all elements.', function() {
    expect(func.multiplyAll([1, 2, 3])).to.deep.equal(6);
  });
  it('#sumAllPositive is a function that takes in an array of numbers and returns the sum of all non-negative numbers. ', function() {
    expect(func.sumAllPositive([-1, 2, 3])).to.deep.equal(5);
  });
  it('#stringCountBelowThree is a function that takes in an array of strings and returns the amount of strings that have 3 characters or less. ', function() {
    expect(func.stringCountBelowThree(['a', 'asd', 'blargggg!'])).to.deep.equal(
      2
    );
  });
  it('#doubleArray is a function that takes in an array of numbers and returns a new array with each number doubled.', function() {
    var doubledArray = func.doubleArray([1, 2, 3]);
    expect(doubledArray).to.deep.equal([2, 4, 6]);
  });
  it('#countObjects is a function that takes in an array of objects and returns the amount of objects in the array. ', function() {
    expect(func.countObjects([{}, {}, {}])).to.deep.equal(3);
  });
});
