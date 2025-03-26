import React from 'react';
import { ExternalLink, TrendingUp, Clock, DollarSign } from 'lucide-react';

const platformColors = {
  Deliveroo: 'bg-[#06a88f]',  // A balanced dark teal for Deliveroo
JustEat: 'bg-[#e8790d]',    // A rich amber for JustEat
Lyft: 'bg-[#9b1d7d]',       // A deep magenta for Lyft

  UberEats: 'bg-black',
};

const platformLogos = {
  Deliveroo:"",       
  JustEat:"",          
  Lyft:"",             
  UberEats: '',         
};


export const PlatformSection = ({ platform, stats }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className={`${platformColors[platform]} px-6 py-4 text-white`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{platformLogos[platform]}</span>
            <h2 className="text-xl font-bold">{platform}</h2>
          </div>
          <ExternalLink className="w-5 h-5" />
        </div>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 text-gray-600 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Total Orders</span>
            </div>
            <p className="text-2xl font-bold">{stats.totalOrders}</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 text-gray-600 mb-1">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm">Revenue</span>
            </div>
            <p className="text-2xl font-bold">£{stats.revenue.toLocaleString()}</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 text-gray-600 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Avg. Delivery</span>
            </div>
            <p className="text-2xl font-bold">{stats.avgDeliveryTime}</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 text-gray-600 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Active Orders</span>
            </div>
            <p className="text-2xl font-bold">{stats.activeOrders}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
