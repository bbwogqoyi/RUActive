'use strict';

function userRoleLookUp(num){
  var role = 'unknown';
  var position = parseInt(num);
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

function userRoleLookUp_Rev(num){
  var role = 'unknown';
  switch(num){
    case 'Sports Admin':
      role = 1 ; break;
    case 'Sports Code':
      role = 2 ; break;
    case 'Warden' :
      role = 3; break;
    case 'Sport Rep':
      role = 4; break;
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

function issueSessionToken(){
  var caspio_form = document.getElementById('caspioform');
  var caspioIds = ['EditRecordStaff_Student_ID','EditRecordFirst_Name', 'EditRecordLast_Name', 'EditRecordEmail', 'EditRecordPhone'];

  var sessionUser = {};
  for(var i=0; i<caspioIds.length; i+=1){
    var elem = caspioIds[i];
    console.log(elem);
    sessionUser[elem] = document.getElementById(elem).value;
  }

  var role = document.getElementById('EditRecordUser_Role').value;
  sessionUser['EditRecordUser_Role'] = userRoleLookUp(role);

  // Save data to sessionStorage
  sessionStorage.setItem('user', JSON.stringify(sessionUser));
}

function getSessionUser(){
  return JSON.parse( sessionStorage.getItem('user') );
}

function IsAuthenticated(){
  // Get saved data from sessionStorage
  var user = sessionStorage.getItem('user');
  return !isEmpty(user);
}

function login(){
  var username = document.getElementById('lg_username').value;
  var password = document.getElementById('lg_password').value;

  if( !isEmpty(username) && !isEmpty(password) ){
    document.getElementById('xip_Staff_Student_ID').value = username;
    document.getElementById('xip_Password').value = password;
    document.getElementById('caspioform').submit();
  } else {
    if(username == "" && password != "" ) alert("username is empty");
    if(password == "" && username != "") alert("password is empty");
    if(username == "" && password =="") alert("username and password is empty");
  }
}

function logOut(){
  // Remove saved data from sessionStorage
  sessionStorage.removeItem('user');
  // Remove all saved data from sessionStorage
  sessionStorage.clear();
  // delete the caspio cookie
  location.href = "https://c0abd423.caspio.com/folderlogout";
  setTimeout(function(){
    location.href = "index.html";
  }, 200);
}

function isEmpty(identifier){
  return (identifier === null || identifier === "")
}
