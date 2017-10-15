
 var ability;
 var pages;

function buildNavBar(role,appendDiv) {
  switch (role.trim()) {
    case 'Sport Admin':
    ability =['Manage Users', 'Manage Venue', 'Communication Center']
    pages =['users.html','venue.html', 'chat.html' ];
      buildTemplate(appendDiv)
    break;
    case 'Sport Code':
         ability =['Manage Event', 'Communication Center', '']
         pages =['event.html','chat.html' ];
      buildTemplate(appendDiv)
    break;
    case 'Sport Rep':
    ability =['Manage Team','Manage Player', 'Communication Center']
    pages =['team.html','player.html','chat.html' ];
      buildTemplate(appendDiv)
    break;
    case 'Warden':
    ability =['Manage Residence', 'Communication Center']
    pages =['residence.html','chat.html' ];
      buildTemplate(appendDiv)
    break;
    default:

  }

}


function buildTemplate(divId){
  var newNav = document.getElementsByClassName("ru_nav navigate")[0];
  var nav_bar = '<ul  id="localNavItem" class="naving1">'
  for (var i = 0; i < ability.length; i++) {
    var title = ability[i];
    nav_bar += '<li id="navitem_'+i+'"><a href="'+pages[i]+'">'+title+'</a></li>';
  }
  nav_bar = nav_bar+'</ul>';
  newNav.innerHTML = nav_bar;

}
