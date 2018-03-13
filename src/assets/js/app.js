//TODO: MAKE NAVBAR ANIMATED ON TOGGLE.

/* toggle navbar  */
function showMenu() {
  var menu = document.getElementById("nav");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

/* add 'active' class to selected navbar item */
$(document).ready(function() {
  var pathname = window.location.pathname;
  $('#menu > li > a[href="' + pathname + '"]').parent().addClass('active');
})




/* Fix the below */

/* Insta Image Count */
// function myFunction() {
var nodelist = document.getElementsByClassName("insta-img").length;
console.log(nodelist);
// document.getElementById("demo").innerHTML = nodelist;
// }
