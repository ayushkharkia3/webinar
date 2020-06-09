window.onload = function() {
    const x = document.querySelectorAll('.cut-text');
    x.forEach(e => {
        if (e.textContent.length >= 100) {
            e.innerHTML = e.textContent.substring(0, 100) + '...';
        }
    })
    fetch('http://localhost:3000/admin/dashboard/chart', {
            headers: {
                'token': 'aaaaaaaaaaaaaa12222222225616032000000000000000658yushhhhhhhhhh'
            }
        })
        .then(d => {
            return d.json();
        }).then(data => {
            chart(data.title, data.user);
            chart2(data.title, data.clicks);
            chart3(data.title, data.shares);
        })
}

function chart(title, user) {
    var ctx = document.getElementById('blog-overview').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: title,
            datasets: [{
                label: 'No. of registered users per webinar',
                backgroundColor: 'rgba(255, 206, 86, 0.4)',
                data: user,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function chart2(title, user) {
    var ctx = document.getElementById('blog-views').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: title,
            datasets: [{
                label: 'No. of views per webinar',
                data: user,
                backgroundColor: 'rgba(255, 159, 64, 0.4)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function chart3(title, user) {
    var ctx = document.getElementById('blog-shares').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: title,
            datasets: [{
                label: 'No. of shares per webinar',
                data: user,
                backgroundColor: 'rgba(75, 192, 192, 0.4)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}