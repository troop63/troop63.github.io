// JavaScript for Navbar Toggle
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// JavaScript for Carousel
const slides = document.querySelector('.carousel__slides');
const slideCount = slides.children.length;
const nextBtn = document.querySelector('.carousel__arrow--right');
const prevBtn = document.querySelector('.carousel__arrow--left');
let currentIndex = 0;
let slideWidth = slides.children[0].clientWidth;

// Function to move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidePosition();
}

// Function to move to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlidePosition();
}

// Function to update slide position
function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Event listeners for buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-slide functionality
setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Handle resizing for responsive design
window.addEventListener('resize', () => {
    // Update slideWidth on window resize
    slideWidth = slides.children[0].clientWidth;
    updateSlidePosition();
});
