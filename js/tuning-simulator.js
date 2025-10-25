// Parts database with performance impacts
const parts = {
    engine: [
        { id: 'stock', name: 'Stock 2JZ-GTE', hp: 320, torque: 315, price: 0 },
        { id: 'stage1', name: 'Stage 1 Tune', hp: 400, torque: 420, price: 1500 },
        { id: 'stage2', name: 'Stage 2 Tune', hp: 500, torque: 520, price: 3000 },
        { id: 'stage3', name: 'Stage 3 Race Build', hp: 800, torque: 750, price: 15000 }
    ],
    turbo: [
        { id: 'stock', name: 'Stock Twin Turbo', hp: 0, torque: 0, price: 0 },
        { id: 'upgraded', name: 'Upgraded Twins', hp: 100, torque: 120, price: 4000 },
        { id: 'single', name: 'Big Single Turbo', hp: 200, torque: 180, price: 6000 }
    ],
    exhaust: [
        { id: 'stock', name: 'Stock Exhaust', hp: 0, torque: 0, price: 0 },
        { id: 'catback', name: 'Cat-Back System', hp: 15, torque: 20, price: 1200 },
        { id: 'full', name: 'Full Titanium System', hp: 25, torque: 30, price: 3000 }
    ],
    ecu: [
        { id: 'stock', name: 'Stock ECU', hp: 0, torque: 0, price: 0 },
        { id: 'piggyback', name: 'Piggyback System', hp: 30, torque: 40, price: 800 },
        { id: 'standalone', name: 'Standalone ECU', hp: 50, torque: 60, price: 2500 }
    ]
};

// Current car configuration
let currentConfig = {
    engine: parts.engine[0],
    turbo: parts.turbo[0],
    exhaust: parts.exhaust[0],
    ecu: parts.ecu[0]
};

// Initialize performance chart
let performanceChart;

// DOM Elements
const partsGrid = document.getElementById('partsGrid');
const carImage = document.getElementById('carImage');
const turboFlames = document.getElementById('turboFlames');

// Stats elements
const hpStat = document.getElementById('hpStat');
const torqueStat = document.getElementById('torqueStat');
const accelerationStat = document.getElementById('accelerationStat');
const topSpeedStat = document.getElementById('topSpeedStat');

// Initialize the simulator
function initSimulator() {
    createPartsGrid();
    initializeChart();
    updateStats();
}

// Create parts selection grid
function createPartsGrid() {
    for (const category in parts) {
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'parts-category';
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryContainer.appendChild(categoryTitle);

        const select = document.createElement('select');
        select.id = `${category}-select`;
        select.addEventListener('change', (e) => updatePart(category, e.target.value));

        parts[category].forEach(part => {
            const option = document.createElement('option');
            option.value = part.id;
            option.textContent = `${part.name} (+${part.hp}hp, $${part.price})`;
            select.appendChild(option);
        });

        categoryContainer.appendChild(select);
        partsGrid.appendChild(categoryContainer);
    }
}

// Update selected part
function updatePart(category, partId) {
    const selectedPart = parts[category].find(part => part.id === partId);
    currentConfig[category] = selectedPart;
    updateStats();
    updateVisualEffects();
}

// Calculate and update performance stats
function updateStats() {
    let totalHp = currentConfig.engine.hp;
    let totalTorque = currentConfig.engine.torque;

    // Add other parts' contributions
    for (const category in currentConfig) {
        if (category !== 'engine') {
            totalHp += currentConfig[category].hp;
            totalTorque += currentConfig[category].torque;
        }
    }

    // Update display
    hpStat.textContent = totalHp;
    torqueStat.textContent = totalTorque;
    
    // Calculate derived stats
    const acceleration = calculateAcceleration(totalHp, totalTorque);
    const topSpeed = calculateTopSpeed(totalHp);
    
    accelerationStat.textContent = acceleration.toFixed(1);
    topSpeedStat.textContent = Math.round(topSpeed);

    // Update chart
    updateChart(totalHp, totalTorque);
}

// Initialize performance chart
function initializeChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: 8}, (_, i) => i * 1000),
            datasets: [{
                label: 'Power Curve',
                borderColor: '#ff6b6b',
                data: []
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'RPM'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Horsepower'
                    }
                }
            }
        }
    });
}

// Update chart data
function updateChart(hp, torque) {
    const powerCurve = generatePowerCurve(hp, torque);
    performanceChart.data.datasets[0].data = powerCurve;
    performanceChart.update();
}

// Generate power curve data
function generatePowerCurve(hp, torque) {
    const curve = [];
    const peakRpm = 6500;
    
    for (let rpm = 1000; rpm <= 8000; rpm += 1000) {
        let power = hp * Math.sin((rpm / peakRpm) * Math.PI);
        if (rpm > peakRpm) {
            power *= 0.85; // Power drop-off after peak
        }
        curve.push(power);
    }
    
    return curve;
}

// Calculate 0-100 km/h acceleration
function calculateAcceleration(hp, torque) {
    const baseAccel = 4.6; // Stock acceleration
    const weightKg = 1500; // Approximate weight
    const powerToWeightRatio = hp / weightKg;
    
    return baseAccel * (320 / hp) * 0.9; // Simplified calculation
}

// Calculate top speed
function calculateTopSpeed(hp) {
    const baseSpeed = 250; // Stock top speed
    const speedIncrease = Math.sqrt(hp / 320) * baseSpeed;
    return Math.min(speedIncrease, 350); // Cap at 350 km/h
}

// Update visual effects based on configuration
function updateVisualEffects() {
    // Add flame effect for high-power builds
    const totalHp = Object.values(currentConfig).reduce((sum, part) => sum + part.hp, 0);
    if (totalHp > 600) {
        turboFlames.style.display = 'block';
        turboFlames.style.animation = 'flameEffect 0.5s infinite';
    } else {
        turboFlames.style.display = 'none';
    }
}

// Initialize simulator when DOM is loaded
document.addEventListener('DOMContentLoaded', initSimulator);