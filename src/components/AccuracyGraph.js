import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function AccuracyGraph({ dataPoints }) {
  const data = {
    labels: dataPoints.map((_, idx) => `Epoch ${idx + 1}`),
    datasets: [
      {
        label: 'Accuracy',
        data: dataPoints,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="graph-container">
      <Line data={data} options={options} />
    </div>
  );
}

export default AccuracyGraph;
