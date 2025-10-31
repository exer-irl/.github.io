// ETL Chart Data
const etlData = {
    time: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 8', 'Week 12'],
        datasets: [{
            label: 'Before Optimization (hours)',
            data: [8.2, 8.5, 8.1, 8.3, 8.4, 8.2],
            backgroundColor: 'rgba(239, 68, 68, 0.7)',
            borderColor: 'rgba(239, 68, 68, 1)',
            borderWidth: 2
        }, {
            label: 'After Optimization (hours)',
            data: [null, null, null, null, 1.4, 1.2],
            backgroundColor: 'rgba(16, 185, 129, 0.7)',
            borderColor: 'rgba(16, 185, 129, 1)',
            borderWidth: 2
        }]
    },
    volume: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 8', 'Week 12'],
        datasets: [{
            label: 'Records Processed (millions)',
            data: [2.5, 2.6, 2.7, 2.8, 4.2, 4.5],
            backgroundColor: 'rgba(37, 99, 235, 0.7)',
            borderColor: 'rgba(37, 99, 235, 1)',
            borderWidth: 2,
            fill: true
        }]
    },
    quality: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 8', 'Week 12'],
        datasets: [{
            label: 'Data Quality Score (%)',
            data: [92.3, 93.1, 94.2, 95.8, 98.5, 99.7],
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: 'rgba(59, 130, 246, 1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }]
    }
};

// OEE Chart Data for different production lines
const oeeData = {
    line1: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Before Optimization',
            data: [58, 61, 59, 62, 60, 63],
            backgroundColor: 'rgba(239, 68, 68, 0.7)',
            borderColor: 'rgba(239, 68, 68, 1)',
            borderWidth: 2
        }, {
            label: 'After Optimization',
            data: [null, null, null, 75, 82, 85],
            backgroundColor: 'rgba(16, 185, 129, 0.7)',
            borderColor: 'rgba(16, 185, 129, 1)',
            borderWidth: 2
        }]
    },
    line2: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Before Optimization',
            data: [52, 55, 53, 56, 54, 57],
            backgroundColor: 'rgba(239, 68, 68, 0.7)',
            borderColor: 'rgba(239, 68, 68, 1)',
            borderWidth: 2
        }, {
            label: 'After Optimization',
            data: [null, null, null, 68, 76, 81],
            backgroundColor: 'rgba(16, 185, 129, 0.7)',
            borderColor: 'rgba(16, 185, 129, 1)',
            borderWidth: 2
        }]
    },
    line3: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Before Optimization',
            data: [65, 67, 66, 68, 67, 69],
            backgroundColor: 'rgba(239, 68, 68, 0.7)',
            borderColor: 'rgba(239, 68, 68, 1)',
            borderWidth: 2
        }, {
            label: 'After Optimization',
            data: [null, null, null, 78, 86, 89],
            backgroundColor: 'rgba(16, 185, 129, 0.7)',
            borderColor: 'rgba(16, 185, 129, 1)',
            borderWidth: 2
        }]
    }
};

// OEE Breakdown Data (Availability × Performance × Quality)
const oeeBreakdownData = {
    labels: ['Availability', 'Performance', 'Quality'],
    datasets: [{
        label: 'Before (%)',
        data: [75, 82, 95],
        backgroundColor: 'rgba(239, 68, 68, 0.7)',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 2
    }, {
        label: 'After (%)',
        data: [92, 94, 98],
        backgroundColor: 'rgba(16, 185, 129, 0.7)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2
    }]
};

// Chart instances
let etlChart;
let oeeChart;
let oeeBreakdownChart;

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize ETL Chart
    const etlCtx = document.getElementById('etlChart');
    if (etlCtx) {
        etlChart = new Chart(etlCtx, {
            type: 'bar',
            data: etlData.time,
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'ETL Processing Time Comparison',
                        font: {
                            size: 16
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.parsed.y;
                                if (context.chart.data.datasets[0].label.includes('hours')) {
                                    label += ' hours';
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Hours'
                        }
                    }
                }
            }
        });
    }

    // Initialize OEE Chart
    const oeeCtx = document.getElementById('oeeChart');
    if (oeeCtx) {
        oeeChart = new Chart(oeeCtx, {
            type: 'line',
            data: oeeData.line1,
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'OEE Performance Over Time (%)',
                        font: {
                            size: 16
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'OEE (%)'
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index',
                }
            }
        });
    }

    // Initialize OEE Breakdown Chart
    const oeeBreakdownCtx = document.getElementById('oeeBreakdown');
    if (oeeBreakdownCtx) {
        oeeBreakdownChart = new Chart(oeeBreakdownCtx, {
            type: 'radar',
            data: oeeBreakdownData,
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'OEE Component Analysis',
                        font: {
                            size: 16
                        }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                }
            }
        });
    }
});

// Function to update ETL Chart
function updateETLChart(metric) {
    if (!etlChart) return;

    // Update button states
    document.querySelectorAll('.chart-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Update chart data
    etlChart.data = etlData[metric];

    // Update chart type and options based on metric
    if (metric === 'time') {
        etlChart.config.type = 'bar';
        etlChart.options.plugins.title.text = 'ETL Processing Time Comparison';
        etlChart.options.scales.y.title.text = 'Hours';
    } else if (metric === 'volume') {
        etlChart.config.type = 'line';
        etlChart.options.plugins.title.text = 'Data Volume Processed Over Time';
        etlChart.options.scales.y.title.text = 'Records (millions)';
    } else if (metric === 'quality') {
        etlChart.config.type = 'line';
        etlChart.options.plugins.title.text = 'Data Quality Score Improvement';
        etlChart.options.scales.y.title.text = 'Quality Score (%)';
        etlChart.options.scales.y.min = 90;
        etlChart.options.scales.y.max = 100;
    }

    etlChart.update();
}

// Function to update OEE Chart
function updateOEEChart() {
    if (!oeeChart) return;

    const selectedLine = document.getElementById('lineSelect').value;
    oeeChart.data = oeeData[selectedLine];
    oeeChart.update();
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Add intersection observer for animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all case studies
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.case-study').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add click animation to metric cards
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.metric-card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
});
