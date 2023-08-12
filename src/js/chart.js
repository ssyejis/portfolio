import Chart from 'chart.js/auto';

export default function chartCanvas() {
  Chart.defaults.font.family = 'BitBit';
  new Chart(document.getElementById('personal-chart'), {
    type: 'radar',
    data: {
      labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
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
          data: [8.77,55.61,21.69,6.62,6.82]
        }
      ]
    },
    options: {
      scales: {
        r: {
          grid: {
            color: '#bfccf0',
            lineWidth: 3,
          },
          ticks: {
            font: {
              size: 18
            },
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
            font: {
              size: 30,
              family: 'BitBit'
            },
            color: '#bfccf0'
          }
        }
      }
    }
  });
}