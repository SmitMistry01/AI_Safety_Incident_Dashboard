import { useState } from "react";

function Sort({ onApplyFilters }: { onApplyFilters: (filters: { severity: string; date: string }) => void }) {
  const [severity, setSeverity] = useState("all");
  const [date, setDate] = useState("new");

  const handleApply = () => {
    onApplyFilters({ severity, date });
  };

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-md mb-6">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700">Severity:</label>
        <select
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700">Sort by:</label>
        <select
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
        >
          <option value="new">Newest First</option>
          <option value="old">Oldest First</option>
        </select>
      </div>

      <button
        onClick={handleApply}
        className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-md transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400"
      >
        Apply
      </button>
    </div>
  );
}

export default Sort;
