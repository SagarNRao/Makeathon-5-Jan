// const element = document.getElementsByClassName(".v16_32"); // Select the element
// const rect = element.getBoundingClientRect(); // Get its position
// const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// const offsetTopofSkills = rect.top + scrollTop; // Calculate the top position relative to the document

// console.log(offsetTopofSkills); // This is the scrollY value at which the element becomes visible

// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);

//   if (this.scrollY >= offsetTopofSkills) {
//     element.classList.add("fadeInAnimation");
//   }
// });

setTimeout(function() {
  const element1 = document.querySelector(".v11_20");
  const element2 = document.querySelector(".v11_11");
  element1.classList.add("bounce");
  element2.classList.add("bounce");
}, 3000);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}