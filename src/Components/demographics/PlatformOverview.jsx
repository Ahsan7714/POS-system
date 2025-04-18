import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import '../../styles/PlatformOverview.css';

function PlatformOverview({ dateRange }) {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const platformData = {
    facebook: {
      color: '#1877F2',
      icon: <FaFacebook />,
      impressions: '245.3K',
      reach: '125.8K',
      clicks: '12.5K',
      ctr: '5.1%',
      spend: '£2,450',
      cpc: '£0.20',
      conversions: '1,250',
      roi: '315%'
    },
    instagram: {
      color: '#E1306C',
      icon: <FaInstagram />,
      impressions: '189.7K',
      reach: '110.2K',
      clicks: '9.8K',
      ctr: '5.2%',
      spend: '£1,850',
      cpc: '£0.19',
      conversions: '980',
      roi: '290%'
    },
    tiktok: {
      color: '#000000',
      icon: <FaTiktok />,
      impressions: '312.5K',
      reach: '205.6K',
      clicks: '15.3K',
      ctr: '4.9%',
      spend: '£3,100',
      cpc: '£0.20',
      conversions: '1,520',
      roi: '280%'
    }
  };

  const getTotalMetrics = () => {
    const platforms = Object.values(platformData);
    
    // Calculate totals (simplified for demo purposes)
    return {
      color: '#5E35B1',
      icon: null,
      impressions: '747.5K',
      reach: '441.6K',
      clicks: '37.6K',
      ctr: '5.0%',
      spend: '£7,400',
      cpc: '£0.20',
      conversions: '3,750',
      roi: '295%'
    };
  };

  const getDisplayData = () => {
    if (selectedPlatform === 'all') {
      return getTotalMetrics();
    }
    return platformData[selectedPlatform];
  };

  const displayData = getDisplayData();

  return (
    <div className="platform-overview">
      <div className="section-header">
        <h2>Platform Overview</h2>
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

      <div className="platform-metrics">
        <div className="metric-card">
          <div className="metric-title">Impressions</div>
          <div className="metric-value">{displayData.impressions}</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Reach</div>
          <div className="metric-value">{displayData.reach}</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Clicks</div>
          <div className="metric-value">{displayData.clicks}</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">CTR</div>
          <div className="metric-value">{displayData.ctr}</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Ad Spend</div>
          <div className="metric-value">{displayData.spend}</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">CPC</div>
          <div className="metric-value">{displayData.cpc}</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Conversions</div>
          <div className="metric-value">{displayData.conversions}</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">ROI</div>
          <div className="metric-value">{displayData.roi}</div>
        </div>
      </div>
    </div>
  );
}

export default PlatformOverview;