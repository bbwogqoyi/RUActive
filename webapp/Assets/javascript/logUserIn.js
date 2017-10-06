function login(){

  var username = document.getElementById('lg_username').value;
  var password = document.getElementById('lg_password').value;
  
  if(username !== null && username !== "" && password !== null && password !== ""){

  if(document.getElementById('xip_RUActive_Users_Staff_Student_ID')==null)
  moveToNextPage();
 else{
  document.getElementById('xip_RUActive_Users_Staff_Student_ID').value = username;
  document.getElementById('xip_RUActive_Users_Password').value = password
  document.getElementById('caspioform').submit(); 
 }
  
  
  }
  else{
	  if(username == "" && password != "" ) alert("username is empty");
	  if(password == "" && username != "") alert("password is empty");
	  if(username == "" && password =="") alert("username and password is empty");
  }

}

function moveToNextPage(){
  location.href = "profile.html"
}
