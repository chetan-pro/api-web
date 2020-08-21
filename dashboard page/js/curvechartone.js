google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data =
        google.visualization.arrayToDataTable([
            ['time', 'passing', 'falling', 'active', 'exception'],
            ['5 sec', 5500, 100, 4000, 10],
            ['10 sec', 1000, 150, 3500, 60],
            ['15 sec', 3060, 110, 2000, 120],
            ['20 sec', 3500, 140, 1500, 10],
            ['25 sec', 2530, 100, 500, 40],
            ['30 sec', 1500, 115, 5500, 50],
            ['35 sec', 3830, 120, 3000, 10]
        ]);


    var options = {
        width: '100%',
        // height: '70%',
        curveType: 'function',
        colors: ['#1B5E20', '#B71C1C', '#0D47A1', '#F57F17'],
        pointSize: 5,
        lineWidth: 2,
        legend: 'none',
        vAxis: {
            scaleType: 'linear',
            gridlines: { count: 7 }
        },
        hAxis: { viewWindow: { min: 100 } },
        hAxis : { 
            textStyle : {
                fontSize: 8// or the number you want
            }
    
        },
        vAxis : { 
            textStyle : {
                fontSize: 8 // or the number you want
            }
    
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curvechart'));

    chart.draw(data, options);
}