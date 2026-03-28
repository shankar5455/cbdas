# CBDAS — Enterprise Employee Attendance System

A modern, production-ready React dashboard for managing and visualizing employee attendance data.

## Tech Stack

- **React** (functional components + hooks)
- **Tailwind CSS** — utility-first styling
- **Recharts** — data visualization (Line, Bar, Pie charts)
- **Axios** — API calls with mock data fallback
- **Heroicons** — icon library

## Features

### Dashboard
- **KPI Cards**: Total Employees, Present Today, Absent Today, Late Arrivals
- **Attendance Trend Chart** (Line chart) — daily trends over the past month
- **Team-wise Attendance Chart** (Bar chart) — breakdown by department
- **Attendance Overview** (Pie chart) — Present vs Absent vs Late ratio

### Attendance Table
- Employee name, ID, department, login/logout times, status
- **Search** by name, ID, or department
- **Filter** by status (Present/Absent/Late) and department
- **Sort** by any column
- **Pagination** (8 rows per page)

### Navigation
- Sidebar with: Dashboard, Employees, Attendance, Reports pages
- Responsive design (collapsible sidebar on mobile)
- Top navbar with search, notifications, and user profile

### Extra Features
- 🌙 **Dark mode toggle** (persisted in localStorage)
- ⏳ **Loading spinner** while fetching data
- ⚠️ **Error handling** with API fallback to mock data
- 📊 **Reports page** with export buttons (PDF/CSV/Excel)

## Getting Started

```bash
npm install
npm start
```

The app runs on [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── App.js                   # Root component, dark mode, routing
├── index.js / index.css     # Entry point + Tailwind base styles
├── data/
│   └── mockData.js          # Sample mock data
├── hooks/
│   └── useAttendanceData.js # Data fetching hook (API + mock fallback)
├── components/
│   ├── Sidebar.js           # Navigation sidebar
│   ├── Navbar.js            # Top navigation bar
│   ├── KPICards.js          # KPI metric cards
│   ├── AttendanceTable.js   # Employee attendance table
│   ├── LoadingSpinner.js    # Loading indicator
│   └── Charts/
│       ├── AttendanceTrendChart.js  # Line chart
│       ├── TeamAttendanceChart.js   # Bar chart
│       └── AttendancePieChart.js    # Pie chart
└── pages/
    ├── DashboardPage.js     # Main dashboard
    ├── EmployeesPage.js     # Employee directory
    ├── AttendancePage.js    # Attendance management
    └── ReportsPage.js       # Reports & analytics
```

## API Integration

Set `REACT_APP_API_URL` environment variable to connect to a real backend:

```env
REACT_APP_API_URL=https://your-api.example.com
```

When no API URL is set, the app uses mock data from `src/data/mockData.js`.

## Production Build

```bash
npm run build
```
