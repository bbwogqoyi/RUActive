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
