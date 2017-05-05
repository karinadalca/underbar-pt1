const _ = require('../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 4)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 7)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const ponies = {
      'pony1': 'Fluttershy',
      'pony2': 'Pinkie Pie',
      'pony3': 'Rainbow Dash',
      'pony4': 'Rarity'
    };
    expect(_.contains(ponies, 'Rarity')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const ponies = {
      'pony1': 'Fluttershy',
      'pony2': 'Pinkie Pie',
      'pony3': 'Rainbow Dash',
      'pony4': 'Rarity'
    };
    expect(_.contains(ponies, 'Applejack')).toBe(false);
  });

  it('returns false if given empty array', () => {
    const arr = [];
    expect(_.contains(arr, 'length')).toBe(false);
  });

  it('returns false if given an array of objects to search through, even if property is present', () => {
    const animals = [
      { name: 'Spotty', species: 'dog', age: 1},
      { name: 'Scooby', species: 'dog', age: 3},
      { name: 'Nibbler', species: 'niblonian', age: 5}
    ];
    expect(_.contains(animals, 'species')).toBe(false);
  });
});