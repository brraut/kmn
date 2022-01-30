// src/context/state.js
import { createContext, useContext, useEffect, useState } from "react";
import { getAppContextApi } from "../api/context/appContextApi";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [sharedState, setSharedState] = useState();
  useEffect(() => {
    getAppContextApi().then((res) => setSharedState(res.data.data));
  }, []);

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
