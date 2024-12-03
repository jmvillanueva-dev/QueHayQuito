// Blog list animation on scroll
const blogItems = document.querySelectorAll('.blog-item');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('animate');
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Check if the browser supports IntersectionObserver
if ('IntersectionObserver' in window) {
    blogItems.forEach(item => {
        item.classList.add('animate');
        observer.observe(item);
    });
} else {
    // If the browser doesn't support IntersectionObserver, show all elements
    blogItems.forEach(item => {
        item.classList.add('visible');
    });
}

// Carousel functionality
const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update active class
    slides.forEach((slide, i) => {
        if (i === currentIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-advance the carousel every 5 seconds
setInterval(nextSlide, 5000);

// Initialize the first slide as active
showSlide(0);
