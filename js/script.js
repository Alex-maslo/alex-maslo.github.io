// js/script.js

const carousel = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;
let currentIndex = 0;

// Function to update the carousel position
function updateCarousel() {
  const offset = -100 * currentIndex;
  carousel.style.transform = `translateX(${offset}%)`;
}

// Function to move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

// Function to start the automatic slide show
function startAutoSlide() {
  setInterval(nextSlide, 1500); // Change slide every 1.5 seconds
}

// Start the automatic slide show when the page loads
window.onload = () => {
  startAutoSlide();
};
