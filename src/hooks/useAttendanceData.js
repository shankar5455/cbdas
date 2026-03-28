import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  kpiData,
  attendanceTrendData,
  teamAttendanceData,
  pieChartData,
  attendanceTableData,
} from '../data/mockData';

const API_BASE_URL = process.env.REACT_APP_API_URL || null;

const useAttendanceData = () => {
  const [data, setData] = useState({
    kpi: null,
    attendanceTrend: [],
    teamAttendance: [],
    pieChart: [],
    attendanceTable: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      if (API_BASE_URL) {
        const [kpiRes, trendRes, teamRes, pieRes, tableRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/api/kpi`),
          axios.get(`${API_BASE_URL}/api/attendance/trend`),
          axios.get(`${API_BASE_URL}/api/attendance/teams`),
          axios.get(`${API_BASE_URL}/api/attendance/summary`),
          axios.get(`${API_BASE_URL}/api/attendance/today`),
        ]);

        setData({
          kpi: kpiRes.data,
          attendanceTrend: trendRes.data,
          teamAttendance: teamRes.data,
          pieChart: pieRes.data,
          attendanceTable: tableRes.data,
        });
      } else {
        // Use mock data with simulated delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setData({
          kpi: kpiData,
          attendanceTrend: attendanceTrendData,
          teamAttendance: teamAttendanceData,
          pieChart: pieChartData,
          attendanceTable: attendanceTableData,
        });
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch attendance data. Please try again.');
      // Fall back to mock data on error
      setData({
        kpi: kpiData,
        attendanceTrend: attendanceTrendData,
        teamAttendance: teamAttendanceData,
        pieChart: pieChartData,
        attendanceTable: attendanceTableData,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useAttendanceData;
