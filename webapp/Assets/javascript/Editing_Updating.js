var modalShow = function(){
    //Computation VIDEO and TRAINER page

    //Function for getting the right information to pop up.
    var modal;
    var close = document.getElementsByClassName("close")[0];
    var Info_Open;
    var Info_ID;
    var path = window.location.pathname;
    var page = path.split("/").pop();
    
    modal = document.getElementsByClassName("Show")[0];
  
    //Opening Trainer Info
    $('#adding').click(function(){
        //var trainerid = $(this).attr("id").split("_");
        Opening('p_form');
        
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
         clearing();
    });

    $(window).click(function(event){
         if(event.target == modal){
             closing();
             clearing();
         }
    });
    $('#cancel_add').click(function(){
        closing();
        clearing();
    })

    function clearing(){
        document.getElementsByClassName("add_forms")[0].reset();
    }
}


var CreateTeam = function(){
    var l_player = 0;
    // if(document.getElementsByClassName("player_team").length <= 0){
    //     document.getElementsByClassName("combo")[0].style.height = "700px"; 
    //     console.log("IN");
    // }
    // else{
    //     document.getElementsByClassName("combo")[0].style.height = "auto"; 
    //     console.log("OUT");
    // }
    function AddPlayer(added_fragment){
        var players = document.getElementsByClassName("player_team");
        l_player = players.length;
        if(l_player >= 1){
            var pos = "p_"+l_player;
            $("#"+pos).after('<div class="player_team" id="p_'+(l_player)+'"><div class="details" id="d_'+(l_player)+'"><p class="p_t" id="info_'+(l_player)+'">'+added_fragment+'</p></div><button onclick="removePlayer('+(l_player)+')" type="button" class="btn btn-primary btn-sm Cancel" id="btn_'+(l_player+1)+'"><i class="fa fa-times" aria-hidden="true"></i> Remove</button></div>');

            l_player = document.getElementsByClassName("player_team").length;
            pos = "p_"+l_player;

            if(l_player%2 == 0){
                document.getElementById(pos).style.background = "grey";
            }
            else{
                document.getElementById(pos).style.background = "#333";
            }
        }
        else{
            var newPlayer = document.getElementsByClassName("added player")[0];
            newPlayer.innerHTML = '<div class="player_team" id="p_1"><div class="details" id="d_1"><p class="p_t" id="info_1">'+added_fragment+'</p></div><button onclick="removePlayer('+(l_player+1)+')" type="button" class="btn btn-primary btn-sm Cancel" id="btn_1"><i class="fa fa-times" aria-hidden="true"></i> Remove</button></div>';
            document.getElementById("p_1").style.background = "#333";
        }
    }

    $('#add_player').click(function(){
        var f_name = document.getElementById("pf_name").value;
        var l_name = document.getElementById("pl_name").value;
        var student_id = document.getElementById("student_id").value;
        var gender = document.getElementById("gender").value;
        var expr_id = document.getElementById("exp_id").value;

        var obj = {
          "student_id": student_id,
          "first_name": f_name,
          "last_name": l_name,
          "gender": gender,
          "expertise": expr_id
        }

        var post = f_name + " " + l_name;
        AddPlayer(post);
        sessionStorage.setItem("player"+l_player, obj);
    });

    $('button').click(function(){
        var p_remove = $(this).attr("id").split("_");
        var pos = p_remove[1];
        if(p_remove[0] == "btn") $("#p_"+pos).remove();
    });
}

$(document).ready(modalShow);
$(document).ready(CreateTeam);
