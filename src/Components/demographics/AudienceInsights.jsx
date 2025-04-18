import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import '../../styles/AudienceInsights.css';

function AudienceInsights({ dateRange }) {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const audienceData = {
    facebook: {
      interests: [
        { name: 'Food & Dining', percentage: 78 },
        { name: 'Cooking', percentage: 65 },
        { name: 'Restaurants', percentage: 72 },
        { name: 'Fine Dining', percentage: 48 },
        { name: 'Healthy Eating', percentage: 42 }
      ],
      behaviors: [
        { name: 'Frequent Diners', percentage: 68 },
        { name: 'Food Delivery Users', percentage: 75 },
        { name: 'Recipe Researchers', percentage: 52 },
        { name: 'Review Writers', percentage: 38 },
        { name: 'Food Photographers', percentage: 45 }
      ],
      engagement: {
        highestTime: '7:00 PM - 9:00 PM',
        highestDay: 'Friday',
        avgTimeOnAd: '3.2 seconds',
        commentRate: '2.4%',
        shareRate: '1.5%'
      }
    },
    instagram: {
      interests: [
        { name: 'Food Photography', percentage: 85 },
        { name: 'Cooking', percentage: 58 },
        { name: 'Restaurants', percentage: 76 },
        { name: 'Food Styling', percentage: 62 },
        { name: 'Healthy Eating', percentage: 48 }
      ],
      behaviors: [
        { name: 'Food Photographers', percentage: 80 },
        { name: 'Food Delivery Users', percentage: 72 },
        { name: 'Restaurant Check-ins', percentage: 65 },
        { name: 'Review Writers', percentage: 42 },
        { name: 'Recipe Researchers', percentage: 48 }
      ],
      engagement: {
        highestTime: '6:00 PM - 8:00 PM',
        highestDay: 'Saturday',
        avgTimeOnAd: '4.1 seconds',
        commentRate: '3.8%',
        shareRate: '2.2%'
      }
    },
    tiktok: {
      interests: [
        { name: 'Food Trends', percentage: 88 },
        { name: 'Quick Recipes', percentage: 75 },
        { name: 'Restaurant Reviews', percentage: 62 },
        { name: 'Food Challenges', percentage: 70 },
        { name: 'Cooking Hacks', percentage: 82 }
      ],
      behaviors: [
        { name: 'Video Creators', percentage: 68 },
        { name: 'Food Trend Followers', percentage: 85 },
        { name: 'Food Delivery Users', percentage: 78 },
        { name: 'Recipe Researchers', percentage: 65 },
        { name: 'Content Sharers', percentage: 72 }
      ],
      engagement: {
        highestTime: '8:00 PM - 10:00 PM',
        highestDay: 'Sunday',
        avgTimeOnAd: '5.7 seconds',
        commentRate: '4.5%',
        shareRate: '3.8%'
      }
    },
    all: {
      interests: [
        { name: 'Food & Dining', percentage: 82 },
        { name: 'Cooking', percentage: 66 },
        { name: 'Restaurants', percentage: 70 },
        { name: 'Food Photography', percentage: 58 },
        { name: 'Healthy Eating', percentage: 45 }
      ],
      behaviors: [
        { name: 'Food Delivery Users', percentage: 75 },
        { name: 'Frequent Diners', percentage: 68 },
        { name: 'Recipe Researchers', percentage: 55 },
        { name: 'Food Photographers', percentage: 52 },
        { name: 'Review Writers', percentage: 42 }
      ],
      engagement: {
        highestTime: '7:00 PM - 9:00 PM',
        highestDay: 'Friday & Saturday',
        avgTimeOnAd: '4.3 seconds',
        commentRate: '3.5%',
        shareRate: '2.5%'
      }
    }
  };

  const data = audienceData[selectedPlatform];

  return (
    <div className="audience-insights">
      <div className="section-header">
        <h2>Audience Insights</h2>
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

      <div className="insights-content">
        <div className="insights-card">
          <h3>Top Interests</h3>
          <div className="interest-list">
            {data.interests.map((interest, index) => (
              <div className="interest-item" key={index}>
                <div className="interest-info">
                  <span className="interest-name">{interest.name}</span>
                  <span className="interest-percentage">{interest.percentage}%</span>
                </div>
                <div className="interest-bar">
                  <div className="interest-progress" style={{width: `${interest.percentage}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="insights-card">
          <h3>Audience Behaviors</h3>
          <div className="behavior-list">
            {data.behaviors.map((behavior, index) => (
              <div className="behavior-item" key={index}>
                <div className="behavior-info">
                  <span className="behavior-name">{behavior.name}</span>
                  <span className="behavior-percentage">{behavior.percentage}%</span>
                </div>
                <div className="behavior-bar">
                  <div className="behavior-progress" style={{width: `${behavior.percentage}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="insights-card">
          <h3>Engagement Insights</h3>
          <div className="engagement-stats">
            <div className="engagement-item">
              <div className="engagement-label">Highest Engagement Time</div>
              <div className="engagement-value">{data.engagement.highestTime}</div>
            </div>
            <div className="engagement-item">
              <div className="engagement-label">Highest Engagement Day</div>
              <div className="engagement-value">{data.engagement.highestDay}</div>
            </div>
            <div className="engagement-item">
              <div className="engagement-label">Avg. Time on Ad</div>
              <div className="engagement-value">{data.engagement.avgTimeOnAd}</div>
            </div>
            <div className="engagement-item">
              <div className="engagement-label">Comment Rate</div>
              <div className="engagement-value">{data.engagement.commentRate}</div>
            </div>
            <div className="engagement-item">
              <div className="engagement-label">Share Rate</div>
              <div className="engagement-value">{data.engagement.shareRate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudienceInsights;