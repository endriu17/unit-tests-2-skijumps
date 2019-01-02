const calculateStylePoints = (styleNotes) => {
    
    if ( styleNotes.length == 5 ){
      const add = (a, b) => a + b;
      var sum = styleNotes.reduce(add, 0);

      return Math.round(((sum - Math.max(...styleNotes) - Math.min(...styleNotes))/0.5)*0.5);
    } else {
      return 'Five judges must give their notes...'
    }
  };
  console.log(calculateStylePoints([17.5, 17.5, 17.5, 17.5, 17]));
  module.exports = calculateStylePoints;