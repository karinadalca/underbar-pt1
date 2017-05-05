const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups an array of strings', () => {
    const str = ['foo', 'bar', 'foo', 'baz', 'hat', 'bar'];
    expect(_.uniq(str)).toEqual(['foo', 'bar', 'baz', 'hat']);
  });

  it('de-dups an array of empty arrays', () => {
    const arr = [[],[],[],[],[]];
    expect(_.uniq(arr)).toEqual([[]]);
  });
});