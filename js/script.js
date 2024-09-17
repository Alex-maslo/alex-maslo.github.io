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

// Swipe functionality
let touchStartX = 0;
let touchEndX = 0;

document.querySelector(".carousel").addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.querySelector(".carousel").addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  if (Math.abs(swipeDistance) > 50) {
    // Adjust the swipe sensitivity here
    if (swipeDistance < 0) {
      // Swiped left
      currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    } else {
      // Swiped right
      currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    }
    showSlide(currentIndex);
  }
}

// Initialize
showSlide(currentIndex);
