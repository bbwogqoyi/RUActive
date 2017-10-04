'use strict'

fixtures = {
  positionToPoints(position){
    var points = 0;
    position = parseInt(position);
    switch(position){
      case 1:
        points += 8; break;
      case 2:
        points += 6; break;
      case 3:
        points += 4; break;
      case 4:
        points += 2; break;
    }
    return points;
  },

}

module.exports = fixtures;

