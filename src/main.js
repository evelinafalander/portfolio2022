import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

//  SCROLL IN OPACITY ANIMATION
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();

/*change color (my-email)*/

/*$(document).ready(function () {
  adaptColor(".myemail");
});

function adaptColor(selector) {
  var rgb = $(selector).css("background-color");

  if (rgb.match(/^rgb/)) {
    var a = rgb.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
      ),
      r = a[1],
      g = a[2],
      b = a[3];
  }
  var hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  if (hsp > 127.5) {
    $(selector).addClass("dark-color");
  } else {
    $(selector).addClass("light-color");

  }
}
*/
