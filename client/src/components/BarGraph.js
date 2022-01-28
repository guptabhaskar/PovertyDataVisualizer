import React from 'react';
import { Bar } from 'react-chartjs-2';

export function BarGraph({male, female}) {
  const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  }, scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Proportion of Poverty'
      },
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 100
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Poverty Measure'
      }
    }],
  }
};

const labels = ['Severity Ratio', 'Poverty Gap Ratio', 'Head Count Ratio'];

const data = {
  labels,
  datasets: [
    {
      label: 'MALE',
      data: male,
      backgroundColor: 'rgba(199, 212, 128, 1)',
    },
    {
      label: 'FEMALE',
      data: female,
      backgroundColor: 'rgba(170, 181, 219, 1)',
    },
  ],
};
  return <Bar options={options} data={data} />;
}
