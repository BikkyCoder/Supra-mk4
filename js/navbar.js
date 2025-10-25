// Navbar Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navbarNav = document.querySelector('.navbar-nav');

    if (mobileToggle && navbarNav) {
        mobileToggle.addEventListener('click', () => {
            navbarNav.classList.toggle('show');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbarNav?.contains(e.target) && !mobileToggle?.contains(e.target)) {
            navbarNav?.classList.remove('show');
        }
    });

    // Active link handling
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];

    navLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        if (currentPage === page || (currentPage === '' && page === 'home')) {
            link.classList.add('active');
        }
    });

    // Scroll behavior
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down & past navbar
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });
});