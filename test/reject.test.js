const _ = require('../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4, 6, 8, 10]);
  });

  it('rejects null values from an object', () => {
    const order = {
      entree: 'burger',
      side: null,
      condiment: 'ketchup',
      drink: null,
      dessert: 'cookie'
    };

    const orderItems = _.reject(order, (value) => value === null);
    expect(orderItems).toEqual(['burger', 'ketchup', 'cookie']);
  });

  it('rejects dogs from an array of animal objects', () => {
    const animals = [
      { name: 'Spotty', species: 'dog', age: 1},
      { name: 'Scooby', species: 'dog', age: 3},
      { name: 'Nibbler', species: 'niblonian', age: 5}
    ];
    expect(_.reject(animals, animal => animal.species === 'dog')).toEqual([{ name: 'Nibbler', species: 'niblonian', age: 5}]);
  });

  it('returns entire array if you reject cats from an array of animal objects that doesn not have cats', () => {
    const animals = [
      { name: 'Spotty', species: 'dog', age: 1},
      { name: 'Scooby', species: 'dog', age: 3},
      { name: 'Nibbler', species: 'niblonian', age: 5}
    ];
    expect(_.reject(animals, animal => animal.species === 'cat')).toEqual([
      { name: 'Spotty', species: 'dog', age: 1},
      { name: 'Scooby', species: 'dog', age: 3},
      { name: 'Nibbler', species: 'niblonian', age: 5}
    ]);
  });
});