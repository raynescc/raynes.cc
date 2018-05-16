/* Toggle navbar  */
function showMenu() {
  var menu = document.getElementById("nav");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

/* Instagram pictures */
document.addEventListener("DOMContentLoaded", function() {
  var instaElement = new Instafeed({
    get: 'user',
    userId: '6345390265',
    clientId: 'd73bac66c11c45ac8bf4f44ccc5521df',
    target: 'instafeed',
    accessToken: '6345390265.d73bac6.773341d5cfcc498e9e4e30f9d3f6a1bd',
    resolution: 'standard_resolution',
    sortBy: 'most-recent',
    limit: 3,
    template: '<div class="instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',

    after: function() {
      loader.style.display = 'none';
      if (!this.hasNext()) {
        loadButton.setAttribute('disabled', 'disabled');
      }
    }
  });

  var loadButton = document.getElementById("insta-btn"),
    loader = document.getElementById("loader");

  loadButton.addEventListener("click", function() {
    instaElement.next();
  });

  instaElement.run();
});

/* Document.ready */
$(document).ready(function() {

  // Fade page in on load
  $(".fade").hide(0).delay(0).fadeIn(3000)

  // 'active' class navbar
  var pathname = window.location.pathname;
  $('#menu > li > a[href="' + pathname + '"]').parent().addClass('active');

  // Update copyright date
  var today = new Date()
  var year = today.getFullYear()
  $('.copyright').text(year);

  // Age
  var ageElement = document.getElementById('age');
  if (ageElement) {
    var start = new Date('09/20/1991 06:00 AM');
    var timer;

    function age() {
      var now = new Date();
      var age = now.getTime() - start.getTime();
      var year = (age / 31556926000);
      ageElement.innerHTML = year.toFixed(9);
    }
    timer = setInterval(age, 1);
  }

  // Insta follower count
  var token = '6345390265.1677ed0.bd6241dd10504c7e9c901d5c2e1fec2c';
  $.ajax({
    url: 'https://api.instagram.com/v1/users/self',
    dataType: 'jsonp',
    type: 'GET',
    data: {
      access_token: token
    },
    success: function(data) {
      var posts = data['data']['counts']['media'];
      var follows = data['data']['counts']['follows'];
      var followed_by = data['data']['counts']['followed_by'];
      $(".posts").text(posts);
      $(".following").text(follows);
      $(".followers").text(followed_by);
    },
    error: function(data) {
      console.log(data);
    }
  });

  // Popup gallery
  $('.gallery').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery: {
      enabled: true
    }
  });
})
