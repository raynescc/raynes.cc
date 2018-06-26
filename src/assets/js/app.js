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

  // Instagram pictures
  var instafeed = document.getElementById('instafeed');
  if (instafeed) {
  var instaElement = new Instafeed({
    get: 'user',
    userId: '6345390265',
    clientId: 'd73bac66c11c45ac8bf4f44ccc5521df',
    target: 'instafeed',
    accessToken: '6345390265.1677ed0.4e4d18eec4a54a4faddbabeb2186681f',
    resolution: 'standard_resolution',
    sortBy: 'most-recent',
    limit: 18,
    template: '<div class="instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
  });
  instaElement.run();
}

  // Insta details
  var token = '6345390265.1677ed0.4e4d18eec4a54a4faddbabeb2186681f';
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
      var bio = data['data']['bio'];
      var username = data['data']['username'];
      var profile_picture = data['data']['profile_picture'];
      $(".posts").text(posts);
      $(".following").text(follows);
      $(".followers").text(followed_by);
      $(".bio").text(bio);
      $(".username").text(username);
      $(".profile-picture").append("<img class=me src='" + data.data.profile_picture + "' />");
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
