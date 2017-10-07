// document.getElementById("f_name").value= "Jack";
// document.getElementById("l_name").value= "Jill";
// document.getElementById("user_id").value= "1";
// document.getElementById("email").value= "jack@jill.com";
// document.getElementById("phone").value= "0123456789";


document.getElementById("f_name").disabled = true;
document.getElementById("l_name").disabled = true;
document.getElementById("user_id").disabled = true;
document.getElementById("email").disabled = true;
document.getElementById("phone").disabled = true;
document.getElementById("currentPwd").style.display = "none";
document.getElementById("pwd").style.display = "none";
document.getElementById("confirmPwd").style.display = "none";

document.getElementById("currentPwdLabel").style.display = "none";
document.getElementById("pwdLabel").style.display = "none";
document.getElementById("confirmPwdLabel").style.display = "none";


function CanEdit(){
    document.getElementById("Edit").style.display = "none";
    document.getElementById("Update").style.display = "block";
    document.getElementById("Cancel").style.display = "block";
    document.getElementById("f_name").disabled = false;
    document.getElementById("l_name").disabled = false;
    document.getElementById("phone").disabled = false;
    document.getElementById("currentPwd").style.display = "block";
    document.getElementById("pwd").style.display = "block";
    document.getElementById("confirmPwd").style.display = "block";

    document.getElementById("currentPwdLabel").style.display = "block";
    document.getElementById("pwdLabel").style.display = "block";
    document.getElementById("confirmPwdLabel").style.display = "block";
    
}

function CancelEdit(){
    document.getElementById("Update").style.display = "none";
    document.getElementById("Cancel").style.display = "none";
    document.getElementById("Edit").style.display = "block";
    document.getElementById("f_name").disabled = true;
    document.getElementById("l_name").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("phone").disabled = true;
    document.getElementById("currentPwd").style.display = "none";
    document.getElementById("pwd").style.display = "none";
    document.getElementById("confirmPwd").style.display = "none";

    document.getElementById("currentPwdLabel").style.display = "none";
    document.getElementById("pwdLabel").style.display = "none";
    document.getElementById("confirmPwdLabel").style.display = "none";    
    
}

function UpdateEdit(){
}
