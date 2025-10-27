// Base car specs
const BASE_POWER = 320; // Stock 2JZ-GTE power
const BASE_TORQUE = 315; // Stock 2JZ-GTE torque
const BASE_WEIGHT = 3400; // Approximate weight in lbs
const BASE_0_60 = 4.6; // Stock 0-60 time
const BASE_TOP_SPEED = 155; // Stock top speed (mph, electronically limited)

// Parts database with performance impacts
const parts = {
    ecu: [
        { id: 'stock', name: 'Stock ECU', hp: 0, torque: 0, price: 0, description: 'Factory ECU with stock mapping' },
        { id: 'stage1', name: 'Stage 1 Tune', hp: 40, torque: 40, price: 1500, description: 'Optimized fuel and timing maps' },
        { id: 'stage2', name: 'Stage 2 Tune', hp: 70, torque: 80, price: 3000, description: 'Aggressive maps, requires supporting mods' },
        { id: 'standalone', name: 'Standalone ECU', hp: 100, torque: 120, price: 4500, description: 'Full customization, datalogging' },
        { id: 'motec', name: 'MoTeC M150', hp: 120, torque: 140, price: 6000, description: 'Pro-level ECU with advanced features' }
    ],
    turbo: [
        { id: 'stock', name: 'Stock Twin Turbo', hp: 0, torque: 0, price: 0, description: 'CT20 Twin Turbos' },
        { id: 'hybrid', name: 'Hybrid Turbos', hp: 120, torque: 150, price: 5000, description: 'Enhanced CT20 with larger compressor wheels' },
        { id: 'single', name: 'Single Turbo GT3582R', hp: 250, torque: 300, price: 7000, description: 'Popular single turbo conversion' },
        { id: 'bigTwins', name: 'Big Twin Turbos', hp: 350, torque: 400, price: 9000, description: 'HKS GT2860R twins' },
        { id: 'gt42', name: 'Precision GT4294R', hp: 450, torque: 500, price: 12000, description: 'Pro-level single turbo setup' }
    ],
    intake: [
        { id: 'stock', name: 'Stock Airbox', hp: 0, torque: 0, price: 0, description: 'Factory airbox system' },
        { id: 'panel', name: 'HKS Panel Filter', hp: 5, torque: 5, price: 100, description: 'High-flow drop-in filter' },
        { id: 'coldAir', name: 'Cold Air Intake', hp: 15, torque: 15, price: 400, description: 'HKS Racing Suction Kit' },
        { id: 'carbonInlet', name: 'Carbon Fiber Intake', hp: 20, torque: 18, price: 800, description: 'Full carbon intake system' },
        { id: 'vortex', name: 'Vortex Racing Intake', hp: 25, torque: 22, price: 1200, description: 'Pro racing intake with ram air' }
    ],
    fuel: [
        { id: 'stock', name: 'Stock Injectors', hp: 0, torque: 0, price: 0, description: '440cc factory injectors' },
        { id: '750cc', name: 'Denso 750cc', hp: 0, torque: 0, price: 800, maxHp: 500, description: 'Street performance injectors' },
        { id: '1000cc', name: 'ID1000 Injectors', hp: 0, torque: 0, price: 1200, maxHp: 700, description: 'High-flow injectors' },
        { id: '1600cc', name: 'ID1600 Injectors', hp: 0, torque: 0, price: 1800, maxHp: 1000, description: 'Race-spec injectors' },
        { id: '2000cc', name: 'Injector Dynamics 2000cc', hp: 0, torque: 0, price: 2400, maxHp: 1500, description: 'Competition injectors' }
    ],
    fuelPump: [
        { id: 'stock', name: 'Stock Pump', hp: 0, torque: 0, price: 0, description: 'Factory fuel pump' },
        { id: 'walbro255', name: 'Walbro 255', hp: 0, torque: 0, price: 300, maxHp: 500, description: 'Entry-level performance pump' },
        { id: 'walbro450', name: 'Walbro 450', hp: 0, torque: 0, price: 500, maxHp: 1000, description: 'High-flow fuel pump' },
        { id: 'dw300', name: 'DeatschWerks 300', hp: 0, torque: 0, price: 800, maxHp: 1200, description: 'Pro-series fuel pump' },
        { id: 'dualPump', name: 'Dual Walbro 450', hp: 0, torque: 0, price: 1200, maxHp: 2000, description: 'Dual pump setup for max power' }
    ],
    exhaust: [
        { id: 'stock', name: 'Stock Exhaust', hp: 0, torque: 0, price: 0, description: 'Factory exhaust system' },
        { id: 'catBack', name: 'HKS Hi-Power', hp: 15, torque: 10, price: 1200, description: 'Cat-back exhaust system' },
        { id: 'fullTurboBack', name: 'Full Turbo-Back', hp: 35, torque: 30, price: 2500, description: '3" turbo-back with high-flow cat' },
        { id: 'raceExhaust', name: 'HKS Racing Ti', hp: 45, torque: 40, price: 3500, description: 'Titanium racing exhaust' },
        { id: 'custom4inch', name: '4" Custom System', hp: 55, torque: 50, price: 4000, description: 'Custom 4" exhaust with dual exits' }
    ],
    internals: [
        { id: 'stock', name: 'Stock Internals', hp: 0, torque: 0, price: 0, maxHp: 600, description: 'Factory engine internals' },
        { id: 'forgedPistons', name: 'CP Forged Pistons', hp: 0, torque: 0, price: 2000, maxHp: 800, description: 'Forged pistons with 9:1 compression' },
        { id: 'forgedRods', name: 'Carrillo Rods', hp: 0, torque: 0, price: 1800, maxHp: 800, description: 'Pro-series connecting rods' },
        { id: 'fullForged', name: 'Full Forged Internals', hp: 0, torque: 0, price: 5000, maxHp: 1200, description: 'Complete forged rotating assembly' },
        { id: 'strokerKit', name: '3.4L Stroker Kit', hp: 50, torque: 80, price: 8000, maxHp: 1500, description: 'Brian Crower 3.4L stroker kit' }
    ],
    cams: [
        { id: 'stock', name: 'Stock Cams', hp: 0, torque: 0, price: 0, description: 'Factory camshafts' },
        { id: 'stage1', name: 'Tomei Poncams', hp: 30, torque: 35, price: 1200, description: 'Street performance cams' },
        { id: 'stage2', name: 'HKS Step 2', hp: 50, torque: 55, price: 2000, description: 'Aggressive street/track cams' },
        { id: 'race', name: 'GSC S3', hp: 70, torque: 75, price: 3000, description: 'Full race camshafts' },
        { id: 'custom', name: 'Custom Kelford', hp: 85, torque: 90, price: 3500, description: 'Custom-ground racing cams' }
    ],
    clutch: [
        { id: 'stock', name: 'Stock Clutch', hp: 0, torque: 0, price: 0, maxTorque: 400, description: 'Factory clutch assembly' },
        { id: 'stage1', name: 'ACT Stage 1', hp: 0, torque: 0, price: 800, maxTorque: 600, description: 'Street performance clutch' },
        { id: 'stage2', name: 'HKS Stage 2', hp: 0, torque: 0, price: 1200, maxTorque: 800, description: 'Heavy duty street/track clutch' },
        { id: 'stage3', name: 'OS Giken Triple', hp: 0, torque: 0, price: 2000, maxTorque: 1000, description: 'Triple-plate racing clutch' },
        { id: 'stage4', name: 'Tilton Quad', hp: 0, torque: 0, price: 3500, maxTorque: 1500, description: 'Quad-plate competition clutch' }
    ],
    differential: [
        { id: 'stock', name: 'Stock Differential', hp: 0, torque: 0, price: 0, description: 'Factory differential' },
        { id: 'trd', name: 'TRD LSD', hp: 0, torque: 0, price: 1500, description: 'TRD limited-slip differential' },
        { id: 'cusco', name: 'Cusco LSD', hp: 0, torque: 0, price: 2000, description: 'Cusco Type-RS limited-slip' },
        { id: 'os', name: 'OS Giken Super Lock', hp: 0, torque: 0, price: 2500, description: 'Pro-spec LSD' },
        { id: 'kaaz', name: 'KAAZ 2-Way', hp: 0, torque: 0, price: 3000, description: '2-way racing differential' }
    ],
    nos: [
        { id: 'none', name: 'No NOS', hp: 0, torque: 0, price: 0, description: 'No nitrous oxide system' },
        { id: '50shot', name: 'NX 50 Shot', hp: 50, torque: 50, price: 1000, description: 'Entry-level wet nitrous kit' },
        { id: '100shot', name: 'NOS 100 Shot', hp: 100, torque: 100, price: 1500, description: 'Progressive wet nitrous system' },
        { id: '150shot', name: 'NX Big Shot', hp: 150, torque: 150, price: 2000, description: 'Pro wet nitrous system' },
        { id: '200shot', name: 'Custom Direct Port', hp: 200, torque: 200, price: 3500, description: 'Custom direct port system' }
    ],
    intercooler: [
        { id: 'stock', name: 'Stock Intercooler', hp: 0, torque: 0, price: 0, description: 'Factory side-mount intercooler' },
        { id: 'fmic', name: 'HKS FMIC', hp: 30, torque: 35, price: 1200, description: 'Front mount intercooler kit' },
        { id: 'raceCore', name: 'GReddy Race Core', hp: 45, torque: 50, price: 2000, description: 'Large race intercooler' },
        { id: 'garrett', name: 'Garrett Pro Series', hp: 55, torque: 60, price: 2800, description: 'Pro-level intercooler system' },
        { id: 'custom', name: 'Custom Air-to-Water', hp: 65, torque: 70, price: 3500, description: 'Custom air-to-water setup' }
    ]
};

