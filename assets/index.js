// Add simple animations on scroll (optional)
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        element.style.opacity = 0;
    });

    window.addEventListener('scroll', () => {
        elements.forEach((element) => {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.style.transition = 'opacity 1s';
                element.style.opacity = 1;
            }
        });
    });
});
