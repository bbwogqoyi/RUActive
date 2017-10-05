var info = document.createElement("div");
var venue = document.getElementById('ddlvenues');
document.body.appendChild(info);

for(var i=0; i<venue.length; i+=1){
  venue.value = venue.options[i].value;
  var capacity = document.getElementById('tdnumseats').innerHTML;
  info.innerHTML += venue.options[i].text +'<br/>';
}

