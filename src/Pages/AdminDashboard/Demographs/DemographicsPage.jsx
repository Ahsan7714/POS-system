import { useState } from 'react';
import '../../../styles/DemographicsPage.css';
import DateRangePicker from '../../../Components/demographics/DateRangePicker';
import PlatformOverview from '../../../Components/demographics/PlatformOverview';
import AudienceInsights from '../../../Components/demographics/AudienceInsights';
import CampaignPerformance from '../../../Components/demographics/CampaignPerformance';
import DemographicCharts from '../../../Components/demographics/DemographicCharts';
import ExportButton from '../../../Components/demographics/ExportButton';
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar';

function DemographicsPage() {
  const [dateRange, setDateRange] = useState({
    startDate: '03/01/2024',
    endDate: '03/07/2024'
  });
  
  const [activeTab, setActiveTab] = useState('overview');

  const handleDateChange = (newRange) => {
    setDateRange(newRange);
  };

  return (

    <div className="flex font-outfit">
      <AdminSidebar/>
      <div className="lg:ml-[23%] lg:w-[77%] mt-10 pr-10">
      <div className="page-header">
        <h1>Ad Demographics</h1>
        <div className="header-actions">
          <DateRangePicker 
            startDate={dateRange.startDate} 
            endDate={dateRange.endDate} 
            onDateChange={handleDateChange} 
          />
          <ExportButton />
        </div>
      </div>

      <div className="demographics-tabs">
        <button 
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`tab-button ${activeTab === 'audience' ? 'active' : ''}`}
          onClick={() => setActiveTab('audience')}
        >
          Audience Insights
        </button>
        {/* <button 
          className={`tab-button ${activeTab === 'campaigns' ? 'active' : ''}`}
          onClick={() => setActiveTab('campaigns')}
        >
          Campaign Performance
        </button> */}
      </div>

      {activeTab === 'overview' && (
        <div className="tab-content">
          <PlatformOverview dateRange={dateRange} />
          <DemographicCharts dateRange={dateRange} />
        </div>
      )}

      {activeTab === 'audience' && (
        <div className="tab-content">
          <AudienceInsights dateRange={dateRange} />
        </div>
      )}

      {/* {activeTab === 'campaigns' && (
        <div className="tab-content">
          <CampaignPerformance dateRange={dateRange} />
        </div>
      )} */}
    </div>
    </div>
  );
}

export default DemographicsPage;