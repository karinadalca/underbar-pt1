const _ = require('../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.filter(nums, num => num % 2 === 1)).toEqual([5, 7, 11]);
  });

  it('filters an object to only numeric values', () => {
    const characterAttributes = {
      name: 'Thokul Mongothsbeard',
      honorific: 'Lord Thokul Mongothsbeard the Arcane',
      race: 'human',
      class: 'druid',
      strength: 4,
      constitution: 7,
      dexterity: 10,
      intelligence: 16,
      wisdom: 5,
      charisma: 4
    };

    const abilityScores = _.filter(characterAttributes, (value) => !isNaN(value));
    expect(abilityScores).toEqual([4, 7, 10, 16, 5, 4]);
  });

  it('filters an array of animal to only dogs', () => {
    const animals = [
      { name: 'Spotty', species: 'dog', age: 1},
      { name: 'Scooby', species: 'dog', age: 3},
      { name: 'Nibbler', species: 'niblonian', age: 5}
    ];
    expect(_.filter(animals, animal => animal.species === 'dog')).toEqual([{ name: 'Spotty', species: 'dog', age: 1},
      { name: 'Scooby', species: 'dog', age: 3}]);
  });

  it('filters an array of animal to empty array if cats aren not in the array', () => {
    const animals = [
      { name: 'Spotty', species: 'dog', age: 1},
      { name: 'Scooby', species: 'dog', age: 3},
      { name: 'Nibbler', species: 'niblonian', age: 5}
    ];
    expect(_.filter(animals, animal => animal.species === 'cat')).toEqual([]);
  });
});