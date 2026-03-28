import React from 'react';
import {
  HomeIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
  { id: 'employees', label: 'Employees', icon: UsersIcon },
  { id: 'attendance', label: 'Attendance', icon: ClipboardDocumentListIcon },
  { id: 'reports', label: 'Reports', icon: ChartBarIcon },
];

const Sidebar = ({ isOpen, onClose, activePage, onPageChange }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-30
          bg-gradient-to-b from-indigo-900 to-indigo-800
          dark:from-gray-900 dark:to-gray-800
          transform transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0 lg:z-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          flex flex-col shadow-2xl
        `}
      >
        {/* Logo / Title */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-indigo-700 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-indigo-400 dark:bg-indigo-600 rounded-lg flex items-center justify-center">
              <ClipboardDocumentListIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-none">CBDAS</p>
              <p className="text-indigo-300 dark:text-gray-400 text-xs mt-0.5">Attendance System</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-indigo-300 hover:text-white transition-colors"
            aria-label="Close sidebar"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <p className="text-indigo-400 dark:text-gray-500 text-xs font-semibold uppercase tracking-wider px-3 mb-3">
            Main Menu
          </p>
          {navItems.map(({ id, label, icon: Icon }) => {
            const isActive = activePage === id;
            return (
              <button
                key={id}
                onClick={() => {
                  onPageChange(id);
                  onClose();
                }}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                  text-sm font-medium transition-all duration-200 group
                  ${isActive
                    ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                    : 'text-indigo-200 hover:bg-white/10 hover:text-white dark:text-gray-400 dark:hover:text-white'
                  }
                `}
              >
                <Icon
                  className={`w-5 h-5 transition-colors ${
                    isActive ? 'text-white' : 'text-indigo-300 group-hover:text-white dark:text-gray-500'
                  }`}
                />
                {label}
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-300"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="px-4 py-4 border-t border-indigo-700 dark:border-gray-700">
          <div className="bg-indigo-800/50 dark:bg-gray-800 rounded-xl p-3">
            <p className="text-indigo-200 dark:text-gray-400 text-xs font-medium">System Status</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-xs text-green-300">All systems operational</span>
            </div>
            <p className="text-indigo-300 dark:text-gray-500 text-xs mt-1">v2.4.1 • Production</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
