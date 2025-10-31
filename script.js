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

// Press Metrics Data for IoT monitoring
const pressMetricsData = {
    press1: {
        downtime: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Mechanical (hours)',
                data: [12, 11, 8, 6, 5, 4],
                backgroundColor: 'rgba(239, 68, 68, 0.7)',
            }, {
                label: 'Material (hours)',
                data: [8, 7, 5, 4, 3, 2],
                backgroundColor: 'rgba(245, 158, 11, 0.7)',
            }, {
                label: 'Changeover (hours)',
                data: [6, 5, 5, 4, 3, 3],
                backgroundColor: 'rgba(59, 130, 246, 0.7)',
            }]
        },
        temperature: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
            datasets: [{
                label: 'Hydraulic Fluid (°F)',
                data: [145, 152, 168, 175, 172, 158],
                borderColor: 'rgba(239, 68, 68, 1)',
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }, {
                label: 'Press Platen (°F)',
                data: [320, 325, 345, 355, 350, 335],
                borderColor: 'rgba(245, 158, 11, 1)',
                backgroundColor: 'rgba(245, 158, 11, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        cureTime: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Average Cure Time (seconds)',
                data: [145, 143, 140, 138, 137, 136],
                borderColor: 'rgba(16, 185, 129, 1)',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }, {
                label: 'Target (seconds)',
                data: [140, 140, 140, 140, 140, 140],
                borderColor: 'rgba(59, 130, 246, 1)',
                borderDash: [5, 5],
                borderWidth: 2,
                fill: false
            }]
        }
    },
    press2: {
        downtime: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Mechanical (hours)',
                data: [15, 13, 10, 8, 6, 5],
                backgroundColor: 'rgba(239, 68, 68, 0.7)',
            }, {
                label: 'Material (hours)',
                data: [10, 9, 7, 5, 4, 3],
                backgroundColor: 'rgba(245, 158, 11, 0.7)',
            }, {
                label: 'Changeover (hours)',
                data: [7, 6, 5, 5, 4, 3],
                backgroundColor: 'rgba(59, 130, 246, 0.7)',
            }]
        },
        temperature: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
            datasets: [{
                label: 'Hydraulic Fluid (°F)',
                data: [148, 155, 170, 178, 175, 160],
                borderColor: 'rgba(239, 68, 68, 1)',
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }, {
                label: 'Press Platen (°F)',
                data: [318, 323, 342, 352, 348, 332],
                borderColor: 'rgba(245, 158, 11, 1)',
                backgroundColor: 'rgba(245, 158, 11, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        cureTime: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Average Cure Time (seconds)',
                data: [148, 146, 143, 141, 140, 139],
                borderColor: 'rgba(16, 185, 129, 1)',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }, {
                label: 'Target (seconds)',
                data: [140, 140, 140, 140, 140, 140],
                borderColor: 'rgba(59, 130, 246, 1)',
                borderDash: [5, 5],
                borderWidth: 2,
                fill: false
            }]
        }
    },
    press3: {
        downtime: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Mechanical (hours)',
                data: [10, 9, 7, 5, 4, 3],
                backgroundColor: 'rgba(239, 68, 68, 0.7)',
            }, {
                label: 'Material (hours)',
                data: [6, 5, 4, 3, 2, 2],
                backgroundColor: 'rgba(245, 158, 11, 0.7)',
            }, {
                label: 'Changeover (hours)',
                data: [5, 5, 4, 4, 3, 2],
                backgroundColor: 'rgba(59, 130, 246, 0.7)',
            }]
        },
        temperature: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
            datasets: [{
                label: 'Hydraulic Fluid (°F)',
                data: [142, 150, 165, 172, 168, 155],
                borderColor: 'rgba(239, 68, 68, 1)',
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }, {
                label: 'Press Platen (°F)',
                data: [315, 320, 340, 348, 345, 328],
                borderColor: 'rgba(245, 158, 11, 1)',
                backgroundColor: 'rgba(245, 158, 11, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        cureTime: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Average Cure Time (seconds)',
                data: [142, 140, 138, 137, 136, 136],
                borderColor: 'rgba(16, 185, 129, 1)',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }, {
                label: 'Target (seconds)',
                data: [140, 140, 140, 140, 140, 140],
                borderColor: 'rgba(59, 130, 246, 1)',
                borderDash: [5, 5],
                borderWidth: 2,
                fill: false
            }]
        }
    },
    press4: {
        downtime: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Mechanical (hours)',
                data: [14, 12, 9, 7, 5, 4],
                backgroundColor: 'rgba(239, 68, 68, 0.7)',
            }, {
                label: 'Material (hours)',
                data: [9, 8, 6, 5, 3, 3],
                backgroundColor: 'rgba(245, 158, 11, 0.7)',
            }, {
                label: 'Changeover (hours)',
                data: [6, 6, 5, 4, 4, 3],
                backgroundColor: 'rgba(59, 130, 246, 0.7)',
            }]
        },
        temperature: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
            datasets: [{
                label: 'Hydraulic Fluid (°F)',
                data: [147, 154, 169, 176, 173, 159],
                borderColor: 'rgba(239, 68, 68, 1)',
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }, {
                label: 'Press Platen (°F)',
                data: [322, 327, 346, 354, 351, 336],
                borderColor: 'rgba(245, 158, 11, 1)',
                backgroundColor: 'rgba(245, 158, 11, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        cureTime: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Average Cure Time (seconds)',
                data: [146, 144, 141, 139, 138, 137],
                borderColor: 'rgba(16, 185, 129, 1)',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }, {
                label: 'Target (seconds)',
                data: [140, 140, 140, 140, 140, 140],
                borderColor: 'rgba(59, 130, 246, 1)',
                borderDash: [5, 5],
                borderWidth: 2,
                fill: false
            }]
        }
    }
};

// Press Status Data (for bar chart showing current status)
const pressStatusData = {
    labels: ['Press 1', 'Press 2', 'Press 3', 'Press 4', 'Press 5', 'Press 6', 'Press 7', 'Press 8'],
    datasets: [{
        label: 'Running Time (hours)',
        data: [18.5, 17.2, 19.1, 16.8, 18.9, 17.5, 19.3, 18.1],
        backgroundColor: 'rgba(16, 185, 129, 0.7)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 2
    }, {
        label: 'Downtime (hours)',
        data: [3.5, 4.8, 2.9, 5.2, 3.1, 4.5, 2.7, 3.9],
        backgroundColor: 'rgba(239, 68, 68, 0.7)',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 2
    }, {
        label: 'Idle (hours)',
        data: [2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0],
        backgroundColor: 'rgba(156, 163, 175, 0.7)',
        borderColor: 'rgba(156, 163, 175, 1)',
        borderWidth: 2
    }]
};

// Chart instances
let etlChart;
let pressChart;
let pressStatusChart;

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

    // Initialize Press Metrics Chart
    const pressCtx = document.getElementById('pressChart');
    if (pressCtx) {
        pressChart = new Chart(pressCtx, {
            type: 'bar',
            data: pressMetricsData.press1.downtime,
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
                        text: 'Downtime Analysis by Category',
                        font: {
                            size: 16
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Hours'
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

    // Initialize Press Status Chart
    const pressStatusCtx = document.getElementById('pressStatus');
    if (pressStatusCtx) {
        pressStatusChart = new Chart(pressStatusCtx, {
            type: 'bar',
            data: pressStatusData,
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
                        text: 'Press Fleet Status - Last 24 Hours',
                        font: {
                            size: 16
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        max: 24,
                        title: {
                            display: true,
                            text: 'Hours'
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

// Function to update Press Chart based on press and metric selection
function updatePressChart() {
    if (!pressChart) return;

    const selectedPress = document.getElementById('pressSelect').value;
    const selectedMetric = document.getElementById('metricSelect').value;

    // Get the data for the selected press and metric
    const chartData = pressMetricsData[selectedPress][selectedMetric];

    // Update chart data
    pressChart.data = chartData;

    // Update chart type and options based on metric
    if (selectedMetric === 'downtime') {
        pressChart.config.type = 'bar';
        pressChart.options.plugins.title.text = 'Downtime Analysis by Category';
        pressChart.options.scales.x.stacked = true;
        pressChart.options.scales.y.stacked = true;
        pressChart.options.scales.y.title.text = 'Hours';
        delete pressChart.options.scales.y.max;
    } else if (selectedMetric === 'temperature') {
        pressChart.config.type = 'line';
        pressChart.options.plugins.title.text = 'Temperature Monitoring - 24 Hour Cycle';
        pressChart.options.scales.x.stacked = false;
        pressChart.options.scales.y.stacked = false;
        pressChart.options.scales.y.title.text = 'Temperature (°F)';
        pressChart.options.scales.y.max = 400;
    } else if (selectedMetric === 'cureTime') {
        pressChart.config.type = 'line';
        pressChart.options.plugins.title.text = 'Cure Time Consistency vs Target';
        pressChart.options.scales.x.stacked = false;
        pressChart.options.scales.y.stacked = false;
        pressChart.options.scales.y.title.text = 'Seconds';
        pressChart.options.scales.y.max = 160;
    }

    pressChart.update();
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
