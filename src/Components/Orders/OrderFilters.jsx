import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

function OrderFilters({ onFilterChange }) {
  const [selectedPlatform, setSelectedPlatform] = useState("All Platform");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [orderId, setOrderId] = useState("");

  const platforms = ["All Platform", "Deliveroo", "JustEat", "UberEats", "Lyft", "BiteHub"];

  useEffect(() => {
    onFilterChange(selectedPlatform, startDate, endDate, orderId);
  }, [selectedPlatform, startDate, endDate, orderId]); // Trigger only when any filter changes

  return (
    <div className="flex items-center justify-between bg-white p-4 mt-4 mb-0 rounded shadow-md mx-auto w-[93%]">
      {/* Platform Dropdown */}
      <div className="flex items-center space-x-2">
        <select
          className="p-2 border border-gray-300 rounded"
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
        >
          {platforms.map((platform, index) => (
            <option key={index} value={platform}>
              {platform}
            </option>
          ))}
        </select>
      </div>

      {/* Date Range Picker */}
      <div className="flex items-center space-x-4">
        <Calendar className="w-5 h-5 text-gray-500" />
        <input
          type="date"
          className="border rounded-md px-2 py-1 text-sm"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <span className="text-gray-500">to</span>
        <input
          type="date"
          className="border rounded-md px-2 py-1 text-sm"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {/* Order ID Input */}
      <div className="flex items-center space-x-2">
        <label className="text-gray-700">Order ID:</label>
        <input
          type="text"
          placeholder="Enter Order ID"
          className="p-1 border-b-2 border-gray-300 rounded w-25 outline-none"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
      </div>
    </div>
  );
}

export default OrderFilters;
