import React from 'react';
import { Calendar } from 'lucide-react';

export const DateRangePicker = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <div className="flex items-center space-x-4 bg-white px-4 py-3 rounded-lg shadow-sm">
      <Calendar className="w-5 h-5 text-gray-500" />
      <div className="flex items-center space-x-2">
        <input
          type="date"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
          className="border rounded-md px-2 py-1 text-sm"
        />
        <span className="text-gray-500">to</span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
          className="border rounded-md px-2 py-1 text-sm"
        />
      </div>
    </div>
  );
};
