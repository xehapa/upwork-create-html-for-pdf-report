const colorVar = {
    red: '#F2574A',
    orange: '#FBBC12',
    green: '#31CE5D',
    skyBlue: '#3994E9',
    purple: '#C53C84',
    legendLinkColor: '#007296',
}

const ctx = document.getElementById('myChart');


new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: false,
        datasets: [{
            label: '# of Votes',
            data: [20, 5, 5, 5, 5],
            borderWidth: 2,
            backgroundColor: [
                colorVar.red,
                colorVar.orange,
                colorVar.green,
                colorVar.skyBlue,
                colorVar.purple,
            ]
        }]
    },
    options: {
        scales: false,
        cutout: '66%'
    }
});