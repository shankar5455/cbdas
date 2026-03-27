import React from 'react';
import { UsersIcon, ClockIcon } from '@heroicons/react/24/outline';

const cardConfigs = [
  {
    key: 'totalEmployees',
    title: 'Total Employees',
    icon: 'UsersIcon',
    gradient: 'from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/40',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    textColor: 'text-indigo-600 dark:text-indigo-400',
    change: '+4 this month',
    changePositive: true,
  },
  {
    key: 'presentToday',
    title: 'Present Today',
    icon: 'UserCheckIcon',
    gradient: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/40',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    change: '+12 vs yesterday',
    changePositive: true,
  },
  {
    key: 'absentToday',
    title: 'Absent Today',
    icon: 'UserMinusIcon',
    gradient: 'from-red-500 to-red-600',
    bg: 'bg-red-50 dark:bg-red-900/20',
    iconBg: 'bg-red-100 dark:bg-red-900/40',
    iconColor: 'text-red-600 dark:text-red-400',
    textColor: 'text-red-600 dark:text-red-400',
    change: '-6 vs yesterday',
    changePositive: false,
  },
  {
    key: 'lateArrivals',
    title: 'Late Arrivals',
    icon: 'ClockIcon',
    gradient: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    iconBg: 'bg-amber-100 dark:bg-amber-900/40',
    iconColor: 'text-amber-600 dark:text-amber-400',
    textColor: 'text-amber-600 dark:text-amber-400',
    change: '+2 vs yesterday',
    changePositive: false,
  },
];

// Custom SVG Icons (not available in heroicons v2 outline)
const UserCheckIconSVG = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UserMinusIconSVG = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
  </svg>
);

const iconMap = {
  UsersIcon,
  ClockIcon,
  UserCheckIcon: UserCheckIconSVG,
  UserMinusIcon: UserMinusIconSVG,
};

const KPICards = ({ data }) => {
  if (!data) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
      {cardConfigs.map(({ key, title, icon, bg, iconBg, iconColor, textColor, change, changePositive }) => {
        const Icon = iconMap[icon];
        const value = data[key];
        const percentage = key !== 'totalEmployees' && data.totalEmployees
          ? ((value / data.totalEmployees) * 100).toFixed(1)
          : null;

        return (
          <div
            key={key}
            className={`${bg} rounded-2xl p-5 border border-white/60 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
                <p className="mt-1 text-3xl font-bold text-gray-800 dark:text-white">
                  {value?.toLocaleString()}
                </p>
                {percentage && (
                  <p className={`text-sm font-semibold mt-0.5 ${textColor}`}>
                    {percentage}% of total
                  </p>
                )}
              </div>
              <div className={`${iconBg} p-3 rounded-xl`}>
                <Icon className={`w-6 h-6 ${iconColor}`} />
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-black/5 dark:border-white/5">
              <span
                className={`text-xs font-medium ${
                  changePositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500 dark:text-red-400'
                }`}
              >
                {changePositive ? '▲' : '▼'} {change}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KPICards;
