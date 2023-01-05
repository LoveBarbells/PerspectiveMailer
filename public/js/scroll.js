
var nav = document.getElementById("navbar-scroll");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-60px";
  }
} 