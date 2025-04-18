import { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  ArcElement, 
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend 
} from 'chart.js';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import '../../styles/DemographicCharts.css';

// Register ChartJS components
ChartJS.register(
  ArcElement, 
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DemographicCharts({ dateRange }) {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  // Gender data
  const genderData = {
    facebook: {
      labels: ['Male', 'Female', 'Other'],
      datasets: [{
        data: [42, 56, 2],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
      }]
    },
    instagram: {
      labels: ['Male', 'Female', 'Other'],
      datasets: [{
        data: [38, 60, 2],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
      }]
    },
    tiktok: {
      labels: ['Male', 'Female', 'Other'],
      datasets: [{
        data: [35, 63, 2],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
      }]
    },
    all: {
      labels: ['Male', 'Female', 'Other'],
      datasets: [{
        data: [38, 60, 2],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
      }]
    }
  };

  // Age data
  const ageData = {
    facebook: {
      labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
      datasets: [{
        label: 'Age Distribution',
        data: [15, 30, 25, 18, 8, 4],
        backgroundColor: '#1877F2'
      }]
    },
    instagram: {
      labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
      datasets: [{
        label: 'Age Distribution',
        data: [25, 38, 20, 10, 5, 2],
        backgroundColor: '#E1306C'
      }]
    },
    tiktok: {
      labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
      datasets: [{
        label: 'Age Distribution',
        data: [45, 30, 15, 7, 2, 1],
        backgroundColor: '#000000'
      }]
    },
    all: {
      labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
      datasets: [{
        label: 'Age Distribution',
        data: [28, 33, 20, 12, 5, 2],
        backgroundColor: '#5E35B1'
      }]
    }
  };

  // Location data
  const locationData = {
    facebook: {
      labels: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Edinburgh'],
      datasets: [{
        label: 'Location Distribution',
        data: [35, 20, 18, 15, 12],
        backgroundColor: '#1877F2'
      }]
    },
    instagram: {
      labels: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Edinburgh'],
      datasets: [{
        label: 'Location Distribution',
        data: [40, 18, 17, 13, 12],
        backgroundColor: '#E1306C'
      }]
    },
    tiktok: {
      labels: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Edinburgh'],
      datasets: [{
        label: 'Location Distribution',
        data: [38, 22, 17, 13, 10],
        backgroundColor: '#000000'
      }]
    },
    all: {
      labels: ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Edinburgh'],
      datasets: [{
        label: 'Location Distribution',
        data: [38, 20, 17, 14, 11],
        backgroundColor: '#5E35B1'
      }]
    }
  };

  // Chart options
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      }
    }
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="demographic-charts">
      <div className="section-header">
        <h2>Audience Demographics</h2>
        <div className="platform-filters">
          <button 
            className={`platform-btn ${selectedPlatform === 'all' ? 'active' : ''}`} 
            onClick={() => setSelectedPlatform('all')}
          >
            All Platforms
          </button>
          <button 
            className={`platform-btn facebook ${selectedPlatform === 'facebook' ? 'active' : ''}`}
            onClick={() => setSelectedPlatform('facebook')}
          >
            <FaFacebook /> Facebook
          </button>
          <button 
            className={`platform-btn instagram ${selectedPlatform === 'instagram' ? 'active' : ''}`}
            onClick={() => setSelectedPlatform('instagram')}
          >
            <FaInstagram /> Instagram
          </button>
          <button 
            className={`platform-btn tiktok ${selectedPlatform === 'tiktok' ? 'active' : ''}`}
            onClick={() => setSelectedPlatform('tiktok')}
          >
            <FaTiktok /> TikTok
          </button>
        </div>
      </div>

      <div className="charts-container">
        <div className="chart-card">
          <h3>Gender Distribution</h3>
          <div className="chart-wrapper">
            <Pie data={genderData[selectedPlatform]} options={pieOptions} />
          </div>
        </div>
        
        <div className="chart-card">
          <h3>Age Distribution</h3>
          <div className="chart-wrapper">
            <Bar data={ageData[selectedPlatform]} options={barOptions} />
          </div>
        </div>
        
        <div className="chart-card wide">
          <h3>Location Distribution</h3>
          <div className="chart-wrapper">
            <Bar data={locationData[selectedPlatform]} options={barOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemographicCharts;