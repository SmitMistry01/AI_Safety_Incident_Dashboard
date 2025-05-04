import { useContext, useState } from "react";
import { DataContext } from "../../Provider/DataProvider";
import Sort from "./Sort";

function Card() {
  
  const data = useContext(DataContext);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [filters, setFilters] = useState({ severity: "all", date: "new" });

  const toggleDescription = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleApplyFilters = (newFilters: {
    severity: string;
    date: string;
  }) => {
    setFilters(newFilters);
  };

  const safeDateParse = (dateStr: string) => {
    try {
      const fixed = dateStr.replace(/(\d{2})(\d{2})(\d{2})Z$/, "$1:$2:$3Z");
      return new Date(fixed).getTime();
    } catch {
      return 0;
    }
  };

  const filteredData = (data ?? [])
    .filter((incident) => {
      if (filters.severity === "all") return true;
      return incident.severity.toLowerCase() === filters.severity;
    })
    .sort((a, b) => {
      const dateA = safeDateParse(a.reported_at);
      const dateB = safeDateParse(b.reported_at);
      return filters.date === "new" ? dateB - dateA : dateA - dateB;
    });

  if (!data || data.length === 0) {
    return (
      <div className="p-10 ">
        <div className="overflow-x-auto py-5 no-scrollbar">
          <div className="flex flex-nowrap gap-5">
            <div className="flex-shrink-0 w-80 h-[350px] bg-cyan-100 rounded-xl shadow-lg p-6 flex flex-col justify-center items-center">
              <h1 className="text-2xl font-semibold text-gray-700">
                No incidents found
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10">
      <Sort onApplyFilters={handleApplyFilters} />
      <div className="overflow-x-auto py-5 no-scrollbar">
        <div className="flex flex-nowrap gap-5">
          {filteredData.map((incident, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                expandedIndex === index ? "h-auto" : "h-[340px]"
              } border-l-4 ${
                incident.severity.toLowerCase() === "high"
                  ? "border-red-500"
                  : incident.severity.toLowerCase() === "medium"
                  ? "border-yellow-500"
                  : "border-green-500"
              }`}
            >
              <div className="p-6 flex flex-col h-full bg-cyan-100">
                <div className="flex justify-between items-start">
                  <h1 className="text-xl font-bold text-gray-800 mb-2">
                    {incident.title}
                  </h1>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      incident.severity.toLowerCase() === "high"
                        ? "bg-red-100 text-red-800"
                        : incident.severity.toLowerCase() === "medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {incident.severity}
                  </span>
                </div>

                <div className="mt-4 flex items-center text-gray-500 text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  ></svg>
                  <span>
                    {new Date(
                      incident.reported_at.replace(
                        /(\d{2})(\d{2})(\d{2})Z$/,
                        "$1:$2:$3Z"
                      )
                    ).toLocaleString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedIndex === index ? "max-h-[500px] mt-4" : "max-h-0"
                  }`}
                >
                  <div className="pt-4 border-t border-gray-100 mt-4">
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Description
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {incident.description || "No description available"}
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex justify-end pt-4">
                  <button
                    onClick={() => toggleDescription(index)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      expandedIndex === index
                        ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    }`}
                  >
                    {expandedIndex === index ? "Show Less" : "View Details"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
