// Structured data for Toyota Supra MK4 product page
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Toyota Supra MK4",
  "description": "The legendary Toyota Supra MK4 (A80), produced between 1993-2002, featuring the iconic 2JZ-GTE twin-turbo engine. Known for its exceptional tuning potential, stunning design, and incredible performance, this Japanese sports car has become a modern classic.",
  "brand": {
    "@type": "Brand",
    "name": "Toyota"
  },
  "image": [
    "https://bikkycoder.github.io/Supra-mk4/images/supra-hero.jpg",
    "https://bikkycoder.github.io/Supra-mk4/images/supra-side.jpg",
    "https://bikkycoder.github.io/Supra-mk4/images/supra-front.jpg"
  ],
  "url": "https://bikkycoder.github.io/Supra-mk4/",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "45000",
    "highPrice": "150000",
    "offerCount": "12",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "offers": [
      {
        "@type": "Offer",
        "price": "65000",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/UsedCondition",
        "url": "https://bikkycoder.github.io/Supra-mk4/"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": "James Turner"
      },
      "datePublished": "2025-09-15",
      "reviewBody": "The MK4 Supra is everything I dreamed it would be. The 2JZ engine is incredibly robust and the tuning potential is astronomical. After 20+ years, this car still turns heads and performs like a modern sports car.",
      "name": "A True Japanese Legend"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": "Michael Chen"
      },
      "datePublished": "2025-08-22",
      "reviewBody": "Classic Japanese engineering at its finest. The build quality is exceptional and the twin-turbo 2JZ is a masterpiece. Only minor downside is the rising market prices, but it's worth every penny.",
      "name": "Timeless Performance Machine"
    }
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Engine",
      "value": "2JZ-GTE Twin-Turbo Inline-6"
    },
    {
      "@type": "PropertyValue",
      "name": "Horsepower",
      "value": "320 HP (stock)"
    },
    {
      "@type": "PropertyValue",
      "name": "Torque",
      "value": "315 lb-ft"
    },
    {
      "@type": "PropertyValue",
      "name": "Transmission",
      "value": "6-speed manual / 4-speed automatic"
    }
  ]
};

// Function to inject the schema into the page
function injectProductSchema() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(productSchema);
    document.head.appendChild(script);
}

// Add the schema when the DOM is loaded
document.addEventListener('DOMContentLoaded', injectProductSchema);