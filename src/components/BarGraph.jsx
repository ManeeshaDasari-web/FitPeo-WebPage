import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityChart = () => {
  const data = {
    labels: Array.from({ length: 27 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Activity',
        data: [3000, 1000, 2000, 1000, 6000, 3000, 2000, 3000, 2000, 2000, 4000, 4000, 1000, 2000, 1000, 3000, 4000, 4000, 1000, 7000, 14000, 7000, 6000, 2000, 4000, 5000, 3000],
        backgroundColor: '#4A90E2',
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value / 1000 + 'k'; 
          },
        },
        grid: {
          color: '#2c2c2c',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ height: '120px', width: '60vw' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
