const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if any array of animal objects iare of species niblonian and we test for species', () => {
    const animals = [
    { name: 'Spotty', species: 'dog', age: 1},
    { name: 'Scooby', species: 'dog', age: 3},
    { name: 'Nibbler', species: 'niblonian', age: 5}
  ];
    expect(_.some(animals, animal => animal.species === 'niblonian')).toBe(true);
  });

  it('returns false if any array of animal objects are not of species cat and we test for species', () => {
    const animals = [
    { name: 'Spotty', species: 'dog', age: 1},
    { name: 'Scooby', species: 'dog', age: 3},
    { name: 'Nibbler', species: 'niblonian', age: 5}
  ];
    expect(_.some(animals, animal => animal.species === 'cat')).toBe(false);
  });

  it('returns false if passed an empty array and check for index property', () => {
    const arr = [];
    expect(_.some(arr, num => num.index)).toBe(false);
  });
});