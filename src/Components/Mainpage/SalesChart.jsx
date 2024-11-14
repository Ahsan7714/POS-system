import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, eachDayOfInterval, parseISO } from 'date-fns';

export const SalesChart = ({ startDate, endDate }) => {
  // Generate dates between start and end date
  const dates = eachDayOfInterval({
    start: parseISO(startDate),
    end: parseISO(endDate),
  });

  // Generate sample data for each date
  const data = dates.map(date => ({
    date: format(date, 'yyyy-MM-dd'),
    Swiggy: Math.floor(Math.random() * 3000) + 1000,
    Zomato: Math.floor(Math.random() * 3000) + 1000,
    UberEats: Math.floor(Math.random() * 3000) + 1000,
    FoodPanda: Math.floor(Math.random() * 3000) + 1000,
  }));

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-6">Sales Overview</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Swiggy" stackId="1" stroke="#00A685" fill="#00A685" />
            <Area type="monotone" dataKey="Zomato" stackId="1" stroke="#E23744" fill="#E23744" />
            <Area type="monotone" dataKey="UberEats" stackId="1" stroke="#000000" fill="#000000" />
            <Area type="monotone" dataKey="FoodPanda" stackId="1" stroke="#D70F64" fill="#D70F64" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
