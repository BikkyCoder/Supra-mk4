// Social sharing functionality
function initSocialSharing() {
    const shareButtons = document.querySelectorAll('.share-button');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const network = this.dataset.network;
            const title = encodeURIComponent(document.title);
            const url = encodeURIComponent(window.location.href);
            const description = encodeURIComponent(document.querySelector('meta[name="description"]').content);
            
            let shareUrl;
            
            switch(network) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'whatsapp':
                    shareUrl = `https://api.whatsapp.com/send?text=${title}%20${url}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
            }
            
            window.open(shareUrl, '_blank', 'width=600,height=400');
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initSocialSharing);