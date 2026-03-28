import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={700}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const entry = payload[0];
    return (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg p-3">
        <div className="flex items-center gap-2 text-xs">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.payload.color }}></span>
          <span className="font-semibold text-gray-700 dark:text-gray-200">{entry.name}:</span>
          <span className="text-gray-500 dark:text-gray-400">{entry.value} employees</span>
        </div>
      </div>
    );
  }
  return null;
};

const AttendancePieChart = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-800 dark:text-white">Attendance Overview</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Present vs Absent vs Late today</p>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={90}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            formatter={(value) => <span className="text-xs text-gray-600 dark:text-gray-300">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Stats below chart */}
      <div className="mt-2 grid grid-cols-3 gap-2">
        {data.map((item) => (
          <div key={item.name} className="text-center p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50">
            <p className="text-lg font-bold" style={{ color: item.color }}>{item.value}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{item.name}</p>
            <p className="text-xs font-medium text-gray-600 dark:text-gray-300">
              {((item.value / total) * 100).toFixed(1)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendancePieChart;
