//TODO: MAKE NAVBAR ANIMATED ON TOGGLE and animation between pages

/* toggle navbar  */
function showMenu() {
  var menu = document.getElementById("nav");
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

/* document ready */
$(document).ready(function() {
  /* 'active' class navbar */
  var pathname = window.location.pathname;
  $('#menu > li > a[href="' + pathname + '"]').parent().addClass('active');

  /* update copyright date */
  var today = new Date()
  var year = today.getFullYear()
  $('.copyright').text(year);

  /* age */
  var start = new Date('09/20/1991 06:00 AM');
  var timer;

  function age() {
    var now = new Date();
    var age = now.getTime() - start.getTime();
    var year = (age / 31556926000);
    document.getElementById('age').innerHTML = year.toFixed(9);
  }
  timer = setInterval(age, 1);

  /* insta feed */
  var userFeed = new Instafeed({
    get: 'user',
    userId: '6345390265',
    limit: 500,
    resolution: 'standard_resolution',
    accessToken: '6345390265.1677ed0.bd6241dd10504c7e9c901d5c2e1fec2c',
    sortBy: 'most-recent',
    template: '<div class="instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
  });
  userFeed.run();

  /* insta follower count */
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

  /* popup gallery */
  $('.gallery').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery: {
      enabled: true
    }
  });
})

/* window load event */
// $(window).load(function() {
//   /* photo count */
//   var instaCount = $('.instaimg').length
//   $('.posts').text(instaCount);
// });
