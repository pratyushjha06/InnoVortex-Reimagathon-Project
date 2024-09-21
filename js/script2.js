let currentIndex = 0;
let autoSlider;

const allSlides = document.querySelector('.all-slides');
const totalSlides = document.querySelectorAll('.single-slide').length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100; // Calculate offset in percentage based on the index
  allSlides.style.transform = `translateX(${offset}%)`;
}

function navigateSlide(step) {
  clearInterval(autoSlider); // Stop auto sliding when user navigates manually
  showSlide(currentIndex + step);
  autoSlider = setInterval(() => showSlide(currentIndex + 1), 3000); // Restart auto sliding
}

// Automatic slider that changes every 3 seconds
autoSlider = setInterval(() => showSlide(currentIndex + 1), 3000);

// Manual control with buttons
document.querySelector('.prev-btn').addEventListener('click', () => navigateSlide(-1));
document.querySelector('.next-btn').addEventListener('click', () => navigateSlide(1));
