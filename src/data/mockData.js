// Mock data for Enterprise Employee Attendance System

export const kpiData = {
  totalEmployees: 248,
  presentToday: 196,
  absentToday: 38,
  lateArrivals: 14,
};

export const attendanceTrendData = [
  { date: 'Mar 1', present: 210, absent: 38, late: 12 },
  { date: 'Mar 3', present: 198, absent: 42, late: 18 },
  { date: 'Mar 5', present: 215, absent: 29, late: 10 },
  { date: 'Mar 7', present: 221, absent: 22, late: 8 },
  { date: 'Mar 10', present: 190, absent: 48, late: 20 },
  { date: 'Mar 12', present: 208, absent: 34, late: 14 },
  { date: 'Mar 14', present: 225, absent: 18, late: 9 },
  { date: 'Mar 17', present: 212, absent: 28, late: 11 },
  { date: 'Mar 19', present: 200, absent: 40, late: 16 },
  { date: 'Mar 21', present: 218, absent: 24, late: 13 },
  { date: 'Mar 24', present: 230, absent: 14, late: 7 },
  { date: 'Mar 26', present: 196, absent: 38, late: 14 },
];

export const teamAttendanceData = [
  { team: 'Engineering', present: 45, absent: 5, late: 3 },
  { team: 'Marketing', present: 28, absent: 4, late: 2 },
  { team: 'Sales', present: 38, absent: 6, late: 4 },
  { team: 'HR', present: 12, absent: 2, late: 1 },
  { team: 'Finance', present: 22, absent: 3, late: 2 },
  { team: 'Operations', present: 31, absent: 8, late: 2 },
  { team: 'Support', present: 20, absent: 10, late: 0 },
];

export const pieChartData = [
  { name: 'Present', value: 196, color: '#4f46e5' },
  { name: 'Absent', value: 38, color: '#ef4444' },
  { name: 'Late', value: 14, color: '#f59e0b' },
];

export const attendanceTableData = [
  { id: 1, employeeId: 'EMP001', name: 'Alice Johnson', department: 'Engineering', loginTime: '08:52 AM', logoutTime: '05:30 PM', status: 'Present' },
  { id: 2, employeeId: 'EMP002', name: 'Bob Martinez', department: 'Marketing', loginTime: '10:15 AM', logoutTime: '06:00 PM', status: 'Late' },
  { id: 3, employeeId: 'EMP003', name: 'Carol Williams', department: 'Sales', loginTime: '-', logoutTime: '-', status: 'Absent' },
  { id: 4, employeeId: 'EMP004', name: 'David Chen', department: 'Engineering', loginTime: '08:45 AM', logoutTime: '05:15 PM', status: 'Present' },
  { id: 5, employeeId: 'EMP005', name: 'Eva Brown', department: 'HR', loginTime: '09:00 AM', logoutTime: '05:00 PM', status: 'Present' },
  { id: 6, employeeId: 'EMP006', name: 'Frank Davis', department: 'Finance', loginTime: '10:30 AM', logoutTime: '07:00 PM', status: 'Late' },
  { id: 7, employeeId: 'EMP007', name: 'Grace Lee', department: 'Engineering', loginTime: '08:50 AM', logoutTime: '05:45 PM', status: 'Present' },
  { id: 8, employeeId: 'EMP008', name: 'Henry Wilson', department: 'Operations', loginTime: '-', logoutTime: '-', status: 'Absent' },
  { id: 9, employeeId: 'EMP009', name: 'Iris Taylor', department: 'Support', loginTime: '09:05 AM', logoutTime: '05:10 PM', status: 'Present' },
  { id: 10, employeeId: 'EMP010', name: 'James Anderson', department: 'Sales', loginTime: '08:55 AM', logoutTime: '05:30 PM', status: 'Present' },
  { id: 11, employeeId: 'EMP011', name: 'Karen Thomas', department: 'Marketing', loginTime: '-', logoutTime: '-', status: 'Absent' },
  { id: 12, employeeId: 'EMP012', name: 'Liam Jackson', department: 'Engineering', loginTime: '09:00 AM', logoutTime: '05:00 PM', status: 'Present' },
  { id: 13, employeeId: 'EMP013', name: 'Mia White', department: 'HR', loginTime: '10:20 AM', logoutTime: '06:30 PM', status: 'Late' },
  { id: 14, employeeId: 'EMP014', name: 'Nathan Harris', department: 'Finance', loginTime: '08:48 AM', logoutTime: '05:20 PM', status: 'Present' },
  { id: 15, employeeId: 'EMP015', name: 'Olivia Martin', department: 'Operations', loginTime: '09:02 AM', logoutTime: '05:05 PM', status: 'Present' },
  { id: 16, employeeId: 'EMP016', name: 'Peter Garcia', department: 'Support', loginTime: '-', logoutTime: '-', status: 'Absent' },
  { id: 17, employeeId: 'EMP017', name: 'Quinn Robinson', department: 'Engineering', loginTime: '08:40 AM', logoutTime: '04:55 PM', status: 'Present' },
  { id: 18, employeeId: 'EMP018', name: 'Rachel Clark', department: 'Sales', loginTime: '09:00 AM', logoutTime: '05:00 PM', status: 'Present' },
  { id: 19, employeeId: 'EMP019', name: 'Samuel Lewis', department: 'Marketing', loginTime: '10:10 AM', logoutTime: '06:15 PM', status: 'Late' },
  { id: 20, employeeId: 'EMP020', name: 'Tina Walker', department: 'Finance', loginTime: '08:58 AM', logoutTime: '05:25 PM', status: 'Present' },
];

export const employees = [
  { id: 1, name: 'Alice Johnson', department: 'Engineering', position: 'Senior Dev', email: 'alice@company.com' },
  { id: 2, name: 'Bob Martinez', department: 'Marketing', position: 'Marketing Lead', email: 'bob@company.com' },
  { id: 3, name: 'Carol Williams', department: 'Sales', position: 'Sales Rep', email: 'carol@company.com' },
];
