document.addEventListener('DOMContentLoaded', (event) => {
    // Add a class to highlight the current page in the navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Add a simple animation to the main content
    const main = document.querySelector('main');
    main.style.opacity = 0;
    setTimeout(() => {
        main.style.transition = 'opacity 0.5s ease-in-out';
        main.style.opacity = 1;
    }, 100);
});

