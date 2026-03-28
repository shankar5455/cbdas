import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg p-3">
        <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-2">{label}</p>
        {payload.map((entry) => (
          <div key={entry.name} className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></span>
            <span className="text-gray-500 dark:text-gray-400 capitalize">{entry.name}:</span>
            <span className="font-semibold text-gray-700 dark:text-gray-200">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const AttendanceTrendChart = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-800 dark:text-white">Attendance Trends</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Daily attendance over the past month</p>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" className="dark:stroke-gray-700" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 11, fill: '#6b7280' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: '#6b7280' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: '12px', paddingTop: '12px' }}
            formatter={(value) => <span className="text-gray-600 dark:text-gray-300 capitalize">{value}</span>}
          />
          <Line
            type="monotone"
            dataKey="present"
            stroke="#4f46e5"
            strokeWidth={2.5}
            dot={{ fill: '#4f46e5', strokeWidth: 2, r: 3 }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="absent"
            stroke="#ef4444"
            strokeWidth={2}
            strokeDasharray="5 3"
            dot={{ fill: '#ef4444', strokeWidth: 2, r: 3 }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="late"
            stroke="#f59e0b"
            strokeWidth={2}
            strokeDasharray="3 3"
            dot={{ fill: '#f59e0b', strokeWidth: 2, r: 3 }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceTrendChart;
