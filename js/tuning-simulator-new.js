// Base car specs
const BASE_POWER = 320; // Stock 2JZ-GTE power
const BASE_TORQUE = 315; // Stock 2JZ-GTE torque
const BASE_WEIGHT = 3400; // Approximate weight in lbs
const BASE_0_60 = 4.6; // Stock 0-60 time
const BASE_TOP_SPEED = 155; // Stock top speed (mph, electronically limited)

// Parts database with performance impacts
const parts = {
    ecu: [
        { id: 'stock', name: 'Stock ECU', hp: 0, torque: 0, price: 0 },
        { id: 'stage1', name: 'Stage 1 Tune', hp: 40, torque: 40, price: 1500 },
        { id: 'stage2', name: 'Stage 2 Tune', hp: 70, torque: 80, price: 3000 },
        { id: 'standalone', name: 'Standalone ECU', hp: 100, torque: 120, price: 4500 }
    ],
    turbo: [
        { id: 'stock', name: 'Stock Twin Turbo', hp: 0, torque: 0, price: 0 },
        { id: 'hybrid', name: 'Hybrid Turbos', hp: 120, torque: 150, price: 5000 },
        { id: 'single', name: 'Single Turbo GT3582', hp: 250, torque: 300, price: 7000 },
        { id: 'bigTwins', name: 'Big Twin Turbos', hp: 350, torque: 400, price: 9000 }
    ],
    intake: [
        { id: 'stock', name: 'Stock Airbox', hp: 0, torque: 0, price: 0 },
        { id: 'panel', name: 'Panel Filter', hp: 5, torque: 5, price: 100 },
        { id: 'coldAir', name: 'Cold Air Intake', hp: 15, torque: 15, price: 400 }
    ],
    fuel: [
        { id: 'stock', name: 'Stock Injectors', hp: 0, torque: 0, price: 0 },
        { id: '750cc', name: '750cc Injectors', hp: 0, torque: 0, price: 800, maxHp: 500 },
        { id: '1000cc', name: '1000cc Injectors', hp: 0, torque: 0, price: 1200, maxHp: 700 },
        { id: '1600cc', name: '1600cc Injectors', hp: 0, torque: 0, price: 1800, maxHp: 1000 }
    ],
    // ... other parts remain the same ...
};

// Current car configuration
let currentConfig = {};

// Initialize default configuration
function initializeConfig() {
    for (const category in parts) {
        currentConfig[category] = parts[category][0]; // Set to stock
    }
}

// DOM Elements
const partsGrid = document.getElementById('partsGrid');
const carImage = document.getElementById('carImage');
const turboFlames = document.getElementById('turboFlames');
const hpStat = document.getElementById('hpStat');
const torqueStat = document.getElementById('torqueStat');
const accelerationStat = document.getElementById('accelerationStat');
const topSpeedStat = document.getElementById('topSpeedStat');
let performanceChart;

// Calculate total power and torque
function calculateTotalPower() {
    let totalHp = BASE_POWER;
    let totalTorque = BASE_TORQUE;
    
    // Add power and torque from each part
    for (const category in currentConfig) {
        const part = currentConfig[category];
        if (part && part.id !== 'stock') {
            const partHp = Number(part.hp) || 0;
            const partTorque = Number(part.torque) || 0;
            
            totalHp += partHp;
            totalTorque += partTorque;
            
            // Debug log to check values
            if (partHp > 0 || partTorque > 0) {
                console.log(`${category}: +${partHp}hp, +${partTorque}lbft - tuning-simulator-new.js:73`);
            }
        }
    }
    
    console.log('Base: - tuning-simulator-new.js:78' + BASE_POWER + 'hp, Mods: +' + (totalHp - BASE_POWER) + 'hp, Total: ' + totalHp + 'hp');
    return { hp: totalHp, torque: totalTorque };
}

// Update stats display
function updateStats() {
    const power = calculateTotalPower();
    
    // Update displays
    hpStat.textContent = Math.round(power.hp);
    torqueStat.textContent = Math.round(power.torque);
    
    // Calculate performance metrics
    const weightToHPRatio = BASE_WEIGHT / power.hp;
    const acceleration = BASE_0_60 * (BASE_WEIGHT / BASE_POWER) / weightToHPRatio;
    const topSpeed = Math.min(BASE_TOP_SPEED * Math.sqrt(power.hp / BASE_POWER), 200);
    
    // Update performance displays
    accelerationStat.textContent = acceleration.toFixed(1);
    topSpeedStat.textContent = Math.round(topSpeed);
    
    // Update chart and effects
    if (performanceChart) {
        updatePerformanceChart(power.hp, power.torque);
    }
    updateVisualEffects(power.hp);
}

// Update the performance chart
function updatePerformanceChart(hp, torque) {
    // Generate power curve data (simplified example)
    const rpmRange = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];
    const powerCurve = rpmRange.map(rpm => {
        if (rpm < 3000) return hp * (rpm / 3000) * 0.7;
        if (rpm > 7000) return hp * (1 - ((rpm - 7000) / 1000) * 0.1);
        return hp * (1 - Math.abs(5000 - rpm) / 4000 * 0.3);
    });
    
    const torqueCurve = rpmRange.map(rpm => {
        if (rpm < 2000) return torque * (rpm / 2000) * 0.8;
        if (rpm > 6000) return torque * (1 - ((rpm - 6000) / 2000) * 0.4);
        return torque * (1 - Math.abs(4000 - rpm) / 4000 * 0.2);
    });
    
    performanceChart.data.datasets[0].data = powerCurve;
    performanceChart.data.datasets[1].data = torqueCurve;
    performanceChart.update();
}

// Update visual effects based on power
function updateVisualEffects(hp) {
    // Show turbo flames effect when power is significantly above stock
    if (turboFlames) {
        if (hp > BASE_POWER * 1.5) {
            turboFlames.style.display = 'block';
            turboFlames.style.opacity = Math.min((hp - BASE_POWER) / BASE_POWER, 1);
        } else {
            turboFlames.style.display = 'none';
        }
    }
    updateVisualEffects(power.hp);
}

// Create parts selection grid
function createPartsGrid() {
    partsGrid.innerHTML = ''; // Clear existing content
    
    for (const category in parts) {
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'parts-category';
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryContainer.appendChild(categoryTitle);
        
        const select = document.createElement('select');
        select.id = category + 'Select';
        
        parts[category].forEach(part => {
            const option = document.createElement('option');
            option.value = part.id;
            option.textContent = part.name + ' (+' + (part.hp || 0) + 'hp, $' + part.price + ')';
            select.appendChild(option);
        });
        
        select.addEventListener('change', function(e) {
            const selectedPart = parts[category].find(p => p.id === e.target.value);
            if (selectedPart) {
                console.log('Selecting - tuning-simulator-new.js:166' + category + ':', selectedPart);
                currentConfig[category] = selectedPart;
                updateStats();
            }
        });
        
        categoryContainer.appendChild(select);
        partsGrid.appendChild(categoryContainer);
    }
}

// Initialize the simulator
function initSimulator() {
    initializeConfig();
    createPartsGrid();
    updateStats();
}

// Add event listener for page load
document.addEventListener('DOMContentLoaded', initSimulator);                console.log('Selecting - tuning-simulator-new.js:195' + category + ':', selectedPart);