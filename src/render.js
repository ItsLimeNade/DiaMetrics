const Chart = require('chart.js');

var parent = document.getElementById('container1');
var child = document.getElementById('container2');
child.style.right = child.clientWidth - child.offsetWidth + "px";



const TIRCtx = document.getElementById('TIRChart');
const TIRChart = new Chart(TIRCtx, {
    type: 'doughnut',
    data: {
        labels: ['< 70 mg/mL', '< 180 mg/mL', '> 180 mg/ml'],
        datasets: [{
            label: 'Time in Range:',
            data: [3, 92, 5],
            backgroundColor: [
                'rgb(255, 0, 30)',
                'rgb(0,200,50)',
                'rgb(255, 130, 0)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true
    }
});

const BGdata = [30, 120, 140, 120, 130, 230, 310, 209, 160, 154, 143, 101, 98, 91, 92, 110, 143, 156, 190, 230, 200, 201, 192, 186,
    178, 175, 130, 110, 98, 76, 63, 50, 40, 60, 80, 98, 129, 122, 135, 154, 176, 186, 175, 172, 157, 154, 143, 150]
const BGbackgroundColor = [];

for (i = 0; i < BGdata.length; i++) {
    if (BGdata[i] < 70) { BGbackgroundColor.push('rgb(255, 0, 30)') }
    if (BGdata[i] > 70 && BGdata[i] < 180) { BGbackgroundColor.push('rgb(0,200,50)') }
    if (BGdata[i] > 180) { BGbackgroundColor.push('rgb(255, 130, 0)') }
}

const BGCtx = document.getElementById('BGChart');
const BGChart = new Chart(BGCtx, {
    type: 'line',
    data: {
        labels: [
            '00h00',
            '00h30',
            '01h00',
            '01h30',
            '02h00',
            '02h30',
            '03h00',
            '03h30',
            '04h00',
            '04h30',
            '05h00',
            '05h30',
            '06h00',
            '06h30',
            '07h00',
            '07h30',
            '08h00',
            '08h30',
            '09h00',
            '09h30',
            '10h00',
            '10h30',
            '11h00',
            '11h30',
            '12h00',
            '12h30',
            '13h00',
            '13h30',
            '14h00',
            '14h30',
            '15h00',
            '15h30',
            '16h00',
            '16h30',
            '17h00',
            '17h30',
            '18h00',
            '18h30',
            '19h00',
            '19h30',
            '20h00',
            '20h30',
            '21h00',
            '21h30',
            '22h00',
            '22h30',
            '23h00',
            '23h30'
        ],
        datasets: [{
            label: 'Blood Glucose Levels of the day',
            data: [30, 120, 140, 120, 130, 230, 310, 209, 160, 154, 143, 101, 98, 91, 92, 110, 143, 156, 190, 230, 200, 201, 192, 186,
                178, 175, 130, 110, 98, 76, 63, 50, 40, 60, 80, 98, 129, 122, 135, 154, 176, 186, 175, 172, 157, 154, 143, 150],
            fill: false,
            borderColor: BGbackgroundColor,
            backgroundColor: BGbackgroundColor,
            tension: 0.4,
            segment: {
                borderColor: 'rgba(0,0,0,0)'
            }
        }]
    },
    options: {
        responsive: true
    }
})