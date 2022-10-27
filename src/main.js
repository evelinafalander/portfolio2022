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

/////////*change color (my-email)*//////

jQuery(document).ready(function($){
  $(window).on('scroll', function(){
      if($(window).scrollTop() >= $('#aboutMe').offset().top - 80){
          $('.myEmail').addClass('changetoGreen');
      }
      else $('.myEmail').removeClass('changetoGreen');
  });
});

jQuery(document).ready(function($){
  $(window).on('scroll', function(){
      if($(window).scrollTop() >= $('#myProjects').offset().top - 50){
          $('.myEmail').removeClass('changetoGreen');
      }
      
  });
});


