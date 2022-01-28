
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

const labels = ['Severity Ratio', 'Poverty Gap Ratio', 'Head Count Ration'];

const data = {
  labels,
  datasets: [
    {
      label: 'MALE',
      data: male,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'FEMALE',
      data: female,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  return <Bar options={options} data={data} />;
}
