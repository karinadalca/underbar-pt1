const _ = require('../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });
  });

  describe('processing an array of strings', () => {
    it('will return true if no callback is supplied', () => {
      const arr = ['foo', 'bar', 'baz', 'hat'];
      expect(_.every(arr)).toBe(true);
    });

    it('returns true if all strings have length of three and we test for length', () => {
      const arr = ['foo', 'bar', 'baz', 'hat'];
      expect(_.every(arr, str => str.length === 3)).toBe(true);
    });

    it('returns false if all strings do not have length of three and we test for length', () => {
      const arr = ['fo', 'bar', 'baz', 'hat'];
      expect(_.every(arr, str => str.length === 3)).toBe(false);
    });
  });

  describe('processing an array of objects', () => {
    it('will return true if no callback is supplied', () => {
      const animals = [
      { name: 'Spotty', species: 'dog', age: 1},
      { name: 'Scooby', species: 'dog', age: 3},
      { name: 'Nibbler', species: 'niblonian', age: 5}
    ];
      expect(_.every(animals)).toBe(true);
    });

    it('returns true if all objects are of species dog and we test for species', () => {
      const animals = [
      { name: 'Spotty', species: 'dog', age: 1},
      { name: 'Scooby', species: 'dog', age: 3},
      { name: 'Nibbler', species: 'dog', age: 5}
    ];
      expect(_.every(animals, animal => animal.species === 'dog')).toBe(true);
    });

    it('returns false if all objects are not of species dog and we test for species', () => {
      const animals = [
      { name: 'Spotty', species: 'dog', age: 1},
      { name: 'Scooby', species: 'dog', age: 3},
      { name: 'Nibbler', species: 'niblonian', age: 5}
    ];
      expect(_.every(animals, animal => animal.species === 'dog')).toBe(false);
    });
  }); 
});