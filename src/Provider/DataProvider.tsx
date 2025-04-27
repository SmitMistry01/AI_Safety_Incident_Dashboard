import { createContext, ReactNode, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

interface DataProviderProps {
  children: ReactNode;
}

export const DataContext = createContext<{ data: string } | null>(null);

function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState<{ data: any } | null>(null);
  useEffect(() => {
    setLocalStorage();
    const data = getLocalStorage();
    setData(data);
  }, []);
  return (
    <>
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </>
  );
}

export default DataProvider;
