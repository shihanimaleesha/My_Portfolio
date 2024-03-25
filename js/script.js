// script.js

let slider = document.querySelector(".slider");
let images = document.querySelectorAll(".slider img");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

// Set initial slide position
let counter = 0;
const size = images[0].clientWidth;

// Move the slider
function slide() {
  slider.style.transform = "translateX(" + -size * counter + "px)";
}

// Next slide
nextBtn.addEventListener("click", () => {
  counter++;
  if (counter >= images.length) counter = 0;
  slide();
});

// Previous slide
prevBtn.addEventListener("click", () => {
  counter--;
  if (counter < 0) counter = images.length - 1;
  slide();
});
