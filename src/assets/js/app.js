/* Toggle navbar  */
function showMenu() {
  var menu = document.getElementById("nav");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

/* Document.ready */
$(document).ready(function() {

  // Fade page in on load
  $(".fade").hide(0).delay(0).fadeIn(5000)

  // 'active' class navbar
  var pathname = window.location.pathname;
  $('#menu > li > a[href="' + pathname + '"]').parent().addClass('active');

  // Age
  var ageElement = document.getElementById('age');
  if (ageElement) {
    var start = new Date('09/20/1991 06:00 AM');
    var timer;

    function age() {
      var now = new Date();
      var age = now.getTime() - start.getTime();
      var year = (age / 31556926000);
      ageElement.innerHTML = year.toFixed(8);
    }
    timer = setInterval(age, 1);
  }
})
