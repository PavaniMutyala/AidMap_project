import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement,
  LineElement, BarElement, Title, Tooltip, Legend, Filler
} from 'chart.js';
import { weeklyData } from '../data/demoData';
import { FiBarChart2 } from 'react-icons/fi';

ChartJS.register(
  CategoryScale, LinearScale, PointElement,
  LineElement, BarElement, Title, Tooltip, Legend, Filler
);

const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: { color: '#94a3b8', font: { family: 'Inter', size: 12 }, usePointStyle: true, padding: 16 }
    },
    tooltip: {
      backgroundColor: '#1e293b',
      titleColor: '#f1f5f9',
      bodyColor: '#94a3b8',
      borderColor: '#334155',
      borderWidth: 1,
      cornerRadius: 8,
      padding: 12,
    }
  },
  scales: {
    x: { grid: { color: 'rgba(51,65,85,0.3)' }, ticks: { color: '#64748b', font: { size: 11 } } },
    y: { grid: { color: 'rgba(51,65,85,0.3)' }, ticks: { color: '#64748b', font: { size: 11 } } },
  },
};

export function WeeklyLineChart() {
  const data = {
    labels: weeklyData.labels,
    datasets: [
      {
        label: 'Volunteers Deployed',
        data: weeklyData.volunteersDeployed,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59,130,246,0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Help Completed',
        data: weeklyData.helpCompleted,
        borderColor: '#10b981',
        backgroundColor: 'rgba(16,185,129,0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };
  return (
    <div className="panel">
      <div className="panel-header">
        <h3><FiBarChart2 /> Weekly Progress</h3>
      </div>
      <div className="panel-body">
        <div className="chart-container">
          <Line data={data} options={commonOptions} />
        </div>
      </div>
    </div>
  );
}

export function WeeklyBarChart() {
  const data = {
    labels: weeklyData.labels,
    datasets: [
      {
        label: 'Deployed',
        data: weeklyData.volunteersDeployed,
        backgroundColor: 'rgba(59,130,246,0.7)',
        borderRadius: 4,
      },
      {
        label: 'Completed',
        data: weeklyData.helpCompleted,
        backgroundColor: 'rgba(16,185,129,0.7)',
        borderRadius: 4,
      },
      {
        label: 'New Requests',
        data: weeklyData.newRequests,
        backgroundColor: 'rgba(249,115,22,0.7)',
        borderRadius: 4,
      },
    ],
  };
  return (
    <div className="panel">
      <div className="panel-header">
        <h3><FiBarChart2 /> Weekly Analytics</h3>
      </div>
      <div className="panel-body">
        <div className="chart-container">
          <Bar data={data} options={commonOptions} />
        </div>
      </div>
    </div>
  );
}
