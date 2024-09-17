// scripts.js

const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;
let currentIndex = 0;

function showSlide(index) {
  const offset = -index * 100;
  document.querySelector(
    ".carousel-container"
  ).style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
  showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
  showSlide(currentIndex);
});

// Initialize
showSlide(currentIndex);
