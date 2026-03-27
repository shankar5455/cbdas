import React from 'react';

const LoadingSpinner = ({ message = 'Loading data...' }) => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-indigo-200 rounded-full animate-spin border-t-indigo-600 dark:border-indigo-800 dark:border-t-indigo-400"></div>
      </div>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 animate-pulse">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
