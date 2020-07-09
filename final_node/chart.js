    <script src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>
 



<canvas id="myChart" width="1200" height="400"></canvas>

<script>
    console.log('{{data.regDate|safe}}')
    var ctx = document.getElementById('myChart').getContext('2d');
    var data = {
        type: 'line',
        data: {
            labels: {{time|safe}},
            datasets: [{
                label: 'Humi',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                fill : false,
                lineTension:0.1,
                data: {{humi}},
            },
            {
                label: "Temp",
                backgroundColor: 'rgb(75, 99, 132)',
                borderColor: 'rgb(75, 99, 132)',
                fill : false,
                lineTension:0.1,
                data: {{temp}},
            }]
        },
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontSize : 14,
                    }
                }]
            }
        }
    }
    var chart = new Chart(ctx, data);
</script>
