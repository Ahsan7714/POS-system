import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import '../../styles/CampaignPerformance.css';

function CampaignPerformance({ dateRange }) {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [sortField, setSortField] = useState('impressions');
  const [sortDirection, setSortDirection] = useState('desc');

  const campaignData = {
    facebook: [
      { 
        id: 1, 
        name: 'Summer Special Menu', 
        startDate: '06/01/2024', 
        endDate: '07/15/2024',
        status: 'Active',
        impressions: 98500,
        reach: 45300,
        clicks: 5200,
        ctr: 5.3,
        spend: 950,
        cpc: 0.18,
        conversions: 520,
        convRate: 10.0
      },
      { 
        id: 2, 
        name: 'Weekend Brunch Promo', 
        startDate: '05/15/2024', 
        endDate: '06/30/2024',
        status: 'Active',
        impressions: 75200,
        reach: 38600,
        clicks: 3800,
        ctr: 5.1,
        spend: 750,
        cpc: 0.20,
        conversions: 380,
        convRate: 10.0
      },
      { 
        id: 3, 
        name: 'Chef\'s Special Dinner', 
        startDate: '04/01/2024', 
        endDate: '05/15/2024',
        status: 'Completed',
        impressions: 65800,
        reach: 32500,
        clicks: 3250,
        ctr: 4.9,
        spend: 650,
        cpc: 0.20,
        conversions: 310,
        convRate: 9.5
      }
    ],
    instagram: [
      { 
        id: 4, 
        name: 'Food Photography Contest', 
        startDate: '06/15/2024', 
        endDate: '07/15/2024',
        status: 'Active',
        impressions: 85600,
        reach: 42800,
        clicks: 4500,
        ctr: 5.3,
        spend: 850,
        cpc: 0.19,
        conversions: 420,
        convRate: 9.3
      },
      { 
        id: 5, 
        name: 'Chef Stories Campaign', 
        startDate: '05/01/2024', 
        endDate: '06/15/2024',
        status: 'Active',
        impressions: 68400,
        reach: 35200,
        clicks: 3600,
        ctr: 5.3,
        spend: 680,
        cpc: 0.19,
        conversions: 350,
        convRate: 9.7
      },
      { 
        id: 6, 
        name: 'Dessert Menu Showcase', 
        startDate: '04/15/2024', 
        endDate: '05/30/2024',
        status: 'Completed',
        impressions: 60500,
        reach: 30100,
        clicks: 3100,
        ctr: 5.1,
        spend: 600,
        cpc: 0.19,
        conversions: 290,
        convRate: 9.4
      }
    ],
    tiktok: [
      { 
        id: 7, 
        name: 'Chef\'s Quick Recipe Hacks', 
        startDate: '06/01/2024', 
        endDate: '07/15/2024',
        status: 'Active',
        impressions: 120500,
        reach: 88200,
        clicks: 6800,
        ctr: 5.6,
        spend: 1200,
        cpc: 0.18,
        conversions: 650,
        convRate: 9.6
      },
      { 
        id: 8, 
        name: 'Kitchen Dance Challenge', 
        startDate: '05/15/2024', 
        endDate: '06/30/2024',
        status: 'Active',
        impressions: 105800,
        reach: 75600,
        clicks: 5900,
        ctr: 5.6,
        spend: 1050,
        cpc: 0.18,
        conversions: 580,
        convRate: 9.8
      },
      { 
        id: 9, 
        name: 'Behind the Scenes', 
        startDate: '04/01/2024', 
        endDate: '05/15/2024',
        status: 'Completed',
        impressions: 89200,
        reach: 65300,
        clicks: 4800,
        ctr: 5.4,
        spend: 890,
        cpc: 0.19,
        conversions: 460,
        convRate: 9.6
      }
    ]
  };

  const getAllCampaigns = () => {
    return [
      ...campaignData.facebook,
      ...campaignData.instagram,
      ...campaignData.tiktok
    ];
  };

  const getCampaigns = () => {
    return selectedPlatform === 'all' ? getAllCampaigns() : campaignData[selectedPlatform];
  };

  const sortCampaigns = (campaigns) => {
    return [...campaigns].sort((a, b) => {
      if (sortDirection === 'asc') {
        return a[sortField] > b[sortField] ? 1 : -1;
      } else {
        return a[sortField] < b[sortField] ? 1 : -1;
      }
    });
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const getSortIcon = (field) => {
    if (sortField !== field) {
      return <FaSort />;
    }
    return sortDirection === 'asc' ? <FaSortUp /> : <FaSortDown />;
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  const formatCurrency = (num) => {
    return '£' + num;
  };

  const getPlatformIcon = (campaignId) => {
    if (campaignId <= 3) {
      return <FaFacebook className="platform-icon facebook" />;
    } else if (campaignId <= 6) {
      return <FaInstagram className="platform-icon instagram" />;
    } else {
      return <FaTiktok className="platform-icon tiktok" />;
    }
  };

  const sortedCampaigns = sortCampaigns(getCampaigns());

  return (
    <div className="campaign-performance">
      <div className="section-header">
        <h2>Campaign Performance</h2>
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

      <div className="campaigns-table-wrapper">
        <table className="campaigns-table">
          <thead>
            <tr>
              <th>Platform</th>
              <th>Campaign</th>
              <th>Status</th>
              <th onClick={() => handleSort('impressions')} className="sortable">
                Impressions {getSortIcon('impressions')}
              </th>
              <th onClick={() => handleSort('reach')} className="sortable">
                Reach {getSortIcon('reach')}
              </th>
              <th onClick={() => handleSort('clicks')} className="sortable">
                Clicks {getSortIcon('clicks')}
              </th>
              <th onClick={() => handleSort('ctr')} className="sortable">
                CTR {getSortIcon('ctr')}
              </th>
              <th onClick={() => handleSort('spend')} className="sortable">
                Spend {getSortIcon('spend')}
              </th>
              <th onClick={() => handleSort('cpc')} className="sortable">
                CPC {getSortIcon('cpc')}
              </th>
              <th onClick={() => handleSort('conversions')} className="sortable">
                Conv. {getSortIcon('conversions')}
              </th>
              <th onClick={() => handleSort('convRate')} className="sortable">
                Conv. Rate {getSortIcon('convRate')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedCampaigns.map((campaign) => (
              <tr key={campaign.id} className={campaign.status === 'Active' ? 'active-campaign' : ''}>
                <td>{getPlatformIcon(campaign.id)}</td>
                <td>
                  <div className="campaign-name">{campaign.name}</div>
                  <div className="campaign-dates">{campaign.startDate} - {campaign.endDate}</div>
                </td>
                <td>
                  <span className={`status-badge ${campaign.status.toLowerCase()}`}>
                    {campaign.status}
                  </span>
                </td>
                <td>{formatNumber(campaign.impressions)}</td>
                <td>{formatNumber(campaign.reach)}</td>
                <td>{formatNumber(campaign.clicks)}</td>
                <td>{campaign.ctr}%</td>
                <td>{formatCurrency(campaign.spend)}</td>
                <td>{formatCurrency(campaign.cpc)}</td>
                <td>{formatNumber(campaign.conversions)}</td>
                <td>{campaign.convRate}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CampaignPerformance;