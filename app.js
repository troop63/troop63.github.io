document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar__menu');

    mobileMenuButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    // Close the menu if clicking outside of it
    document.addEventListener('click', (event) => {
        if (!navbarMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            navbarMenu.classList.remove('active');
        }
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
});
