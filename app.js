/* Fade page in on load */
$(document).ready(function(){
$('body').css('display', 'none');
$('body').fadeIn(1000);
});

/* Secret Code, using cornify */
const pressed = [];
const secretCode = 'andrew';
window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('DING DING!');
    cornify_add();
  }
  console.log(pressed);
});
