import { useState, useContext } from "react";
import { DataContext } from "../../Provider/DataProvider";

function ReportIncident() {
  const [incidentData, setIncidentData] = useState({
    title: "",
    description: "",
    date: "",
    severity: "low",
  });

  const [error, setError] = useState<string | null>(null);
  const data = useContext(DataContext);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setIncidentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    if (
      !incidentData.title.trim() ||
      !incidentData.description.trim() ||
      !incidentData.date.trim()
    ) {
      setError("All fields are required.");
      return;
    }

    const wordCount = incidentData.description.trim().split(/\s+/).length;
    if (wordCount > 150) {
      setError("Description must be less than 150 words.");
      return;
    }

    setError(null); 

    const newIncident = {
      ...incidentData,
      reported_at: new Date().toISOString(),
    };

    const existingIncidents = JSON.parse(localStorage.getItem("data") || "[]");
    existingIncidents.push(newIncident);
    localStorage.setItem("data", JSON.stringify(existingIncidents));

    if (data) {
      data.push(newIncident);
    }

    setIncidentData({
      title: "",
      description: "",
      date: "",
      severity: "low",
    });

    // Success popup
    alert("Incident is reported successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-cyan-100 rounded-lg shadow-md mt-20">
      {error && (
        <div className="mb-4 text-red-600 font-medium bg-red-100 p-3 rounded">
          {error}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Incident Title
            </label>
            <input
              type="text"
              name="title"
              value={incidentData.title}
              onChange={handleChange}
              placeholder="Major data leak..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={incidentData.description}
              onChange={handleChange}
              placeholder="Detailed description of incident..."
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="mt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={incidentData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Severity
              </label>
              <select
                name="severity"
                value={incidentData.severity}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReportIncident;
