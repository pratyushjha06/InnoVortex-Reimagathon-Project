//image slider
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let index = 0;
const totalSlides = slide.length;
let autoSlideInterval;

function showSlide(idx) {
    slides.style.transform = `translateX(${-idx * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[idx].classList.add('active');
    index = idx;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide(index);
}

// Manual controls
nextBtn.addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Stop auto-sliding when manually clicked
    nextSlide();
    startAutoSlide(); // Resume auto-sliding
});

prevBtn.addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Stop auto-sliding when manually clicked
    prevSlide();
    startAutoSlide(); // Resume auto-sliding
});

// Dot click navigation
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        clearInterval(autoSlideInterval); // Stop auto-sliding when manually clicked
        const idx = parseInt(dot.getAttribute('data-index'));
        showSlide(idx);
        startAutoSlide(); // Resume auto-sliding
    });
});

// Auto slide every 3 seconds
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

startAutoSlide();
