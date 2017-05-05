_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('returns empty array when given empty array', () => {
    const arr = [];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([]);
  });

  it('returns empty array when given empty array', () => {
    const arr = ['hey', 'this', 'is', 'a', 'fun','string'];
    const concatString = _.map(arr, (el) => el + el);
    expect(concatString).toEqual(['heyhey', 'thisthis', 'isis', 'aa', 'funfun','stringstring']);
  });
});