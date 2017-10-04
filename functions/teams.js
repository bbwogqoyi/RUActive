'use strict'
expertise = require('../models/expertiseLookUp');

teams = {
  /**There is a maximum of 2 first team players allowed per team 
   * to participate at the same time in all competitions. */
  'numFirstPlayer': 0,
  validFirstTeamPlayers(team){
    team.forEach(function(player) {
      if(player.expertise === expertise[2].expertise)
       teams.numFirstPlayer += 1;
    });
    return teams.numFirstPlayer <= 2;
  }

}

module.exports = teams;