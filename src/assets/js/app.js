//TODO: MAKE NAVBAR ANIMATED ON TOGGLE.


/* Toggle Navbar (Mobile View) */
function showMenu() {
  var menu = document.getElementById("nav");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

/* Insta Image Count */
// function myFunction() {
    var nodelist = document.getElementsByClassName("insta-img").length;
    console.log(nodelist);
    // document.getElementById("demo").innerHTML = nodelist;
// }
