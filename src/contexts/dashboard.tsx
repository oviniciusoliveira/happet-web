import { createContext, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";

const DashboardContext = createContext({} as any);

export const DashboardProvider = ({ children }: any) => {
  const [page, setPage] = useState("accepted-pet-homes");

  return (
    <DashboardContext.Provider value={{ page, setPage }}>
      {children}
    </DashboardContext.Provider>
  );
};

export function useDashboard() {
  const context = useContext(DashboardContext);
  return context;
}
