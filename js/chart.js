$(document).ready(function () {

    let { id
    } = JSON.parse(sessionStorage.getItem('id'))

    statistics(id)

})

// const ctx = document.getElementById('myChart');
// new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['AAA', 'BBB', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [20, 19, 3, 5, 2, 3],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

// const doughnut = document.getElementById('myChart2');
// new Chart(doughnut, {
//     type: 'doughnut',
//     data: {
//         labels: [
//             'Red',
//             'Blue',
//             'Yellow'
//         ],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [300, 50, 100],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)'
//             ],
//             hoverOffset: 4
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

