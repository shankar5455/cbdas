import React from 'react';
import KPICards from '../components/KPICards';
import AttendanceTrendChart from '../components/Charts/AttendanceTrendChart';
import TeamAttendanceChart from '../components/Charts/TeamAttendanceChart';
import AttendancePieChart from '../components/Charts/AttendancePieChart';
import AttendanceTable from '../components/AttendanceTable';
import LoadingSpinner from '../components/LoadingSpinner';
import useAttendanceData from '../hooks/useAttendanceData';
import { ArrowPathIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const DashboardPage = () => {
  const { data, loading, error, refetch } = useAttendanceData();

  if (loading) {
    return <LoadingSpinner message="Fetching attendance data..." />;
  }

  return (
    <div className="space-y-6">
      {/* Error Banner */}
      {error && (
        <div className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl">
          <ExclamationTriangleIcon className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-amber-800 dark:text-amber-300">API Error</p>
            <p className="text-xs text-amber-600 dark:text-amber-400 mt-0.5">{error} — Showing mock data instead.</p>
          </div>
          <button
            onClick={refetch}
            className="flex items-center gap-1.5 text-xs font-medium text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 transition-colors"
          >
            <ArrowPathIcon className="w-4 h-4" />
            Retry
          </button>
        </div>
      )}

      {/* KPI Cards */}
      <section>
        <KPICards data={data.kpi} />
      </section>

      {/* Charts Row */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="lg:col-span-2">
          <AttendanceTrendChart data={data.attendanceTrend} />
        </div>
        <div>
          <AttendancePieChart data={data.pieChart} />
        </div>
      </section>

      {/* Team Chart */}
      <section>
        <TeamAttendanceChart data={data.teamAttendance} />
      </section>

      {/* Attendance Table */}
      <section>
        <AttendanceTable data={data.attendanceTable} />
      </section>
    </div>
  );
};

export default DashboardPage;