// Current car configuration
let currentConfig = {
    ecu: parts.ecu[0],
    turbo: parts.turbo[0],
    intake: parts.intake[0],
    fuel: parts.fuel[0],
    fuelPump: parts.fuelPump[0],
    exhaust: parts.exhaust[0],
    internals: parts.internals[0],
    cams: parts.cams[0],
    clutch: parts.clutch[0],
    differential: parts.differential[0],
    nos: parts.nos[0],
    intercooler: parts.intercooler[0]
};

// Initialize performance chart
let performanceChart;

// Function to initialize the simulator
function initSimulator() {
    setupEventListeners();
    initializeChart();
    updateStats();
}

// Set up event listeners for all select elements
function setupEventListeners() {
    // Get all select elements in the tuning-controls section
    const selects = document.querySelectorAll('.tuning-controls select');
    selects.forEach(select => {
        const partType = select.id.replace('Select', ''); // e.g., ecuSelect -> ecu
        if (parts[partType]) {
            select.addEventListener('change', function(e) {
                const selectedPart = parts[partType].find(part => part.id === e.target.value);
                if (selectedPart) {
                    // Debug log before update
                    console.log(`Updating ${partType}: - tuning-simulator.js:133`, selectedPart);
                    
                    // Update configuration
                    currentConfig[partType] = selectedPart;
                    
                    // Update display
                    updateStats();
                    updateCompatibilityWarnings();
                    
                    // Debug log after update
                    const power = calculateTotalPower();
                    console.log('New total power: - tuning-simulator.js:144', power.hp, 'hp');
                }
            });
        }
    });
}

