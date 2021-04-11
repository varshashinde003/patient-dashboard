export const getBarChartOptions = (min, max, stepSize, yAxesIdentifier) => {
    return {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        xAxes: [{
          stacked: true,
          barThickness: 8,
          gridLines: {
            display: false,
          },
          barPercentage: 0.5,
          ticks: {
            fontSize: 8,
          }
        }],
        yAxes: [{
          stacked: true,
          barPercentage: 0.5,
          gridLines: {
            display: false,
          },
          ticks: {
            fontSize: 8,
            precision: 0,
            stepSize,
            min, 
            max,
            beginAtZero: true,
            callback: function (value, index, values) {
              return value + yAxesIdentifier;
            }
          }
        }]
      },
      legend: {
        display: false,
      }
    }
  }
  
  export const getLineChartOptions = (min, max, stepSize, yAxesIdentifier="", sleepPatternLabels) => {
    return {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        xAxes: [{
          stacked: true,
          barThickness: 8,
          gridLines: {
            display: false,
          },
          barPercentage: 0.5,
          ticks: {
            fontSize: 8,
          }
        }],
        yAxes: [{
          stacked: true,
          barPercentage: 0.5,
          gridLines: {
            display: false,
          },
          ticks: {
            fontSize: 8,
            precision: 0,
            stepSize,
            min, 
            max,
            beginAtZero: true,
            callback: function (value, index, values) {
              return (sleepPatternLabels && sleepPatternLabels[value]) || value + yAxesIdentifier ;
            }
          }
        }]
      },
      legend: {
        display: false,
      }
    }
  }
  
  export const getDoughnutChartOptions = () => {
    return {
      responsive: !0, title: {
        display: !1
      }, legend: {
        display: !1
      }, elements: {}, cutoutPercentage: 94, animation: {
        animateScale: !1, duration: 5e3
      }
    }
  }