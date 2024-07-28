document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('active');
});

// Basic Carousel Logic
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Change image every 3 seconds
