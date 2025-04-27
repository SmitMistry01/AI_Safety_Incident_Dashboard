import { useState } from "react";

function Sort() {
  const [severity, setSeverity] = useState("");

  return (
    <div className="flex p-5 items-center gap-20">
      <div className="flex">
        <h1 className="mr-10">Filter by Severity:</h1>
        <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="flex">
        <h1>Sort by Date: </h1>
        <select>
          <option value="new">Newest First</option>
          <option value="old">Oldest First</option>
        </select>
      </div>
      <button className="gap-10 bg-cyan-300 p-2 cursor-pointer rounded-2xl">Apply</button>
    </div>
  );
}

export default Sort;
