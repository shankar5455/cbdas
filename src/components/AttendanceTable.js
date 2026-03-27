import React, { useState, useMemo } from 'react';
import { MagnifyingGlassIcon, FunnelIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';

const statusConfig = {
  Present: {
    bg: 'bg-emerald-100 dark:bg-emerald-900/30',
    text: 'text-emerald-700 dark:text-emerald-400',
    dot: 'bg-emerald-500',
  },
  Absent: {
    bg: 'bg-red-100 dark:bg-red-900/30',
    text: 'text-red-700 dark:text-red-400',
    dot: 'bg-red-500',
  },
  Late: {
    bg: 'bg-amber-100 dark:bg-amber-900/30',
    text: 'text-amber-700 dark:text-amber-400',
    dot: 'bg-amber-500',
  },
};

const ITEMS_PER_PAGE = 8;

const AttendanceTable = ({ data }) => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [deptFilter, setDeptFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState(null);
  const [sortDir, setSortDir] = useState('asc');

  const departments = useMemo(() => {
    const depts = ['All', ...new Set(data.map((row) => row.department))];
    return depts;
  }, [data]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('asc');
    }
    setCurrentPage(1);
  };

  const filtered = useMemo(() => {
    let result = [...data];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (row) =>
          row.name.toLowerCase().includes(q) ||
          row.employeeId.toLowerCase().includes(q) ||
          row.department.toLowerCase().includes(q)
      );
    }

    if (statusFilter !== 'All') {
      result = result.filter((row) => row.status === statusFilter);
    }

    if (deptFilter !== 'All') {
      result = result.filter((row) => row.department === deptFilter);
    }

    if (sortField) {
      result.sort((a, b) => {
        const aVal = a[sortField]?.toLowerCase?.() ?? a[sortField];
        const bVal = b[sortField]?.toLowerCase?.() ?? b[sortField];
        if (aVal < bVal) return sortDir === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortDir === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, search, statusFilter, deptFilter, sortField, sortDir]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const SortButton = ({ field, label }) => (
    <button
      onClick={() => handleSort(field)}
      className="flex items-center gap-1 group hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
    >
      {label}
      <ChevronUpDownIcon
        className={`w-3.5 h-3.5 ${
          sortField === field ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 group-hover:text-indigo-500'
        }`}
      />
    </button>
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-gray-800 dark:text-white">Today's Attendance</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Showing {filtered.length} of {data.length} records
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Search */}
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search employees..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                className="pl-8 pr-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-700 border border-transparent dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-gray-600 transition-all w-44"
              />
            </div>

            {/* Status filter */}
            <div className="relative">
              <FunnelIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
                className="pl-8 pr-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-700 border border-transparent dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none cursor-pointer"
              >
                <option value="All">All Status</option>
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
                <option value="Late">Late</option>
              </select>
            </div>

            {/* Department filter */}
            <select
              value={deptFilter}
              onChange={(e) => { setDeptFilter(e.target.value); setCurrentPage(1); }}
              className="px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-700 border border-transparent dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              {departments.map((d) => (
                <option key={d} value={d}>{d === 'All' ? 'All Depts' : d}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-700/50">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <SortButton field="employeeId" label="Emp ID" />
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <SortButton field="name" label="Employee" />
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">
                <SortButton field="department" label="Department" />
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                Login
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                Logout
              </th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <SortButton field="status" label="Status" />
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-5 py-12 text-center text-sm text-gray-400 dark:text-gray-500">
                  No records found matching your criteria.
                </td>
              </tr>
            ) : (
              paginated.map((row, idx) => {
                const config = statusConfig[row.status] || statusConfig.Present;
                return (
                  <tr
                    key={row.id}
                    className={`hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 transition-colors ${
                      idx % 2 === 0 ? '' : 'bg-gray-50/50 dark:bg-gray-700/20'
                    }`}
                  >
                    <td className="px-5 py-3.5 text-xs font-mono text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {row.employeeId}
                    </td>
                    <td className="px-5 py-3.5 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-semibold">
                            {row.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 dark:text-gray-200 text-sm">{row.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-500 md:hidden">{row.department}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-600 dark:text-gray-300 hidden md:table-cell">
                      <span className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 rounded text-xs font-medium">
                        {row.department}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-600 dark:text-gray-300 hidden sm:table-cell whitespace-nowrap font-mono text-xs">
                      {row.loginTime}
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-600 dark:text-gray-300 hidden sm:table-cell whitespace-nowrap font-mono text-xs">
                      {row.logoutTime}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="px-5 py-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              ← Prev
            </button>
            {(() => {
              const pages = [];
              const delta = 1;
              const left = currentPage - delta;
              const right = currentPage + delta;

              for (let i = 1; i <= totalPages; i++) {
                if (i === 1 || i === totalPages || (i >= left && i <= right)) {
                  pages.push(i);
                }
              }

              const withEllipsis = [];
              let prev = null;
              for (const page of pages) {
                if (prev !== null && page - prev > 1) {
                  withEllipsis.push('...' + prev);
                }
                withEllipsis.push(page);
                prev = page;
              }

              return withEllipsis.map((item) => {
                if (typeof item === 'string') {
                  return (
                    <span key={item} className="w-8 h-8 flex items-center justify-center text-xs text-gray-400">
                      …
                    </span>
                  );
                }
                return (
                  <button
                    key={item}
                    onClick={() => setCurrentPage(item)}
                    className={`w-8 h-8 text-xs rounded-lg transition-all ${
                      currentPage === item
                        ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                        : 'border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600'
                    }`}
                  >
                    {item}
                  </button>
                );
              });
            })()}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendanceTable;
