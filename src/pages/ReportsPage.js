import React from 'react';
import AttendanceTrendChart from '../components/Charts/AttendanceTrendChart';
import TeamAttendanceChart from '../components/Charts/TeamAttendanceChart';
import AttendancePieChart from '../components/Charts/AttendancePieChart';
import { attendanceTrendData, teamAttendanceData, pieChartData } from '../data/mockData';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const ReportsPage = () => {
  return (
    <div className="space-y-6">
      {/* Report Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-gray-800 dark:text-white">Attendance Reports</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">March 2026 — Full Report</p>
          </div>
          <div className="flex items-center gap-2">
            {['PDF', 'CSV', 'Excel'].map((fmt) => (
              <button
                key={fmt}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors"
              >
                <DocumentArrowDownIcon className="w-3.5 h-3.5" />
                {fmt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="lg:col-span-2">
          <AttendanceTrendChart data={attendanceTrendData} />
        </div>
        <div>
          <AttendancePieChart data={pieChartData} />
        </div>
      </div>

      <TeamAttendanceChart data={teamAttendanceData} />

      {/* Summary Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700">
          <h3 className="text-base font-semibold text-gray-800 dark:text-white">Monthly Summary by Department</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                {['Department', 'Total Employees', 'Avg Present %', 'Avg Absent %', 'Avg Late %'].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {[
                { dept: 'Engineering', total: 53, present: 87.2, absent: 8.5, late: 4.3 },
                { dept: 'Marketing', total: 34, present: 82.4, absent: 11.8, late: 5.8 },
                { dept: 'Sales', total: 48, present: 84.1, absent: 12.5, late: 3.4 },
                { dept: 'HR', total: 15, present: 90.0, absent: 6.7, late: 3.3 },
                { dept: 'Finance', total: 27, present: 88.9, absent: 7.4, late: 3.7 },
                { dept: 'Operations', total: 41, present: 79.5, absent: 15.9, late: 4.6 },
                { dept: 'Support', total: 30, present: 76.7, absent: 23.3, late: 0.0 },
              ].map((row) => (
                <tr key={row.dept} className="hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 transition-colors">
                  <td className="px-5 py-3.5 font-medium text-gray-800 dark:text-gray-200">{row.dept}</td>
                  <td className="px-5 py-3.5 text-gray-600 dark:text-gray-300">{row.total}</td>
                  <td className="px-5 py-3.5 text-emerald-600 dark:text-emerald-400 font-semibold">{row.present}%</td>
                  <td className="px-5 py-3.5 text-red-500 dark:text-red-400 font-semibold">{row.absent}%</td>
                  <td className="px-5 py-3.5 text-amber-500 dark:text-amber-400 font-semibold">{row.late}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
