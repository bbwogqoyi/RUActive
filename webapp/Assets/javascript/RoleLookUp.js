'use strict'

function userRoleLookUp(num){
  var role = 'unknown';
  position = parseInt(num);
  switch(position){
    case 1:
      role = 'Sport Admin '; break;
    case 2:
      role = 'Sport Code'; break;
    case 3:
      role = 'Warden'; break;
    case 4:
      role = 'Sport Rep'; break;
  }
  return role;
}


function expertiseLookup(exp){
  var role = -1;
  //position = parseInt(num);
  switch(exp){
    case "Novice Player":
      role = 1; break;
    case "Competent Playe":
      role  = 2; break;
    case "RU First Team Player":
      role = 3; break;
    case "Provincial/National Player":
      role = 4; break;
  }
  return role;

}

function eventTypeLookup(exp){
  var role = -1;
  //position = parseInt(num);
  switch(exp){
    case "Social":
      role = 1; break;
    case "Competitive":
      role  = 2; break;
  }
  return role;
}

function getSessionUser(){
  var caspio_form = document.getElementById('caspioform');
  var caspioIds = ['EditRecordFirst_Name', 'EditRecordLast_Name', 'EditRecordEmail', 'EditRecordPhone'];

  var sessionUser = {};
  for (var elem in caspioIds) {
    sessionUser[elem] = document.getElementById(elem).value;  
  }
  
  var role = document.getElementById('EditRecordUser_Role').value;
  sessionUser['EditRecordUser_Role'] = userRoleLookUp(role);

  console.log(JSON.stringify(sessionUser));
  document.getElementById('currentUserDiv').remove();

}
