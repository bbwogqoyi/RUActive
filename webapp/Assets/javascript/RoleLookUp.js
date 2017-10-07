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
