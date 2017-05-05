const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an empty space if property is missing when given an array of animal objects', () => {
    const animals = [
      { name: 'Spotty', age: 1},
      { name: 'Scooby', species: 'dog', age: 3},
      { name: 'Nibbler', species: 'niblonian', age: 5}
    ];
    const result = _.pluck(animals, 'species');
    expect(result).toEqual([, 'dog', 'niblonian']);
  });

  it('returns an empty array of same length if key is missing for all objects', () => {
    const animals = [
      { name: 'Spotty', species: 'dog', age: 1},
      { name: 'Scooby', species: 'dog', age: 3},
      { name: 'Nibbler', species: 'niblonian', age: 5}
    ];
    const result = _.pluck(animals, 'breed');
    expect(result).toEqual([ , , ,]);
    expect(result.length).toEqual(animals.length);
  });
});