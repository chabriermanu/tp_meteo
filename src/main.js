// Data retrieved from https://www.vikjavev.no/ver/#2020-04-15,2020-04-16
let temperature= []
let temperate= []
//let temperature3= []

let date = new Date()
let dateDuJour = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
Date.UTC(date.getFullYear(),date.getMonth(),date.getDate(), 0) // à 00 : 00

const historyWeatherData = async()=>{
    const Montpellier = await fetch("http://api.weatherapi.com/v1/forecast.json?key=54e1ccedab2a49da85981602251610&q=Montpellier&days=1&aqi=no&alerts=no")
    const result = await Montpellier.json()
    return result
}
const historyWeatherData2= async()=>{
    const bethune= await fetch("http://api.weatherapi.com/v1/forecast.json?key=54e1ccedab2a49da85981602251610&q=Béthune&days=1&aqi=no&alerts=no")
    const result2 = await bethune.json()
    return result2 
}
const Montpellier= await historyWeatherData()
const location= Montpellier.location.name
console.log (Montpellier)


const bethune= await historyWeatherData2()
const location2 = bethune.location.name
console.log (bethune)



// faire un tabelau en reccuperant les températures heure / heures
temperature = Montpellier.forecast.forecastday[0].hour.map((heure)=>heure.temp_c);
temperate= bethune.forecast.forecastday[0].hour.map((heure)=>heure.temp_c);

Highcharts.chart('container', {
    chart: {
        type: 'spline',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
    },
    title: {
        text: `Température de la journée   `,
        align: 'left'
    },
    subtitle: {
        text: new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate(), 0)) // à 00 : 00
        
    },
    xAxis: {
        type: 'datetime',
        labels: {
            
            overflow: 'justify'
        },
        tickInterval: 3*3600*1000,
        plotBands: [{
            from: Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(),0),
            to: Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(),6),
            color: 'rgba(246, 248, 249, 1)',
            label: {
                text: 'nuit ',
                style: {
                    opacity: 0.7
                }
            }
        }, {
            from :Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 6),
            to :Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(),12),
            color: 'rgba(7, 172, 248, 0.77)',
            label: {
                text: 'matin ',
                style: {
                    opacity: 0.7
                }
            }
        }, {
            from :Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 12),
            to :Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(),14),
            color: 'hsla(200, 20%, 97%, 1.00)',
            label: {
                text: 'Midi ',
                style: {
                    opacity: 0.7
                }
            }
        }, {
            from :Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 14),
            to :Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(),19),
            color: 'rgba(7, 172, 248, 0.77)',
            label: {
                text: 'Après-midi',
                style: {
                    opacity: 0.7
                }
            }

        }, {
            from :Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 19),
            to :Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(),24),
            color: 'hsla(200, 20%, 97%, 1.00)',
            label: {
                text: 'Soir',
                style: {
                    opacity: 0.7
                }
            }
        }
        ]
    },
    yAxis: {
        title: {
            text: "Température en °C"
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: []
    },
    tooltip: {
      formatter: function(){
        const icon = this.y >10 ? "☼" :"";
        return `<b>${this.series.name}</b><br/>
                température: ${this.y} °c ${icon}`;
    },
        valueSuffix: '°c'
    },
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
            pointInterval: 3600000, // one hour
            pointStart: dateDuJour
        }
    },
    series: [{
        name: location,
        data: temperature
            
    }, {
        name: location2,
        data: temperate        
    }
    ],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});

