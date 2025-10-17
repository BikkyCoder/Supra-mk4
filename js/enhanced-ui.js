// Professional UI Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize professional features
    initializeHeader();
    initializeThemeToggle();
    initializeScrollEffects();
    initializeGallery();
    initializeBackToTop();

    function initializeHeader() {
        const header = document.querySelector('.site-header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }
    }

    function initializeThemeToggle() {
        const themeToggle = document.createElement('button');
        themeToggle.classList.add('theme-toggle');
        themeToggle.innerHTML = '🌓';
        themeToggle.setAttribute('aria-label', 'Toggle dark mode');
        document.body.appendChild(themeToggle);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '50px'
        }
    );

    // Add animation to elements
    document.querySelectorAll('.card, section, img').forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });

    // Responsive navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
        });
    }

    // Add loading="lazy" to images
    document.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
}});