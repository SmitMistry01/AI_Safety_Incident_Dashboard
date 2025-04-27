import { createContext, ReactNode, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

interface DataProviderProps {
  children: ReactNode;
}

interface IncidentData {
  title: string;
  severity: string;
  reported_at: string;
  description:string;
}

export const DataContext = createContext<IncidentData[] | null>(null);

function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState<IncidentData[] | null>(null);
  useEffect(() => {
    setLocalStorage();
    const storedData = getLocalStorage();
    setData(storedData);
  }, []);
  return (
    <>
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </>
  );
}

export default DataProvider;