// DOM Elements
const carImage = document.getElementById('carImage');
const turboFlames = document.getElementById('turboFlames');

// Stats elements
const hpStat = document.getElementById('hpStat');
const torqueStat = document.getElementById('torqueStat');
const accelerationStat = document.getElementById('accelerationStat');
const topSpeedStat = document.getElementById('topSpeedStat');

// Initialize chart
function initializeChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1000', '2000', '3000', '4000', '5000', '6000', '7000', '8000'],
            datasets: [{
                label: 'Power',
                borderColor: '#ff8c00',
                data: [],
                fill: false
            }, {
                label: 'Torque',
                borderColor: '#ff4400',
                data: [],
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                }
            }
        }
    });
};

// Initialize the simulator
function initSimulator() {
    createPartsGrid();
    initializeChart();
    updateStats();
}

// Calculate total horsepower and torque
function calculateTotalPower() {
    let totalHp = BASE_POWER;
    let totalTorque = BASE_TORQUE;
    
    // Add power and torque from each part
    for (const category in currentConfig) {
        const part = currentConfig[category];
        if (part) {
            // Make sure we're working with numbers
            const partHp = parseInt(part.hp) || 0;
            const partTorque = parseInt(part.torque) || 0;
            
            totalHp += partHp;
            totalTorque += partTorque;
            
            // Debug log to check values
            console.log(`${category}: +${partHp}hp, +${partTorque}lbft - tuning-simulator.js:223`);
        }
    }
    
    // Debug log for final values
    console.log(`Total: ${totalHp}hp, ${totalTorque}lbft - tuning-simulator.js:228`);
    
    return { 
        hp: Math.round(totalHp), 
        torque: Math.round(totalTorque) 
    };
}

