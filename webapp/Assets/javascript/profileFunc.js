


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

var viewTools = function(){
    var modal;

    console.log("In");
    var close = document.getElementsByClassName("close")[0];
    var Info_Open;
    var Info_ID;
    var path = window.location.pathname;
    var page = path.split("/").pop();
    
    modal = document.getElementsByClassName("Show")[0];
    console.log(modal);
  
   


    //Opening Trainer Info
    $('#Tools').click(function(){
        //var trainerid = $(this).attr("id").split("_");
        Opening('profile_form');
        
    });

    //Opening Info 
    function Opening(openingID){
        Info_ID = openingID;
        Info_Open = '#'+Info_ID;
        $(Info_Open).css("display","block");
        modal.style.display = "block";

    }

    //Closing Info


   //closing modal
   function closing(){
        modal.style.display = "none";
        
        $(Info_Open).css("display","none");
    }


    $('.close').click(function(){
         closing();
    });

    $(window).click(function(event){
         if(event.target == modal){
             closing();
         }
    });
}

$(document).ready(viewTools);