<<<<<<< HEAD
const performanceParts = [
    {
        name: "Basic ECU Remap / Stage 1 Tune",
        hpGain: "+40 → +100",
        torqueGain: "+40 → +120",
        notes: "Best first upgrade. Requires good fuel, stock turbos ok up to certain limit.",
        category: "power"
    },
    {
        name: "Upgraded Single Turbo (Garret GT3582)",
        hpGain: "+150 → +300",
        torqueGain: "+150 → +350",
        notes: "Big gains but needs supporting fuel, intercooler, ECU tune, downpipe. Lag increases.",
        category: "power"
    },
    {
        name: "Twin Turbo Upgrade",
        hpGain: "+120 → +350",
        torqueGain: "+130 → +400",
        notes: "If replacing stock twins with big twins or hybrid setups.",
        category: "power"
    },
    {
        name: "Turbocharger Hybrid",
        hpGain: "+60 → +180",
        torqueGain: "+80 → +220",
        notes: "Less lag, better top-end; still needs fuel & tune.",
        category: "power"
    },
    {
        name: "Exhaust System",
        hpGain: "+10 → +40",
        torqueGain: "+10 → +30",
        notes: "Downpipe (high-flow) gives larger gains: +20 → +80 HP if paired with tune.",
        category: "power"
    },
    {
        name: "High-Flow Downpipe",
        hpGain: "+20 → +80",
        torqueGain: "+30 → +120",
        notes: "Very effective with turbo upgrades and tune.",
        category: "power"
    },
    {
        name: "High-Flow Intake / Cold Air Intake",
        hpGain: "+5 → +20",
        torqueGain: "+5 → +20",
        notes: "Small alone, helpful with tune.",
        category: "power"
    },
    {
        name: "Upgraded Intercooler",
        hpGain: "+10 → +80",
        torqueGain: "+10 → +60",
        notes: "Prevents heat soak—critical for consistent power on track.",
        category: "power"
    },
    {
        name: "Fuel System Upgrade",
        hpGain: "Enables big power",
        torqueGain: "—",
        notes: "Must upgrade when injector duty exceeds stock; enables larger HP targets.",
        category: "supporting"
    },
    {
        name: "ECU Standalone / Flex Fuel",
        hpGain: "+30 → +150",
        torqueGain: "+30 → +150",
        notes: "Essential for big builds and reliability.",
        category: "power"
    },
    {
        name: "Camshafts + Headwork",
        hpGain: "+30 → +120",
        torqueGain: "+40 → +150",
        notes: "For high-RPM power; expensive and engine-out work.",
        category: "power"
    },
    {
        name: "Forged Internals",
        hpGain: "Enables 600+ HP",
        torqueGain: "—",
        notes: "Required for very high HP builds.",
        category: "supporting"
    },
    {
        name: "Nitrous Oxide (NOS)",
        hpGain: "+80 → +300",
        torqueGain: "+80 → +300",
        notes: "Instant boost; needs safe tune/fuel and drivetrain prep.",
        category: "power"
    },
    {
        name: "Supercharger",
        hpGain: "+100 → +250",
        torqueGain: "+120 → +300",
        notes: "Different character; packaging issues.",
        category: "power"
    },
    {
        name: "Performance Tires & Wheels",
        hpGain: "—",
        torqueGain: "Traction +",
        notes: "Improves 0–100 significantly; allows using available power.",
        category: "handling"
    },
    {
        name: "Upgraded Clutch & Transmission",
        hpGain: "—",
        torqueGain: "Reliability +",
        notes: "Required above certain HP to handle torque.",
        category: "supporting"
    },
    {
        name: "Aero / Wing",
        hpGain: "—",
        torqueGain: "—",
        notes: "Not power but improves track performance.",
        category: "handling"
    },
    {
        name: "Limited Slip Differential",
        hpGain: "—",
        torqueGain: "Traction +",
        notes: "Essential with big power for launch and cornering.",
        category: "handling"
    },
    {
        name: "Big Brake Kit",
        hpGain: "—",
        torqueGain: "—",
        notes: "Must upgrade with faster cars.",
        category: "handling"
    }
];

// Function to populate the parts table
function populatePartsTable(category = 'all') {
    const tableBody = document.getElementById('partsTableBody');
    tableBody.innerHTML = '';

    performanceParts
        .filter(part => category === 'all' || part.category === category)
        .forEach(part => {
            const row = document.createElement('tr');
            row.className = 'part-row';
            row.innerHTML = `
                <td>${part.name}</td>
                <td class="hp-gain">${part.hpGain}</td>
                <td class="torque-gain">${part.torqueGain}</td>
                <td class="notes">${part.notes}</td>
            `;
            tableBody.appendChild(row);
        });
}

// Initialize the table and add event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initial population
    populatePartsTable();

    // Add click handlers for category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Update table
            populatePartsTable(button.dataset.category);
        });
    });
