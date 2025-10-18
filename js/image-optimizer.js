// Lazy Loading Images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('[data-src]');
    const imageOptions = {
        root: null,
        threshold: 0,
        rootMargin: '50px'
    };

    const loadImage = (entry) => {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));
});

// Responsive Images
function setResponsiveImage(img) {
    const deviceWidth = window.innerWidth;
    let srcset = img.dataset.srcset;
    
    if (srcset) {
        const sources = srcset.split(',').map(s => {
            const [url, width] = s.trim().split(' ');
            return {
                url,
                width: parseInt(width.replace('w', ''))
            };
        });

        const appropriateSource = sources.reduce((prev, curr) => {
            return Math.abs(curr.width - deviceWidth) < Math.abs(prev.width - deviceWidth) ? curr : prev;
        });

        img.src = appropriateSource.url;
    }
}

// Initialize responsive images
document.addEventListener('DOMContentLoaded', function() {
    const responsiveImages = document.querySelectorAll('[data-srcset]');
    responsiveImages.forEach(setResponsiveImage);
    
    // Update on resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            responsiveImages.forEach(setResponsiveImage);
        }, 250);
    });
});