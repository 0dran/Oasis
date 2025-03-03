//Hero Image Slider
const images = document.querySelectorAll('.hero-img');
let currentIndex = 0;

// Function to change the image
function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}
setInterval(changeImage, 4000);

//Fade in elements in Services section
document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});

document.getElementById('navbar-toggle').addEventListener('click', function() {
    var sidebar = document.querySelector('.info-sidebar');
    sidebar.classList.toggle('visible');
});

document.querySelector('.close-icon').addEventListener('click', function() {
    var sidebar = document.querySelector('.info-sidebar');
    sidebar.classList.remove('visible');
});

document.querySelectorAll('.info-sidebar .links a').forEach(function(link) {
    link.addEventListener('click', function() {
        var sidebar = document.querySelector('.info-sidebar');
        sidebar.classList.remove('visible');
    });
});