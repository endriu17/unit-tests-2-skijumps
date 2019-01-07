const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints.js');

describe('calculateDistancePoints', () => {
  describe('Normal hill distance', () => {
    it('should return 66.5 points', () => {
        const actual = calculateDistancePoints(103.5, 'normal', 98);

        const expected = 66.5;

        assert.equal(actual, expected);
    });

    it('should return 63', () => {
        const actual = calculateDistancePoints(100.5, 'normal', 98);

        const expected = 63;

        assert.equal(actual, expected);
    });

    it('should return 70', () => {
        const actual = calculateDistancePoints(106.5, 'normal', 98);

        const expected = 70;

        assert.equal(actual, expected);
    });
  });

  describe('Big hill distance', () => {
    it('should return 85', () => {
        const actual = calculateDistancePoints(134, 'big', 120);

        const expected = 85;

        assert.equal(actual, expected);
    });

    it('should return 76', () => {
        const actual = calculateDistancePoints(129, 'big', 120);

        const expected = 76;

        assert.equal(actual, expected);
    });

    it('should return 69', () => {
        const actual = calculateDistancePoints(125, 'big', 120);

        const expected = 69;

        assert.equal(actual, expected);
    });
  });

  describe('Mammoth hill distance', () => {
    it('should return 140', () => {
        const actual = calculateDistancePoints(220, 'mammoth', 210);

        const expected = 140;

        assert.equal(actual, expected);
    });

    it('should return 170', () => {
        const actual = calculateDistancePoints(225, 'mammoth', 200);

        const expected = 170;

        assert.equal(actual, expected);
    });

    it('should return 144', () => {
        const actual = calculateDistancePoints(212, 'mammoth', 200);

        const expected = 144;

        assert.equal(actual, expected);
    });
  });
});