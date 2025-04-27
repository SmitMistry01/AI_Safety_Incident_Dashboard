import { createContext, ReactNode, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const DataContext = createContext<{ data: any } | null>(null);
function DataProvider({ children }: { children: ReactNode }) {
  const [reportData, setReportData] = useState<{ data: any } | null>(null);
  useEffect(() => {
    setLocalStorage();
    const data = getLocalStorage();
    setReportData(data);
  }, []);
  return (
    <>
      <DataContext.Provider value={reportData}>{children}</DataContext.Provider>
    </>
  );
}

export default DataProvider;
