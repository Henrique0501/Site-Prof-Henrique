const nav = document.querySelector('header');

window.addEventListener('scroll', function() {
  const offset = window.pageYOffset;

  if(offset > 75) {
//    nav.style.background = 'linear-gradient(141deg, rgba(11,62,124,.8) 0%, rgba(5,25,51,.8) 24%, rgba(5,25,51,.8) 71%, rgba(11,62,124,.8) 100%)';
    nav.classList.add('scroll');
    } else {
//    nav.style.background = 'rgba(0,0,0,0)';
    nav.classList.remove('scroll');}

});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('header').style.top = "0";
  } else {
    document.querySelector('header').style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}