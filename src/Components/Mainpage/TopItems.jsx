import React from 'react';
import { TrendingUp } from 'lucide-react';

export const TopItems = ({ startDate, endDate }) => {
  // In a real app, this data would be filtered based on the date range
  const topItems = [
    { name: 'Chicken Tikka Masala', platform: 'Deliveroo', orders: 145, revenue: 21750 },
    { name: 'Margarita Pizza', platform: 'JustEat', orders: 132, revenue: 15840 },
    { name: 'Chicken Wings', platform: 'UberEats', orders: 128, revenue: 19200 },
    { name: 'Beef Burger with Fries', platform: 'Lyft', orders: 98, revenue: 9800 },
    { name: 'Vegetable Samosas ', platform: 'Deliveroo', orders: 89, revenue: 4450 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold">Top Selling Items</h2>
          <p className="text-sm text-gray-500 mt-1">
            {startDate} to {endDate}
          </p>
        </div>
        <TrendingUp className="text-green-600" />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4">Item Name</th>
              <th className="text-left py-3 px-4">Platform</th>
              <th className="text-right py-3 px-4">Orders</th>
              <th className="text-right py-3 px-4">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {topItems.map((item, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.platform}</td>
                <td className="text-right py-3 px-4">{item.orders}</td>
                <td className="text-right py-3 px-4">£{item.revenue.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
