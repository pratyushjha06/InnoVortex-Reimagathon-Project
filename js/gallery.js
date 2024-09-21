let currentIndex = 0;
const images = [
    '/Images/gallery/duv1.jpg',
    '/Images/gallery/duv2.jpg',
    '/Images/gallery/duv3.jpg',
    '/Images/gallery/duv4.jpg',
    '/Images/gallery/duv5.jpg',
    '/Images/gallery/duv6.jpg',
    '/Images/gallery/duv7.jpg',
    '/Images/gallery/duv8.jpg',
    '/Images/gallery/duv9.jpg',
    '/Images/gallery/duv10.jpg',
    '/Images/gallery/duv11.jpg',
    '/Images/gallery/duv12.jpg',
    
];

// Function to open the popup
function openPopup(index) {
    currentIndex = index;
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popupImage").src = images[currentIndex];
}

// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Function to change slide
function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;  // Wrap around to the last image
    }
    if (currentIndex >= images.length) {
        currentIndex = 0;  // Wrap around to the first image
    }
    document.getElementById("popupImage").src = images[currentIndex];
}