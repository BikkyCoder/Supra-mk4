// Specifications Page Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        tippy(element, {
            content: element.getAttribute('data-tooltip'),
            placement: 'top',
            animation: 'scale',
            theme: 'custom'
        });
    });

    // Power Calculator
    const powerCalculator = {
        init() {
            this.form = document.getElementById('power-calculator');
            if (!this.form) return;
            
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.calculatePower();
            });
        },

        calculatePower() {
            const baseHP = parseInt(document.getElementById('base-hp').value) || 321;
            const stage = document.getElementById('mod-stage').value;
            const boost = parseInt(document.getElementById('boost-pressure').value) || 15;
            
            let estimatedHP = baseHP;
            let riskLevel = 'Low';
            
            switch(stage) {
                case 'stage1':
                    estimatedHP = baseHP * (1 + (boost - 10) * 0.05);
                    break;
                case 'stage2':
                    estimatedHP = baseHP * (1 + (boost - 10) * 0.08);
                    break;
                case 'stage3':
                    estimatedHP = baseHP * (1 + (boost - 10) * 0.12);
                    break;
            }
            
            if (boost > 25) riskLevel = 'High';
            else if (boost > 18) riskLevel = 'Medium';
            
            this.displayResults(Math.round(estimatedHP), riskLevel);
        },

        displayResults(power, risk) {
            const resultsDiv = document.getElementById('calculator-results');
            resultsDiv.innerHTML = `
                <div class="result-card ${risk.toLowerCase()}-risk">
                    <h4>Estimated Power Output</h4>
                    <div class="power-value">${power} HP</div>
                    <div class="risk-level">Risk Level: ${risk}</div>
                </div>
            `;
        }
    };

    // Interactive Mod Stages
    const modStages = {
        init() {
            this.stages = document.querySelectorAll('.mod-stage');
            this.addInteractivity();
        },

        addInteractivity() {
            this.stages.forEach(stage => {
                const header = stage.querySelector('h3');
                const details = stage.querySelector('.mod-details');
                
                if (header && details) {
                    header.addEventListener('click', () => {
                        if (details.style.maxHeight) {
                            details.style.maxHeight = null;
                            stage.classList.remove('active');
                        } else {
                            details.style.maxHeight = details.scrollHeight + "px";
                            stage.classList.add('active');
                        }
                    });
                }
            });
        }
    };

    // Cost Calculator
    const costCalculator = {
        init() {
            this.bindEvents();
            this.updateTotal();
        },

        bindEvents() {
            const checkboxes = document.querySelectorAll('.mod-component input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', () => this.updateTotal());
            });
        },

        updateTotal() {
            const selectedMods = document.querySelectorAll('.mod-component input[type="checkbox"]:checked');
            let total = 0;
            
            selectedMods.forEach(mod => {
                total += parseInt(mod.getAttribute('data-cost')) || 0;
            });
            
            document.getElementById('total-cost').textContent = this.formatCurrency(total);
        },

        formatCurrency(amount) {
            return new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                maximumFractionDigits: 0
            }).format(amount);
        }
    };

    // Performance Comparison Chart
    const performanceChart = {
        init() {
            const ctx = document.getElementById('performance-chart');
            if (!ctx) return;

            new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['Horsepower', 'Torque', '0-60 Time', 'Top Speed', 'Quarter Mile', 'Reliability'],
                    datasets: [{
                        label: 'Stock',
                        data: [321, 315, 4.6, 155, 13.1, 95],
                        fill: true,
                        backgroundColor: 'rgba(255, 153, 51, 0.2)',
                        borderColor: 'rgb(255, 153, 51)',
                        pointBackgroundColor: 'rgb(255, 153, 51)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(255, 153, 51)'
                    }, {
                        label: 'Stage 2',
                        data: [600, 550, 3.5, 180, 11.2, 80],
                        fill: true,
                        backgroundColor: 'rgba(255, 77, 77, 0.2)',
                        borderColor: 'rgb(255, 77, 77)',
                        pointBackgroundColor: 'rgb(255, 77, 77)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(255, 77, 77)'
                    }]
                },
                options: {
                    elements: {
                        line: {
                            borderWidth: 3
                        }
                    },
                    scales: {
                        r: {
                            angleLines: {
                                display: true
                            },
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                    }
                }
            });
        }
    };

    // Initialize all features
    powerCalculator.init();
    modStages.init();
    costCalculator.init();
    performanceChart.init();

    // Smooth scroll for anchor links
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

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true
    });
});