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