// Update stats display
function updateStats() {
    const totalPower = calculateTotalPower();
    
    // Update stat display
    hpStat.textContent = Math.round(totalPower.hp);
    torqueStat.textContent = Math.round(totalPower.torque);
    
    // Calculate and update acceleration (rough approximation)
    const weightToHPRatio = BASE_WEIGHT / totalPower.hp;
    const acceleration = BASE_0_60 * (BASE_WEIGHT / BASE_POWER) / (BASE_WEIGHT / totalPower.hp);
    accelerationStat.textContent = acceleration.toFixed(1);
    
    // Calculate and update top speed (rough approximation)
    const topSpeed = Math.min(BASE_TOP_SPEED * Math.sqrt(totalPower.hp / BASE_POWER), 200);
    topSpeedStat.textContent = Math.round(topSpeed);
    
    // Update chart
    updatePerformanceChart(totalPower.hp, totalPower.torque);
    
    // Update visual effects
    updateVisualEffects(totalPower.hp);
}

// Update performance chart
function updatePerformanceChart(power, torque) {
    // Generate power and torque curves
    const powerCurve = generatePowerCurve(power);
    const torqueCurve = generateTorqueCurve(torque);
    
    performanceChart.data.datasets[0].data = powerCurve;
    performanceChart.data.datasets[1].data = torqueCurve;
    performanceChart.update();
}

// Generate power curve data
function generatePowerCurve(maxPower) {
    return [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000].map(rpm => {
        if (rpm < 3000) return maxPower * (rpm / 3000) * 0.7;
        if (rpm > 7000) return maxPower * (1 - ((rpm - 7000) / 1000) * 0.1);
        return maxPower * (1 - Math.abs(5000 - rpm) / 4000 * 0.3);
    });
}

// Generate torque curve data
function generateTorqueCurve(maxTorque) {
    return [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000].map(rpm => {
        if (rpm < 2000) return maxTorque * (rpm / 2000) * 0.8;
        if (rpm > 6000) return maxTorque * (1 - ((rpm - 6000) / 2000) * 0.4);
        return maxTorque * (1 - Math.abs(4000 - rpm) / 4000 * 0.2);
    });
}

// Update visual effects based on power
function updateVisualEffects(totalPower) {
    // Update turbo flames visibility based on power
    if (totalPower > BASE_POWER * 1.5) {
        turboFlames.style.display = 'block';
        turboFlames.style.opacity = Math.min((totalPower - BASE_POWER) / BASE_POWER, 1);
    } else {
        turboFlames.style.display = 'none';
    }
}

// Check compatibility between parts
function updateCompatibilityWarnings() {
    const totalPower = calculateTotalPower().hp;
    const totalTorque = calculateTotalPower().torque;
    
    // Check fuel system compatibility
    if (totalPower > currentConfig.fuel.maxHp) {
        alert('Warning: Current power exceeds fuel injector capacity. Upgrade injectors recommended.');
    }
    
    if (totalPower > currentConfig.fuelPump.maxHp) {
        alert('Warning: Current power exceeds fuel pump capacity. Upgrade fuel pump recommended.');
    }
    
    // Check engine internals compatibility
    if (totalPower > currentConfig.internals.maxHp) {
        alert('Warning: Current power exceeds safe limit for engine internals. Upgrade internals recommended.');
    }
    
    // Check clutch compatibility
    if (totalTorque > currentConfig.clutch.maxTorque) {
        alert('Warning: Current torque exceeds clutch capacity. Upgrade clutch recommended.');
    }
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
        select.id = `${category}Select`; // Changed to match the expected format
        select.addEventListener('change', function(e) {
            const selectedPart = parts[category].find(part => part.id === e.target.value);
            if (selectedPart) {
                currentConfig[category] = selectedPart;
                updateStats();
                updateCompatibilityWarnings();
                updateVisualEffects();
            }
        });

        parts[category].forEach(part => {
            const option = document.createElement('option');
            option.value = part.id;
            option.textContent = `${part.name} (+${part.hp || 0}hp, $${part.price})`;
            select.appendChild(option);
        });

        categoryContainer.appendChild(select);
        partsGrid.appendChild(categoryContainer);
    }
}