=======
const performanceParts = [
    {
        name: "Basic ECU Remap / Stage 1 Tune",
        hpGain: "+40 → +100",
        torqueGain: "+40 → +120",
        notes: "Best first upgrade. Requires good fuel, stock turbos ok up to certain limit.",
        category: "power"
    },
    {
        name: "Upgraded Single Turbo (Garret GT3582)",
        hpGain: "+150 → +300",
        torqueGain: "+150 → +350",
        notes: "Big gains but needs supporting fuel, intercooler, ECU tune, downpipe. Lag increases.",
        category: "power"
    },
    {
        name: "Twin Turbo Upgrade",
        hpGain: "+120 → +350",
        torqueGain: "+130 → +400",
        notes: "If replacing stock twins with big twins or hybrid setups.",
        category: "power"
    },
    {
        name: "Turbocharger Hybrid",
        hpGain: "+60 → +180",
        torqueGain: "+80 → +220",
        notes: "Less lag, better top-end; still needs fuel & tune.",
        category: "power"
    },
    {
        name: "Exhaust System",
        hpGain: "+10 → +40",
        torqueGain: "+10 → +30",
        notes: "Downpipe (high-flow) gives larger gains: +20 → +80 HP if paired with tune.",
        category: "power"
    },
    {
        name: "High-Flow Downpipe",
        hpGain: "+20 → +80",
        torqueGain: "+30 → +120",
        notes: "Very effective with turbo upgrades and tune.",
        category: "power"
    },
    {
        name: "High-Flow Intake / Cold Air Intake",
        hpGain: "+5 → +20",
        torqueGain: "+5 → +20",
        notes: "Small alone, helpful with tune.",
        category: "power"
    },
    {
        name: "Upgraded Intercooler",
        hpGain: "+10 → +80",
        torqueGain: "+10 → +60",
        notes: "Prevents heat soak—critical for consistent power on track.",
        category: "power"
    },
    {
        name: "Fuel System Upgrade",
        hpGain: "Enables big power",
        torqueGain: "—",
        notes: "Must upgrade when injector duty exceeds stock; enables larger HP targets.",
        category: "supporting"
    },
    {
        name: "ECU Standalone / Flex Fuel",
        hpGain: "+30 → +150",
        torqueGain: "+30 → +150",
        notes: "Essential for big builds and reliability.",
        category: "power"
    },
    {
        name: "Camshafts + Headwork",
        hpGain: "+30 → +120",
        torqueGain: "+40 → +150",
        notes: "For high-RPM power; expensive and engine-out work.",
        category: "power"
    },
    {
        name: "Forged Internals",
        hpGain: "Enables 600+ HP",
        torqueGain: "—",
        notes: "Required for very high HP builds.",
        category: "supporting"
    },
    {
        name: "Nitrous Oxide (NOS)",
        hpGain: "+80 → +300",
        torqueGain: "+80 → +300",
        notes: "Instant boost; needs safe tune/fuel and drivetrain prep.",
        category: "power"
    },
    {
        name: "Supercharger",
        hpGain: "+100 → +250",
        torqueGain: "+120 → +300",
        notes: "Different character; packaging issues.",
        category: "power"
    },
    {
        name: "Performance Tires & Wheels",
        hpGain: "—",
        torqueGain: "Traction +",
        notes: "Improves 0–100 significantly; allows using available power.",
        category: "handling"
    },
    {
        name: "Upgraded Clutch & Transmission",
        hpGain: "—",
        torqueGain: "Reliability +",
        notes: "Required above certain HP to handle torque.",
        category: "supporting"
    },
    {
        name: "Aero / Wing",
        hpGain: "—",
        torqueGain: "—",
        notes: "Not power but improves track performance.",
        category: "handling"
    },
    {
        name: "Limited Slip Differential",
        hpGain: "—",
        torqueGain: "Traction +",
        notes: "Essential with big power for launch and cornering.",
        category: "handling"
    },
    {
        name: "Big Brake Kit",
        hpGain: "—",
        torqueGain: "—",
        notes: "Must upgrade with faster cars.",
        category: "handling"
    }
];

// Function to populate the parts table
function populatePartsTable(category = 'all') {
    const tableBody = document.getElementById('partsTableBody');
    tableBody.innerHTML = '';

    performanceParts
        .filter(part => category === 'all' || part.category === category)
        .forEach(part => {
            const row = document.createElement('tr');
            row.className = 'part-row';
            row.innerHTML = `
                <td>${part.name}</td>
                <td class="hp-gain">${part.hpGain}</td>
                <td class="torque-gain">${part.torqueGain}</td>
                <td class="notes">${part.notes}</td>
            `;
            tableBody.appendChild(row);
        });
}

// Initialize the table and add event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initial population
    populatePartsTable();

    // Add click handlers for category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Update table
            populatePartsTable(button.dataset.category);
        });
    });
>>>>>>> 628d08b5950b3724dc6063df2fbfe28da6c5c9a6
});