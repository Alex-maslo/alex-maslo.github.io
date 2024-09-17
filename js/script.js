// scripts.js

const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;
let currentIndex = 0;
let touchStartY = 0;
let touchEndY = 0;

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
document.querySelector(".carousel").addEventListener("touchstart", (e) => {
  if (e.touches.length === 1) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }
});

document.querySelector(".carousel").addEventListener("touchend", (e) => {
  if (e.changedTouches.length === 1) {
    touchEndX = e.changedTouches[0].clientX;
    touchEndY = e.changedTouches[0].clientY;
    handleSwipe();
  }
});

function handleSwipe() {
  const swipeDistanceX = touchEndX - touchStartX;
  const swipeDistanceY = touchEndY - touchStartY;

  if (Math.abs(swipeDistanceX) > 50) {
    // Horizontal swipe sensitivity
    if (swipeDistanceX < 0) {
      // Swiped left
      currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    } else {
      // Swiped right
      currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    }
    showSlide(currentIndex);
  } else if (Math.abs(swipeDistanceY) > 50) {
    // Vertical swipe sensitivity
    if (swipeDistanceY > 0) {
      // Swiped down
      handleSwipeDown();
    }
  }
}

function handleSwipeDown() {
  // Prevent default scroll behavior
  event.preventDefault();
  // Add your custom action for swipe down here
  console.log("Swiped down!"); // Example action
}

// Initialize
showSlide(currentIndex);
