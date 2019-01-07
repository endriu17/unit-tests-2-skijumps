const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints.js');

describe('calculateTotalPoints (with gate and wind factor)', () => {
  describe('Normal hill total', () => {
    it('should return 120', () => {
        const actual = calculateTotalPoints(106, 'normal', 98, [18.5, 19, 18.5, 18.5, 18.5], 6.4, -12);

        const expected = 120;

        assert.equal(actual, expected);
    });

    it('should return 108', () => {
        const actual = calculateTotalPoints(109, 'normal', 98, [17, 16.5, 18.5, 17.5, 18.5], 0, -17.8);

        const expected = 108;

        assert.equal(actual, expected);
    });

    it('should return 107', () => {
        const actual = calculateTotalPoints(103, 'normal', 98, [17.5, 17.5, 18.5, 18.5, 18.5], 0, -14.2);

        const expected = 107;

        assert.equal(actual, expected);
    });
  });

  describe('Big hill total', () => {
    it('should return 123', () => {
        const actual = calculateTotalPoints(128, 'big', 120, [18.5, 18, 18, 17.5, 18], 0, -5.8)

        const expected = 123;

        assert.equal(actual, expected);
    });

    it('should return 116', () => {
        const actual = calculateTotalPoints(124, 'big', 120, [17.5, 17, 17.5, 17.5, 17.5], 0, -4.3)

        const expected = 116;

        assert.equal(actual, expected);
    });

    it('should return 107', () => {
        const actual = calculateTotalPoints(119.5, 'big', 120, [17.5, 17.5, 17, 17.5, 17.5], 0, -5.0)

        const expected = 107;

        assert.equal(actual, expected);
    })
  });
  describe('Mammoth hill total', () => {
    it('should return 222', () => {
        const actual = calculateTotalPoints(223, 'mammoth', 200, [17.5, 18.5, 18, 18.5, 18.5], 8.7, -7.6);

        const expected = 222;

        assert.equal(actual, expected);
    });

    it('should return 212', () => {
        const actual = calculateTotalPoints(224.5, 'mammoth', 200, [17.5, 18, 18, 18, 18.5], 0, -11.2);

        const expected = 212;

        assert.equal(actual, expected);
    });

    it('should return 185', () => {
        const actual = calculateTotalPoints(208.5, 'mammoth', 200, [17.5, 17.5, 17.5, 17.5, 17], 0, -5.0);

        const expected = 185;

        assert.equal(actual, expected);
    });
  });
});