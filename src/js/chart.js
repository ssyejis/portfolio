import Chart from 'chart.js/auto';

export default function chartCanvas() {
  Chart.defaults.font.family = 'BitBit';
  new Chart(document.getElementById('personal-chart'), {
    type: 'radar',
    data: {
      labels: ['I', 'N', 'F', 'P', 'E', 'S', 'T', 'J'],
      borderColor: '#fff',
      datasets: [
        {
          label: 'personality',
          fill: true,
          backgroundColor: 'rgba(12, 35, 63, 0.8)',
          borderColor: 'rgba(12, 35, 63)',
          pointBorderColor: 'rgba(12, 35, 63)',
          pointBackgroundColor: 'rgba(12, 35, 63)',
          borderWidth: 3,
          data: [7, 3, 6, 3, 3, 7, 4, 7]
        }
      ]
    },
    options: {
      scales: {
        r: {
          max: 10,
          min: 0,
          grid: {
            color: '#bfccf0',
            lineWidth: 3,
          },
          ticks: {
            font: {
              size: 18
            },
            stepSize: 1,
            backgroundColor: 'rgba(12, 35, 63, 0),'
          },
          pointLabels: {
            font: {
              size: 18
            },
            color: '#bfccf0'
          }
          
        },
      },
      title: {
        display: true,
        text: 'Distribution in % of world population'
      },
      plugins: {
        legend: {
          labels: {
            font: function (context) {
              const width = context.chart.width
              const size = Math.round(width / 16)

              return {
                size,
                family: 'BitBit'
              }
            },
            color: '#bfccf0'
          }
        }
      }
    }
  });
}