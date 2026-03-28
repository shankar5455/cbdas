import React from 'react';
import {
  Bars3Icon,
  BellIcon,
  SunIcon,
  MoonIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const pageTitles = {
  dashboard: 'Dashboard',
  employees: 'Employees',
  attendance: 'Attendance',
  reports: 'Reports',
};

const pageSubtitles = {
  dashboard: 'Welcome back! Here\'s what\'s happening today.',
  employees: 'Manage your workforce information.',
  attendance: 'Track and manage employee attendance.',
  reports: 'Analyze attendance data and trends.',
};

const Navbar = ({ onMenuClick, darkMode, onDarkModeToggle, activePage }) => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 lg:px-6 h-16">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 transition-colors"
            aria-label="Open menu"
          >
            <Bars3Icon className="w-5 h-5" />
          </button>

          <div className="hidden sm:block">
            <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
              {pageTitles[activePage]}
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {pageSubtitles[activePage]}
            </p>
          </div>
        </div>

        {/* Center - Search */}
        <div className="hidden md:flex items-center flex-1 max-w-sm mx-6">
          <div className="relative w-full">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-9 pr-4 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 border border-transparent dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-gray-600 transition-all"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          {/* Date */}
          <div className="hidden lg:block text-right mr-2">
            <p className="text-xs text-gray-500 dark:text-gray-400">{today}</p>
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={onDarkModeToggle}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 transition-colors"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <SunIcon className="w-5 h-5 text-amber-400" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>

          {/* Notifications */}
          <button
            className="relative p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 transition-colors"
            aria-label="Notifications"
          >
            <BellIcon className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-gray-800"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2 ml-1 pl-2 border-l border-gray-200 dark:border-gray-600">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center ring-2 ring-indigo-200 dark:ring-indigo-800">
              <span className="text-white text-xs font-semibold">AK</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-200 leading-none">Admin Kumar</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">HR Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
