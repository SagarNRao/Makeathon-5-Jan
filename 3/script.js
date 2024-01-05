document.addEventListener("DOMContentLoaded", function() {
  var animatedGradient = document.querySelector(".animated-gradient");

  // Add a class to trigger the transition after a delay
  setTimeout(function() {
    animatedGradient.classList.add("smooth-transition");
  }, 1000); // 1000 milliseconds (1 second) delay
});
