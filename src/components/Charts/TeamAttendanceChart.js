import React from 'react';
import {
  BarChart,
  Bar,
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

const TeamAttendanceChart = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-800 dark:text-white">Team-wise Attendance</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Breakdown by department for today</p>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }} barSize={16} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis
            dataKey="team"
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
          <Bar dataKey="present" name="present" fill="#4f46e5" radius={[4, 4, 0, 0]} />
          <Bar dataKey="absent" name="absent" fill="#ef4444" radius={[4, 4, 0, 0]} />
          <Bar dataKey="late" name="late" fill="#f59e0b" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TeamAttendanceChart;
