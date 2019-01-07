const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints.js');

describe('calculateStylePoints', () => {
  it('should return 55', () => {
    const actual = calculateStylePoints([18, 18.5, 18, 18, 19]);

    const expected = 55;

    assert.equal(actual, expected);
  });

  it('should return 54', () => {
    const actual = calculateStylePoints([18.5, 19.5, 17.5, 16.5, 18.0]);

    const expected = 54;

    assert.equal(actual, expected);
  });

  it('should return 53', () => {
    const actual = calculateStylePoints([17.5, 17.5, 17, 17.5, 17.5]);

    const expected = 53;

    assert.equal(actual, expected);
  });

  it('should return 51', () => {
    const actual = calculateStylePoints([17, 17, 17.5, 17, 17]);

    const expected = 51;

    assert.equal(actual, expected);
  });

  it('should return 48', () => {
    const actual = calculateStylePoints([15.5, 15.5, 17, 16.5, 16]);

    const expected = 48;

    assert.equal(actual, expected);
  });

  it('should return 47', () => {
    const actual = calculateStylePoints([15.5, 16.5, 15.5, 15.5, 16]);

    const expected = 47;

    assert.equal(actual, expected);
  });
})