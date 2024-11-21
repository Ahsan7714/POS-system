import React, { useState } from "react";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import dummyStats from "../../../data/dummyStats";
import {
  Calendar,
  ShoppingBag,
  AlertOctagon,
  PoundSterling,
  TrendingUp,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format, eachDayOfInterval, parseISO } from "date-fns";

function Analytics() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("All Platforms");

 const filteredStats = dummyStats.find((stat) => {
  const isPlatformMatched =
    selectedPlatform === "All Platforms" || stat.platform === selectedPlatform;

  const isStartDateValid =
    !startDate || new Date(stat.startDate) <= new Date(startDate);

  const isEndDateValid =
    !endDate || new Date(stat.endDate) >= new Date(endDate);

  return isPlatformMatched && isStartDateValid && isEndDateValid;
}) || dummyStats.find((stat) => stat.platform === "All Platforms");


  const StatCard = ({ title, value, icon, color }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 flex items-center">
      <div className={`rounded-full p-4 ${color} mr-4`}>{icon}</div>
      <div>
        <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold mt-1">{value}</p>
      </div>
    </div>
  );

  const topItems = [
    { name: "Chicken Tikka Masala", platform: "Deliveroo", orders: 145, revenue: 217 },
    { name: "Margarita Pizza", platform: "JustEat", orders: 132, revenue: 15840 },
    { name: "Chicken Wings", platform: "UberEats", orders: 128, revenue: 19200 },
    { name: "Beef Burger with Fries", platform: "Lyft", orders: 98, revenue: 9800 },
    { name: "Vegetable Samosas", platform: "Deliveroo", orders: 89, revenue: 4450 },
  ];

  // Filter the top items based on the selected platform
  const filteredTopItems = selectedPlatform === "All Platforms"
    ? topItems
    : topItems.filter(item => item.platform === selectedPlatform);

  // Generate sales chart data
  const dates = eachDayOfInterval({
    start: parseISO("2024-03-01"),
    end: parseISO("2024-03-07"),
  });

  const chartData = dates.map((date) => ({
    date: format(date, "yyyy-MM-dd"),
    Deliveroo: Math.floor(Math.random() * 3000) + 1000,
    JustEat: Math.floor(Math.random() * 3000) + 1000,
    UberEats: Math.floor(Math.random() * 3000) + 1000,
    Lyft: Math.floor(Math.random() * 3000) + 1000,
  }));

  return (
    <div className="flex font-outfit">
      <AdminSidebar />
      <div className="lg:ml-[23%] lg:w-[77%] bg-gray-50 p-4">
        <div className="flex items-center justify-between bg-white p-4 rounded shadow-md w-[100%]">
          {/* Platform Dropdown */}
          <div className="flex items-center space-x-2">
            <select
              className="p-3 w-18 text-xl font-semibold border border-gray-300 rounded"
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              {dummyStats.map((stat, index) => (
                <option key={index} value={stat.platform}>
                  {stat.platform}
                </option>
              ))}
            </select>
          </div>

          {/* Date Range Picker */}
          <div className="flex items-center space-x-4">
            <Calendar className="w-5 h-5 text-gray-500" />
            <input
              type="date"
              className="border rounded-md p-3 text-lg"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <p className="text-gray-500 p-3 font-semibold text-2xl">to</p>
            <input
              type="date"
              className="border rounded-md p-3 text-lg"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        {/* Statistics */}
        <div className="my-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Total Sales"
              value={`£${filteredStats.totalSales}`}
              icon={<PoundSterling className="w-6 h-6 text-green-700" />}
              color="bg-green-100"
            />
            <StatCard
              title="Total Orders"
              value={filteredStats.totalOrders}
              icon={<ShoppingBag className="w-6 h-6 text-blue-700" />}
              color="bg-blue-100"
            />
            <StatCard
              title="Average Order Value"
              value={`£${filteredStats.avgOrderValue}`}
              icon={<PoundSterling className="w-6 h-6 text-purple-700" />}
              color="bg-purple-100"
            />
            <StatCard
              title="Cancelled Orders"
              value={filteredStats.cancelledOrders}
              icon={<AlertOctagon className="w-6 h-6 text-red-700" />}
              color="bg-red-100"
            />
          </div>
        </div>

        {/* Sales Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-6">{selectedPlatform} {" "} Sales Overview</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Deliveroo"
                  stackId="1"
                  stroke="#00A685"
                  fill="#00A685"
                />
                <Area
                  type="monotone"
                  dataKey="JustEat"
                  stackId="1"
                  stroke="#E23744"
                  fill="#E23744"
                />
                <Area
                  type="monotone"
                  dataKey="UberEats"
                  stackId="1"
                  stroke="#000000"
                  fill="#000000"
                />
                <Area
                  type="monotone"
                  dataKey="Lyft"
                  stackId="1"
                  stroke="#D70F64"
                  fill="#D70F64"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Selling Items */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">{selectedPlatform} { " "}Top Selling Items</h2>
              <p className="text-sm text-gray-500 mt-1">
                {"2024-03-01"} to {"2024-03-07"}
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
  {filteredTopItems.map((item, index) => (
    <tr key={index} className="border-b border-gray-100">
      <td className="py-3 px-4">{item.name}</td>
      <td className="py-3 px-4">{item.platform}</td>
      <td className="text-right py-3 px-4">{item.orders}</td>
      <td className="text-right py-3 px-4">
        £{item.revenue.toLocaleString()}
      </td>
    </tr>
  ))}
</tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
