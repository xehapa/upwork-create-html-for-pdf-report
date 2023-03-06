const colorVar = {
    red: '#F2574A',
    orange: '#FBBC12',
    green: '#31CE5D',
    leafGreen: '#43B128',
    skyBlue: '#3994E9',
    lightBlue: '#00ABE1',
    purple: '#C53C84',
    lime: '#A4E044',
    eggPlant: '#9F73C2',
    bloodRed: '#C02033',
    chocolate: '#B15928',
    areaChartBlue: '#00AAE1',
    legendLinkColor: '#007296',
}

const p3Charts = document.querySelectorAll('.pChart');
if (p3Charts.length > 0) {
    const lineColors = []
    for(/** @var HtmlElement */const el of p3Charts) {
        lineColors.push(el.getAttribute('data-color'))
        new ApexCharts(el, {
            series: [{
                type: 'area',
                data: [87, 102, 107, 107, 110, 113, 107, 111, 107, 113, 111, 109, 114],
                dataLabels: {
                }
            }, {
                type: 'line',
                data: [102, 105, 104, 110, 107, 111, 112, 109, 108, 107, 100, 101, 103],
                
            }],
            chart: {
                offsetX: 0,
                offsetY: -28,
                type: 'line',
                background: undefined,
                height: 168,
                width: 240,
                padding: 0,
                parentHeightOffset: 0,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                selection: {
                    enabled: false,
                },
            },
            stroke: {
                curve: ['smooth', 'straight'],
                width: [0, 2],
                colors: lineColors,
            },
            grid: {
                borderColor: '#F0F0F0',
                position: 'front',
                xaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            fill: {
                colors: ['#FFFFFF'],
                opacity: 1,
                type: ['gradient'],
                gradient: {
                    type: "vertical",
                    shadeIntensity: 0.1,
                    gradientToColors: [colorVar.areaChartBlue],
                    opacityFrom: 0.88,
                    opacityTo: 0.75,
                    stops: [50, 100],
                },
            },
            markers: {
                size: [0, 4],
                colors: [null, el.getAttribute('data-color')],
                strokeColors: undefined,
                strokeWidth: 0,
                strokeOpacity: 0,
                strokeDashArray: 0,
                fillOpacity: 1,
                shape: "circle",
                radius: 2,
            },
            dataLabels: {
                enabled: false,
            },        
            xaxis: {
                type: 'number',
                categories: [10, 36, 44, 57, 75],
                tickAmount: undefined,
                tickPlacement: 'between',
                min: undefined,
                max: undefined,
                range: undefined,
                floating: false,
                decimalsInFloat: undefined,
                labels: {
                    style: {
                        colors: '#A3A3A3'
                    }
                },
            },
            yaxis: {
                min: 80,
                max: 120,
                showForNullSeries: true,
                tickAmount: 2,
                labels: {
                    style: {
                        colors: '#A3A3A3',
                    }
                },
            },
            legend: {
                show: false
            }
        }).render()
    }
}

const cp4 = document.getElementById('page4Chart');
if (cp4) {
    new Chart(cp4, {
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
}

const cp5 = document.getElementById('page5Chart');
if (cp5) {
    new Chart(cp5, {
        type: 'doughnut',
        data: {
            labels: false,
            datasets: [{
                label: '# of Votes',
                data: [13, 10, 5, 4, 3, 3, 3, 3, 5, 20],
                borderWidth: 2,
                backgroundColor: [
                    colorVar.red,
                    colorVar.orange,
                    colorVar.green,
                    colorVar.skyBlue,
                    colorVar.purple,
                    colorVar.lightBlue,
                    colorVar.eggPlant,
                    colorVar.lime,
                    colorVar.bloodRed,
                    colorVar.lime,
                    colorVar.bloodRed
                ]
            }]
        },
        options: {
            scales: false,
            cutout: '66%'
        }
    });
}