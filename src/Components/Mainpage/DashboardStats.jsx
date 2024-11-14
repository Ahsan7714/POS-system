import React from 'react';
import { IndianRupee, ShoppingBag, AlertOctagon } from 'lucide-react';

const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex items-center">
    <div className={`rounded-full p-4 ${color} mr-4`}>
      {icon}
    </div>
    <div>
      <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  </div>
);

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Sales"
        value="₹45,678"
        icon={<IndianRupee className="w-6 h-6 text-green-700" />}
        color="bg-green-100"
      />
      <StatCard
        title="Total Orders"
        value="234"
        icon={<ShoppingBag className="w-6 h-6 text-blue-700" />}
        color="bg-blue-100"
      />
      <StatCard
        title="Average Order Value"
        value="₹195"
        icon={<IndianRupee className="w-6 h-6 text-purple-700" />}
        color="bg-purple-100"
      />
      <StatCard
        title="Cancelled Orders"
        value="12"
        icon={<AlertOctagon className="w-6 h-6 text-red-700" />}
        color="bg-red-100"
      />
    </div>
  );
};

export default DashboardStats;
