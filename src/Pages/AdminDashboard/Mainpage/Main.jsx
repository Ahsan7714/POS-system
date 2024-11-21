import React, { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import { DashboardStats } from '../../../Components/Mainpage/DashboardStats';
import { SalesChart }  from '../../../Components/Mainpage/SalesChart';
import { TopItems } from '../../../Components/Mainpage/TopItems';
import { PlatformOrders } from '../../../Components/Mainpage/PlatformOrders';
import { DateRangePicker } from '../../../Components/Mainpage/DateRangePicker';
import { PlatformSection } from '../../../Components/Mainpage/PlatformSection';
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar"

// Dummy data to simulate filtered data by date range
const dummyPlatformData = [
  {
    date: '2024-03-01',
    Deliveroo: { totalOrders: 40, revenue: 7000, avgDeliveryTime: '30 min', activeOrders: 5 },
    JustEat: { totalOrders: 32, revenue: 5000, avgDeliveryTime: '25 min', activeOrders: 3 },
    UberEats: { totalOrders: 28, revenue: 4500, avgDeliveryTime: '35 min', activeOrders: 2 },
    Lyft: { totalOrders: 18, revenue: 3200, avgDeliveryTime: '40 min', activeOrders: 1 },
  },
  {
    date: '2024-06-02',
    Deliveroo: { totalOrders: 50, revenue: 8000, avgDeliveryTime: '32 min', activeOrders: 6 },
    JustEat: { totalOrders: 40, revenue: 6800, avgDeliveryTime: '28 min', activeOrders: 4 },
    UberEats: { totalOrders: 30, revenue: 4800, avgDeliveryTime: '34 min', activeOrders: 3 },
    Lyft: { totalOrders: 20, revenue: 3500, avgDeliveryTime: '38 min', activeOrders: 2 },
  },
  // Add more dummy data as needed for different dates
];

function Main() {
  const [startDate, setStartDate] = useState('2024-03-01');
  const [endDate, setEndDate] = useState('2024-03-07');
  const [filteredData, setFilteredData] = useState({});

  useEffect(() => {
    // Filter the dummy data based on the selected date range
    const filtered = dummyPlatformData
      .filter((entry) => entry.date >= startDate && entry.date <= endDate)
      .reduce((acc, current) => {
        // Aggregate data by summing up stats
        Object.keys(current).forEach((platform) => {
          if (platform !== 'date') {
            if (!acc[platform]) {
              acc[platform] = { ...current[platform] };
            } else {
              acc[platform].totalOrders += current[platform].totalOrders;
              acc[platform].revenue += current[platform].revenue;
              acc[platform].activeOrders += current[platform].activeOrders;
            }
          }
        });
        return acc;
      }, {});

    setFilteredData(filtered);
  }, [startDate, endDate]);

  return (
    <div className="flex font-outfit">
      {/* Sidebar */}
      <AdminSidebar />
      <div className="lg:ml-[23%] lg:w-[77%] bg-gray-50 ">
        {/* Main Content */}
        <div className="transition-margin duration-300 ease-in-out">
          {/* Header */}
          <header className="bg-white shadow-sm">
            <div className="flex items-center justify-center px-6 py-4 max-w-3xl mx-auto">
              <div className="flex items-center space-x-8">
                <DateRangePicker
                  startDate={startDate}
                  endDate={endDate}
                  onStartDateChange={setStartDate}
                  onEndDateChange={setEndDate}
                />
                <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
                  <Filter className="w-5 h-5 text-gray-500" />
                  <span>Filters</span>
                </button>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="mx-6">
            <div className="my-5">
              <DashboardStats />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.keys(filteredData).map((platform) => (
                <PlatformSection
                  key={platform}
                  platform={platform}
                  stats={filteredData[platform]}
                />
              ))}
            </div>
          </div>

          <main className="p-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <SalesChart startDate={startDate} endDate={endDate} />
                </div>
                <div>
                  <PlatformOrders />
                </div>
              </div>

              <TopItems startDate={startDate} endDate={endDate} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Main;
