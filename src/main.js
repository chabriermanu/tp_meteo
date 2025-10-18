(async () => {
    const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/fr/fr-all.topo.json'
    ).then(response => response.json());

    Highcharts.mapChart('container', {
        chart: {
            map: topology
        },
        title: {
            text: 'Les centres AFPA proposant les formations CDA et DWWM.',
            align: 'left'
        },
        legend: {
            enabled: true,
            itemStyle: {
                fontSize: '16px',
                fontWeight: 'bold'
            },
            itemDistance: 25
        },
        mapNavigation: {
            enabled: true
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.name}</b><br>Lat: {point.lat:.2f}, Lon: {point.lon:.2f}'
        },
        plotOptions: {
            mappoint: {
                cluster: {
                    enabled: true,
                    allowOverlap: false,
                    animation: {
                        duration: 450
                    },
                    layoutAlgorithm: {
                        type: 'grid',
                        gridSize: 70
                    },
                    zones: [
                        { from: 1, to: 4, marker: { radius: 13 } },
                        { from: 5, to: 9, marker: { radius: 15 } },
                        { from: 10, to: 15, marker: { radius: 17 } },
                        { from: 16, to: 20, marker: { radius: 19 } },
                        { from: 21, to: 100, marker: { radius: 21 } }
                    ]
                }
            }
        },
        series: [
            {
                borderColor: '#A0A0A0',
                nullColor: 'rgba(177, 244, 177, 0.5)',
                showInLegend: false
            },
            {
                type: 'mappoint',
                name: 'Centres CDA',
                color: '#28a745',
                showInLegend: true,
                colorKey: 'clusterPointsAmount',
                dataLabels: {
                    verticalAlign: 'top'
                },
                data: [
                    { name: "DUNKERQUE", lat: 51.0346, lon: 2.3764 },
                    { name: "AMIENS", lat: 49.8927, lon: 2.2988 },
                    { name: "LES GREVES LANGUEUX", lat: 48.4956, lon: -2.6948 },
                    { name: "BEAUMONT", lat: 45.7542, lon: 3.0860 }
                ]
            },
            {
                type: 'mappoint',
                name: 'Centres DWWM',
                color: '#0077be',
                showInLegend: true,
                colorKey: 'clusterPointsAmount',
                dataLabels: {
                    verticalAlign: 'top'
                },
                data: [
                    { name: "LE HAVRE", lat: 49.4957, lon: 0.1018 },
                    { name: "Rouen Saint-Etienne-du-Rouvray", lat: 49.3914, lon: 1.0729 },
                    { name: "FONTENAY LE COMTE", lat: 46.4597, lon: -0.7959 },
                    { name: "OLIVET", lat: 47.8761, lon: 1.9096 },
                    { name: "Centre d'Angoulême / Mornac", lat: 45.7022, lon: 0.3029 },
                    { name: "NIORT", lat: 46.3123, lon: -0.4397 },
                    { name: "Centre de Bayonne", lat: 43.5054, lon: -1.4709 },
                    { name: "TARBES", lat: 43.2543, lon: 0.0736 },
                    { name: "Lourdes", lat: 43.0914, lon: -0.0457 },
                    { name: "Auch", lat: 43.6461, lon: 0.5906 },
                    { name: "Albi", lat: 43.9344, lon: 2.1838 },
                    { name: "NICE", lat: 43.7282, lon: 7.2860 },
                    { name: "Centre de Marseille St Jérôme", lat: 43.3286, lon: 5.4150 }
                ]
            },
            {
                type: 'mappoint',
                name: 'Centres CDA et DWWM',
                color: '#f90505',
                showInLegend: true,
                colorKey: 'clusterPointsAmount',
                dataLabels: {
                    verticalAlign: 'top'
                },
                data: [
                    { name: "POMPEY", lat: 48.7766, lon: 6.1398 },
                    { name: "BREST", lat: 48.4134, lon: -4.5008 },
                    { name: "CHATELLERAULT", lat: 46.8132, lon: 0.5330 },
                    { name: "BRIVE LA GAILLARDE", lat: 45.1484, lon: 1.5548 },
                    { name: "BEGLES", lat: 44.8020, lon: -0.5562 },
                    { name: "MONT DE MARSAN", lat: 43.8976, lon: -0.4914 },
                    { name: "ST JEAN DE VEDAS", lat: 43.5650, lon: 3.8470 },
                    { name: "ISTRES", lat: 43.4889, lon: 4.9890 }
                ]
            }
        ]
    });
})();
