var counter = 0;
var div_pos=[];


var modalShow = function(){

    //Function for getting the right information to pop up.
    var modal;
    var close = document.getElementsByClassName("close")[0];
    var Info_Open;
    var Info_ID;
    var path = window.location.pathname;
    var page = path.split("/").pop();

    modal = document.getElementsByClassName("Show")[0];
    function returnResult_1(){
        var re = stripCaspioReport(document.getElementById('results'));
        for (var i = 0; i < re.length; i++) {
          var template = `<tr>
          <td>${re[i]["event name"]}</td>
          <td>${re[i]["team id"]}</td>
          <td>${re[i]["team\'s residence"]}</td>
          <td>${re[i]['competition position']}</td>
          </tr>`
          document.getElementById('rankingTable_all').innerHTML += template;
 
        }
 
     }

    function seeEvent(ev_name) {
        var re = stripCaspioReport(document.getElementById('results'));
        // var ev_name = document.getElementById('id_event_name').value;
        console.log(ev_name);
        document.getElementById('rankingTable_all').innerHTML = "";
        var template = `<th>Event Name</th>
                        <th>Team Name</th>
                       <th>Residence</th>
                       <th>Position</th>`
        document.getElementById('rankingTable_all').innerHTML = template;
        if(ev_name === "") returnResult();
        for (var i = 0; i < re.length; i++) {
          //console.log(re[0]["team's residence"]);
          if(re[i]['event name'].toLowerCase() === ev_name.toLowerCase()){
          var template = `<tr>
          <td>${re[i]["event name"]}</td>
          <td>${re[i]["team id"]}</td>
          <td>${re[i]["team\'s residence"]}</td>
          <td>${re[i]['competition position']}</td>
          </tr>`
    
    
          document.getElementById('rankingTable_all').innerHTML += template;
        }
    
      }
    }

    $('#allEvents').click(function(){
        returnResult_1();
        Opening('ev_info');

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

function searchbyName() {
    var re = stripCaspioReport(document.getElementById('results'));
    var ev_name = document.getElementById('id_event_name').value;
    console.log(ev_name);
    document.getElementById('rankingTable_search').innerHTML = "";
    var template = `<th>Event Name</th>
                    <th>Team Name</th>
                   <th>Residence</th>
                   <th>Position</th>`
    document.getElementById('rankingTable_search').innerHTML = template;
    if(ev_name === "") returnResult();
    for (var i = 0; i < re.length; i++) {
      //console.log(re[0]["team's residence"]);
      if(re[i]['event name'].toLowerCase() === ev_name.toLowerCase()){
      var template = `<tr>
      <td>${re[i]["event name"]}</td>
      <td>${re[i]["team id"]}</td>
      <td>${re[i]["team\'s residence"]}</td>
      <td>${re[i]['competition position']}</td>
      </tr>`


      document.getElementById('rankingTable_search').innerHTML += template;
    }

  }
   document.getElementById('id_event_name').value =""
  var name = document.getElementById('id_event_name').value;
}



var setUp =function(){
  var re = stripCaspioReport(document.getElementById('results'));
  var pos = 1;
  var amount = 1;
  if(counter == re.length){
    counter = 0;
  }
  for (var i = 0; i < re.length; i++){
    // if(counter == re.length) counter = 1;
    if(counter%3 != 0 || counter == 0){
      var current = re[i]['event name'];
      div_pos[i] = current;
      var heading = `<h3>${re[i]['event name']}</h3>`;
      console.log(current);
      document.getElementById('e_name_'+pos).innerHTML = heading;
      for (var j = 0; j < re.length; j++){
        if(re[j]['event name'] == current){
          if(amount < 4){
            var template = `<tr>
                          <td class="pos">${re[j]['competition position']}</td>
                          <td class="t_name">${re[j]["team id"]}</td>
                          <td class="r_name">${re[j]["team\'s residence"]}</td>
                        </tr>`;
            document.getElementById('rankingTable_'+pos).innerHTML += template;
            continue;
          }
          else{ amount=1; break;}
        } 
      }
      document.getElementById('rankingTable_'+pos).innerHTML +=`<tr>
        <td colspan="3"><button type="button" class="btn btn-primary btn-lg Tool" id="seeAll_ev_`+pos+`">SEE ALL</button></td></tr>`;
      counter++;
      console.log(counter);
      console.log(pos);
      pos++;
    }
    else{ break;}
    }
}

function NExt(){
  var onNext = counter-1;
  counter++;
  var re = stripCaspioReport(document.getElementById('results'));
  var pos = 1;
  var amount = 1;
  if(counter-1 == re.length){
    console.log("INNN");
    counter = 0;
  }
  for (var i = onNext; i < re.length; i++){
    // if(counter == re.length) counter = 1;
    console.log(counter);
    console.log(pos);
    if(counter%3 != 0 || counter == 0){
      var current = re[i]['event name'];
      div_pos[i] = current;
      console.log(div_pos[i]);
      var heading = `<h3>${re[i]['event name']}</h3>`;
      console.log(current);
      document.getElementById('e_name_'+pos).innerHTML = heading;
      document.getElementById('rankingTable_'+pos).innerHTML = "";
      for (var j = 0; j < re.length; j++){
        if(re[j]['event name'] == current){
          if(amount < 4){
            var template = `<tr>
                          <td class="pos">${re[j]['competition position']}</td>
                          <td class="t_name">${re[j]["team id"]}</td>
                          <td class="r_name">${re[j]["team\'s residence"]}</td>
                        </tr>`;
            document.getElementById('rankingTable_'+pos).innerHTML += template;
            continue;
          }
          else{ amount=1; break;}
        } 
      }
      document.getElementById('rankingTable_'+pos).innerHTML +=`<tr>
        <td colspan="3"><button type="button" class="btn btn-primary btn-lg Tool" id="seeAll_ev_`+pos+`">SEE ALL</button></td></tr>`;
      counter++;
      pos++;
    }
    else{ break;}
  }
}

function PRev(){
  var onCurr = counter-1;
  var re = stripCaspioReport(document.getElementById('results'));
  var pos = 1;
  var amount = 1;
  if(counter == re.length){
    counter = 0;
  }
  for (var i = onNext; i < re.length; i--){
    // if(counter == re.length) counter = 1;
    console.log(counter);
    console.log(pos);
    if(counter%3 != 0 || counter == 0){
      var current = re[i]['event name'];
      div_pos[i] = current;
      console.log(div_pos[i]);
      var heading = `<h3>${re[i]['event name']}</h3>`;
      console.log(current);
      document.getElementById('e_name_'+pos).innerHTML = heading;
      for (var j = 0; j < re.length; j++){
        if(re[j]['event name'] == current){
          if(amount < 4){
            var template = `<tr>
                          <td class="pos">${re[j]['competition position']}</td>
                          <td class="t_name">${re[j]["team id"]}</td>
                          <td class="r_name">${re[j]["team\'s residence"]}</td>
                        </tr>`;
            document.getElementById('rankingTable_'+pos).innerHTML += template;
            continue;
          }
          else{ amount=1; break;}
        } 
      }
      document.getElementById('rankingTable_'+pos).innerHTML +=`<tr>
        <td colspan="3"><button type="button" class="btn btn-primary btn-lg Tool" id="seeAll_ev_`+pos+`">SEE ALL</button></td></tr>`;
      counter++;
      pos++;
    }
    else{ break;}
  }

}


// var CreateTeam = function(){
//     var l_player = 0;
//     // if(document.getElementsByClassName("player_team").length <= 0){
//     //     document.getElementsByClassName("combo")[0].style.height = "700px";
//     //     console.log("IN");
//     // }
//     // else{
//     //     document.getElementsByClassName("combo")[0].style.height = "auto";
//     //     console.log("OUT");
//     // }
//     function AddPlayer(added_fragment){
//         var players = document.getElementsByClassName("player_team");
//         l_player = players.length;
//         if(l_player >= 1){
//             var pos = "p_"+l_player;
//             $("#"+pos).after('<div class="player_team" id="p_'+(l_player)+'"><div class="details" id="d_'+(l_player)+'"><p class="p_t" id="info_'+(l_player)+'">'+added_fragment+'</p></div><button onclick="removePlayer('+(l_player)+')" type="button" class="btn btn-primary btn-sm Cancel" id="btn_'+(l_player+1)+'"><i class="fa fa-times" aria-hidden="true"></i> Remove</button></div>');

//             l_player = document.getElementsByClassName("player_team").length;
//             pos = "p_"+l_player;

//             if(l_player%2 == 0){
//                 document.getElementById(pos).style.background = "grey";
//             }
//             else{
//                 document.getElementById(pos).style.background = "#333";
//             }
//         }
//         else{
//             var newPlayer = document.getElementsByClassName("added player")[0];
//             newPlayer.innerHTML = '<div class="player_team" id="p_1"><div class="details" id="d_1"><p class="p_t" id="info_1">'+added_fragment+'</p></div><button onclick="removePlayer('+(l_player+1)+')" type="button" class="btn btn-primary btn-sm Cancel" id="btn_1"><i class="fa fa-times" aria-hidden="true"></i> Remove</button></div>';
//             document.getElementById("p_1").style.background = "#333";
//         }
//     }

//     $('#add_player').click(function(){
//         var f_name = document.getElementById("pf_name").value;
//         var l_name = document.getElementById("pl_name").value;
//         var student_id = document.getElementById("student_id").value;
//         var gender = document.getElementById("gender").value;
//         var expr_id = document.getElementById("exp_id").value;

//         var obj = {
//           "student_id": student_id,
//           "first_name": f_name,
//           "last_name": l_name,
//           "gender": gender,
//           "expertise": expr_id
//         }

//         var post = f_name + " " + l_name;
//         AddPlayer(post);
//         sessionStorage.setItem("player"+l_player, obj);
//     });

//     $('button').click(function(){
//         var p_remove = $(this).attr("id").split("_");
//         var pos = p_remove[1];
//         if(p_remove[0] == "btn") $("#p_"+pos).remove();
//     });
// }

$(document).ready(modalShow);
$(document).ready(setUp);
// $(document).ready(CreateTeam);
