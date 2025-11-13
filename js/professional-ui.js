<<<<<<< HEAD
// Professional UI Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeHeader();
    initializeThemeToggle();
    initializeScrollEffects();
    initializeGallery();
    initializeBackToTop();
    initializeResponsiveNav();
    initializeLazyLoading();

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

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.setAttribute('data-theme', savedTheme);
            document.documentElement.style.colorScheme = savedTheme;
        }

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', newTheme);
            document.documentElement.style.colorScheme = newTheme;
            localStorage.setItem('theme', newTheme);
        });
    }

    function initializeScrollEffects() {
        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
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

        // Intersection Observer for animations
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

        document.querySelectorAll('.content-card, section, img, .feature-item').forEach(element => {
            element.style.opacity = '0';
            observer.observe(element);
        });
    }

    function initializeGallery() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        if (galleryItems.length) {
            galleryItems.forEach(item => {
                item.addEventListener('click', () => {
                    const img = item.querySelector('img');
                    if (img) {
                        const modal = document.createElement('div');
                        modal.classList.add('gallery-modal');
                        modal.innerHTML = `
                            <div class="modal-content">
                                <img src="${img.src}" alt="${img.alt}">
                                <button class="modal-close">×</button>
                            </div>
                        `;
                        document.body.appendChild(modal);
                        
                        modal.querySelector('.modal-close').addEventListener('click', () => {
                            modal.remove();
                        });

                        // Close on escape key
                        document.addEventListener('keydown', function(e) {
                            if (e.key === 'Escape') {
                                modal.remove();
                            }
                        });
                    }
                });
            });
        }
    }

    function initializeBackToTop() {
        const backToTop = document.createElement('a');
        backToTop.classList.add('back-to-top');
        backToTop.innerHTML = '↑';
        backToTop.href = '#top';
        backToTop.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(backToTop);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    function initializeResponsiveNav() {
        const navToggle = document.createElement('button');
        navToggle.classList.add('nav-toggle');
        navToggle.innerHTML = '☰';
        navToggle.setAttribute('aria-label', 'Toggle navigation');
        navToggle.setAttribute('aria-expanded', 'false');

        const header = document.querySelector('.site-header');
        if (header) {
            const nav = header.querySelector('nav');
            if (nav) {
                nav.insertBefore(navToggle, nav.firstChild);
            }
        }

        const navMenu = document.querySelector('.nav-menu');
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.setAttribute('aria-expanded', 
                    navToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
                );
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    navMenu.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }

    function initializeLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            document.querySelectorAll('img').forEach(img => {
                if (!img.hasAttribute('loading')) {
                    img.setAttribute('loading', 'lazy');
                }
            });
        } else {
            // Fallback for browsers that don't support native lazy loading
            const lazyImageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                lazyImageObserver.observe(img);
            });
        }
    }
=======
// Professional UI Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeHeader();
    initializeThemeToggle();
    initializeScrollEffects();
    initializeGallery();
    initializeBackToTop();
    initializeResponsiveNav();
    initializeLazyLoading();

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

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.setAttribute('data-theme', savedTheme);
            document.documentElement.style.colorScheme = savedTheme;
        }

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', newTheme);
            document.documentElement.style.colorScheme = newTheme;
            localStorage.setItem('theme', newTheme);
        });
    }

    function initializeScrollEffects() {
        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
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

        // Intersection Observer for animations
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

        document.querySelectorAll('.content-card, section, img, .feature-item').forEach(element => {
            element.style.opacity = '0';
            observer.observe(element);
        });
    }

    function initializeGallery() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        if (galleryItems.length) {
            galleryItems.forEach(item => {
                item.addEventListener('click', () => {
                    const img = item.querySelector('img');
                    if (img) {
                        const modal = document.createElement('div');
                        modal.classList.add('gallery-modal');
                        modal.innerHTML = `
                            <div class="modal-content">
                                <img src="${img.src}" alt="${img.alt}">
                                <button class="modal-close">×</button>
                            </div>
                        `;
                        document.body.appendChild(modal);
                        
                        modal.querySelector('.modal-close').addEventListener('click', () => {
                            modal.remove();
                        });

                        // Close on escape key
                        document.addEventListener('keydown', function(e) {
                            if (e.key === 'Escape') {
                                modal.remove();
                            }
                        });
                    }
                });
            });
        }
    }

    function initializeBackToTop() {
        const backToTop = document.createElement('a');
        backToTop.classList.add('back-to-top');
        backToTop.innerHTML = '↑';
        backToTop.href = '#top';
        backToTop.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(backToTop);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    function initializeResponsiveNav() {
        const navToggle = document.createElement('button');
        navToggle.classList.add('nav-toggle');
        navToggle.innerHTML = '☰';
        navToggle.setAttribute('aria-label', 'Toggle navigation');
        navToggle.setAttribute('aria-expanded', 'false');

        const header = document.querySelector('.site-header');
        if (header) {
            const nav = header.querySelector('nav');
            if (nav) {
                nav.insertBefore(navToggle, nav.firstChild);
            }
        }

        const navMenu = document.querySelector('.nav-menu');
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.setAttribute('aria-expanded', 
                    navToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
                );
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                    navMenu.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }

    function initializeLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            document.querySelectorAll('img').forEach(img => {
                if (!img.hasAttribute('loading')) {
                    img.setAttribute('loading', 'lazy');
                }
            });
        } else {
            // Fallback for browsers that don't support native lazy loading
            const lazyImageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                lazyImageObserver.observe(img);
            });
        }
    }
>>>>>>> 628d08b5950b3724dc6063df2fbfe28da6c5c9a6
});