<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    // Toggle menu
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Add smooth transition delay to nav items
    navLinks.forEach((link, index) => {
        link.style.transitionDelay = `${index * 0.1}s`;
    });
=======
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    // Toggle menu
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Add smooth transition delay to nav items
    navLinks.forEach((link, index) => {
        link.style.transitionDelay = `${index * 0.1}s`;
    });
>>>>>>> 628d08b5950b3724dc6063df2fbfe28da6c5c9a6
});