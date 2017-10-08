function login(){

  var username = document.getElementById('lg_username').value;
  var password = document.getElementById('lg_password').value;

  console.log(username);
  console.log(password);

  if(username !== null && username !== "" && password !== null && password !== ""){

  if(document.getElementById('xip_Staff_Student_ID')==null)
  moveToNextPage();

 else{
  document.getElementById('xip_Staff_Student_ID').value = username;
  document.getElementById('xip_Password').value = password;
  document.getElementById('caspioform').submit();
  moveToNextPage();

 }


  }
  else{
	  if(username == "" && password != "" ) alert("username is empty");
	  if(password == "" && username != "") alert("password is empty");
	  if(username == "" && password =="") alert("username and password is empty");
  }

}

function moveToNextPage(){
  setTimeout(function(){

  location.href = "event.html";
  }, 200);
}

function logOut(){
  location.href = "https://c0abd423.caspio.com/folderlogout";
  setTimeout(function(){
    location.href = "event.html";
  }, 200);
}
