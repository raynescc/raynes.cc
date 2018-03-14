//TODO: MAKE NAVBAR ANIMATED ON TOGGLE.

/* load header/footer templates */
$(function(){
  $("#nav").load("nav.html");
  $("#footer").load("footer.html");
});

/* toggle navbar  */
function showMenu() {
  var menu = document.getElementById("nav");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

$(document).ready(function() {
  /* 'active' class navbar */
  var pathname = window.location.pathname;
  $('#menu > li > a[href="' + pathname + '"]').parent().addClass('active');

  /* insta photos count */
  var instaCount = $('.photo').length
  $('.posts').text(instaCount);

  /* update copyright date */
  var today = new Date()
  var year = today.getFullYear()
  $('.copyright').text(year);
})
