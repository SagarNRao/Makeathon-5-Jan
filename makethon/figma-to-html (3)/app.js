const element = document.querySelector(".v16_32"); // Select the element
const rect = element.getBoundingClientRect(); // Get its position
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const offsetTopofSkills = rect.top + scrollTop; // Calculate the top position relative to the document

console.log(offsetTopofSkills); // This is the scrollY value at which the element becomes visible

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});
