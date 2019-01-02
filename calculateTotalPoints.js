const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  return Math.round(((distancePoints + stylePoints + windFactor + gateFactor)/0.5)*0.5);
}

console.log(calculateTotalPoints(208.5, 'mammoth', 200, [17.5, 17.5, 17.5, 17.5, 17], 0, -5.0));

module.exports = calculateTotalPoints;
