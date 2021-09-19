// Chart style
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{//index[0]
            label: 'Custom Chart',
            data: [12,19 , 3, 5, 2, 3],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            showLine:true,
            spanGaps:true,
        }]
    },
    options: {
        responsive: false,
        scales: {
            y: {
                beginAtZero: true
            },
        },
    },
});

const push = document.getElementById('push');
const pop = document.getElementById('pop');
push.addEventListener('click', pushValueChart);
pop.addEventListener('click', popValueChart);
// push input into stack
function pushValueChart(){
    const pushvalue = document.getElementById('pushvalue');
    const pushtext = document.getElementById('pushtext');
    const pushcolor = document.getElementById('pushcolor');
    myChart.data.datasets[0].data.push(pushvalue.value);
    myChart.data.labels.push(pushtext.value);
    myChart.update();

}
// pop from the stack
function popValueChart(){
    const pophvalue = document.getElementById('popvalue');
    const poptext = document.getElementById('poptext');
    myChart.data.datasets[0].data.pop(popvalue.value);
    myChart.data.labels.pop(poptext.value);
    myChart.update();
 
}

function getInputValue() {
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    myChart.config.type = inputVal;
    myChart.update();
}