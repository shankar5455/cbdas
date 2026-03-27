import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import EmployeesPage from './pages/EmployeesPage';
import AttendancePage from './pages/AttendancePage';
import ReportsPage from './pages/ReportsPage';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const pageComponents = {
    dashboard: <DashboardPage />,
    employees: <EmployeesPage />,
    attendance: <AttendancePage />,
    reports: <ReportsPage />,
  };

  return (
    <div className={`flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden`}>
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activePage={activePage}
        onPageChange={setActivePage}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
          darkMode={darkMode}
          onDarkModeToggle={() => setDarkMode((prev) => !prev)}
          activePage={activePage}
        />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-screen-2xl mx-auto px-4 lg:px-6 py-6">
            {pageComponents[activePage]}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
