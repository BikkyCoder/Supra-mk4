// Search functionality
const searchData = {
    pages: [
        {
            title: "Toyota Supra MK4 Specifications",
            url: "pages/specifications.html",
            keywords: ["specs", "performance", "engine", "2JZ", "horsepower", "torque", "dimensions"],
            content: "Complete specifications of the Toyota Supra MK4"
        },
        {
            title: "Supra MK4 Engine Components",
            url: "pages/engine.html",
            keywords: ["2JZ-GTE", "turbo", "engine", "modifications", "tuning", "power"],
            content: "Detailed information about the legendary 2JZ-GTE engine"
        },
        {
            title: "Supra MK4 Exterior & Body",
            url: "pages/exterior.html",
            keywords: ["body", "aero", "spoiler", "design", "colors", "modifications"],
            content: "Exterior features and body modifications"
        },
        {
            title: "Supra MK4 Interior",
            url: "pages/interior.html",
            keywords: ["seats", "dashboard", "steering", "comfort", "features"],
            content: "Interior features and comfort details"
        }
    ]
};

function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    
    if (!searchInput || !searchResults) return;
    
    searchInput.addEventListener('input', debounce((e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        const results = searchData.pages.filter(page => {
            return page.title.toLowerCase().includes(query) ||
                   page.keywords.some(keyword => keyword.toLowerCase().includes(query)) ||
                   page.content.toLowerCase().includes(query);
        });
        
        displayResults(results, searchResults);
    }, 300));
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function displayResults(results, container) {
    if (results.length === 0) {
        container.innerHTML = '<p class="no-results">No results found</p>';
        return;
    }
    
    const html = results.map(result => `
        <div class="search-result">
            <a href="${result.url}">
                <h3>${result.title}</h3>
                <p>${result.content}</p>
            </a>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', initSearch);