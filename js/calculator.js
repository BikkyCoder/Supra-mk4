<<<<<<< HEAD
// Price Calculator for Supra MK4
const calculateSupraPrice = {
    basePrice: 5000000, // Base price in INR
    
    // Condition multipliers
    conditions: {
        'Excellent': 1.5,
        'Good': 1.2,
        'Fair': 1.0,
        'Needs Work': 0.8
    },
    
    // Modification additions
    modifications: {
        'Stock': 0,
        'Light Mods': 200000,
        'Medium Mods': 500000,
        'Heavy Mods': 1000000
    },
    
    // Year adjustments
    getYearMultiplier: function(year) {
        if (year >= 1996 && year <= 1998) return 1.2; // Premium years
        if (year >= 1993 && year <= 1995) return 1.1;
        return 1.0;
    },
    
    calculate: function(year, condition, mods) {
        let price = this.basePrice;
        
        // Apply condition multiplier
        price *= this.conditions[condition];
        
        // Apply year multiplier
        price *= this.getYearMultiplier(year);
        
        // Add modifications value
        price += this.modifications[mods];
        
        return Math.round(price);
    }
};

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const calculator = document.getElementById('supra-calculator');
    if (!calculator) return;

    calculator.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const year = parseInt(document.getElementById('supra-year').value);
        const condition = document.getElementById('supra-condition').value;
        const mods = document.getElementById('supra-mods').value;
        
        const price = calculateSupraPrice.calculate(year, condition, mods);
        
        document.getElementById('calculated-price').innerHTML = 
            `Estimated Price: ₹${price.toLocaleString('en-IN')}`;
    });
=======
// Price Calculator for Supra MK4
const calculateSupraPrice = {
    basePrice: 5000000, // Base price in INR
    
    // Condition multipliers
    conditions: {
        'Excellent': 1.5,
        'Good': 1.2,
        'Fair': 1.0,
        'Needs Work': 0.8
    },
    
    // Modification additions
    modifications: {
        'Stock': 0,
        'Light Mods': 200000,
        'Medium Mods': 500000,
        'Heavy Mods': 1000000
    },
    
    // Year adjustments
    getYearMultiplier: function(year) {
        if (year >= 1996 && year <= 1998) return 1.2; // Premium years
        if (year >= 1993 && year <= 1995) return 1.1;
        return 1.0;
    },
    
    calculate: function(year, condition, mods) {
        let price = this.basePrice;
        
        // Apply condition multiplier
        price *= this.conditions[condition];
        
        // Apply year multiplier
        price *= this.getYearMultiplier(year);
        
        // Add modifications value
        price += this.modifications[mods];
        
        return Math.round(price);
    }
};

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const calculator = document.getElementById('supra-calculator');
    if (!calculator) return;

    calculator.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const year = parseInt(document.getElementById('supra-year').value);
        const condition = document.getElementById('supra-condition').value;
        const mods = document.getElementById('supra-mods').value;
        
        const price = calculateSupraPrice.calculate(year, condition, mods);
        
        document.getElementById('calculated-price').innerHTML = 
            `Estimated Price: ₹${price.toLocaleString('en-IN')}`;
    });
>>>>>>> 628d08b5950b3724dc6063df2fbfe28da6c5c9a6
});