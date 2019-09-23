const chartsData = {
    lineCharts: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        dataSet: [{
            values: [350, 400, 750, 600, 500, 800],
        },
        {
            values: [250, 650, 150, 300, 400, 200],
        }],
    },
    areaCharts: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        dataSet: [{
            values: [350, 90, 410, 900, 600, 620, 700],
        }],
    },
    barCharts: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        dataSet: [{
            values: [18, 42, 58, 50, 19, undefined],
        },
        {
            values: [undefined, 40, undefined, 45, 95, 33],
        },
        {
            values: [undefined, 30, 80, undefined, 65, 50],
        },
        {
            values: [undefined, 15, undefined, 60, 45, 85],
        }],
    },
    horizontalBarCharts: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        dataSet: [{
            values: [-18, 42, -58, 50, 19, undefined],
        },
        {
            values: [undefined, 15, undefined, -60, 45, 85],
        }],
    },
    radarCharts: {
        labels: ['Coding', 'Drinking', 'Sleeping', 'Reading', 'Runnig', 'Learning', 'Designing'],
        dataSet: [{
            values: [300, 50, 200, 250, 100, 220, 100],
        },
        {
            values: [220, 150, 100, 200, 150, 300, 250],
        }],
    },
    polarAreaCharts: {
        labels: ['Yellow', 'Blue', 'Green', 'Red', 'Orange'],
        dataSet: [{
            values: [250, 150, 300, 250, 150],
        }],
    },
    pieCharts: {
        labels: ['IOS', 'Android', 'Windows Phone'],
        dataSet: [{
            values: [55, 35, 10],
        }],
    },
    doughnutCharts: {
        labels: ['Yellow', 'Green', 'Red', 'Orange'],
        dataSet: [{
            values: [15, 30, 45, 10],
        }],
    },
};

export default function resolveChartsData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(chartsData);
        }, 2000);
    });
}