// Check systems for compatibility warnings
function checkSystems() {
    const powerData = calculateTotalPower();
    
    // Check for supporting mods compatibility
    const hasProperFuel = checkFuelSystem();
    const hasStrongInternals = checkInternals();
    const hasStrongClutch = checkClutch();
    
    if (!hasProperFuel || !hasStrongInternals || !hasStrongClutch) {
        console.warn('Some systems need upgrading for optimal performance - tuning-simulator.js:369');

        // Apply synergy bonuses
        if (category === 'turbo' && hasProperFuel) {
            multiplier += 0.1; // 10% bonus for proper fuel system
        }
        if (category === 'nos' && hasStrongInternals) {
            multiplier += 0.05; // 5% bonus for forged internals with NOS
        }
    }

    // Apply final multiplier
    totalHp = Math.round(totalHp * multiplier);
    totalTorque = Math.round(totalTorque * multiplier);

    // Apply limits based on supporting mods
    if (!hasStrongInternals) {
        totalHp = Math.min(totalHp, currentConfig.internals.maxHp || 600);
    }
    if (!hasStrongClutch) {
        totalTorque = Math.min(totalTorque, currentConfig.clutch.maxTorque || 400);
    }
    if (!hasProperFuel) {
        totalHp = Math.min(totalHp, currentConfig.fuel.maxHp || 500);
    }

    // Update display
    hpStat.textContent = totalHp;
    torqueStat.textContent = totalTorque;
    
    // Calculate and update acceleration
    const weightKg = 1520; // Base Supra weight
    const acceleration = calculateAcceleration(totalHp, totalTorque, weightKg);
    accelerationStat.textContent = acceleration.toFixed(1);

    // Calculate and update top speed
    const topSpeed = calculateTopSpeed(totalHp);
    topSpeedStat.textContent = Math.round(topSpeed);

    // Update chart
    updatePerformanceChart(totalHp, totalTorque);
    updateVisualEffects(totalHp);
}

// Check if proper fuel system is installed
function checkFuelSystem() {
    const injectorSize = currentConfig.fuel.maxHp || 500;
    const pumpSize = currentConfig.fuelPump.maxHp || 500;
    return injectorSize >= calculateTotalPower() && pumpSize >= calculateTotalPower();
}

// Check if internals can handle the power
function checkInternals() {
    return currentConfig.internals.maxHp >= calculateTotalPower();
}

// Check if clutch can handle the torque
function checkClutch() {
    return currentConfig.clutch.maxTorque >= calculateTotalTorque();
}

// Calculate 0-60 time based on power-to-weight
function calculateAcceleration(hp, torque, weight) {
    const powerToWeight = hp / weight;
    const baseTime = 4.6; // Stock 0-60 time
    const improvement = powerToWeight * 2;
    return Math.max(2.5, baseTime - improvement); // Minimum 2.5s with perfect launch
}

// Calculate theoretical top speed
function calculateTopSpeed(hp) {
    const baseSpeed = 250; // Stock limited top speed
    const unlimitedBase = 280; // Theoretical unlimited stock speed
    const powerFactor = Math.sqrt(hp / 320);
    return Math.min(350, unlimitedBase * powerFactor); // Max theoretical speed 350km/h

    // Update        console.warn('Some systems need upgrading for optimal performance - tuning-simulator.js:433');alculate derived stats
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