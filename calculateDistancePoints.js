const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let totalDistancePoints;
    switch (true){
      case ( hillSize == 'mammoth'):
        return totalDistancePoints = 120 + ( 2 * (Math.round((distance - kPoint) / 0.5) * 0.5));
      case ( hillSize == 'big'):
        return totalDistancePoints = 60 + (Math.round((1.8*(distance - kPoint)) / 0.5) * 0.5);
      case ( hillSize == 'normal'):
        return totalDistancePoints = 60 + (Math.round((1.2*(distance - kPoint)) / 0.5) * 0.5);
      default:
        return 'We only have three types of hills...'
    }
  };
  module.exports = calculateDistancePoints;
  
  