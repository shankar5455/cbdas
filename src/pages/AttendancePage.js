import React from 'react';
import AttendanceTable from '../components/AttendanceTable';
import { attendanceTableData } from '../data/mockData';

const AttendancePage = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Attendance Rate', value: '79.0%', sub: 'vs 81.2% last week', color: 'text-indigo-600 dark:text-indigo-400' },
          { label: 'On-Time Rate', value: '85.7%', sub: 'of present employees', color: 'text-emerald-600 dark:text-emerald-400' },
          { label: 'Avg Login Time', value: '09:02 AM', sub: 'Target: 09:00 AM', color: 'text-amber-600 dark:text-amber-400' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            <p className={`text-3xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>
      <AttendanceTable data={attendanceTableData} />
    </div>
  );
};

export default AttendancePage;
