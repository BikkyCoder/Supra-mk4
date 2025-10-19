// Kolam Navigation
document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.querySelector('.nav-container');
    const kolamToggle = document.querySelector('.kolam-toggle');
    const kolamNav = document.querySelector('.kolam-nav');
    const kolamItems = document.querySelectorAll('.kolam-item');

    // Toggle navigation
    kolamToggle.addEventListener('click', () => {
        navContainer.classList.toggle('kolam-active');
        kolamToggle.setAttribute('aria-expanded', 
            kolamToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
        );
    });

    // Close navigation when clicking outside
    document.addEventListener('click', (e) => {
        if (!navContainer.contains(e.target) && navContainer.classList.contains('kolam-active')) {
            navContainer.classList.remove('kolam-active');
            kolamToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Handle touch events for better mobile experience
    let touchStartX = 0;
    let touchEndX = 0;

    kolamNav.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    kolamNav.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX - touchStartX > swipeThreshold) {
            // Swipe right - close nav
            navContainer.classList.remove('kolam-active');
            kolamToggle.setAttribute('aria-expanded', 'false');
        }
    }

    // Add active state to current page link
    kolamItems.forEach(item => {
        if (item.getAttribute('href') === window.location.pathname || 
            (item.getAttribute('href') === 'index.html' && window.location.pathname.endsWith('/'))) {
            item.classList.add('active');
        }
    });

    // Smooth scroll for anchor links
    kolamItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href.startsWith('#')) {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    navContainer.classList.remove('kolam-active');
                    kolamToggle.setAttribute('aria-expanded', 'false');
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    });
});